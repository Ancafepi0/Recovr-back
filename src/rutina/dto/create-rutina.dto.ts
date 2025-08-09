import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateRutinaDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsInt()
  id_usuario: number;
}
