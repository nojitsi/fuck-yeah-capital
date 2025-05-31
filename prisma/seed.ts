import { prisma } from "../lib/prisma";

async function main() {
  await prisma.user.create({
    data: {
      email: 'default@example.com',
      name: 'Default User',
      meta: {},
    },
  });

  console.log('✅ Seed complete');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });