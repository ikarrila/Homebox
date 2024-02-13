import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';

//Automatically created by NestJS CLI when generating a new controller with the command: nest g controller products
describe('ProductsController', () => {
  let controller: ProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
