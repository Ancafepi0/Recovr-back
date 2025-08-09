import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { MiembroEjercicio } from '../../miembro-ejercicio/entities/miembro-ejercicio.entity';
import { EjerciciosRutina } from '../../ejercicios-rutina/entities/ejercicios-rutina.entity';

@Entity('ejercicio')
export class Ejercicio {
  @PrimaryGeneratedColumn()
  id_ejercicio: number;

  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  @Column({ type: 'text' })
  descripcion: string;

  @Column({ type: 'varchar', length: 255 })
  url_video: string;

  @Column({ type: 'varchar', length: 255 })
  imagen: string;

  @Column({ type: 'varchar', length: 50 })
  tipo: string;

  @OneToMany(() => MiembroEjercicio, me => me.ejercicio)
  miembroEjercicios: MiembroEjercicio[];

  @OneToMany(() => EjerciciosRutina, er => er.ejercicio)
  ejerciciosRutina: EjerciciosRutina[];
}
