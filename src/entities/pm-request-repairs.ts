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
import { PmRequestRepairDocument } from './pm-request-repair-document';
import { PmEquipment } from './pm-equipment';
import { PmTypeRequest } from './pm-type-request';
import { PmEquipmentStatus } from './pm-equipment-status';
import { GenTreater } from './gen-treater';
import { PmActivityGroup } from './pm-activity-group';
import { PmActivityType } from './pm-activity-type';
import { PmImplementation } from './pm-implementation';
import { PmExecutionPlace } from './pm-execution-place';
import { PmFllowingSegment } from './pm-fllowing-segment';
import { PmDeferment } from './pm-deferment';
import { PmTimeWork } from './pm-time-work';
import { PmTimeWorkReport } from './pm-time-work-report';

@Index('PK_pmRequestRepairs', ['pkfRequestRepairs'], { unique: true })
@Entity('pmRequestRepairs', { schema: 'dbo' })
export class PmRequestRepairs {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfRequestRepairs' })
  pkfRequestRepairs: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('int', { name: 'fkfCreateUser' })
  fkfCreateUser: number;

  @Column('nvarchar', { name: 'createDate', length: 50, default: () => "''" })
  createDate: string;

  @Column('nvarchar', { name: 'createTime', length: 5 })
  createTime: string;

  @Column('int', { name: 'fkfEditUser', nullable: true })
  fkfEditUser: number | null;

  @Column('nvarchar', { name: 'editDate', length: 50, default: () => "''" })
  editDate: string;

  @Column('nvarchar', { name: 'editTime', length: 5, default: () => "''" })
  editTime: string;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('nvarchar', { name: 'requestDate', length: 50, default: () => "''" })
  requestDate: string;

  @Column('nvarchar', { name: 'refrenceTime', length: 5, default: () => "''" })
  refrenceTime: string;

  @Column('nvarchar', { name: 'stopTime', length: 5, default: () => "''" })
  stopTime: string;

  @Column('nvarchar', { name: 'decscript', length: 500, default: () => "''" })
  decscript: string;

  @Column('int', { name: 'fkfRequestState', default: () => '(0)' })
  fkfRequestState: number;

  @Column('nvarchar', { name: 'memo', nullable: true, default: () => "''" })
  memo: string | null;

  @Column('nvarchar', { name: 'refrenceDate', length: 50, default: () => "''" })
  refrenceDate: string;

  @Column('int', { name: 'fkfReferrer', nullable: true })
  fkfReferrer: number | null;

  @Column('bit', { name: 'reWork', default: () => '(0)' })
  reWork: boolean;

  @Column('nvarchar', {
    name: 'refrenceDateEntry',
    length: 50,
    default: () => "''",
  })
  refrenceDateEntry: string;

  @Column('nvarchar', {
    name: 'refrenceTimeEntry',
    length: 50,
    default: () => "''",
  })
  refrenceTimeEntry: string;

  @Column('nvarchar', {
    name: 'memoReferrer',
    nullable: true,
    default: () => "''",
  })
  memoReferrer: string | null;

  @Column('nvarchar', { name: 'predicTime', length: 50, default: () => "''" })
  predicTime: string;

  @Column('int', { name: 'prority', default: () => '(0)' })
  prority: number;

  @Column('nvarchar', {
    name: 'predicDateDeliver',
    length: 50,
    default: () => "''",
  })
  predicDateDeliver: string;

  @Column('nvarchar', {
    name: 'memoExecution',
    nullable: true,
    default: () => "''",
  })
  memoExecution: string | null;

  @Column('nvarchar', {
    name: 'functorDateEntry',
    length: 50,
    default: () => "''",
  })
  functorDateEntry: string;

  @Column('nvarchar', {
    name: 'functorTimeEntry',
    length: 50,
    default: () => "''",
  })
  functorTimeEntry: string;

  @Column('nvarchar', { name: 'deliverDate', length: 50, default: () => "''" })
  deliverDate: string;

