import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ManyToOne, OneToMany } from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { UsuarioComunidad } from '../../usuario-comunidad/usuario-comunidad.entity';

@Entity('comunidad')
export class Comunidad {
  @PrimaryGeneratedColumn()
  id_comunidad: number;

  @ManyToOne(() => Usuario, usuario => usuario.comunidadesCreadas, { onDelete: 'CASCADE' })
  creador: Usuario;

  @Column({ length: 100 })
  nombre: string;

  @OneToMany(() => UsuarioComunidad, usuarioComunidad => usuarioComunidad.comunidad)
  miembros: UsuarioComunidad[];
}
