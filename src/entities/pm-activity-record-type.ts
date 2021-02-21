import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PmActivityRecord } from './pm-activity-record';

@Index('PK_pmActivityRecordType', ['pkfActivityRecordType'], { unique: true })
@Entity('pmActivityRecordType', { schema: 'dbo' })
export class PmActivityRecordType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfActivityRecordType' })
  pkfActivityRecordType: number;

  @Column('nvarchar', { name: 'activityRecordType', length: 50 })
  activityRecordType: string;

  @OneToMany(
    () => PmActivityRecord,
    (pmActivityRecord) => pmActivityRecord.fkfActivityRecordType,
  )
  pmActivityRecords: PmActivityRecord[];
}
