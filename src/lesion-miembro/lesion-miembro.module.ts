import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LesionMiembroService } from './lesion-miembro.service';
import { LesionMiembroController } from './lesion-miembro.controller';
import { LesionMiembro } from './entities/lesion-miembro.entity';
import { Lesion } from '../lesiones/entities/lesion.entity';
import { Miembro } from '../miembro/entities/miembro.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LesionMiembro, Lesion, Miembro])],
  controllers: [LesionMiembroController],
  providers: [LesionMiembroService],
})
export class LesionMiembroModule {}
