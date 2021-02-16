import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PmActivityRecord } from './pm-activity-record';

@Index('PK_pmActivityDoNotProof', ['pkfActivityDoNotProof'], { unique: true })
@Entity('pmActivityDoNotProof', { schema: 'dbo' })
export class PmActivityDoNotProof {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfActivityDoNotProof' })
  pkfActivityDoNotProof: number;

  @Column('nvarchar', { name: 'activityDoNotProof', length: 200 })
  activityDoNotProof: string;

  @Column('bit', { name: 'active', default: () => '(1)' })
  active: boolean;

  @OneToMany(
    () => PmActivityRecord,
    (pmActivityRecord) => pmActivityRecord.fkfActivityDoNotProof,
  )
  pmActivityRecords: PmActivityRecord[];
}
