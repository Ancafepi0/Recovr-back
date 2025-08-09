import { Entity, ManyToOne, PrimaryColumn, Column } from 'typeorm';
import { Ejercicio } from '../../ejercicio/entities/ejercicio.entity';
import { Miembro } from '../../miembro/entities/miembro.entity';

@Entity('miembro_ejercicio')
export class MiembroEjercicio {
  @PrimaryColumn()
  id_ejercicio: number;

  @PrimaryColumn()
  id_miembro: number;

  // +1 o -1 para indicar mejora o empeoramiento
  @Column({ type: 'int', default: 0 })
  cambio_estadistico: number;

  @ManyToOne(() => Ejercicio, (ejercicio) => ejercicio.miembrosEjercicio, { onDelete: 'CASCADE' })
  ejercicio: Ejercicio;

  @ManyToOne(() => Miembro, (miembro) => miembro.miembrosEjercicio, { onDelete: 'CASCADE' })
  miembro: Miembro;
}
