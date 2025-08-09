import { PartialType } from '@nestjs/mapped-types';
import { CreateMiembroEjercicioDto } from './create-miembro-ejercicio.dto';

export class UpdateMiembroEjercicioDto extends PartialType(CreateMiembroEjercicioDto) {}
