import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cuerpo } from './entities/cuerpo.entity';
import { CreateCuerpoDto } from './dto/create-cuerpo.dto';
import { UpdateCuerpoDto } from './dto/update-cuerpo.dto';
import { Usuario } from '../usuario/entities/usuario.entity';

@Injectable()
export class CuerpoService {
  constructor(
    @InjectRepository(Cuerpo)
    private cuerpoRepository: Repository<Cuerpo>,
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async create(createCuerpoDto: CreateCuerpoDto) {
    const usuario = await this.usuarioRepository.findOneBy({ id_usuario: createCuerpoDto.id_usuario });

    const cuerpo = this.cuerpoRepository.create({
      usuario,
    });

    return this.cuerpoRepository.save(cuerpo);
  }

  findAll() {
    return this.cuerpoRepository.find({ relations: ['usuario', 'miembrosCuerpo'] });
  }

  findOne(id: number) {
    return this.cuerpoRepository.findOne({
      where: { id_cuerpo: id },
      relations: ['usuario', 'miembrosCuerpo'],
    });
  }

  update(id: number, updateCuerpoDto: UpdateCuerpoDto) {
    return this.cuerpoRepository.update(id, updateCuerpoDto);
  }

  remove(id: number) {
    return this.cuerpoRepository.delete(id);
  }
}
