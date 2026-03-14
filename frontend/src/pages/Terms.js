import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Divider,
  Link
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import GavelIcon from '@mui/icons-material/Gavel';
import SubscribeIcon from '@mui/icons-material/Subscriptions';

const Terms = () => {
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const subscriptionPlans = [
    {
      id: 'FREE',
      name: 'Free',
      price: '₹0',
      duration: 'Unlimited',
      features: [
        { name: 'Basic profile creation', included: true },
        { name: 'Profile search', included: true, limit: 'Limited' },
        { name: 'Send interests per day', included: true, limit: '5' },
        { name: 'View contact details', included: false },
        { name: 'Priority listing', included: false },
        { name: 'AI verification badge', included: false },
        { name: 'Profile highlighting', included: false },
        { name: 'Dedicated support', included: false }
      ]
    },
    {
      id: 'BASIC',
      name: 'Basic',
      price: '₹1,000',
      duration: '30 days',
      successFee: '₹25,000',
      features: [
        { name: 'Basic profile creation', included: true },
        { name: 'Profile search', included: true, limit: 'Unlimited' },
        { name: 'Send interests per day', included: true, limit: '10' },
        { name: 'View contact details', included: true },
        { name: 'Priority listing', included: false },
        { name: 'AI verification badge', included: false },
        { name: 'Profile highlighting', included: false },
        { name: 'Dedicated support', included: false }
      ]
    },
    {
      id: 'PRO',
      name: 'Pro',
      price: '₹2,000',
      duration: '90 days',
      successFee: '₹50,000',
      features: [
        { name: 'Basic profile creation', included: true },
        { name: 'Profile search', included: true, limit: 'Unlimited' },
        { name: 'Send interests per day', included: true, limit: 'Unlimited' },
        { name: 'View contact details', included: true },
        { name: 'Priority listing', included: true },
        { name: 'AI verification badge', included: true },
        { name: 'Profile highlighting', included: false },
        { name: 'Dedicated support', included: false }
      ]
    },
    {
      id: 'PREMIUM',
      name: 'Premium',
      price: '₹5,000',
      duration: '180 days',
      successFee: '₹1,00,000',
      features: [
        { name: 'Basic profile creation', included: true },
        { name: 'Profile search', included: true, limit: 'Unlimited' },
        { name: 'Send interests per day', included: true, limit: 'Unlimited' },
        { name: 'View contact details', included: true },
        { name: 'Priority listing', included: true },
        { name: 'AI verification badge', included: true },
        { name: 'Profile highlighting', included: true },
        { name: 'Dedicated support', included: true }
      ]
    }
  ];

  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Paper elevation={3} sx={{ p: 4, mb: 3, textAlign: 'center', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'white' }}>
            Terms & Conditions
          </Typography>
          <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.9)' }}>
            Vijayalakshmi Boyar Matrimony - Last Updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
          </Typography>
        </Paper>

        {/* Quick Navigation */}
        <Paper sx={{ p: 2, mb: 3, bgcolor: '#e8eaf6' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
            Quick Navigation:
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            <Chip label="General Terms" component="a" href="#general-terms" clickable color="primary" />
            <Chip label="Privacy Policy" component="a" href="#privacy-policy" clickable color="primary" />
            <Chip label="Subscription Plans" component="a" href="#subscription-terms" clickable color="primary" />
            <Chip label="Payment Terms" component="a" href="#payment-terms" clickable color="primary" />
            <Chip label="Cancellation & Refunds" component="a" href="#cancellation-policy" clickable color="primary" />
          </Box>
        </Paper>

        {/* General Terms and Conditions */}
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <GavelIcon sx={{ mr: 2, color: '#667eea' }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>1. General Terms and Conditions</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              Welcome to Vijayalakshmi Boyar Matrimony ("we," "our," or "us"). By accessing and using our matrimony website and services, you agree to be bound by these Terms and Conditions.
            </Typography>
            
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2, mb: 1 }}>
              1.1 Acceptance of Terms
            </Typography>
            <Typography variant="body2" paragraph>
              By creating an account, browsing profiles, or using any service on Vijayalakshmi Boyar Matrimony, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </Typography>

            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2, mb: 1 }}>
              1.2 Eligibility
            </Typography>
            <Typography variant="body2" paragraph>
              You must be at least 18 years of age to use our services. By registering, you confirm that you are legally eligible to marry under Indian law.
            </Typography>

            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2, mb: 1 }}>
              1.3 Account Responsibilities
            </Typography>
            <Typography variant="body2" paragraph>
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use.
            </Typography>

            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2, mb: 1 }}>
              1.4 User Conduct
            </Typography>
            <Typography variant="body2" paragraph>
              You agree to:
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <li><Typography variant="body2">Provide accurate and complete information</Typography></li>
              <li><Typography variant="body2">Not engage in fraudulent or deceptive practices</Typography></li>
              <li><Typography variant="body2">Not harass, abuse, or harm other users</Typography></li>
              <li><Typography variant="body2">Not post inappropriate or offensive content</Typography></li>
              <li><Typography variant="body2">Not violate any applicable laws or regulations</Typography></li>
            </Box>

            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2, mb: 1 }}>
              1.5 Intellectual Property
            </Typography>
            <Typography variant="body2" paragraph>
              All content, designs, logos, and software on this website are the intellectual property of Vijayalakshmi Boyar Matrimony. You may not copy, reproduce, or distribute any content without our written permission.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Privacy Policy */}
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <PrivacyTipIcon sx={{ mr: 2, color: '#667eea' }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>2. Privacy Policy</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              Your privacy is important to us. This section explains how we collect, use, and protect your personal information.
            </Typography>

            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2, mb: 1 }}>
              2.1 Information We Collect
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <li><Typography variant="body2">Personal information (name, email, phone, date of birth)</Typography></li>
              <li><Typography variant="body2">Profile information (education, occupation, family details)</Typography></li>
              <li><Typography variant="body2">Photos and media uploads</Typography></li>
              <li><Typography variant="body2">Payment and transaction history</Typography></li>
              <li><Typography variant="body2">Usage data and analytics</Typography></li>
            </Box>

            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2, mb: 1 }}>
              2.2 How We Use Your Information
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <li><Typography variant="body2">To provide and improve our services</Typography></li>
              <li><Typography variant="body2">To verify your identity and profile authenticity</Typography></li>
              <li><Typography variant="body2">To process subscription payments</Typography></li>
              <li><Typography variant="body2">To communicate with you about matches and updates</Typography></li>
              <li><Typography variant="body2">To prevent fraud and ensure security</Typography></li>
            </Box>

            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2, mb: 1 }}>
              2.3 Data Protection
            </Typography>
            <Typography variant="body2" paragraph>
              We implement appropriate security measures to protect your personal information. Your data is stored securely and we do not sell or share your personal information with third parties for marketing purposes without your consent.
            </Typography>

            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2, mb: 1 }}>
              2.4 Profile Visibility
            </Typography>
            <Typography variant="body2" paragraph>
              Your profile visibility depends on your subscription tier. Free users have limited visibility, while paid subscribers get enhanced visibility and priority listing.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Subscription Terms */}
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <SubscribeIcon sx={{ mr: 2, color: '#667eea' }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>3. Subscription Plans and Benefits</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              Vijayalakshmi Boyar Matrimony offers different subscription tiers to meet your needs. Choose the plan that best suits your requirements.
            </Typography>

            {/* Plans Comparison Table */}
            <TableContainer component={Paper} sx={{ mt: 2, mb: 3 }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ bgcolor: '#667eea' }}>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Feature</TableCell>
                    {subscriptionPlans.map(plan => (
                      <TableCell key={plan.id} align="center" sx={{ color: 'white', fontWeight: 'bold' }}>
                        {plan.name}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {subscriptionPlans[0].features.map((feature, index) => (
                    <TableRow key={index} sx={{ '&:nth-of-type(even)': { bgcolor: '#f5f5f5' } }}>
                      <TableCell component="th" scope="row">
                        {feature.name}
                        {feature.limit && <Typography variant="caption" display="block" color="text.secondary">{feature.limit}</Typography>}
                      </TableCell>
                      {subscriptionPlans.map(plan => (
                        <TableCell key={plan.id} align="center">
                          {plan.features[index].included ? (
                            <CheckCircleIcon sx={{ color: 'green' }} />
                          ) : (
                            <CancelIcon sx={{ color: 'red' }} />
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                  <TableRow sx={{ bgcolor: '#e8eaf6' }}>
                    <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>Price</TableCell>
                    {subscriptionPlans.map(plan => (
                      <TableCell key={plan.id} align="center" sx={{ fontWeight: 'bold', color: '#667eea' }}>
                        {plan.price}
                      </TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>Duration</TableCell>
                    {subscriptionPlans.map(plan => (
                      <TableCell key={plan.id} align="center">{plan.duration}</TableCell>
                    ))}
                  </TableRow>
                  {subscriptionPlans[1].successFee && (
                    <TableRow sx={{ bgcolor: '#fff3e0' }}>
                      <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>Success Fee (Additional)</TableCell>
                      {subscriptionPlans.map(plan => (
                        <TableCell key={plan.id} align="center" sx={{ fontWeight: 'bold' }}>
                          {plan.successFee || 'N/A'}
                        </TableCell>
                      ))}
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>

            {/* Plan Details */}
            {subscriptionPlans.map(plan => (
              <Paper key={plan.id} sx={{ p: 2, mb: 2, borderLeft: `4px solid ${plan.id === 'FREE' ? '#9e9e9e' : plan.id === 'BASIC' ? '#2196f3' : plan.id === 'PRO' ? '#9c27b0' : '#ff9800'}` }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                  {plan.name} Plan - {plan.price}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Duration: {plan.duration} {plan.successFee && `| Success Fee: ${plan.successFee}`}
                </Typography>
                <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                  {plan.features.filter(f => f.included).map((feature, idx) => (
                    <li key={idx}>
                      <Typography variant="body2">{feature.name} {feature.limit && `(${feature.limit})`}</Typography>
                    </li>
                  ))}
                </Box>
              </Paper>
            ))}
          </AccordionDetails>
        </Accordion>

        {/* Payment Terms */}
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <ExpandMoreIcon sx={{ mr: 2, color: '#667eea' }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>4. Payment Terms</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2, mb: 1 }}>
              4.1 Payment Methods
            </Typography>
            <Typography variant="body2" paragraph>
              We accept the following payment methods:
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <li><Typography variant="body2">Direct Bank Transfer (NEFT/RTGS/IMPS)</Typography></li>
              <li><Typography variant="body2">UPI Payment (Google Pay, PhonePe, Paytm, etc.)</Typography></li>
            </Box>

            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2, mb: 1 }}>
              4.2 Payment Process
            </Typography>
            <Typography variant="body2" paragraph>
              1. Select your preferred subscription plan<br />
              2. Make payment using bank transfer or UPI<br />
              3. Submit payment proof through the portal<br />
              4. Our team will verify and activate your subscription within 24-48 hours
            </Typography>

            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2, mb: 1 }}>
              4.3 Success Fee (Marriage Fee)
            </Typography>
            <Typography variant="body2" paragraph>
              In addition to the subscription fee, a success fee is applicable when you get married through our platform:
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <li><Typography variant="body2">Basic Plan: ₹25,000 (upon successful marriage)</Typography></li>
              <li><Typography variant="body2">Pro Plan: ₹50,000 (upon successful marriage)</Typography></li>
              <li><Typography variant="body2">Premium Plan: ₹1,00,000 (upon successful marriage)</Typography></li>
            </Box>

            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2, mb: 1 }}>
              4.4 Tax Implications
            </Typography>
            <Typography variant="body2" paragraph>
              All payments are subject to applicable taxes. GST is included in the stated prices.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Cancellation and Refund Policy */}
        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <ExpandMoreIcon sx={{ mr: 2, color: '#667eea' }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>5. Cancellation and Refund Policy</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2, mb: 1 }}>
              5.1 Cancellation by User
            </Typography>
            <Typography variant="body2" paragraph>
              You may cancel your subscription at any time by contacting our support team. However, please note:
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <li><Typography variant="body2">No refund will be provided for the subscription fee once paid</Typography></li>
              <li><Typography variant="body2">You will continue to have access until the end of your paid period</Typography></li>
              <li><Typography variant="body2">Success fees (marriage fees) are non-refundable once paid</Typography></li>
            </Box>

            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2, mb: 1 }}>
              5.2 Cancellation by Us
            </Typography>
            <Typography variant="body2" paragraph>
              We reserve the right to cancel or suspend your account if:
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <li><Typography variant="body2">Violation of terms and conditions</Typography></li>
              <li><Typography variant="body2">Fraudulent or illegal activities</Typography></li>
              <li><Typography variant="body2">Harassment or inappropriate behavior towards other users</Typography></li>
              <li><Typography variant="body2">Non-payment of fees</Typography></li>
            </Box>

            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2, mb: 1 }}>
              5.3 Refund Process
            </Typography>
            <Typography variant="body2" paragraph>
              Refunds, when applicable, will be processed within 7-10 business days to the original payment method. In case of payment verification failure, the amount will be refunded after administrative review.
            </Typography>

            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2, mb: 1 }}>
              5.4 Disputes
            </Typography>
            <Typography variant="body2" paragraph>
              In case of any payment disputes, please contact our support team at info@vijayalakshmiboyarmatrimony.com or call +917639150271.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Additional Terms */}
        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <ExpandMoreIcon sx={{ mr: 2, color: '#667eea' }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>6. Additional Terms</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2, mb: 1 }}>
              6.1 AI Verification
            </Typography>
            <Typography variant="body2" paragraph>
              Our AI verification system uses facial recognition and document validation to ensure profile authenticity. By using our services, you consent to AI processing of your photos and documents for verification purposes.
            </Typography>

            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2, mb: 1 }}>
              6.2 Profile Sharing
            </Typography>
            <Typography variant="body2" paragraph>
              Premium and Pro members can generate shareable profile links. Recipients who view your shared profile can only see limited information until they register and subscribe.
            </Typography>

            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2, mb: 1 }}>
              6.3 Limitation of Liability
            </Typography>
            <Typography variant="body2" paragraph>
              Vijayalakshmi Boyar Matrimony provides a platform for connecting potential partners. We do not guarantee the authenticity of any user or the success of any marriage resulting from our services.
            </Typography>

            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2, mb: 1 }}>
              6.4 Changes to Terms
            </Typography>
            <Typography variant="body2" paragraph>
              We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms.
            </Typography>

            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2, mb: 1 }}>
              6.5 Governing Law
            </Typography>
            <Typography variant="body2" paragraph>
              These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Tamil Nadu, India.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Contact Information */}
        <Paper sx={{ p: 3, mt: 3, bgcolor: '#e8eaf6' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Contact Us
          </Typography>
          <Typography variant="body2" paragraph>
            If you have any questions about these Terms & Conditions, please contact us:
          </Typography>
          <Box sx={{ pl: 2 }}>
            <Typography variant="body2"><strong>Email:</strong> info@vijayalakshmiboyarmatrimony.com</Typography>
            <Typography variant="body2"><strong>Phone:</strong> +91 7639150271</Typography>
            <Typography variant="body2"><strong>Address:</strong> Vijayalakshmi Boyar Matrimony, Tamil Nadu, India</Typography>
          </Box>
        </Paper>

        {/* Footer */}
        <Box sx={{ mt: 4, textAlign: 'center', pb: 4 }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Vijayalakshmi Boyar Matrimony. All rights reserved.
          </Typography>
          <Box sx={{ mt: 1 }}>
            <Link href="/terms" underline="hover" sx={{ mx: 1 }}>Terms & Conditions</Link>
            <Link href="/privacy" underline="hover" sx={{ mx: 1 }}>Privacy Policy</Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Terms;
