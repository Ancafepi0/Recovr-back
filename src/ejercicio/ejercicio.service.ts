import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ejercicio } from './entities/ejercicio.entity';
import { CreateEjercicioDto } from './dto/create-ejercicio.dto';
import { UpdateEjercicioDto } from './dto/update-ejercicio.dto';

@Injectable()
export class EjercicioService {
  constructor(
    @InjectRepository(Ejercicio)
    private ejercicioRepository: Repository<Ejercicio>,
  ) {}

  create(dto: CreateEjercicioDto) {
    const ejercicio = this.ejercicioRepository.create(dto);
    return this.ejercicioRepository.save(ejercicio);
  }

  findAll() {
    return this.ejercicioRepository.find({
      relations: ['miembroEjercicios', 'ejerciciosRutina'],
    });
  }

  findOne(id: number) {
    return this.ejercicioRepository.findOne({
      where: { id_ejercicio: id },
      relations: ['miembroEjercicios', 'ejerciciosRutina'],
    });
  }

  update(id: number, dto: UpdateEjercicioDto) {
    return this.ejercicioRepository.update(id, dto);
  }

  remove(id: number) {
    return this.ejercicioRepository.delete(id);
  }
}
