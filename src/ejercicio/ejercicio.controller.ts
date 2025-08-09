import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EjercicioService } from './ejercicio.service';
import { CreateEjercicioDto } from './dto/create-ejercicio.dto';
import { UpdateEjercicioDto } from './dto/update-ejercicio.dto';

@Controller('ejercicio')
export class EjercicioController {
  constructor(private readonly ejercicioService: EjercicioService) {}

  @Post()
  create(@Body() dto: CreateEjercicioDto) {
    return this.ejercicioService.create(dto);
  }

  @Get()
  findAll() {
    return this.ejercicioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ejercicioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateEjercicioDto) {
    return this.ejercicioService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ejercicioService.remove(+id);
  }
}
