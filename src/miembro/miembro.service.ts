import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Miembro } from './entities/miembro.entity';
import { CreateMiembroDto } from './dto/create-miembro.dto';
import { UpdateMiembroDto } from './dto/update-miembro.dto';
import { Cuerpo } from '../cuerpo/entities/cuerpo.entity';

@Injectable()
export class MiembroService {
  constructor(
    @InjectRepository(Miembro)
    private readonly miembroRepo: Repository<Miembro>,
    @InjectRepository(Cuerpo)
    private readonly cuerpoRepo: Repository<Cuerpo>,
  ) {}

  async create(dto: CreateMiembroDto) {
    const cuerpo = await this.cuerpoRepo.findOneBy({ id_cuerpo: dto.id_cuerpo });
    if (!cuerpo) throw new Error('Cuerpo no encontrado');

    const nuevo = this.miembroRepo.create({
      nombre: dto.nombre,
      descripcion: dto.descripcion,
      cuerpo,
    });

    return this.miembroRepo.save(nuevo);
  }

  findAll() {
    return this.miembroRepo.find({ relations: ['cuerpo', 'lesiones', 'ejercicios'] });
  }

  findOne(id: number) {
    return this.miembroRepo.findOne({
      where: { id_miembro: id },
      relations: ['cuerpo', 'lesiones', 'ejercicios'],
    });
  }

  async update(id: number, dto: UpdateMiembroDto) {
    await this.miembroRepo.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.miembroRepo.delete(id);
  }
}
