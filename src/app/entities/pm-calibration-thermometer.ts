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

@Index('PK_pmCalibrationThermometer', ['pkfCalibrationThermometer'], {
  unique: true,
})
@Entity('pmCalibrationThermometer', { schema: 'dbo' })
export class PmCalibrationThermometer {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfCalibrationThermometer' })
  pkfCalibrationThermometer: number;

  @Column('nvarchar', { name: 'test', length: 255, default: () => "''" })
  test: string;

  @Column('nvarchar', { name: 'refrence', length: 255, default: () => "''" })
  refrence: string;

  @Column('nvarchar', { name: 'error', length: 255, default: () => "''" })
  error: string;

  @Column('nvarchar', { name: 'unFinality', length: 255, default: () => "''" })
  unFinality: string;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @ManyToOne(
    () => PmActivityRecord,
    (pmActivityRecord) => pmActivityRecord.pmCalibrationThermometers,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'FkfActivityRecord', referencedColumnName: 'pkfActivityRecord' },
  ])
  fkfActivityRecord: PmActivityRecord;

  @RelationId(
    (pmCalibrationThermometer: PmCalibrationThermometer) =>
      pmCalibrationThermometer.fkfActivityRecord,
  )
  fkfActivityRecord2: number;
}
