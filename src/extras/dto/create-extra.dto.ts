import { IsNotEmpty, IsOptional, IsString, IsInt } from 'class-validator';

export class CreateExtraDto {
  @IsNotEmpty()
  @IsString()
  titulo: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsNotEmpty()
  @IsInt()
  usuario_id: number;
}
