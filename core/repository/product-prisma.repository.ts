import { PrismaClient } from "@prisma/client";
import { Product } from "@/app/models/product";
import { Repository } from "../interfaces/repository.interface";


export class ProductPrismaRepository implements Repository<Product> {
    async create(data: Product): Promise<Product> {
        try{
            const prisma = new PrismaClient();
            const product = await prisma.product.create({ data });
            prisma.$disconnect();
            return product;
        }catch (error) {
            throw new Error("Erro ao criar produto");
        }
    }
    async update(entity: Product): Promise<Product> {
        try{
            const prisma = new PrismaClient();
            const product = await prisma.product.update({ where: { id: entity.id }, data: entity });
            prisma.$disconnect();
            return product;
        }catch (error) {
            throw new Error("Erro ao atualizar produto");
        }
    }
    async delete(id: string): Promise<void> {
        try{
            const prisma = new PrismaClient();
            await prisma.product.delete({ where: { id } });
            prisma.$disconnect();
        }catch (error) {
            throw new Error("Erro ao deletar produto");
        }
    }
    async findById(id: string): Promise<Product | null> {
        try{
            const prisma = new PrismaClient();
            const product = await prisma.product.findUnique({ where: { id: String(id) } });
            prisma.$disconnect();
            return product;
        }catch (error) {
            throw new Error(`Erro ao buscar produto ${error}`);
        }
    }
    async findAll(): Promise<Product[] | []> {
        try{
            const prisma = new PrismaClient();
            prisma.$connect();
            const products = await prisma.product.findMany();
            prisma.$disconnect();
            return products;
        }catch (error) {
            throw new Error("Erro ao buscar produtos");
        }
    }

}
