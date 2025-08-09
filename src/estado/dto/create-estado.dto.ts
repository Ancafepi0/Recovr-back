import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateEstadoDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsOptional()
  @IsString()
  descripcion?: string;
}
