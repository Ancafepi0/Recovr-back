import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EjerciciosRutinaService } from './ejercicios-rutina.service';
import { EjerciciosRutinaController } from './ejercicios-rutina.controller';
import { EjerciciosRutina } from './entities/ejercicios-rutina.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EjerciciosRutina])],
  controllers: [EjerciciosRutinaController],
  providers: [EjerciciosRutinaService],
})
export class EjerciciosRutinaModule {}
