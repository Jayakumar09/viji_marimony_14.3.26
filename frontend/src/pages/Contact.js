import React, { useState } from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, TextField, Button, Alert } from '@mui/material';
import { Email, Phone, LocationOn, Send } from '@mui/icons-material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import api from '../services/api';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setLoading(true);
    try {
      // In a real app, you'd send this to your backend
      // await api.post('/contact', formData);
      
      toast.success('Thank you for contacting us! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <Header />
      <Container maxWidth="lg" style={{ marginTop: '2rem', marginBottom: '4rem' }}>
        <Box mb={4}>
          <Typography variant="h3" component="h1" gutterBottom style={{ color: '#8B5CF6', fontWeight: 'bold' }}>
            Contact Us
          </Typography>
          <Typography variant="h6" color="textSecondary">
            We are here to help! Reach out to us for any queries or support.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <Card elevation={2} style={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom style={{ color: '#8B5CF6' }}>
                  Get in Touch
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  Have questions about our services? Need help with your profile? 
                  We're here to assist you.
                </Typography>

                <Box mt={3}>
                  <Box display="flex" alignItems="center" mb={3}>
                    <Email style={{ fontSize: 32, color: '#8B5CF6', marginRight: 16 }} />
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        Email
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        vijayalakshmiboyarmatrimony@gmail.com
                      </Typography>
                    </Box>
                  </Box>

                  <Box display="flex" alignItems="center" mb={3}>
                    <Phone style={{ fontSize: 32, color: '#8B5CF6', marginRight: 16 }} />
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        Phone
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        +91 98765 43210
                      </Typography>
                    </Box>
                  </Box>

                  <Box display="flex" alignItems="flex-start" mb={3}>
                    <LocationOn style={{ fontSize: 32, color: '#8B5CF6', marginRight: 16 }} />
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        Address
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Vijayalakshmi Boyar Matrimony<br />
                        Tamil Nadu, India
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Alert severity="info" sx={{ mt: 2 }}>
                  <Typography variant="body2">
                    <strong>Working Hours:</strong><br />
                    Monday - Saturday: 9:00 AM - 6:00 PM<br />
                    Sunday: Closed
                  </Typography>
                </Alert>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Card elevation={2}>
              <CardContent>
                <Typography variant="h5" gutterBottom style={{ color: '#8B5CF6' }}>
                  Send us a Message
                </Typography>
                
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Name *"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        variant="outlined"
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email *"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        variant="outlined"
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message *"
                        name="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        variant="outlined"
                        required
                        placeholder="Tell us how we can help you..."
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        disabled={loading}
                        startIcon={<Send />}
                        style={{ 
                          backgroundColor: '#8B5CF6',
                          color: 'white',
                          padding: '12px 0'
                        }}
                      >
                        {loading ? 'Sending...' : 'Send Message'}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>

          {/* FAQ Section */}
          <Grid item xs={12}>
            <Card elevation={2}>
              <CardContent>
                <Typography variant="h5" gutterBottom style={{ color: '#8B5CF6' }}>
                  Frequently Asked Questions
                </Typography>
                
                <Grid container spacing={2} mt={1}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      How do I register?
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Click on the Register button and fill in your details. It's free to create an account.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Is verification mandatory?
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Yes, profile verification helps ensure authenticity and increases your chances of finding a match.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      How do I upgrade to premium?
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Visit the Subscription page in your dashboard to view available premium plans.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Can I edit my profile anytime?
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Yes, you can edit your profile from the Profile section in your dashboard.
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
