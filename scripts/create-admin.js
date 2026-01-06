// Script to create an admin user in the database using Prisma
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const prisma = new PrismaClient();

async function main() {
  const email = process.env.ADMIN_EMAIL || 'admin@zanzibar.test';
  const password = process.env.ADMIN_PASSWORD || 'Admin@Zanzibar2026';
  const name = process.env.ADMIN_NAME || 'Administrator';

  console.log('Creating admin user:', email);

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    console.log('Admin user already exists:', email);
    return;
  }

  const hashed = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      password: hashed,
      role: 'ADMIN',
    },
  });

  console.log('Admin created. Credentials:');
  console.log('  email :', email);
  console.log('  password :', password);
  console.log('Please change the password after first login.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
