/**
 * NEW PDF Generation - Separate Test File
 * This creates a new PDF generation route for testing
 */

const express = require('express');
const router = express.Router();
const PDFDocument = require('pdfkit');
const axios = require('axios');
const { PrismaClient } = require('@prisma/client');
const path = require('path');
const fs = require('fs');

const { prisma } = require('./utils/database');

/**
 * Helper: Fetch image as buffer
 */
const fetchImage = async (imageUrl) => {
  if (!imageUrl) return null;
  try {
    let url = imageUrl;
    if (imageUrl.startsWith('/uploads/') || imageUrl.startsWith('uploads/')) {
      const serverUrl = process.env.SERVER_URL || 'http://localhost:5001';
      url = `${serverUrl}${imageUrl.startsWith('/') ? '' : '/'}${imageUrl}`;
    }
    const response = await axios.get(url, { responseType: 'arraybuffer', timeout: 10000 });
    return response.data;
  } catch (error) {
    console.log('Failed to fetch image:', imageUrl, error.message);
    return null;
  }
};

/**
 * Helper: Add header
 */
const addHeader = (doc, title = 'Profile Details') => {
  doc.fillColor('#8B5CF6')
    .rect(0, 0, doc.page.width, 50)
    .fill();
  
  doc.fontSize(16)
    .fillColor('#ffffff')
    .text(title, 40, 15);
  
  return 60;
};

/**
 * Helper: Add section header
 */
const addSectionHeader = (doc, title, y) => {
  doc.fontSize(12)
    .fillColor('#8B5CF6')
    .text(title, 40, y);
  
  doc.strokeColor('#8B5CF6')
    .lineWidth(1)
    .moveTo(40, y + 14)
    .lineTo(200, y + 14)
    .stroke();
  
  return y + 20;
};

/**
 * Helper: Add field
 */
const addField = (doc, label, value, x, y) => {
  if (!value && value !== 0) return y;
  
  doc.fontSize(10)
    .fillColor('#666666')
    .text(label, x, y, { width: 120, continued: false });
  
  doc.fillColor('#1a1a1a')
    .text(String(value), x + 120, y, { width: 250 });
  
  return y + 14;
};

/**
 * Helper: Add watermark
 */
const addWatermark = (doc, text, opacity) => {
  const { width, height } = doc.page;
  doc.fillColor('#8B5CF6')
    .fontSize(60)
    .opacity(opacity);
  
  for (let y = -height; y < height * 2; y += 150) {
    for (let x = -width; x < width * 2; x += 300) {
      doc.text(text, x, y, { align: 'center', angle: 45 });
    }
  }
  doc.opacity(1);
};

/**
 * TEST ROUTE: Generate PDF with debug info
 */
