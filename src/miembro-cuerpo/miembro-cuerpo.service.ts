import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MiembroCuerpoRepository } from './miembro-cuerpo.repository';
import { CreateMiembroCuerpoDto } from './dto/create-miembro-cuerpo.dto';
import { UpdateMiembroCuerpoDto } from './dto/update-miembro-cuerpo.dto';
import { MiembroCuerpo } from './entities/miembro-cuerpo.entity';

@Injectable()
export class MiembroCuerpoService {
  constructor(
    @InjectRepository(MiembroCuerpoRepository)
    private readonly miembroCuerpoRepository: MiembroCuerpoRepository,
  ) {}

  async create(dto: CreateMiembroCuerpoDto): Promise<MiembroCuerpo> {
    const miembroCuerpo = this.miembroCuerpoRepository.create(dto);
    return this.miembroCuerpoRepository.save(miembroCuerpo);
  }

  async findAll(): Promise<MiembroCuerpo[]> {
    return this.miembroCuerpoRepository.find({ relations: ['cuerpo', 'miembro', 'estado'] });
  }

  async findOne(id_cuerpo: number, id_miembro: number): Promise<MiembroCuerpo> {
    const record = await this.miembroCuerpoRepository.findOne({ 
      where: { id_cuerpo, id_miembro },
      relations: ['cuerpo', 'miembro', 'estado']
    });
    if (!record) throw new NotFoundException('Relación Miembro-Cuerpo no encontrada');
    return record;
  }

  async update(id_cuerpo: number, id_miembro: number, dto: UpdateMiembroCuerpoDto) {
    const record = await this.findOne(id_cuerpo, id_miembro);
    Object.assign(record, dto);
    return this.miembroCuerpoRepository.save(record);
  }

  async remove(id_cuerpo: number, id_miembro: number): Promise<void> {
    const record = await this.findOne(id_cuerpo, id_miembro);
    await this.miembroCuerpoRepository.remove(record);
  }
}
