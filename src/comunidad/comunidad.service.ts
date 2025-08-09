import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comunidad } from './entities/comunidad.entity';
import { CreateComunidadDto } from './dto/create-comunidad.dto';
import { UpdateComunidadDto } from './dto/update-comunidad.dto';
import { Usuario } from '../usuario/entities/usuario.entity';

@Injectable()
export class ComunidadService {
  constructor(
    @InjectRepository(Comunidad)
    private comunidadRepository: Repository<Comunidad>,
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async create(createComunidadDto: CreateComunidadDto) {
    const usuario = await this.usuarioRepository.findOneBy({ id: createComunidadDto.id_usuario });

    const comunidad = this.comunidadRepository.create({
      creador: usuario,
      nombre: createComunidadDto.nombre,
    });

    return this.comunidadRepository.save(comunidad);
  }

  findAll() {
    return this.comunidadRepository.find({ relations: ['creador', 'miembros'] });
  }

  findOne(id: number) {
    return this.comunidadRepository.findOne({
      where: { id_comunidad: id },
      relations: ['creador', 'miembros'],
    });
  }

  update(id: number, updateComunidadDto: UpdateComunidadDto) {
    return this.comunidadRepository.update(id, updateComunidadDto);
  }

  remove(id: number) {
    return this.comunidadRepository.delete(id);
  }
}
