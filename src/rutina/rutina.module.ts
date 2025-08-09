import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RutinaService } from './rutina.service';
import { RutinaController } from './rutina.controller';
import { RutinaRepository } from './rutina.repository';
import { Usuario } from '../usuario/entities/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RutinaRepository, Usuario])],
  controllers: [RutinaController],
  providers: [RutinaService],
})
export class RutinaModule {}
