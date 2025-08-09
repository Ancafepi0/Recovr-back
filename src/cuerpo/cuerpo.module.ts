import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CuerpoService } from './cuerpo.service';
import { CuerpoController } from './cuerpo.controller';
import { Cuerpo } from './entities/cuerpo.entity';
import { Usuario } from '../usuario/entities/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cuerpo, Usuario])],
  controllers: [CuerpoController],
  providers: [CuerpoService],
})
export class CuerpoModule {}
