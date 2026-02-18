import { PrismaClient } from '@prisma/client';

// Não precisa de adapters, clients externos ou configurações complexas
const prisma = new PrismaClient();

export default prisma;