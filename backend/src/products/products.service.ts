import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductService {
  private products: Product[] = [{ id: 1, name: 'name', price: 1 }];

  create(product: Product) {
    const productWithHighest = [...this.products].sort((a, b) => b.id - a.id);
    const newProduct = { ...product, id: productWithHighest[0].id + 1 }; 
    this.products.push(newProduct);
    return newProduct;
  }

  findAll(): Product[] {
    return this.products;
  }
  findOne(id: number): Product {
    return this.products.find((product) => product.id === +id);
  }
  update(id: number, product: Product) {
    const productIndex = this.products.findIndex((product) => product.id === +id);
    this.products[productIndex] = product;
    return product;
  }
}
