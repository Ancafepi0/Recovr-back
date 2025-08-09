import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EjerciciosRutina } from './entities/ejercicios-rutina.entity';
import { CreateEjerciciosRutinaDto } from './dto/create-ejercicios-rutina.dto';
import { UpdateEjerciciosRutinaDto } from './dto/update-ejercicios-rutina.dto';

@Injectable()
export class EjerciciosRutinaService {
  constructor(
    @InjectRepository(EjerciciosRutina)
    private readonly repo: Repository<EjerciciosRutina>,
  ) {}

  create(dto: CreateEjerciciosRutinaDto) {
    const entity = this.repo.create(dto);
    return this.repo.save(entity);
  }

  findAll() {
    return this.repo.find({ relations: ['rutina', 'ejercicio'] });
  }

  findOne(id_rutina: number, id_ejercicio: number) {
    return this.repo.findOne({
      where: { id_rutina, id_ejercicio },
      relations: ['rutina', 'ejercicio'],
    });
  }

  update(id_rutina: number, id_ejercicio: number, dto: UpdateEjerciciosRutinaDto) {
    return this.repo.update({ id_rutina, id_ejercicio }, dto);
  }

  remove(id_rutina: number, id_ejercicio: number) {
    return this.repo.delete({ id_rutina, id_ejercicio });
  }
}
