import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MiembroService } from './miembro.service';
import { CreateMiembroDto } from './dto/create-miembro.dto';
import { UpdateMiembroDto } from './dto/update-miembro.dto';

@Controller('miembro')
export class MiembroController {
  constructor(private readonly miembroService: MiembroService) {}

  @Post()
  create(@Body() dto: CreateMiembroDto) {
    return this.miembroService.create(dto);
  }

  @Get()
  findAll() {
    return this.miembroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.miembroService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateMiembroDto) {
    return this.miembroService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.miembroService.remove(+id);
  }
}
