import { IsString, IsNumber } from 'class-validator';
export class ProductDto {
  @IsString()
  name: string;

  @IsNumber()
  id: number;

  @IsNumber()
  price: number;
}
