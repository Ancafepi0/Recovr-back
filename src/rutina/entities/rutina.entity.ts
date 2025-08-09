import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { EjerciciosRutina } from '../../ejercicios-rutina/entities/ejercicios-rutina.entity';

@Entity('rutina')
export class Rutina {
  @PrimaryGeneratedColumn()
  id_rutina: number;

  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.rutinas, { onDelete: 'CASCADE' })
  usuario: Usuario;

  @OneToMany(() => EjerciciosRutina, (ejerciciosRutina) => ejerciciosRutina.rutina)
  ejerciciosRutina: EjerciciosRutina[];
}
