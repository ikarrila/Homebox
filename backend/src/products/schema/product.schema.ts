//Schema on välttämätön mongoDBn käytössä
import { Prop, Schema } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

//interface on tyyppien tarkastamiseen TS:ssä
export interface I_Product {
    name: string;
    id: number;
    price: number;
}
  
@Schema({
  timestamps: true,
})
export class ProductSchema {
  @Prop()
  name: string;

  @Prop()
  id: number;

  @Prop()
  price: number;
}
export const Product = mongoose.Model<I_Product>('Product', ProductSchema);
