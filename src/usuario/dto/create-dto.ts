// DTO para crear usuario
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsOptional,
  IsNumber,
} from 'class-validator';

export class CreateUsuarioDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsEmail()
  correo: string;

  @IsNotEmpty()
  @IsString()
  contrasena: string;

  @IsOptional()
  @IsNumber()
  edad?: number;

  @IsOptional()
  @IsString()
  sexo?: string;
}
