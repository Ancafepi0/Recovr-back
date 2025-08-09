import { PartialType } from '@nestjs/mapped-types';
import { CreateLogroUsuarioDto } from './create-logro-usuario.dto';

export class UpdateLogroUsuarioDto extends PartialType(CreateLogroUsuarioDto) {}
