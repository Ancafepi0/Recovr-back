import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { MiembroCuerpoService } from './miembro-cuerpo.service';
import { CreateMiembroCuerpoDto } from './dto/create-miembro-cuerpo.dto';
import { UpdateMiembroCuerpoDto } from './dto/update-miembro-cuerpo.dto';

@Controller('miembro-cuerpo')
export class MiembroCuerpoController {
  constructor(private readonly miembroCuerpoService: MiembroCuerpoService) {}

  @Post()
  create(@Body() dto: CreateMiembroCuerpoDto) {
    return this.miembroCuerpoService.create(dto);
  }

  @Get()
  findAll() {
    return this.miembroCuerpoService.findAll();
  }

  @Get(':id_cuerpo/:id_miembro')
  findOne(
    @Param('id_cuerpo') id_cuerpo: number,
    @Param('id_miembro') id_miembro: number,
  ) {
    return this.miembroCuerpoService.findOne(id_cuerpo, id_miembro);
  }

  @Put(':id_cuerpo/:id_miembro')
  update(
    @Param('id_cuerpo') id_cuerpo: number,
    @Param('id_miembro') id_miembro: number,
    @Body() dto: UpdateMiembroCuerpoDto,
  ) {
    return this.miembroCuerpoService.update(id_cuerpo, id_miembro, dto);
  }

  @Delete(':id_cuerpo/:id_miembro')
  remove(
    @Param('id_cuerpo') id_cuerpo: number,
    @Param('id_miembro') id_miembro: number,
  ) {
    return this.miembroCuerpoService.remove(id_cuerpo, id_miembro);
  }
}
