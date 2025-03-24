import { Product } from "@/app/models/product";
import { ProductPrismaRepository } from "../repository/product-prisma.repository";

class ProductController {
    constructor(
        private readonly productRepository: ProductPrismaRepository
    ){}

    async createProduct(product: Product){
        return await this.productRepository.create(product);
    }
    async updateProduct(product: Product){
        return await this.productRepository.update(product);
    }
    async deleteProduct(id: string){
        return await this.productRepository.delete(id);
    }
    async findProductById(id: string){
        return await this.productRepository.findById(id);
    }
    async findAllProducts(){
        return await this.productRepository.findAll();
    }
}

export const productController = new ProductController(new ProductPrismaRepository());