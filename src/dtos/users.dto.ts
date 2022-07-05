import { USER_TYPE } from '@prisma/client';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  public email: string;

  @IsString()
  @IsNotEmpty()
  public password: string;

  @IsString()
  @IsNotEmpty()
  public first_name: string;

  @IsString()
  public last_name: string;

  @IsNotEmpty()
  public type: USER_TYPE;
}