  @Column('nvarchar', { name: 'deliverTime', length: 50, default: () => "''" })
  deliverTime: string;

  @Column('int', { name: 'FkfStopType', nullable: true })
  fkfStopType: number | null;

  @Column('int', { name: 'FkfReason', nullable: true })
  fkfReason: number | null;

  @Column('int', { name: 'FkfFault', nullable: true })
  fkfFault: number | null;

  @Column('int', { name: 'fkfDeliverid', nullable: true })
  fkfDeliverid: number | null;

  @Column('nvarchar', { name: 'memoFinishTime', nullable: true })
  memoFinishTime: string | null;

  @Column('int', { name: 'FkfClassActivity', nullable: true })
  fkfClassActivity: number | null;

  @Column('bit', { name: 'acceptRequest', default: () => '(0)' })
  acceptRequest: boolean;

  @Column('int', { name: 'fkfActivityDoNotProof', nullable: true })
  fkfActivityDoNotProof: number | null;

  @Column('nvarchar', {
    name: 'communicatedDate',
    length: 50,
    default: () => "''",
  })
  communicatedDate: string;

  @Column('nvarchar', {
    name: 'communicatedTime',
    length: 50,
    default: () => "''",
  })
  communicatedTime: string;

  @Column('int', { name: 'FkfSeconder', nullable: true })
  fkfSeconder: number | null;

  @Column('nvarchar', { name: 'acceptDate', length: 50, default: () => "''" })
  acceptDate: string;

  @Column('nvarchar', { name: 'acceptTime', length: 50, default: () => "''" })
  acceptTime: string;

  @Column('bit', { name: 'JobOrder', default: () => '(0)' })
  jobOrder: boolean;

  @Column('decimal', {
    name: 'duringTime',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  duringTime: number;

  @OneToMany(
    () => PmRequestRepairDocument,
    (pmRequestRepairDocument) => pmRequestRepairDocument.fkfRequestRepair,
  )
  pmRequestRepairDocuments: PmRequestRepairDocument[];

  @ManyToOne(() => PmEquipment, (pmEquipment) => pmEquipment.pmRequestRepairs)
  @JoinColumn([{ name: 'fkfEquipment', referencedColumnName: 'pkfEquipment' }])
  fkfEquipment: PmEquipment;

  @ManyToOne(
    () => PmTypeRequest,
    (pmTypeRequest) => pmTypeRequest.pmRequestRepairs,
  )
  @JoinColumn([{ name: 'requestType', referencedColumnName: 'pkfTypeRequest' }])
  requestType: PmTypeRequest;

  @ManyToOne(
    () => PmEquipmentStatus,
    (pmEquipmentStatus) => pmEquipmentStatus.pmRequestRepairs,
  )
  @JoinColumn([
    { name: 'fkfEquipmentStatus', referencedColumnName: 'pkfEquipmentStatus' },
  ])
  fkfEquipmentStatus: PmEquipmentStatus;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.pmRequestRepairs)
  @JoinColumn([{ name: 'fkfRequested', referencedColumnName: 'pkfTreater' }])
  fkfRequested: GenTreater;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.pmRequestRepairs2)
  @JoinColumn([{ name: 'fkfFunctor', referencedColumnName: 'pkfTreater' }])
  fkfFunctor: GenTreater;

  @ManyToOne(
    () => PmActivityGroup,
    (pmActivityGroup) => pmActivityGroup.pmRequestRepairs,
  )
  @JoinColumn([
    { name: 'fkfActivityGroup', referencedColumnName: 'pkfActivityGroup' },
  ])
  fkfActivityGroup: PmActivityGroup;

