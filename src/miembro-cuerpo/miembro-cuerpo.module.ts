import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MiembroCuerpoService } from './miembro-cuerpo.service';
import { MiembroCuerpoController } from './miembro-cuerpo.controller';
import { MiembroCuerpoRepository } from './miembro-cuerpo.repository';
import { Cuerpo } from '../cuerpo/entities/cuerpo.entity';
import { Miembro } from '../miembro/entities/miembro.entity';
import { Estado } from '../estado/entities/estado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MiembroCuerpoRepository, Cuerpo, Miembro, Estado])],
  controllers: [MiembroCuerpoController],
  providers: [MiembroCuerpoService],
})
export class MiembroCuerpoModule {}
