import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateCatalogDto {
  @IsNotEmpty()
  @IsInt()
  public seller_id: number;
}
