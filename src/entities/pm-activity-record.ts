import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { PmActivity } from './pm-activity';
import { PmActivityRecordType } from './pm-activity-record-type';
import { GenTreater } from './gen-treater';
import { PmProgramingLog } from './pm-programing-log';
import { PmActivityDoProof } from './pm-activity-do-proof';
import { PmActivityDoNotProof } from './pm-activity-do-not-proof';
import { PmStopType } from './pm-stop-type';
import { PmReason } from './pm-reason';
import { PmFault } from './pm-fault';
import { PmShift } from './pm-shift';
import { PmActivityRecordGoods } from './pm-activity-record-goods';
import { PmCalibrationManometer } from './pm-calibration-manometer';
import { PmCalibrationThermometer } from './pm-calibration-thermometer';
import { PmSectionStop } from './pm-section-stop';

@Index('PK_pmActivityRecord', ['pkfActivityRecord'], { unique: true })
@Entity('pmActivityRecord', { schema: 'dbo' })
export class PmActivityRecord {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfActivityRecord' })
  pkfActivityRecord: number;

  @Column('nvarchar', { name: 'workDate', length: 10, default: () => "''" })
  workDate: string;

  @Column('int', { name: 'delay', default: () => '(0)' })
  delay: number;

  @Column('nvarchar', { name: 'memo', nullable: true, length: 255 })
  memo: string | null;

  @Column('int', { name: 'FkfCreateUser', nullable: true })
  fkfCreateUser: number | null;

  @Column('nvarchar', { name: 'createDate', length: 10 })
  createDate: string;

  @Column('nvarchar', { name: 'noForm', nullable: true, length: 25 })
  noForm: string | null;

  @Column('int', { name: 'FkfDepartment' })
  fkfDepartment: number;

  @Column('int', { name: 'FkfActivityMom', nullable: true })
  fkfActivityMom: number | null;

  @Column('int', { name: 'personalTime', default: () => '(0)' })
  personalTime: number;

  @Column('nvarchar', {
    name: 'resultCalibration',
    length: 255,
    default: () => "''",
  })
  resultCalibration: string;

  @Column('nvarchar', {
    name: 'enviromentCalibration',
    length: 255,
    default: () => "''",
  })
  enviromentCalibration: string;

  @Column('int', { name: 'FkfWorkGroup', nullable: true })
  fkfWorkGroup: number | null;

  @Column('int', { name: 'FKfActivityDef', nullable: true })
  fKfActivityDef: number | null;

  @Column('int', { name: 'FkfEquipment', nullable: true })
  fkfEquipment: number | null;

  @ManyToOne(() => PmActivity, (pmActivity) => pmActivity.pmActivityRecords)
  @JoinColumn([{ name: 'FKfActivity', referencedColumnName: 'pkfActivity' }])
  fKfActivity: PmActivity;

