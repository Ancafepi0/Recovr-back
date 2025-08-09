import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Logro } from './entities/logro.entity';
import { CreateLogroDto } from './dto/create-logro.dto';
import { UpdateLogroDto } from './dto/update-logro.dto';

@Injectable()
export class LogroService {
  constructor(
    @InjectRepository(Logro)
    private readonly repo: Repository<Logro>,
  ) {}

  create(dto: CreateLogroDto) {
    const logro = this.repo.create(dto);
    return this.repo.save(logro);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id_logro: id });
  }

  async update(id: number, dto: UpdateLogroDto) {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
