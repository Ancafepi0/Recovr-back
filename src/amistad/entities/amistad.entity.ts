import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ManyToOne, CreateDateColumn } from 'typeorm';

import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity('amistad')
export class Amistad {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Usuario, usuario => usuario.id, { onDelete: 'CASCADE' })
  solicitante: Usuario;

  // eslint-disable-next-line prettier/prettier
  @ManyToOne(() => Usuario, usuario => usuario.id, { onDelete: 'CASCADE' })
  amigo: Usuario;

  @Column({ default: 'pendiente' })
  estado: string; // pendiente, aceptado, rechazado

  @CreateDateColumn()
  fechaSolicitud: Date;
}