  @ManyToOne(
    () => PmActivityRecordType,
    (pmActivityRecordType) => pmActivityRecordType.pmActivityRecords,
  )
  @JoinColumn([
    {
      name: 'FkfActivityRecordType',
      referencedColumnName: 'pkfActivityRecordType',
    },
  ])
  fkfActivityRecordType: PmActivityRecordType;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.pmActivityRecords)
  @JoinColumn([{ name: 'FkfEmployee', referencedColumnName: 'pkfTreater' }])
  fkfEmployee: GenTreater;

  @ManyToOne(
    () => PmProgramingLog,
    (pmProgramingLog) => pmProgramingLog.pmActivityRecords,
  )
  @JoinColumn([
    { name: 'FkfProgramingLog', referencedColumnName: 'pkfProgramingLog' },
  ])
  fkfProgramingLog: PmProgramingLog;

  @ManyToOne(
    () => PmActivityDoProof,
    (pmActivityDoProof) => pmActivityDoProof.pmActivityRecords,
  )
  @JoinColumn([
    { name: 'FkfActivityDoProof', referencedColumnName: 'pkfActivityDoProof' },
  ])
  fkfActivityDoProof: PmActivityDoProof;

  @ManyToOne(
    () => PmActivityDoNotProof,
    (pmActivityDoNotProof) => pmActivityDoNotProof.pmActivityRecords,
  )
  @JoinColumn([
    {
      name: 'FkfActivityDoNotProof',
      referencedColumnName: 'pkfActivityDoNotProof',
    },
  ])
  fkfActivityDoNotProof: PmActivityDoNotProof;

  @ManyToOne(() => PmStopType, (pmStopType) => pmStopType.pmActivityRecords)
  @JoinColumn([{ name: 'FkfStopType', referencedColumnName: 'pkfStopType' }])
  fkfStopType: PmStopType;

  @ManyToOne(() => PmReason, (pmReason) => pmReason.pmActivityRecords)
  @JoinColumn([{ name: 'FkfReason', referencedColumnName: 'pkfReason' }])
  fkfReason: PmReason;

  @ManyToOne(() => PmFault, (pmFault) => pmFault.pmActivityRecords)
  @JoinColumn([{ name: 'FkfFault', referencedColumnName: 'pkfFault' }])
  fkfFault: PmFault;

  @ManyToOne(() => PmShift, (pmShift) => pmShift.pmActivityRecords)
  @JoinColumn([{ name: 'FkfShift', referencedColumnName: 'pkfShift' }])
  fkfShift: PmShift;

  @OneToMany(
    () => PmActivityRecordGoods,
    (pmActivityRecordGoods) => pmActivityRecordGoods.fKfActivityRecord,
  )
  pmActivityRecordGoods: PmActivityRecordGoods[];

  @OneToMany(
    () => PmCalibrationManometer,
    (pmCalibrationManometer) => pmCalibrationManometer.fkfActivityRecord,
  )
  pmCalibrationManometers: PmCalibrationManometer[];

  @OneToMany(
    () => PmCalibrationThermometer,
    (pmCalibrationThermometer) => pmCalibrationThermometer.fkfActivityRecord,
  )
  pmCalibrationThermometers: PmCalibrationThermometer[];

  @OneToMany(
    () => PmSectionStop,
    (pmSectionStop) => pmSectionStop.fkFActivityRecord,
  )
  pmSectionStops: PmSectionStop[];

  @RelationId(
    (pmActivityRecord: PmActivityRecord) => pmActivityRecord.fKfActivity,
  )
  fKfActivity2: number | null;

  @RelationId(
    (pmActivityRecord: PmActivityRecord) =>
      pmActivityRecord.fkfActivityRecordType,
  )
  fkfActivityRecordType2: number;

  @RelationId(
    (pmActivityRecord: PmActivityRecord) => pmActivityRecord.fkfEmployee,
  )
  fkfEmployee2: number | null;

  @RelationId(
    (pmActivityRecord: PmActivityRecord) => pmActivityRecord.fkfProgramingLog,
  )
  fkfProgramingLog2: number | null;

  @RelationId(
    (pmActivityRecord: PmActivityRecord) => pmActivityRecord.fkfActivityDoProof,
  )
  fkfActivityDoProof2: number;

  @RelationId(
    (pmActivityRecord: PmActivityRecord) =>
      pmActivityRecord.fkfActivityDoNotProof,
  )
  fkfActivityDoNotProof2: number | null;

  @RelationId(
    (pmActivityRecord: PmActivityRecord) => pmActivityRecord.fkfStopType,
  )
  fkfStopType2: number | null;

  @RelationId(
    (pmActivityRecord: PmActivityRecord) => pmActivityRecord.fkfReason,
  )
  fkfReason2: number | null;

  @RelationId((pmActivityRecord: PmActivityRecord) => pmActivityRecord.fkfFault)
  fkfFault2: number | null;

  @RelationId((pmActivityRecord: PmActivityRecord) => pmActivityRecord.fkfShift)
  fkfShift2: number | null;
}
