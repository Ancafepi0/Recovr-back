import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExtrasService } from './extras.service';
import { CreateExtraDto } from './dto/create-extra.dto';
import { UpdateExtraDto } from './dto/update-extra.dto';

@Controller('extras')
export class ExtrasController {
  constructor(private readonly service: ExtrasService) {}

  @Post()
  create(@Body() dto: CreateExtraDto) {
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
  update(@Param('id') id: string, @Body() dto: UpdateExtraDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
