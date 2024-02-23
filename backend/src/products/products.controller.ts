import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  Patch,
  ParseIntPipe,
} from '@nestjs/common';

import { ProductService } from './products.service';
import { Product} from './schema/product.schema';

//File made to test out basic api functionality, TO BE MODIFIED IN THE FUTURE
@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }
/*
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productService.findOne(id);
  }
*/
  @Post()
  create(@Body() createProductDto: Product) {
    return this.productService.create(createProductDto);
  }
/*
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProduct: Product,
  ) {
    return this.productService.update(id, updateProduct);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productService.delete(id);
  }
  */
}
