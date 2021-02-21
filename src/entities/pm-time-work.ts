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
import { PmRequestRepairs } from './pm-request-repairs';
import { GenTreater } from './gen-treater';
import { PmWorkTimeGoods } from './pm-work-time-goods';

@Index('PK_pmTimeWork', ['pkfTimeWork'], { unique: true })
@Entity('pmTimeWork', { schema: 'dbo' })
export class PmTimeWork {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfTimeWork' })
  pkfTimeWork: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('int', { name: 'workTime', default: () => '(0)' })
  workTime: number;

  @Column('nvarchar', { name: 'workDate', length: 10, default: () => "''" })
  workDate: string;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('int', { name: 'fkfCreateUser' })
  fkfCreateUser: number;

  @Column('nvarchar', { name: 'createDate', length: 10 })
  createDate: string;

  @Column('nvarchar', { name: 'createTime', length: 5 })
  createTime: string;

  @Column('int', { name: 'fkfEditUser', nullable: true })
  fkfEditUser: number | null;

  @Column('nvarchar', { name: 'editDate', length: 10, default: () => "''" })
  editDate: string;

  @Column('nvarchar', { name: 'editTime', length: 5, default: () => "''" })
  editTime: string;

  @Column('bit', { name: 'includeCost', nullable: true, default: () => '(0)' })
  includeCost: boolean | null;

  @Column('int', { name: 'startTime', default: () => '(0)' })
  startTime: number;

  @Column('int', { name: 'endTime', default: () => '(0)' })
  endTime: number;

  @Column('int', { name: 'FkfEquipment', nullable: true })
  fkfEquipment: number | null;

  @ManyToOne(
    () => PmRequestRepairs,
    (pmRequestRepairs) => pmRequestRepairs.pmTimeWorks,
  )
  @JoinColumn([
    { name: 'fkfpmRequestRepairs', referencedColumnName: 'pkfRequestRepairs' },
  ])
  fkfpmRequestRepairs: PmRequestRepairs;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.pmTimeWorks)
  @JoinColumn([{ name: 'fkfWorkTreater', referencedColumnName: 'pkfTreater' }])
  fkfWorkTreater: GenTreater;

  @OneToMany(
    () => PmWorkTimeGoods,
    (pmWorkTimeGoods) => pmWorkTimeGoods.fKfTimeWork,
  )
  pmWorkTimeGoods: PmWorkTimeGoods[];

  @RelationId((pmTimeWork: PmTimeWork) => pmTimeWork.fkfpmRequestRepairs)
  fkfpmRequestRepairs2: number;

  @RelationId((pmTimeWork: PmTimeWork) => pmTimeWork.fkfWorkTreater)
  fkfWorkTreater2: number;
}
