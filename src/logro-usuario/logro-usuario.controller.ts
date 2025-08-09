import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LogroUsuarioService } from './logro-usuario.service';
import { CreateLogroUsuarioDto } from './dto/create-logro-usuario.dto';
import { UpdateLogroUsuarioDto } from './dto/update-logro-usuario.dto';

@Controller('logro-usuario')
export class LogroUsuarioController {
  constructor(private readonly service: LogroUsuarioService) {}

  @Post()
  create(@Body() dto: CreateLogroUsuarioDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateLogroUsuarioDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
