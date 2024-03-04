import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './schema/product.schema';

//servicessä toteutetaan toiminnot jotka tapahtuvat kun reittiä kutsutaan
@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async create(product: Product): Promise<Product> {
    const newProduct = new this.productModel(product);
    return newProduct.save();
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }
  findOne() {
    return 'This is a test';
  }
  update() {
    return 'This is a test';
  }
  delete() {
    return 'This is a test';
  }
}
