import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function closePrisma() {
  try {
    await prisma.$disconnect();
    console.log("Prisma desconectado com sucesso");
  } catch (error) {
    console.error("Erro ao desconectar o Prisma:", error);
  }
}

closePrisma();
