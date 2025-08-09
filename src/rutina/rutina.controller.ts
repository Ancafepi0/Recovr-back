import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { RutinaService } from './rutina.service';
import { CreateRutinaDto } from './dto/create-rutina.dto';
import { UpdateRutinaDto } from './dto/update-rutina.dto';

@Controller('rutina')
export class RutinaController {
  constructor(private readonly rutinaService: RutinaService) {}

  @Post()
  create(@Body() dto: CreateRutinaDto) {
    return this.rutinaService.create(dto);
  }

  @Get()
  findAll() {
    return this.rutinaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.rutinaService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateRutinaDto) {
    return this.rutinaService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.rutinaService.remove(id);
  }
}
