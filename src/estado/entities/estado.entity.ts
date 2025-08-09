import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('estado')
export class Estado {
  @PrimaryGeneratedColumn()
  id_estado: number;

  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  @Column({ type: 'text', nullable: true })
  descripcion?: string;
}
