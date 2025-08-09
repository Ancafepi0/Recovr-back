import { EntityRepository, Repository } from 'typeorm';
import { Rutina } from './entities/rutina.entity';

@EntityRepository(Rutina)
export class RutinaRepository extends Repository<Rutina> {}
