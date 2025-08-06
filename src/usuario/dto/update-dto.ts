// DTO para actualizar usuario
import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-dto';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {}
