const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const tables = await prisma.$queryRaw`SELECT name FROM sqlite_master WHERE type='table'`;
  console.log('Tables:', JSON.stringify(tables, null, 2));
  
  // Try to get users
  try {
    const users = await prisma.$queryRaw`SELECT * FROM users LIMIT 1`;
    console.log('User sample:', JSON.stringify(users, null, 2));
  } catch(e) {
    console.log('User table error:', e.message);
  }
  
  prisma.$disconnect();
}

main();
