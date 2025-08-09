import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Extra } from './entities/extra.entity';
import { CreateExtraDto } from './dto/create-extra.dto';
import { UpdateExtraDto } from './dto/update-extra.dto';

@Injectable()
export class ExtrasService {
  constructor(
    @InjectRepository(Extra)
    private readonly repo: Repository<Extra>,
  ) {}

  create(dto: CreateExtraDto) {
    const extra = this.repo.create(dto);
    return this.repo.save(extra);
  }

  findAll() {
    return this.repo.find({ relations: ['usuario'] });
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id_extra: id }, relations: ['usuario'] });
  }

  update(id: number, dto: UpdateExtraDto) {
    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
