import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateEjerciciosRutinaDto {
  @IsNotEmpty()
  @IsInt()
  id_rutina: number;

  @IsNotEmpty()
  @IsInt()
  id_ejercicio: number;

  @IsNotEmpty()
  @IsInt()
  repeticiones: number;

  @IsNotEmpty()
  @IsInt()
  duracion: number;

  @IsNotEmpty()
  @IsInt()
  series: number;
}
