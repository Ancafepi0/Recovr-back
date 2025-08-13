import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ManyToOne, OneToMany } from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { MiembroCuerpo } from '../../miembro-cuerpo/entities/miembro-cuerpo.entity';

@Entity('cuerpo')
export class Cuerpo {
  @PrimaryGeneratedColumn()
  id_cuerpo: number;

  @ManyToOne(() => Cuerpo, (cuerpo) => cuerpo, {
    onDelete: 'CASCADE',
  })
  usuario: Usuario;

  @OneToMany(() => MiembroCuerpo, (miembroCuerpo) => miembroCuerpo.cuerpo)
  miembrosCuerpo: MiembroCuerpo[];
}
