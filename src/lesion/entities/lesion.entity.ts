import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Miembro } from '../../miembro/entities/miembro.entity';

@Entity('lesiones')
export class Lesion {
  @PrimaryGeneratedColumn()
  id_lesion: number;

  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  @Column({ type: 'text', nullable: true })
  descripcion?: string;

  @ManyToMany(() => Miembro, (miembro) => miembro.lesiones, { onDelete: 'CASCADE' })
  @JoinTable({
    name: 'lesion_miembro',
    joinColumn: { name: 'id_lesion', referencedColumnName: 'id_lesion' },
    inverseJoinColumn: { name: 'id_miembro', referencedColumnName: 'id_miembro' },
  })
  miembros: Miembro[];
}
