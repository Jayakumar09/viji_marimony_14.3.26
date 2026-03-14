import React from 'react';
import { Box, Typography, Button, Container, Paper, Grid, Link, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { Search, People, Security, Favorite, ExpandMore, Star, Facebook, Instagram, WhatsApp, Phone, Email, LocationOn } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const features = [
    {
      icon: <Search style={{ fontSize: 40, color: '#8B5CF6' }} />,
      title: 'Advanced Search',
      description: 'Find your perfect match with our advanced search filters tailored for the Boyar community.'
    },
    {
      icon: <People style={{ fontSize: 40, color: '#8B5CF6' }} />,
      title: 'Community Focus',
      description: 'Exclusively for the Boyar community with deep understanding of our traditions and values.'
    },
    {
      icon: <Security style={{ fontSize: 40, color: '#8B5CF6' }} />,
      title: 'Verified Profiles',
      description: 'All profiles are verified to ensure authenticity and trustworthiness.'
    },
    {
      icon: <Favorite style={{ fontSize: 40, color: '#8B5CF6' }} />,
      title: 'Privacy First',
      description: 'Your privacy is our priority. Connect with confidence and safety.'
    }
  ];

  const quickLinks = [
    { title: 'About Us', path: '/about' },
    { title: 'How It Works', path: '/how-it-works' },
    { title: 'Success Stories', path: '#testimonials' },
    { title: 'Pricing', path: '/subscription' },
    { title: 'Contact Us', path: '#contact' },
    { title: 'Privacy Policy', path: '/privacy' },
    { title: 'Terms & Conditions', path: '/terms' },
    { title: 'FAQ', path: '#faq' }
  ];

  const faqs = [
    {
      question: 'How does the matching process work?',
      answer: 'Our AI-powered matching algorithm analyzes your profile preferences, education, profession, family background, and other criteria to suggest compatible matches from our community. The number of matches shown depends on availability of suitable partners.'
    },
    {
      question: 'Is AI verification mandatory?',
      answer: 'Yes, AI verification is mandatory for all paid subscription tiers. Free users can browse, but paid features are activated only after completing face verification and document verification.'
    },
    {
      question: 'How long does payment verification take?',
      answer: 'Payments are typically verified within 2 to 24 hours after you submit the payment proof. Once verified, your subscription will be activated immediately.'
    },
    {
      question: 'What is the success fee?',
      answer: 'The success fee is a one-time payment applicable when you get married through our platform. It varies by plan: Basic (₹25,000), Pro (₹50,000), Premium (₹1,00,000).'
    },
    {
      question: 'Are subscriptions refundable?',
      answer: 'No, all subscription payments are non-refundable once the payment is verified and your account is upgraded. Please select your plan carefully.'
    },
    {
      question: 'How do I upgrade my subscription?',
      answer: 'Go to Dashboard > Subscription to view available plans. Select your preferred plan, make payment via Bank Transfer or UPI, and submit the payment proof. Verification takes 2-24 hours.'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh & Kavitha',
      location: 'Tamil Nadu',
      story: 'We found each other on Vijayalakshmi Boyar Matrimony and decided to get married within 3 months. The AI verification gave us confidence that we were talking to genuine people. Thank you for helping us find our life partners!',
      photo: null,
      marriedDate: 'December 2024'
    },
    {
      name: 'Prakash & Divya',
      location: 'Chennai',
      story: 'As a working professional, I had very limited time to meet people. This platform helped me connect with Divya who shares the same values and career goals. We are now happily married!',
      photo: null,
      marriedDate: 'January 2025'
    },
    {
      name: 'Suresh & Meena',
      location: 'Coimbatore',
      story: 'The community focus was important to our families. We appreciated the thorough verification process which ensured both families were genuine. Highly recommended for Boyar community members!',
      photo: null,
      marriedDate: 'November 2024'
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box 
        py={8} 
        textAlign="center" 
        style={{ 
          background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
          color: 'white'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" gutterBottom style={{ fontWeight: 'bold' }}>
            💍 Vijayalakshmi Boyar Matrimony
          </Typography>
          <Typography variant="h5" paragraph>
            Find Your Perfect Life Partner Within the Boyar Community
          </Typography>
          <Typography variant="body1" paragraph style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            A trusted platform built exclusively for the Boyar community, understanding our unique traditions,
            cultural values, and matching preferences.
          </Typography>
          
          {!user && (
            <Box display="flex" gap={2} justifyContent="center">
              <Button 
                variant="contained" 
                size="large" 
                onClick={() => navigate('/register')}
                style={{ backgroundColor: 'white', color: '#8B5CF6', padding: '12px 32px' }}
              >
                Get Started
              </Button>
              <Button 
                variant="outlined" 
                size="large" 
                onClick={() => navigate('/search')}
                style={{ borderColor: 'white', color: 'white', padding: '12px 32px' }}
              >
                Browse Profiles
              </Button>
            </Box>
          )}

          {user && (
            <Button 
              variant="contained" 
              size="large" 
              onClick={() => navigate('/dashboard')}
              style={{ backgroundColor: 'white', color: '#8B5CF6', padding: '12px 32px' }}
            >
              Go to Dashboard
            </Button>
          )}
        </Container>
      </Box>

      {/* Features Section */}
      <Box py={8} bgcolor="#FAF7FF">
        <Container maxWidth="lg">
          <Typography variant="h4" textAlign="center" gutterBottom style={{ fontWeight: 'bold' }}>
            Why Choose Us?
          </Typography>
          <Typography variant="body1" textAlign="center" paragraph style={{ maxWidth: '600px', margin: '0 auto 3rem' }}>
            We combine traditional values with modern technology to help you find your perfect life partner.
          </Typography>
          
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper 
                  elevation={3} 
                  style={{ 
                    padding: '2rem', 
                    textAlign: 'center', 
                    height: '100%',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(139, 92, 246, 0.2)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  <Box mb={2}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom style={{ color: '#8B5CF6' }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {feature.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box py={8} textAlign="center">
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold' }}>
            Growing Community
          </Typography>
          <Grid container spacing={4} style={{ marginTop: '2rem' }}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h3" style={{ color: '#8B5CF6', fontWeight: 'bold' }}>
                1000+
              </Typography>
              <Typography variant="h6">
                Verified Profiles
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h3" style={{ color: '#8B5CF6', fontWeight: 'bold' }}>
                500+
              </Typography>
              <Typography variant="h6">
                Successful Matches
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h3" style={{ color: '#8B5CF6', fontWeight: 'bold' }}>
                50+
              </Typography>
              <Typography variant="h6">
                Daily New Members
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Quick Links Section */}
      <Box py={6} bgcolor="#f5f5f5">
        <Container maxWidth="lg">
          <Typography variant="h4" textAlign="center" gutterBottom style={{ fontWeight: 'bold', mb: 3 }}>
            Quick Links
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {quickLinks.map((link, index) => (
              <Grid item xs={6} sm={3} md={2} key={index}>
                <Link 
                  href={link.path} 
                  underline="hover" 
                  style={{ color: '#8B5CF6', display: 'block', textAlign: 'center', padding: '8px' }}
                >
                  {link.title}
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box py={8} id="faq">
        <Container maxWidth="md">
          <Typography variant="h4" textAlign="center" gutterBottom style={{ fontWeight: 'bold', mb: 3 }}>
            Frequently Asked Questions
          </Typography>
          {faqs.map((faq, index) => (
            <Accordion key={index} sx={{ mb: 1 }}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box py={8} bgcolor="#FAF7FF" id="testimonials">
        <Container maxWidth="lg">
          <Typography variant="h4" textAlign="center" gutterBottom style={{ fontWeight: 'bold', mb: 3 }}>
            💑 Success Stories
          </Typography>
          <Typography variant="body1" textAlign="center" paragraph style={{ maxWidth: '600px', margin: '0 auto 3rem' }}>
            Real couples who found their perfect match through Vijayalakshmi Boyar Matrimony
          </Typography>
          
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper 
                  elevation={3} 
                  sx={{ 
                    p: 3, 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    position: 'relative'
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    <Box 
                      sx={{ 
                        width: 80, 
                        height: 80, 
                        borderRadius: '50%', 
                        bgcolor: '#8B5CF6',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '24px',
                        fontWeight: 'bold'
                      }}
                    >
                      {testimonial.name.split(' & ').map(n => n[0]).join(' & ')}
                    </Box>
                  </Box>
                  <Typography 
                    variant="h6" 
                    textAlign="center" 
                    sx={{ fontWeight: 'bold', color: '#8B5CF6' }}
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    textAlign="center" 
                    color="text.secondary" 
                    sx={{ mb: 2 }}
                  >
                    {testimonial.location} • Married {testimonial.marriedDate}
                  </Typography>
                  <Typography variant="body2" sx={{ fontStyle: 'italic', flexGrow: 1 }}>
                    "{testimonial.story}"
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} sx={{ color: '#FFD700', fontSize: 20 }} />
                    ))}
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box py={8} id="contact">
        <Container maxWidth="md">
          <Typography variant="h4" textAlign="center" gutterBottom style={{ fontWeight: 'bold', mb: 3 }}>
            Contact Us
          </Typography>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <Box textAlign="center">
                  <Phone sx={{ fontSize: 40, color: '#8B5CF6', mb: 1 }} />
                  <Typography variant="h6" gutterBottom>Phone</Typography>
                  <Typography variant="body2">+91 7639150271</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box textAlign="center">
                  <Email sx={{ fontSize: 40, color: '#8B5CF6', mb: 1 }} />
                  <Typography variant="h6" gutterBottom>Email</Typography>
                  <Typography variant="body2">info@vijayalakshmiboyarmatrimony.com</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box textAlign="center">
                  <LocationOn sx={{ fontSize: 40, color: '#8B5CF6', mb: 1 }} />
                  <Typography variant="h6" gutterBottom>Location</Typography>
                  <Typography variant="body2">Tamil Nadu, India</Typography>
                </Box>
              </Grid>
            </Grid>
            
            <Box sx={{ mt: 4, textAlign: 'center' }}>
              <Typography variant="subtitle1" sx={{ mb: 2 }}>Follow Us</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                <Facebook sx={{ fontSize: 32, color: '#1877F2', cursor: 'pointer' }} />
                <Instagram sx={{ fontSize: 32, color: '#E4405F', cursor: 'pointer' }} />
                <WhatsApp sx={{ fontSize: 32, color: '#25D366', cursor: 'pointer' }} />
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>

      {/* Footer */}
      <Box py={4} bgcolor="#333" color="white" textAlign="center">
        <Container>
          <Typography variant="body2">
            © {new Date().getFullYear()} Vijayalakshmi Boyar Matrimony. All rights reserved.
          </Typography>
          <Box sx={{ mt: 1 }}>
            <Link href="/terms" underline="hover" sx={{ color: 'white', mx: 1 }}>Terms</Link>
            <Link href="/privacy" underline="hover" sx={{ color: 'white', mx: 1 }}>Privacy</Link>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
