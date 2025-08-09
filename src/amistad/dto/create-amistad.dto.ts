import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAmistadDto {
  @IsNotEmpty()
  @IsNumber()
  solicitanteId: number;

  @IsNotEmpty()
  @IsNumber()
  amigoId: number;

  @IsString()
  estado?: string;
}
