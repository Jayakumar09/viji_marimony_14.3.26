/**
 * PDF Generation Debug Test
 * This file tests the PDF generation to identify issues
 */

const { PrismaClient } = require('@prisma/client');
const Database = require('better-sqlite3');
const path = require('path');

const prisma = new PrismaClient();
const dbPath = path.join(__dirname, 'prisma', 'dev.db');

async function testPDFGeneration() {
  console.log('=== PDF Generation Debug Test ===\n');
  
  // Test user: JAYAKUMAR_VBM26ID000007 (has 4 photos, 7 docs)
  const testUserId = 'cmmga3ofz00001wnflmhhqyim';
  
  console.log('--- Test 1: Prisma Database ---');
  const prismaUser = await prisma.user.findUnique({
    where: { id: testUserId },
    include: { documents: true }
  });
  
  if (prismaUser) {
    let photos = [];
    try { photos = prismaUser.photos ? JSON.parse(prismaUser.photos) : []; } catch(e) {}
    
    console.log('Prisma User:');
    console.log('  subscriptionTier:', prismaUser.subscriptionTier);
    console.log('  profilePhoto:', prismaUser.profilePhoto);
    console.log('  photos array:', photos);
    console.log('  photos count:', photos.length);
    console.log('  documents count:', prismaUser.documents.length);
  }
  
  console.log('\n--- Test 2: SQLite Database ---');
  const db = new Database(dbPath, { readonly: true });
  
  const sqliteUser = db.prepare('SELECT * FROM users WHERE id = ?').get(testUserId);
  if (sqliteUser) {
    let photos = [];
    try { photos = sqliteUser.photos ? JSON.parse(sqliteUser.photos) : []; } catch(e) {}
    
    console.log('SQLite User:');
    console.log('  subscription_tier:', sqliteUser.subscription_tier);
    console.log('  profile_photo:', sqliteUser.profile_photo);
    console.log('  photos array:', photos);
    console.log('  photos count:', photos.length);
  }
  
  // Check documents in SQLite
  const docs = db.prepare('SELECT * FROM documents WHERE user_id = ?').all(testUserId);
  console.log('  documents count:', docs.length);
  if (docs.length > 0) {
    console.log('  First doc:', docs[0].document_type, docs[0].document_number);
  }
  
  db.close();
  
  console.log('\n--- Test 3: Page Count Calculation ---');
  const galleryCount = photos ? photos.length : 0;
  const docsCount = docs ? docs.length : 0;
  const profilePages = 2;
  const totalPages = profilePages + galleryCount + docsCount;
  
  console.log('Expected pages:');
  console.log('  profilePages:', profilePages);
  console.log('  galleryPages:', galleryCount, '(photos count)');
  console.log('  documentPages:', docsCount);
  console.log('  TOTAL:', totalPages);
  
  console.log('\n--- Test 4: generateSharedProfile.js Logic ---');
  // This simulates what generateSharedProfile.js does
  let galleryCountCalc = 0;
  if (sqliteUser && sqliteUser.photos) {
    try {
      const parsedPhotos = JSON.parse(sqliteUser.photos);
      if (Array.isArray(parsedPhotos) && parsedPhotos.length > 0) {
        // NEW FIXED LOGIC - count all photos (no subtraction)
        galleryCountCalc = parsedPhotos.filter(p =>
          p && typeof p === 'string' && (p.includes('cloudinary') || p.startsWith('/') || p.startsWith('uploads'))
        ).length;
      }
    } catch {}
  }
  
  console.log('Gallery count (new logic):', galleryCountCalc);
  console.log('Expected total pages:', profilePages + galleryCountCalc + docsCount);
  
  console.log('\n=== Test Complete ===');
}

testPDFGeneration()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