router.get('/test-pdf/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    console.log('=== TEST PDF GENERATION ===');
    console.log('User ID:', userId);
    
    // Fetch user from Prisma
    const profile = await prisma.user.findUnique({
      where: { id: userId },
      include: { documents: true }
    });
    
    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    
    console.log('Profile found:', profile.firstName, profile.lastName);
    console.log('subscriptionTier:', profile.subscriptionTier);
    console.log('profilePhoto:', profile.profilePhoto);
    
    // Parse photos
    let photos = [];
    try {
      photos = profile.photos ? JSON.parse(profile.photos) : [];
    } catch(e) {
      photos = [];
    }
    
    console.log('Photos count:', photos.length);
    console.log('Photos:', photos);
    console.log('Documents count:', profile.documents.length);
    
    // Calculate expected pages
    const profilePages = 2;
    const galleryPages = photos.length;
    const documentPages = profile.documents.length;
    const totalPages = profilePages + galleryPages + documentPages;
    
    console.log('Expected pages:', profilePages, '+', galleryPages, '+', documentPages, '=', totalPages);
    
    // Create PDF
    const doc = new PDFDocument({ size: 'A4', margins: { top: 50, bottom: 50, left: 50, right: 50 } });
    
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=test-pdf-${userId.slice(-6)}.pdf`);
    
    doc.pipe(res);
    
    const WATERMARK_TEXT = 'Vijayalakshmi Boyar Matrimony';
    let y = 0;
    let pageNum = 1;
    
    // ========== PAGE 1 ==========
    console.log('Generating Page 1...');
    y = addHeader(doc, 'User Profile Details');
    addWatermark(doc, WATERMARK_TEXT, 0.15);
    
    // Profile Photo
    const pBuf = await fetchImage(profile.profilePhoto);
    if (pBuf) { 
      try { 
        doc.image(pBuf, 40, y, { width: 80, height: 80 }); 
        console.log('Profile photo loaded successfully');
      } catch (e) {
        console.log('Failed to load profile photo:', e.message);
      }
    } else {
      console.log('Profile photo NOT found:', profile.profilePhoto);
    }
    
    doc.fontSize(20).fillColor('#333').text(`${profile.firstName || ''} ${profile.lastName || ''}`.toUpperCase(), 130, y);
    doc.fontSize(10).fillColor('#666').text(`ID: ${profile.id?.slice(-8)}`, 130, y + 22);
    doc.fillColor('#059669').text('✓ Verified', 130, y + 35);
    
    // Subscription
    const tier = profile.subscriptionTier || 'FREE';
    if (tier !== 'FREE') {
      doc.fillColor('#d97706').text(`★ ${tier}`, 130, y + 48);
    }
    
    y = 200;
    y = addSectionHeader(doc, 'Contact Information', y);
    y = addField(doc, 'Email:', profile.email || 'Not provided', 40, y);
    y = addField(doc, 'Phone:', profile.phone || 'Not provided', 40, y);
    
    y = addSectionHeader(doc, 'Personal Details', y);
    y = addField(doc, 'Gender:', profile.gender, 40, y);
    y = addField(doc, 'Marital Status:', profile.maritalStatus, 40, y);
    y = addField(doc, 'Community:', profile.community, 40, y);
    
    // ========== PAGE 2 ==========
    console.log('Generating Page 2...');
    doc.addPage();
    pageNum++;
    
    y = addHeader(doc);
    addWatermark(doc, WATERMARK_TEXT, 0.12);
    
    y = addSectionHeader(doc, 'Professional Details', y);
    y = addField(doc, 'Education:', profile.education || 'Not provided', 40, y);
    y = addField(doc, 'Profession:', profile.profession || 'Not provided', 40, y);
    
    // ========== GALLERY ==========
    console.log('Generating Gallery pages...');
    console.log('Gallery count:', galleryPages);
    for (let i = 0; i < galleryPages; i++) {
      console.log(`Generating Gallery Photo ${i + 1} of ${galleryPages}...`);
      doc.addPage();
      pageNum++;
      
      y = addHeader(doc, `Gallery Photo ${i + 1} of ${galleryPages}`);
      
      const buf = await fetchImage(photos[i]);
      if (buf) {
        try {
          const imgWidth = doc.page.width - 80;
          const imgHeight = doc.page.height - 110;
          doc.image(buf, 40, 70, { width: imgWidth, height: imgHeight });
          console.log(`Gallery photo ${i + 1} loaded successfully`);
        } catch (e) {
          console.log(`Failed to load gallery photo ${i + 1}:`, e.message);
          doc.fontSize(12).fillColor('#666').text('Unable to display image', 40, 200);
        }
      } else {
        console.log(`Gallery photo ${i + 1} NOT found:`, photos[i]);
        doc.fontSize(12).fillColor('#666').text('Image not found', 40, 200);
      }
      
      addWatermark(doc, WATERMARK_TEXT, 0.12);
    }
    
    // ========== DOCUMENTS ==========
    console.log('Generating Document pages...');
    console.log('Document count:', documentPages);
    for (let i = 0; i < documentPages; i++) {
      console.log(`Generating Document ${i + 1} of ${documentPages}...`);
      doc.addPage();
      pageNum++;
      
      doc.fontSize(14).fillColor('#8B5CF6').text(`Document ${i + 1} of ${documentPages}`, 40, 30, { align: 'center' });
      
      addWatermark(doc, WATERMARK_TEXT, 0.12);
      
      y = 60;
      const docType = profile.documents[i]?.documentType || 'N/A';
      const docNumber = profile.documents[i]?.documentNumber || 'N/A';
      const isVerified = profile.documents[i]?.isVerified || false;
      
      console.log(`  Doc ${i+1}: type=${docType}, number=${docNumber}, verified=${isVerified}`);
      
      doc.fontSize(12).fillColor('#333').text(`Type: ${docType}`, 40, y);
      doc.fontSize(12).fillColor('#333').text(`Number: ${docNumber}`, 40, y + 18);
      if (isVerified) {
        doc.fontSize(12).fillColor('#059669').text('✓ Verified', 40, y + 36);
      }
    }
    
    // ========== END ==========
    console.log('PDF generation complete. Total pages:', pageNum);
    console.log('=== END TEST ===');
    
    doc.end();
    
  } catch (error) {
    console.error('Test PDF error:', error);
    res.status(500).json({ error: 'Failed to generate PDF: ' + error.message });
  }
});

module.exports = router;
