import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MiembroEjercicioRepository } from './miembro-ejercicio.repository';
import { CreateMiembroEjercicioDto } from './dto/create-miembro-ejercicio.dto';
import { UpdateMiembroEjercicioDto } from './dto/update-miembro-ejercicio.dto';
import { MiembroEjercicio } from './entities/miembro-ejercicio.entity';

@Injectable()
export class MiembroEjercicioService {
  constructor(
    @InjectRepository(MiembroEjercicioRepository)
    private readonly miembroEjercicioRepository: MiembroEjercicioRepository,
  ) {}

  async create(dto: CreateMiembroEjercicioDto): Promise<MiembroEjercicio> {
    const miembroEjercicio = this.miembroEjercicioRepository.create(dto);
    return this.miembroEjercicioRepository.save(miembroEjercicio);
  }

  async findAll(): Promise<MiembroEjercicio[]> {
    return this.miembroEjercicioRepository.find({ relations: ['ejercicio', 'miembro'] });
  }

  async findOne(id_ejercicio: number, id_miembro: number): Promise<MiembroEjercicio> {
    const record = await this.miembroEjercicioRepository.findOne({
      where: { id_ejercicio, id_miembro },
      relations: ['ejercicio', 'miembro'],
    });
    if (!record) throw new NotFoundException('Relación Miembro-Ejercicio no encontrada');
    return record;
  }

  async update(id_ejercicio: number, id_miembro: number, dto: UpdateMiembroEjercicioDto) {
    const record = await this.findOne(id_ejercicio, id_miembro);
    Object.assign(record, dto);
    return this.miembroEjercicioRepository.save(record);
  }

  async remove(id_ejercicio: number, id_miembro: number): Promise<void> {
    const record = await this.findOne(id_ejercicio, id_miembro);
    await this.miembroEjercicioRepository.remove(record);
  }
}
