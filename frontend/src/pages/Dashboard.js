import React from 'react';
import { Box, Typography, Container, Paper, Grid, Button, Avatar, CircularProgress } from '@mui/material';
import { Person, Search, Message, FavoriteBorder, SupportAgent, Refresh } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { getImageUrl } from '../utils/imageUrl';
import { normalizeTier, getTierDisplayName, canUpgrade, isPaidTier } from '../utils/subscription';

const Dashboard = () => {
  const { user, loading, updateUser } = useAuth();
  const navigate = useNavigate();

  const handleRefresh = async () => {
    await updateUser();
  };

  if (loading) {
    return (
      <Container maxWidth="lg" style={{ marginTop: '2rem' }}>
        <Box display="flex" justifyContent="center" alignItems="center" height="60vh">
          <CircularProgress size={60} />
        </Box>
      </Container>
    );
  }

  if (!user) {
    return (
      <Container maxWidth="lg" style={{ marginTop: '2rem' }}>
        <Typography variant="h5" align="center">Please login to view your dashboard</Typography>
      </Container>
    );
  }

  const quickActions = [
    {
      icon: <Search style={{ fontSize: 40, color: '#8B5CF6' }} />,
      title: 'Search Profiles',
      description: 'Find compatible matches',
      action: () => navigate('/search')
    },
    {
      icon: <Person style={{ fontSize: 40, color: '#8B5CF6' }} />,
      title: 'My Profile',
      description: 'Update your profile',
      action: () => navigate('/profile')
    },
    {
      icon: <FavoriteBorder style={{ fontSize: 40, color: '#8B5CF6' }} />,
      title: 'Interests',
      description: 'View received interests',
      action: () => navigate('/interests')
    },
    {
      icon: <Message style={{ fontSize: 40, color: '#8B5CF6' }} />,
      title: 'Messages',
      description: 'Chat with matches',
      action: () => navigate('/messages')
    },
    {
      icon: <SupportAgent style={{ fontSize: 40, color: '#8B5CF6' }} />,
      title: 'Chat with Admin',
      description: 'Get support & assistance',
      action: () => navigate('/chat')
    }
  ];

  const profileCompletion = () => {
    const fields = [
      'profilePhoto',
      'photos',
      'education',
      'profession',
      'bio',
      'height',
      'weight',
      'city',
      'state',
      'maritalStatus',
      'familyValues',
      'aboutFamily',
      'habits'
    ];
    
    const completedFields = fields.filter(field => {
      let value = user?.[field];
      
      // Handle photos field - could be JSON string or array
      if (field === 'photos' && value) {
        try {
          const photosArray = typeof value === 'string' ? JSON.parse(value) : value;
          return Array.isArray(photosArray) && photosArray.length > 0;
        } catch (e) {
          return false;
        }
      }
      
      if (Array.isArray(value)) {
        return value.length > 0;
      }
      return value;
    });
    
    return Math.round((completedFields.length / fields.length) * 100);
  };

  // Get pending fields for profile completion
  const getPendingFields = () => {
    const fieldLabels = {
      profilePhoto: 'Profile Photo',
      photos: 'Additional Photos',
      education: 'Education',
      profession: 'Profession',
      bio: 'About Me (Bio)',
      height: 'Height',
      weight: 'Weight',
      city: 'City',
      state: 'State',
      maritalStatus: 'Marital Status',
      familyValues: 'Family Values',
      aboutFamily: 'About Family',
      habits: 'Habits'
    };

    const fields = [
      'profilePhoto',
      'photos',
      'education',
      'profession',
      'bio',
      'height',
      'weight',
      'city',
      'state',
      'maritalStatus',
      'familyValues',
      'aboutFamily',
      'habits'
    ];

    const pending = [];
    fields.forEach(field => {
      let value = user?.[field];
      let isComplete = false;

      if (field === 'photos' && value) {
        try {
          const photosArray = typeof value === 'string' ? JSON.parse(value) : value;
          isComplete = Array.isArray(photosArray) && photosArray.length > 0;
        } catch (e) {
          isComplete = false;
        }
      } else if (Array.isArray(value)) {
        isComplete = value.length > 0;
      } else {
        isComplete = !!value;
      }

      if (!isComplete) {
        pending.push({ field, label: fieldLabels[field] });
      }
    });

    return pending;
  };

  const pendingFields = getPendingFields();

  return (
    <Container maxWidth="lg" style={{ marginTop: '2rem' }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h4" style={{ color: '#8B5CF6', fontWeight: 'bold' }}>
          Welcome back, {user?.firstName}! 👋
        </Typography>
        <Button 
          variant="outlined" 
          size="small" 
          startIcon={<Refresh />}
          onClick={handleRefresh}
          sx={{ borderColor: '#8B5CF6', color: '#8B5CF6' }}
        >
          Refresh
        </Button>
      </Box>

      <Grid container spacing={4}>
        {/* Profile Summary */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: '2rem', textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Profile Summary
            </Typography>
            <Box 
              width={120}
              height={120}
              borderRadius="50%"
              overflow="hidden"
              bgcolor="#FAF7FF"
              display="flex"
              alignItems="center"
              justifyContent="center"
              margin="0 auto 1rem"
              border="3px solid #8B5CF6"
            >
              {user?.profilePhoto ? (
                <Avatar
                  src={getImageUrl(user.profilePhoto)}
                  alt={`${user.firstName} ${user.lastName}`}
                  sx={{ width: '100%', height: '100%' }}
                />
              ) : (
                <Person style={{ fontSize: 60, color: '#8B5CF6' }} />
              )}
            </Box>
            <Typography variant="h5" gutterBottom>
              {user?.firstName} {user?.lastName}
            </Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
              {user?.city}, {user?.state}
            </Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
              {user?.age} years • {user?.gender === 'MALE' ? 'Male' : 'Female'}
            </Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
              Community: {user?.community}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate('/profile')}
              fullWidth
            >
              View Profile
            </Button>
          </Paper>
        </Grid>

        {/* Quick Actions */}
        <Grid item xs={12} md={8}>
          <Paper elevation={3} style={{ padding: '2rem' }}>
            <Typography variant="h6" gutterBottom>
              Quick Actions
            </Typography>
            <Grid container spacing={3}>
              {quickActions.map((action, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Paper
                    elevation={2}
                    style={{
                      padding: '1.5rem',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                    }}
                    onClick={action.action}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 8px 16px rgba(139, 92, 246, 0.2)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                    }}
                  >
                    <Box mb={1}>{action.icon}</Box>
                    <Typography variant="h6" gutterBottom>
                      {action.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {action.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>

        {/* Profile Completion */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '2rem' }}>
            <Typography variant="h6" gutterBottom>
              Profile Completion
            </Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
              Complete your profile to get better matches
            </Typography>
            <Box 
              height={20}
              borderRadius={10}
              bgcolor="#E0E0E0"
              overflow="hidden"
              mb={1}
            >
              <Box 
                height="100%"
                width={`${profileCompletion()}%`}
                bgcolor={profileCompletion() === 100 ? '#4CAF50' : '#8B5CF6'}
                transition="width 0.3s ease"
              />
            </Box>
            <Typography variant="body2" align="center" style={{ marginBottom: '1rem' }}>
              {profileCompletion()}% Complete
            </Typography>
            
            {/* Show pending fields if not 100% */}
            {pendingFields.length > 0 && (
              <Box mt={2}>
                <Typography variant="subtitle2" color="error" gutterBottom>
                  Missing Fields ({pendingFields.length}):
                </Typography>
                <Box display="flex" flexWrap="wrap" gap={1}>
                  {pendingFields.map((item, index) => (
                    <Box 
                      key={index}
                      sx={{ 
                        bgcolor: '#FFF3E0', 
                        color: '#E65100',
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 1,
                        fontSize: '0.75rem',
                        border: '1px solid #FFB74D'
                      }}
                    >
                      {item.label}
                    </Box>
                  ))}
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => navigate('/profile')}
                  fullWidth
                  style={{ marginTop: '1rem' }}
                >
                  Complete Profile
                </Button>
              </Box>
            )}
            
            {pendingFields.length === 0 && (
              <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
                <Typography variant="body1" style={{ color: '#4CAF50', fontWeight: 'bold' }}>
                  ✅ Profile Complete! All fields filled.
                </Typography>
              </Box>
            )}
          </Paper>
        </Grid>

        {/* Status */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '2rem' }}>
            <Typography variant="h6" gutterBottom>
              Account Status
            </Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="body2">Email Verified:</Typography>
                <Typography 
                  variant="body2" 
                  style={{ color: user?.emailVerified ? '#4CAF50' : '#FF9800' }}
                >
                  {user?.emailVerified ? '✅ Verified' : '⏳ Pending'}
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="body2">Phone Verified:</Typography>
                <Typography 
                  variant="body2" 
                  style={{ color: user?.phoneVerified ? '#4CAF50' : '#FF9800' }}
                >
                  {user?.phoneVerified ? '✅ Verified' : '⏳ Pending'}
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="body2">Profile Verified:</Typography>
                <Typography 
                  variant="body2" 
                  style={{ color: user?.isVerified ? '#4CAF50' : '#FF9800' }}
                >
                  {user?.isVerified ? '✅ Verified' : '⏳ Pending'}
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="body2">Premium Member:</Typography>
                <Typography 
                  variant="body2" 
                  style={{ color: isPaidTier(user?.subscriptionTier) ? '#4CAF50' : '#757575' }}
                >
                  {isPaidTier(user?.subscriptionTier) ? `👑 ${getTierDisplayName(user.subscriptionTier)}` : 'Free'}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;