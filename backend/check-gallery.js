const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkGallery() {
  const images = await prisma.userGalleryImage.findMany();
  console.log('Prisma gallery images:', JSON.stringify(images, null, 2));
  
  // Also check user.photos field
  const users = await prisma.user.findMany({
    select: {
      id: true,
      firstName: true,
      photos: true
    }
  });
  console.log('\nUsers with photos:', JSON.stringify(users, null, 2));
  
  await prisma.$disconnect();
}

checkGallery();
