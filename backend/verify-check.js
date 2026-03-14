const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkUser() {
  try {
    const user = await prisma.user.findFirst({
      where: { customId: 'JAYAKUMAR_VBM26ID000007' },
      select: { 
        id: true,
        customId: true,
        email: true,
        isVerified: true,
        isPremium: true,
        subscriptionTier: true,
        emailVerified: true,
        phoneVerified: true,
        profileVerificationStatus: true
      }
    });
    console.log('Database values for JAYAKUMAR_VBM26ID000007:');
    console.log(JSON.stringify(user, null, 2));
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkUser();
