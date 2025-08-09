import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Lesion } from './entities/lesion.entity';
import { CreateLesionDto } from './dto/create-lesion.dto';
import { UpdateLesionDto } from './dto/update-lesion.dto';
import { Miembro } from '../miembro/entities/miembro.entity';

@Injectable()
export class LesionesService {
  constructor(
    @InjectRepository(Lesion)
    private readonly repo: Repository<Lesion>,
    @InjectRepository(Miembro)
    private readonly miembroRepo: Repository<Miembro>,
  ) {}

  async create(dto: CreateLesionDto) {
    const lesion = this.repo.create({
      nombre: dto.nombre,
      descripcion: dto.descripcion,
    });

    if (dto.miembrosIds && dto.miembrosIds.length > 0) {
      lesion.miembros = await this.miembroRepo.find({ where: { id_miembro: In(dto.miembrosIds) } });
    }

    return this.repo.save(lesion);
  }

  findAll() {
    return this.repo.find({ relations: ['miembros'] });
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id_lesion: id }, relations: ['miembros'] });
  }

  async update(id: number, dto: UpdateLesionDto) {
    const lesion = await this.repo.findOne({ where: { id_lesion: id }, relations: ['miembros'] });
    if (!lesion) return null;

    Object.assign(lesion, dto);

    if (dto.miembrosIds) {
      lesion.miembros = await this.miembroRepo.find({ where: { id_miembro: In(dto.miembrosIds) } });
    }

    return this.repo.save(lesion);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