  @ManyToOne(
    () => PmActivityType,
    (pmActivityType) => pmActivityType.pmRequestRepairs,
  )
  @JoinColumn([
    { name: 'fkfActivityType', referencedColumnName: 'pkfActivityType' },
  ])
  fkfActivityType: PmActivityType;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.pmRequestRepairs3)
  @JoinColumn([{ name: 'fkfLeader', referencedColumnName: 'pkfTreater' }])
  fkfLeader: GenTreater;

  @ManyToOne(
    () => PmImplementation,
    (pmImplementation) => pmImplementation.pmRequestRepairs,
  )
  @JoinColumn([
    { name: 'FkfImplementation', referencedColumnName: 'pkfImplementation' },
  ])
  fkfImplementation: PmImplementation;

  @ManyToOne(
    () => PmExecutionPlace,
    (pmExecutionPlace) => pmExecutionPlace.pmRequestRepairs,
  )
  @JoinColumn([
    { name: 'FkfExecutionPlace', referencedColumnName: 'pkfExecutionPlace' },
  ])
  fkfExecutionPlace: PmExecutionPlace;

  @ManyToOne(
    () => PmFllowingSegment,
    (pmFllowingSegment) => pmFllowingSegment.pmRequestRepairs,
  )
  @JoinColumn([
    { name: 'FkfFllowingSegment', referencedColumnName: 'pkfFllowingSegment' },
  ])
  fkfFllowingSegment: PmFllowingSegment;

  @ManyToOne(() => PmDeferment, (pmDeferment) => pmDeferment.pmRequestRepairs)
  @JoinColumn([{ name: 'FkfDeferment', referencedColumnName: 'pkfDeferment' }])
  fkfDeferment: PmDeferment;

  @OneToMany(() => PmTimeWork, (pmTimeWork) => pmTimeWork.fkfpmRequestRepairs)
  pmTimeWorks: PmTimeWork[];

  @OneToMany(
    () => PmTimeWorkReport,
    (pmTimeWorkReport) => pmTimeWorkReport.fkfpmRequestRepairs,
  )
  pmTimeWorkReports: PmTimeWorkReport[];

  @RelationId(
    (pmRequestRepairs: PmRequestRepairs) => pmRequestRepairs.fkfEquipment,
  )
  fkfEquipment2: number;

  @RelationId(
    (pmRequestRepairs: PmRequestRepairs) => pmRequestRepairs.requestType,
  )
  requestType2: number;

  @RelationId(
    (pmRequestRepairs: PmRequestRepairs) => pmRequestRepairs.fkfEquipmentStatus,
  )
  fkfEquipmentStatus2: number;

  @RelationId(
    (pmRequestRepairs: PmRequestRepairs) => pmRequestRepairs.fkfRequested,
  )
  fkfRequested2: number;

  @RelationId(
    (pmRequestRepairs: PmRequestRepairs) => pmRequestRepairs.fkfFunctor,
  )
  fkfFunctor2: number | null;

  @RelationId(
    (pmRequestRepairs: PmRequestRepairs) => pmRequestRepairs.fkfActivityGroup,
  )
  fkfActivityGroup2: number | null;

  @RelationId(
    (pmRequestRepairs: PmRequestRepairs) => pmRequestRepairs.fkfActivityType,
  )
  fkfActivityType2: number | null;

  @RelationId(
    (pmRequestRepairs: PmRequestRepairs) => pmRequestRepairs.fkfLeader,
  )
  fkfLeader2: number | null;

  @RelationId(
    (pmRequestRepairs: PmRequestRepairs) => pmRequestRepairs.fkfImplementation,
  )
  fkfImplementation2: number | null;

  @RelationId(
    (pmRequestRepairs: PmRequestRepairs) => pmRequestRepairs.fkfExecutionPlace,
  )
  fkfExecutionPlace2: number | null;

  @RelationId(
    (pmRequestRepairs: PmRequestRepairs) => pmRequestRepairs.fkfFllowingSegment,
  )
  fkfFllowingSegment2: number | null;

  @RelationId(
    (pmRequestRepairs: PmRequestRepairs) => pmRequestRepairs.fkfDeferment,
  )
  fkfDeferment2: number | null;
}
