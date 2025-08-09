import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MiembroService } from './miembro.service';
import { MiembroController } from './miembro.controller';
import { Miembro } from './entities/miembro.entity';
import { Cuerpo } from '../cuerpo/entities/cuerpo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Miembro, Cuerpo])],
  controllers: [MiembroController],
  providers: [MiembroService],
})
export class MiembroModule {}
