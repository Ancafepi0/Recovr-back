import { PartialType } from '@nestjs/mapped-types';
import { CreateMiembroCuerpoDto } from './create-miembro-cuerpo.dto';

export class UpdateMiembroCuerpoDto extends PartialType(CreateMiembroCuerpoDto) {}
