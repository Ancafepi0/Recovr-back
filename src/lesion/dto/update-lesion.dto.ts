import { PartialType } from '@nestjs/mapped-types';
import { CreateLesionDto } from './create-lesion.dto';

export class UpdateLesionDto extends PartialType(CreateLesionDto) {}
