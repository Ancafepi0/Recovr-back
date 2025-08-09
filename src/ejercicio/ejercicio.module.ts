import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EjercicioService } from './ejercicio.service';
import { EjercicioController } from './ejercicio.controller';
import { Ejercicio } from './entities/ejercicio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ejercicio])],
  controllers: [EjercicioController],
  providers: [EjercicioService],
})
export class EjercicioModule {}
