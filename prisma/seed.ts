import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.trial.deleteMany();
  const test = await prisma.trial.create({
    data: {
      email: 'test@mail.com',
      displayName: 'testTest',
      count: 5,
    },
  });

  console.log({ test });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
