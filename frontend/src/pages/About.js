import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';
import { Favorite, People, VerifiedUser, Support } from '@mui/icons-material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="App">
      <Header />
      <Container maxWidth="lg" style={{ marginTop: '2rem', marginBottom: '4rem' }}>
        <Box mb={4}>
          <Typography variant="h3" component="h1" gutterBottom style={{ color: '#8B5CF6', fontWeight: 'bold' }}>
            About Us
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Vijayalakshmi Boyar Matrimony - Building Lifelong Bonds
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Card elevation={2}>
              <CardContent>
                <Typography variant="h5" gutterBottom style={{ color: '#8B5CF6' }}>
                  Welcome to Vijayalakshmi Boyar Matrimony
                </Typography>
                <Typography variant="body1" paragraph>
                  We are a trusted matrimony service dedicated to helping individuals find their perfect life partners. 
                  Our platform specifically serves the Boyar community, preserving our cultural values and traditions 
                  while embracing modern technology to make partner search easier and more efficient.
                </Typography>
                <Typography variant="body1" paragraph>
                  With years of experience and countless successful matches, we take pride in helping families 
                  unite and build lasting relationships based on compatibility, respect, and shared values.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card elevation={2} style={{ height: '100%' }}>
              <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                  <Favorite style={{ fontSize: 40, color: '#8B5CF6', marginRight: 16 }} />
                  <Typography variant="h5" style={{ color: '#8B5CF6' }}>
                    Our Mission
                  </Typography>
                </Box>
                <Typography variant="body1">
                  To help individuals find their ideal life partners while maintaining the sanctity of marriage 
                  and preserving our cultural heritage. We strive to create meaningful connections that last a lifetime.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card elevation={2} style={{ height: '100%' }}>
              <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                  <People style={{ fontSize: 40, color: '#8B5CF6', marginRight: 16 }} />
                  <Typography variant="h5" style={{ color: '#8B5CF6' }}>
                    Our Vision
                  </Typography>
                </Box>
                <Typography variant="body1">
                  To be the most trusted and reliable matrimony platform for the Boyar community, 
                  enabling thousands of happy marriages and preserving our traditions for future generations.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom style={{ color: '#8B5CF6', marginTop: '1rem' }}>
              Why Choose Us
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Card elevation={2} style={{ height: '100%' }}>
              <CardContent>
                <Box display="flex" justifyContent="center" mb={2}>
                  <VerifiedUser style={{ fontSize: 48, color: '#4CAF50' }} />
                </Box>
                <Typography variant="h6" align="center" gutterBottom>
                  Verified Profiles
                </Typography>
                <Typography variant="body2" align="center" color="textSecondary">
                  All profiles are manually verified to ensure authenticity and safety.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Card elevation={2} style={{ height: '100%' }}>
              <CardContent>
                <Box display="flex" justifyContent="center" mb={2}>
                  <People style={{ fontSize: 48, color: '#2196F3' }} />
                </Box>
                <Typography variant="h6" align="center" gutterBottom>
                  Community Focus
                </Typography>
                <Typography variant="body2" align="center" color="textSecondary">
                  Specialized services for Boyar community with understanding of traditions.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Card elevation={2} style={{ height: '100%' }}>
              <CardContent>
                <Box display="flex" justifyContent="center" mb={2}>
                  <Favorite style={{ fontSize: 48, color: '#E91E63' }} />
                </Box>
                <Typography variant="h6" align="center" gutterBottom>
                  Personal Touch
                </Typography>
                <Typography variant="body2" align="center" color="textSecondary">
                  Dedicated support team to assist you through every step of your journey.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Card elevation={2} style={{ height: '100%' }}>
              <CardContent>
                <Box display="flex" justifyContent="center" mb={2}>
                  <Support style={{ fontSize: 48, color: '#FF9800' }} />
                </Box>
                <Typography variant="h6" align="center" gutterBottom>
                  24/7 Support
                </Typography>
                <Typography variant="body2" align="center" color="textSecondary">
                  Round-the-clock customer support to address all your queries and concerns.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card elevation={2} style={{ backgroundColor: '#FAF7FF' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom style={{ color: '#8B5CF6' }}>
                  Join Our Family
                </Typography>
                <Typography variant="body1" paragraph>
                  Start your journey to find your perfect match today. Register now and take the first 
                  step towards a happy and fulfilling married life.
                </Typography>
                <Typography variant="body1">
                  <strong>Contact us:</strong> vijayalakshmiboyarmatrimony@gmail.com
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default About;
