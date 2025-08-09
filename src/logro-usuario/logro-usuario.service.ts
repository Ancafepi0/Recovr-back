import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LogroUsuario } from './entities/logro-usuario.entity';
import { CreateLogroUsuarioDto } from './dto/create-logro-usuario.dto';
import { UpdateLogroUsuarioDto } from './dto/update-logro-usuario.dto';
import { Usuario } from '../usuario/entities/usuario.entity';
import { Logro } from '../logro/entities/logro.entity';

@Injectable()
export class LogroUsuarioService {
  constructor(
    @InjectRepository(LogroUsuario)
    private readonly repo: Repository<LogroUsuario>,
    @InjectRepository(Usuario)
    private readonly usuarioRepo: Repository<Usuario>,
    @InjectRepository(Logro)
    private readonly logroRepo: Repository<Logro>,
  ) {}

  async create(dto: CreateLogroUsuarioDto) {
    const usuario = await this.usuarioRepo.findOneBy({ id_usuario: dto.id_usuario });
    const logro = await this.logroRepo.findOneBy({ id_logro: dto.id_logro });

    const nuevo = this.repo.create({
      usuario,
      logro,
      completado: dto.completado ?? false,
    });

    return this.repo.save(nuevo);
  }

  findAll() {
    return this.repo.find({ relations: ['usuario', 'logro'] });
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id_logro_usuario: id }, relations: ['usuario', 'logro'] });
  }

  async update(id: number, dto: UpdateLogroUsuarioDto) {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
