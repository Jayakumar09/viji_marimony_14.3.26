const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkProfile() {
  try {
    const user = await prisma.user.findFirst({
      where: { customId: 'JAYAKUMAR_VBM26ID000007' },
      select: { 
        profilePhoto: true,
        photos: true,
        education: true,
        profession: true,
        bio: true,
        height: true,
        weight: true,
        city: true,
        state: true,
        maritalStatus: true,
        familyValues: true,
        aboutFamily: true
      }
    });
    
    const fields = [
      'profilePhoto', 'photos', 'education', 'profession', 'bio',
      'height', 'weight', 'city', 'state', 'maritalStatus', 'familyValues', 'aboutFamily'
    ];
    
    console.log('Profile fields for JAYAKUMAR_VBM26ID000007:');
    fields.forEach(f => {
      const val = user[f];
      const hasValue = f === 'photos' ? (val && JSON.parse(val).length > 0) : !!val;
      console.log(`${f}: ${hasValue ? '✅' : '❌'} (${val || 'empty'})`);
    });
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkProfile();
