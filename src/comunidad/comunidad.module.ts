import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComunidadService } from './comunidad.service';
import { ComunidadController } from './comunidad.controller';
import { Comunidad } from './entities/comunidad.entity';
import { Usuario } from '../usuario/entities/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Comunidad, Usuario])],
  controllers: [ComunidadController],
  providers: [ComunidadService],
})
export class ComunidadModule {}
