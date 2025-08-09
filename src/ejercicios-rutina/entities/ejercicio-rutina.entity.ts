import { Entity, PrimaryColumn, ManyToOne, Column, JoinColumn } from 'typeorm';
import { Rutina } from '../../rutina/entities/rutina.entity';
import { Ejercicio } from '../../ejercicio/entities/ejercicio.entity';

@Entity('ejercicios_rutina')
export class EjerciciosRutina {
  @PrimaryColumn()
  id_rutina: number;

  @PrimaryColumn()
  id_ejercicio: number;

  @ManyToOne(() => Rutina, rutina => rutina.ejerciciosRutina, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_rutina' })
  rutina: Rutina;

  @ManyToOne(() => Ejercicio, ejercicio => ejercicio.ejerciciosRutina, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_ejercicio' })
  ejercicio: Ejercicio;

  @Column({ type: 'int' })
  repeticiones: number;

  @Column({ type: 'int' })
  duracion: number;

  @Column({ type: 'int' })
  series: number;
}
