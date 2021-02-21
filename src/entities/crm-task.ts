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
import { CrmCallerId } from './crm-caller-id';
import { CrmStatus } from './crm-status';
import { CrmPriority } from './crm-priority';
import { GenTreater } from './gen-treater';
import { GenEmployee } from './gen-employee';
import { CrmTypeGroup } from './crm-type-group';
import { CrmTimeWork } from './crm-time-work';

@Index('PK_Task', ['pkfTask'], { unique: true })
@Entity('crmTask', { schema: 'dbo' })
export class CrmTask {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfTask' })
  pkfTask: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('nvarchar', { name: 'subject', length: 255, default: () => "''" })
  subject: string;

  @Column('nvarchar', { name: 'startDate', length: 10, default: () => "''" })
  startDate: string;

  @Column('nvarchar', { name: 'endDate', length: 10, default: () => "''" })
  endDate: string;

  @Column('nvarchar', { name: 'startTime', length: 5, default: () => "''" })
  startTime: string;

  @Column('nvarchar', { name: 'endTime', length: 5, default: () => "''" })
  endTime: string;

  @Column('nvarchar', { name: 'contactName', length: 250, default: () => "''" })
  contactName: string;

  @Column('nvarchar', {
    name: 'description',
    length: 1000,
    default: () => "''",
  })
  description: string;

  @Column('nvarchar', { name: 'createDate', length: 10, default: () => "''" })
  createDate: string;

  @Column('nvarchar', { name: 'createTime', length: 5, default: () => "''" })
  createTime: string;

  @Column('nvarchar', { name: 'editDate', length: 10, default: () => "''" })
  editDate: string;

  @Column('nvarchar', { name: 'editTime', length: 5, default: () => "''" })
  editTime: string;

  @Column('bit', { name: 'includeCost', default: () => '(0)' })
  includeCost: boolean;

  @Column('nvarchar', { name: 'alarmDate', length: 10, default: () => "''" })
  alarmDate: string;

  @Column('nvarchar', { name: 'alarmTime', length: 5, default: () => "''" })
  alarmTime: string;

  @Column('bit', { name: 'alarmView', default: () => '(1)' })
  alarmView: boolean;

  @OneToMany(() => CrmCallerId, (crmCallerId) => crmCallerId.fkfTask)
  crmCallers: CrmCallerId[];

  @ManyToOne(() => CrmStatus, (crmStatus) => crmStatus.crmTasks)
  @JoinColumn([{ name: 'FkfStatus', referencedColumnName: 'pkfStatus' }])
  fkfStatus: CrmStatus;

  @ManyToOne(() => CrmPriority, (crmPriority) => crmPriority.crmTasks)
  @JoinColumn([{ name: 'FkfPriority', referencedColumnName: 'pkfPriority' }])
  fkfPriority: CrmPriority;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.crmTasks)
  @JoinColumn([{ name: 'FkfTreater', referencedColumnName: 'pkfTreater' }])
  fkfTreater: GenTreater;

  @ManyToOne(() => GenEmployee, (genEmployee) => genEmployee.crmTasks)
  @JoinColumn([{ name: 'FkfCreateUser', referencedColumnName: 'pkfEmployee' }])
  fkfCreateUser: GenEmployee;

  @ManyToOne(() => GenEmployee, (genEmployee) => genEmployee.crmTasks2)
  @JoinColumn([{ name: 'FkfEditUser', referencedColumnName: 'pkfEmployee' }])
  fkfEditUser: GenEmployee;

  @ManyToOne(() => GenEmployee, (genEmployee) => genEmployee.crmTasks3)
  @JoinColumn([{ name: 'FkfAssigned', referencedColumnName: 'pkfEmployee' }])
  fkfAssigned: GenEmployee;

  @ManyToOne(() => CrmTypeGroup, (crmTypeGroup) => crmTypeGroup.crmTasks)
  @JoinColumn([{ name: 'FkfTypeGroup', referencedColumnName: 'pkfTypeGroup' }])
  fkfTypeGroup: CrmTypeGroup;

  @OneToMany(() => CrmTimeWork, (crmTimeWork) => crmTimeWork.fkfTask)
  crmTimeWorks: CrmTimeWork[];

  @RelationId((crmTask: CrmTask) => crmTask.fkfStatus)
  fkfStatus2: number;

  @RelationId((crmTask: CrmTask) => crmTask.fkfPriority)
  fkfPriority2: number;

  @RelationId((crmTask: CrmTask) => crmTask.fkfTreater)
  fkfTreater2: number;

  @RelationId((crmTask: CrmTask) => crmTask.fkfCreateUser)
  fkfCreateUser2: number;

  @RelationId((crmTask: CrmTask) => crmTask.fkfEditUser)
  fkfEditUser2: number | null;

  @RelationId((crmTask: CrmTask) => crmTask.fkfAssigned)
  fkfAssigned2: number;

  @RelationId((crmTask: CrmTask) => crmTask.fkfTypeGroup)
  fkfTypeGroup2: number | null;
}
