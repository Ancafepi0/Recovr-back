import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RutinaRepository } from './rutina.repository.ts';
import { CreateRutinaDto } from './dto/create-rutina.dto';
import { UpdateRutinaDto } from './dto/update-rutina.dto';
import { Usuario } from '../usuario/entities/usuario.entity';
import { InjectRepository as InjectRepo } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RutinaService {
  constructor(
    @InjectRepository(RutinaRepository)
    private readonly rutinaRepository: RutinaRepository,
    @InjectRepo(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async create(dto: CreateRutinaDto) {
    const usuario = await this.usuarioRepository.findOne(dto.id_usuario);
    if (!usuario) throw new NotFoundException('Usuario no encontrado');

    const rutina = this.rutinaRepository.create({
      nombre: dto.nombre,
      usuario,
    });

    return this.rutinaRepository.save(rutina);
  }

  findAll() {
    return this.rutinaRepository.find({ relations: ['usuario', 'ejerciciosRutina'] });
  }

  async findOne(id: number) {
    const rutina = await this.rutinaRepository.findOne(id, {
      relations: ['usuario', 'ejerciciosRutina'],
    });
    if (!rutina) throw new NotFoundException('Rutina no encontrada');
    return rutina;
  }

  async update(id: number, dto: UpdateRutinaDto) {
    const rutina = await this.findOne(id);

    if (dto.id_usuario) {
      const usuario = await this.usuarioRepository.findOne(dto.id_usuario);
      if (!usuario) throw new NotFoundException('Usuario no encontrado');
      rutina.usuario = usuario;
    }

    if (dto.nombre) rutina.nombre = dto.nombre;

    return this.rutinaRepository.save(rutina);
  }

  async remove(id: number) {
    const rutina = await this.findOne(id);
    await this.rutinaRepository.remove(rutina);
  }
}
