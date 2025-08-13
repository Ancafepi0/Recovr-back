import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Amistad } from './entities/amistad.entity';
import { CreateAmistadDto } from './dto/create-amistad.dto';
import { UpdateAmistadDto } from './dto/update-amistad.dto';
import { Usuario } from '../usuario/entities/usuario.entity';

@Injectable()
export class AmistadService {
  constructor(
    @InjectRepository(Amistad)
    private amistadRepository: Repository<Amistad>,
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async create(createAmistadDto: CreateAmistadDto) {
    const solicitante = await this.usuarioRepository.findOneBy({
      id_Usuario: createAmistadDto.solicitanteId,
    });
    const amigo = await this.usuarioRepository.findOneBy({
      id_Usuario: createAmistadDto.amigoId,
    });

    if (!solicitante || !amigo) {
      throw new Error('Solicitante o amigo no encontrado');
    }

    const amistad = this.amistadRepository.create({
      solicitante: solicitante,
      amigo: amigo,
      estado: createAmistadDto.estado || 'pendiente',
    });

    return this.amistadRepository.save(amistad);
  }

  findAll() {
    return this.amistadRepository.find({ relations: ['solicitante', 'amigo'] });
  }

  findOne(id: number) {
    return this.amistadRepository.findOne({
      where: { id },
      relations: ['solicitante', 'amigo'],
    });
  }

  update(id: number, updateAmistadDto: UpdateAmistadDto) {
    return this.amistadRepository.update(id, updateAmistadDto);
  }

  remove(id: number) {
    return this.amistadRepository.delete(id);
  }
}
