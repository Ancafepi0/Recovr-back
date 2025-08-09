import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EjerciciosRutinaService } from './ejercicios-rutina.service';
import { CreateEjerciciosRutinaDto } from './dto/create-ejercicios-rutina.dto';
import { UpdateEjerciciosRutinaDto } from './dto/update-ejercicios-rutina.dto';

@Controller('ejercicios-rutina')
export class EjerciciosRutinaController {
  constructor(private readonly service: EjerciciosRutinaService) {}

  @Post()
  create(@Body() dto: CreateEjerciciosRutinaDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id_rutina/:id_ejercicio')
  findOne(
    @Param('id_rutina') id_rutina: string,
    @Param('id_ejercicio') id_ejercicio: string,
  ) {
    return this.service.findOne(+id_rutina, +id_ejercicio);
  }

  @Patch(':id_rutina/:id_ejercicio')
  update(
    @Param('id_rutina') id_rutina: string,
    @Param('id_ejercicio') id_ejercicio: string,
    @Body() dto: UpdateEjerciciosRutinaDto,
  ) {
    return this.service.update(+id_rutina, +id_ejercicio, dto);
  }

  @Delete(':id_rutina/:id_ejercicio')
  remove(
    @Param('id_rutina') id_rutina: string,
    @Param('id_ejercicio') id_ejercicio: string,
  ) {
    return this.service.remove(+id_rutina, +id_ejercicio);
  }
}
