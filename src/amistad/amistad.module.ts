import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AmistadService } from './amistad.service';
import { AmistadController } from './amistad.controller';
import { Amistad } from './entities/amistad.entity';
import { Usuario } from '../usuario/entities/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Amistad, Usuario])],
  controllers: [AmistadController],
  providers: [AmistadService],
})
export class AmistadModule {}
