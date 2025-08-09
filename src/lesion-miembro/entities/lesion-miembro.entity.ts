import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Lesion } from '../../lesiones/entities/lesion.entity';
import { Miembro } from '../../miembro/entities/miembro.entity';

@Entity('lesion_miembro')
export class LesionMiembro {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Lesion, (lesion) => lesion.id_lesion, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_lesion' })
  lesion: Lesion;

  @ManyToOne(() => Miembro, (miembro) => miembro.id_miembro, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_miembro' })
  miembro: Miembro;
}
