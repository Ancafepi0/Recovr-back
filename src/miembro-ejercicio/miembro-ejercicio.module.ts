import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MiembroEjercicioService } from './miembro-ejercicio.service';
import { MiembroEjercicioController } from './miembro-ejercicio.controller';

import { Ejercicio } from '../ejercicio/entities/ejercicio.entity';
import { Miembro } from '../miembro/entities/miembro.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ejercicio, Miembro])],
  controllers: [MiembroEjercicioController],
  providers: [MiembroEjercicioService],
})
export class MiembroEjercicioModule {}
