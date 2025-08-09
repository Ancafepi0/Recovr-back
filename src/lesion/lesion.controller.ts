import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LesionesService } from './lesiones.service';
import { CreateLesionDto } from './dto/create-lesion.dto';
import { UpdateLesionDto } from './dto/update-lesion.dto';

@Controller('lesiones')
export class LesionesController {
  constructor(private readonly service: LesionesService) {}

  @Post()
  create(@Body() dto: CreateLesionDto) {
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
  update(@Param('id') id: string, @Body() dto: UpdateLesionDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
