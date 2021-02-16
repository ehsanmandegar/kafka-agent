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

@Index('PK_pmCalibrationManometer', ['pkfCalibrationManometer'], {
  unique: true,
})
@Entity('pmCalibrationManometer', { schema: 'dbo' })
export class PmCalibrationManometer {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfCalibrationManometer' })
  pkfCalibrationManometer: number;

  @Column('nvarchar', {
    name: 'allowedErrorB',
    length: 100,
    default: () => "''",
  })
  allowedErrorB: string;

  @Column('nvarchar', {
    name: 'allowedErrorA',
    length: 100,
    default: () => "''",
  })
  allowedErrorA: string;

  @Column('nvarchar', { name: 'errorB', length: 100, default: () => "''" })
  errorB: string;

  @Column('nvarchar', { name: 'errorA', length: 100, default: () => "''" })
  errorA: string;

  @Column('nvarchar', { name: 'readingB', length: 100, default: () => "''" })
  readingB: string;

  @Column('nvarchar', { name: 'readingA', length: 100, default: () => "''" })
  readingA: string;

  @Column('nvarchar', {
    name: 'standardCompressB',
    length: 100,
    default: () => "''",
  })
  standardCompressB: string;

  @Column('nvarchar', {
    name: 'standardCompressA',
    length: 100,
    default: () => "''",
  })
  standardCompressA: string;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @ManyToOne(
    () => PmActivityRecord,
    (pmActivityRecord) => pmActivityRecord.pmCalibrationManometers,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'FkfActivityRecord', referencedColumnName: 'pkfActivityRecord' },
  ])
  fkfActivityRecord: PmActivityRecord;

  @RelationId(
    (pmCalibrationManometer: PmCalibrationManometer) =>
      pmCalibrationManometer.fkfActivityRecord,
  )
  fkfActivityRecord2: number;
}
