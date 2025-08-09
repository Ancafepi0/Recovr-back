import { IsNotEmpty, IsInt } from 'class-validator';

export class CreateLesionMiembroDto {
  @IsNotEmpty()
  @IsInt()
  id_lesion: number;

  @IsNotEmpty()
  @IsInt()
  id_miembro: number;
}
