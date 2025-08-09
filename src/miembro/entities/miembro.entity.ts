import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn
} from 'typeorm';
import { Cuerpo } from '../../cuerpo/entities/cuerpo.entity';
import { LesionMiembro } from '../../lesion-miembro/entities/lesion-miembro.entity';
import { MiembroEjercicio } from '../../miembro-ejercicio/entities/miembro-ejercicio.entity';

@Entity('miembro')
export class Miembro {
  @PrimaryGeneratedColumn()
  id_miembro: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ nullable: true })
  descripcion: string;

  @ManyToOne(() => Cuerpo, (cuerpo) => cuerpo.miembros, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_cuerpo' })
  cuerpo: Cuerpo;

  @OneToMany(() => LesionMiembro, (lesionMiembro) => lesionMiembro.miembro)
  lesiones: LesionMiembro[];

  @OneToMany(() => MiembroEjercicio, (miembroEjercicio) => miembroEjercicio.miembro)
  ejercicios: MiembroEjercicio[];
}
