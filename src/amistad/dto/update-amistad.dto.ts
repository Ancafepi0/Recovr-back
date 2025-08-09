import { PartialType } from '@nestjs/mapped-types';
import { CreateAmistadDto } from './create-amistad.dto';

export class UpdateAmistadDto extends PartialType(CreateAmistadDto) {}
