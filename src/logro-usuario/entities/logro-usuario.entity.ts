import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { Logro } from '../../logro/entities/logro.entity';

@Entity('logro_usuario')
export class LogroUsuario {
  @PrimaryGeneratedColumn()
  id_logro_usuario: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.logros, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;

  @ManyToOne(() => Logro, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_logro' })
  logro: Logro;

  @Column({ default: false })
  completado: boolean;

  @CreateDateColumn({ name: 'fecha_obtenido' })
  fecha_obtenido: Date;
}
