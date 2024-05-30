import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'crypto';

const prisma = new PrismaClient();

async function main() {
  const statusPending = await prisma.transactionStatus.upsert({
    where: { name: 'PENDING' },
    update: {},
    create: {
      id: randomUUID(),
      name: 'PENDING',
      createdAt: new Date(),
    },
  });

  const statusApproved = await prisma.transactionStatus.upsert({
    where: { name: 'APPROVED' },
    update: {},
    create: {
      id: randomUUID(),
      name: 'APPROVED',
      createdAt: new Date(),
    },
  });

  const statusRejected = await prisma.transactionStatus.upsert({
    where: { name: 'REJECTED' },
    update: {},
    create: {
      id: randomUUID(),
      name: 'REJECTED',
      createdAt: new Date(),
    },
  });

  console.log({ statusPending, statusApproved, statusRejected });

  const typeOne = await prisma.transactionType.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: 'Type 1',
      createdAt: new Date(),
    },
  });

  const typeTwo = await prisma.transactionType.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      name: 'Type 2',
      createdAt: new Date(),
    },
  });

  const typeThree = await prisma.transactionType.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      name: 'Type 3',
      createdAt: new Date(),
    },
  });

  console.log({ typeOne, typeTwo, typeThree });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
