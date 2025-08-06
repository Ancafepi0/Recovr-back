// usuario entity
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('usuario')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  correo: string;

  @Column()
  contrasena: string;

  @Column({ nullable: true })
  edad: number;

  @Column({ nullable: true })
  sexo: string;
}
