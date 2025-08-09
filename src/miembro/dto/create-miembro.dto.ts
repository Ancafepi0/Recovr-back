import { IsNotEmpty, IsOptional, IsString, IsInt } from 'class-validator';

export class CreateMiembroDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsNotEmpty()
  @IsInt()
  id_cuerpo: number;
}
