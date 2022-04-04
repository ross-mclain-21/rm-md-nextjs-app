import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.role.upsert({
    where: { slug: 'admin' },
    update: {},
    create: {
      name: 'Admin',
      description: 'Admin users',
      slug: 'admin'
    }
  });

  const dndUser = await prisma.role.upsert({
    where: { slug: 'dnduser' },
    update: {},
    create: {
      name: 'DND User',
      description: 'DND users who need access to specific pages.',
      slug: 'dnduser'
    }
  });

  const rossMclain = await prisma.user.upsert({
    where: { email: 'ross.mclain21@gmail.com' },
    update: {},
    create: {
      name: 'Ross McLain',
      phone_number: '1-207-420-6255',
      email: 'ross.mclain21@gmail.com',
      RolesOnUsers: {
        create: {
          roleId: admin.id,
          assignedBy: 'system'
        }
      }
    }
  });

  console.log({ admin, dndUser, rossMclain });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
