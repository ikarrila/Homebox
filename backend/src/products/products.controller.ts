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
import { I_Product } from './schema/product.schema';

//File made to test out basic api functionality, TO BE MODIFIED IN THE FUTURE
@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll(): Promise<I_Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productService.findOne(id);
  }

  @Post()
  create(@Body() createProductDto: I_Product) {
    this.productService.create(createProductDto);
    return createProductDto;
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProduct: I_Product ,
  ) {
    return this.productService.update(id, updateProduct);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productService.delete(id);
  }
}
