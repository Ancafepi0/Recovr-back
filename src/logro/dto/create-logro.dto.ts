import { IsNotEmpty, IsOptional, IsString, IsInt, Min } from 'class-validator';

export class CreateLogroDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsString()
  icono_url?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  puntos?: number;
}
