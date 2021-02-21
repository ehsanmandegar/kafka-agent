import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { PmActivityRecord } from './pm-activity-record';

@Index('PK_pmSectionStop', ['pkfSectionStop'], { unique: true })
@Entity('pmSectionStop', { schema: 'dbo' })
export class PmSectionStop {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfSectionStop' })
  pkfSectionStop: number;

  @Column('int', { name: 'FkfSection' })
  fkfSection: number;

  @Column('smalldatetime', { name: 'startTime' })
  startTime: Date;

  @Column('smalldatetime', { name: 'endTime' })
  endTime: Date;

  @ManyToOne(
    () => PmActivityRecord,
    (pmActivityRecord) => pmActivityRecord.pmSectionStops,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'FkFActivityRecord', referencedColumnName: 'pkfActivityRecord' },
  ])
  fkFActivityRecord: PmActivityRecord;

  @RelationId((pmSectionStop: PmSectionStop) => pmSectionStop.fkFActivityRecord)
  fkFActivityRecord2: number | null;
}
