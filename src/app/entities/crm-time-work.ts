import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { CrmTask } from './crm-task';

@Index('PK_crmTimeWork', ['pkfTimeWork'], { unique: true })
@Entity('crmTimeWork', { schema: 'dbo' })
export class CrmTimeWork {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfTimeWork' })
  pkfTimeWork: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('int', { name: 'FkfWorkTreater' })
  fkfWorkTreater: number;

  @Column('int', { name: 'workTime', default: () => '(0)' })
  workTime: number;

  @Column('nvarchar', { name: 'workDate', length: 10, default: () => "''" })
  workDate: string;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('int', { name: 'FkfCreateUser' })
  fkfCreateUser: number;

  @Column('nvarchar', { name: 'createDate', length: 10 })
  createDate: string;

  @Column('nvarchar', { name: 'createTime', length: 5 })
  createTime: string;

  @Column('int', { name: 'FkfEditUser', nullable: true })
  fkfEditUser: number | null;

  @Column('nvarchar', { name: 'editDate', length: 10, default: () => "''" })
  editDate: string;

  @Column('nvarchar', { name: 'editTime', length: 5, default: () => "''" })
  editTime: string;

  @Column('bit', { name: 'includeCost', default: () => '(0)' })
  includeCost: boolean;

  @ManyToOne(() => CrmTask, (crmTask) => crmTask.crmTimeWorks)
  @JoinColumn([{ name: 'FkfTask', referencedColumnName: 'pkfTask' }])
  fkfTask: CrmTask;

  @RelationId((crmTimeWork: CrmTimeWork) => crmTimeWork.fkfTask)
  fkfTask2: number;
}
