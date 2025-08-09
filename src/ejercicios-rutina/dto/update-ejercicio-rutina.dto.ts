import { PartialType } from '@nestjs/mapped-types';
import { CreateEjerciciosRutinaDto } from './create-ejercicios-rutina.dto';

export class UpdateEjerciciosRutinaDto extends PartialType(CreateEjerciciosRutinaDto) {}
