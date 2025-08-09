import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogroUsuarioService } from './logro-usuario.service';
import { LogroUsuarioController } from './logro-usuario.controller';
import { LogroUsuario } from './entities/logro-usuario.entity';
import { Usuario } from '../usuario/entities/usuario.entity';
import { Logro } from '../logro/entities/logro.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LogroUsuario, Usuario, Logro])],
  controllers: [LogroUsuarioController],
  providers: [LogroUsuarioService],
})
export class LogroUsuarioModule {}
