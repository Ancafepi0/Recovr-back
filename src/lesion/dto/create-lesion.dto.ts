import { IsNotEmpty, IsOptional, IsString, IsArray, IsInt } from 'class-validator';

export class CreateLesionDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  miembrosIds?: number[];
}
