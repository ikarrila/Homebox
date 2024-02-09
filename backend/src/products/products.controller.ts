import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { CreateProductDto} from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

//File made to test out basic api functionality, TO BE MODIFIED IN THE FUTURE
@Controller('products')
export class ProductsController {
  @Get()
  getAllProducts() {
    return 'Products';
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return `Single product ${id}`;
  }

  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto) {
    return 'Product created';
  }
 
  @Put(':id')
  updateProduct(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return `Product ${id} updated`;
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return `Product ${id} deleted`;
  }
}
