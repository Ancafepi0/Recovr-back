import { PartialType } from '@nestjs/mapped-types';
import { CreateLesionMiembroDto } from './create-lesion-miembro.dto';

export class UpdateLesionMiembroDto extends PartialType(CreateLesionMiembroDto) {}
