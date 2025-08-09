import { IsInt, IsOptional } from 'class-validator';

export class CreateMiembroCuerpoDto {
  @IsInt()
  id_cuerpo: number;

  @IsInt()
  id_miembro: number;

  @IsOptional()
  @IsInt()
  id_estado?: number;
}
