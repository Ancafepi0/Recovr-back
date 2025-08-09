import { IsNotEmpty, IsBoolean, IsOptional, IsInt } from 'class-validator';

export class CreateLogroUsuarioDto {
  @IsNotEmpty()
  @IsInt()
  id_usuario: number;

  @IsNotEmpty()
  @IsInt()
  id_logro: number;

  @IsOptional()
  @IsBoolean()
  completado?: boolean;
}
