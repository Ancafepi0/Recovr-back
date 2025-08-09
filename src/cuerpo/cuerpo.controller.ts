import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CuerpoService } from './cuerpo.service';
import { CreateCuerpoDto } from './dto/create-cuerpo.dto';
import { UpdateCuerpoDto } from './dto/update-cuerpo.dto';

@Controller('cuerpo')
export class CuerpoController {
  constructor(private readonly cuerpoService: CuerpoService) {}

  @Post()
  create(@Body() createCuerpoDto: CreateCuerpoDto) {
    return this.cuerpoService.create(createCuerpoDto);
  }

  @Get()
  findAll() {
    return this.cuerpoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cuerpoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCuerpoDto: UpdateCuerpoDto) {
    return this.cuerpoService.update(+id, updateCuerpoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cuerpoService.remove(+id);
  }
}
