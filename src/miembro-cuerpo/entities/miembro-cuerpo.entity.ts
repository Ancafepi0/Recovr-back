import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Cuerpo } from '../../cuerpo/entities/cuerpo.entity';
import { Miembro } from '../../miembro/entities/miembro.entity';
import { Estado } from '../../estado/entities/estado.entity';

@Entity('miembro_cuerpo')
export class MiembroCuerpo {
  @PrimaryColumn()
  id_cuerpo: number;

  @PrimaryColumn()
  id_miembro: number;

  @ManyToOne(() => Cuerpo, (cuerpo) => cuerpo.miembrosCuerpo, { onDelete: 'CASCADE' })
  cuerpo: Cuerpo;

  @ManyToOne(() => Miembro, (miembro) => miembro.miembrosCuerpo, { onDelete: 'CASCADE' })
  miembro: Miembro;

  @ManyToOne(() => Estado, (estado) => estado.miembrosCuerpo, { onDelete: 'SET NULL' })
  estado: Estado;
}
