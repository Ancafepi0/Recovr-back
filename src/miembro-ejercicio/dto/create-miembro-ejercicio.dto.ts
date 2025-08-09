import { IsInt, IsOptional } from 'class-validator';

export class CreateMiembroEjercicioDto {
  @IsInt()
  id_ejercicio: number;

  @IsInt()
  id_miembro: number;

  @IsOptional()
  @IsInt()
  cambio_estadistico?: number;
}
