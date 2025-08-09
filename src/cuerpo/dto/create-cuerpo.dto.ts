import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCuerpoDto {
  @IsNotEmpty()
  @IsNumber()
  id_usuario: number;
}
