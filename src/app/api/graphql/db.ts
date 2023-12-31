// eslint-disable-next-line import/no-relative-packages
import { Prisma, PrismaClient } from '../../../../prisma/client';

export { Prisma };

export const db = new PrismaClient({
  // log: ['query', 'info', 'warn'],
});

// Disable to see what models are loaded
// console.log(Prisma.dmmf.datamodel.models);
