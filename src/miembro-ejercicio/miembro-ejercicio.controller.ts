import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { MiembroEjercicioService } from './miembro-ejercicio.service';
import { CreateMiembroEjercicioDto } from './dto/create-miembro-ejercicio.dto';
import { UpdateMiembroEjercicioDto } from './dto/update-miembro-ejercicio.dto';

@Controller('miembro-ejercicio')
export class MiembroEjercicioController {
  constructor(private readonly miembroEjercicioService: MiembroEjercicioService) {}

  @Post()
  create(@Body() dto: CreateMiembroEjercicioDto) {
    return this.miembroEjercicioService.create(dto);
  }

  @Get()
  findAll() {
    return this.miembroEjercicioService.findAll();
  }

  @Get(':id_ejercicio/:id_miembro')
  findOne(
    @Param('id_ejercicio') id_ejercicio: number,
    @Param('id_miembro') id_miembro: number,
  ) {
    return this.miembroEjercicioService.findOne(id_ejercicio, id_miembro);
  }

  @Put(':id_ejercicio/:id_miembro')
  update(
    @Param('id_ejercicio') id_ejercicio: number,
    @Param('id_miembro') id_miembro: number,
    @Body() dto: UpdateMiembroEjercicioDto,
  ) {
    return this.miembroEjercicioService.update(id_ejercicio, id_miembro, dto);
  }

  @Delete(':id_ejercicio/:id_miembro')
  remove(
    @Param('id_ejercicio') id_ejercicio: number,
    @Param('id_miembro') id_miembro: number,
  ) {
    return this.miembroEjercicioService.remove(id_ejercicio, id_miembro);
  }
}
