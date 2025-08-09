import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateComunidadDto {
  @IsNotEmpty()
  @IsNumber()
  id_usuario: number; // Usuario creador

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  nombre: string;
}
