import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PmActivityRecord } from './pm-activity-record';

@Index('PK_tblReason', ['pkfReason'], { unique: true })
@Entity('pmReason', { schema: 'dbo' })
export class PmReason {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfReason' })
  pkfReason: number;

  @Column('nvarchar', { name: 'reasonCode', length: 25 })
  reasonCode: string;

  @Column('nvarchar', { name: 'reason', length: 150 })
  reason: string;

  @Column('bit', { name: 'active', default: () => '(1)' })
  active: boolean;

  @Column('nvarchar', { name: 'description', length: 255, default: () => "''" })
  description: string;

  @Column('int', { name: 'FkfDepartment' })
  fkfDepartment: number;

  @OneToMany(
    () => PmActivityRecord,
    (pmActivityRecord) => pmActivityRecord.fkfReason,
  )
  pmActivityRecords: PmActivityRecord[];
}
