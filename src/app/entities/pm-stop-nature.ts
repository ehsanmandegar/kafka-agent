import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PmStopType } from './pm-stop-type';

@Index('PK_tblStopNature', ['pkfStopNature'], { unique: true })
@Entity('pmStopNature', { schema: 'dbo' })
export class PmStopNature {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfStopNature' })
  pkfStopNature: number;

  @Column('nvarchar', { name: 'stopNature', length: 100 })
  stopNature: string;

  @OneToMany(() => PmStopType, (pmStopType) => pmStopType.fkfStopNature)
  pmStopTypes: PmStopType[];
}
