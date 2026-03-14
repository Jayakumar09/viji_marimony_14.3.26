const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function check() {
  const count = await prisma.payments.count({ 
    where: { paymentStatus: 'PENDING_VERIFICATION' } 
  });
  console.log('PENDING_VERIFICATION count:', count);
  
  const payments = await prisma.payments.findMany({ 
    where: { paymentStatus: 'PENDING_VERIFICATION' } 
  });
  console.log('Payments:', JSON.stringify(payments, null, 2));
  
  await prisma.$disconnect();
}

check();
