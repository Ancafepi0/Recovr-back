import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LesionesService } from './lesiones.service';
import { LesionesController } from './lesiones.controller';
import { Lesion } from './entities/lesion.entity';
import { Miembro } from '../miembro/entities/miembro.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lesion, Miembro])],
  controllers: [LesionesController],
  providers: [LesionesService],
})
export class LesionesModule {}
