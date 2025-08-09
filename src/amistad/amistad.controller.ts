// eslint-disable-next-line prettier/prettier
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AmistadService } from './amistad.service';
import { CreateAmistadDto } from './dto/create-amistad.dto';
import { UpdateAmistadDto } from './dto/update-amistad.dto';

@Controller('amistad')
export class AmistadController {
  constructor(private readonly amistadService: AmistadService) {}

  @Post()
  create(@Body() createAmistadDto: CreateAmistadDto) {
    return this.amistadService.create(createAmistadDto);
  }

  @Get()
  findAll() {
    return this.amistadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.amistadService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAmistadDto: UpdateAmistadDto) {
    return this.amistadService.update(+id, updateAmistadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.amistadService.remove(+id);
  }
}
