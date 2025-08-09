import { PartialType } from '@nestjs/mapped-types';
import { CreateCuerpoDto } from './create-cuerpo.dto';

export class UpdateCuerpoDto extends PartialType(CreateCuerpoDto) {}
