import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LesionMiembro } from './entities/lesion-miembro.entity';
import { CreateLesionMiembroDto } from './dto/create-lesion-miembro.dto';
import { UpdateLesionMiembroDto } from './dto/update-lesion-miembro.dto';
import { Lesion } from '../lesiones/entities/lesion.entity';
import { Miembro } from '../miembro/entities/miembro.entity';

@Injectable()
export class LesionMiembroService {
  constructor(
    @InjectRepository(LesionMiembro)
    private readonly repo: Repository<LesionMiembro>,
    @InjectRepository(Lesion)
    private readonly lesionRepo: Repository<Lesion>,
    @InjectRepository(Miembro)
    private readonly miembroRepo: Repository<Miembro>,
  ) {}

  async create(dto: CreateLesionMiembroDto) {
    const lesion = await this.lesionRepo.findOneBy({ id_lesion: dto.id_lesion });
    const miembro = await this.miembroRepo.findOneBy({ id_miembro: dto.id_miembro });

    if (!lesion || !miembro) throw new Error('Lesion o Miembro no encontrados');

    const relacion = this.repo.create({ lesion, miembro });
    return this.repo.save(relacion);
  }

  findAll() {
    return this.repo.find({ relations: ['lesion', 'miembro'] });
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id }, relations: ['lesion', 'miembro'] });
  }

  async update(id: number, dto: UpdateLesionMiembroDto) {
    const relacion = await this.repo.findOneBy({ id });
    if (!relacion) return null;

    if (dto.id_lesion) {
      relacion.lesion = await this.lesionRepo.findOneBy({ id_lesion: dto.id_lesion });
    }
    if (dto.id_miembro) {
      relacion.miembro = await this.miembroRepo.findOneBy({ id_miembro: dto.id_miembro });
    }

    return this.repo.save(relacion);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
