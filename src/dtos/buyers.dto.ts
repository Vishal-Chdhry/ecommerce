import { IsArray, IsInt, IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsInt()
  public buyer_id: number;

  @IsNotEmpty()
  @IsInt()
  public seller_id: number;

  @IsArray()
  public products: number[];
}
