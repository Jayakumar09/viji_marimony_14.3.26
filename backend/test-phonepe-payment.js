/**
 * Test script for PhonePe payment integration
 */

const { prisma } = require('./utils/database');
const phonepeService = require('./services/phonepeService');

async function testPhonePePayment() {
  try {
    // Find a user
    const user = await prisma.user.findFirst({
      select: { id: true, email: true, phone: true }
    });

    if (!user) {
      console.log('No user found in database');
      return;
    }

    console.log('Testing with user:', user);

    // Test payment initiation
    const result = await phonepeService.initiatePayment({
      userId: user.id,
      amount: 19900, // ₹199 in paise
      planId: 'BASIC',
      mobileNumber: user.phone || '9999999999',
      type: 'SUBSCRIPTION'
    });

    console.log('\n=== Payment Result ===');
    console.log(JSON.stringify(result, null, 2));

    if (result.success && result.checkoutUrl) {
      console.log('\n✅ Payment initiated successfully!');
      console.log('Checkout URL:', result.checkoutUrl);
    } else {
      console.log('\n❌ Payment failed:', result.error);
    }

  } catch (error) {
    console.error('Test error:', error.message);
    console.error(error.stack);
  } finally {
    await prisma.$disconnect();
  }
}

testPhonePePayment();
