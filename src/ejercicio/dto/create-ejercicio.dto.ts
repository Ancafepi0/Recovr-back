import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateEjercicioDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  descripcion: string;

  @IsNotEmpty()
  @IsUrl()
  url_video: string;

  @IsNotEmpty()
  @IsString()
  imagen: string;

  @IsNotEmpty()
  @IsString()
  tipo: string;
}
