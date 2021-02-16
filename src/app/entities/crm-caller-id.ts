import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { GenTreater } from './gen-treater';
import { CrmTask } from './crm-task';

@Index('PK_crmCallerId', ['pkfCallerId'], { unique: true })
@Entity('crmCallerId', { schema: 'dbo' })
export class CrmCallerId {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfCallerId' })
  pkfCallerId: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('nvarchar', { name: 'lineNumber', length: 50, default: () => "''" })
  lineNumber: string;

  @Column('nvarchar', { name: 'date', length: 10, default: () => "''" })
  date: string;

  @Column('nvarchar', { name: 'time', length: 5, default: () => "''" })
  time: string;

  @Column('int', { name: 'duration' })
  duration: number;

  @Column('nvarchar', { name: 'ring', length: 50, default: () => "''" })
  ring: string;

  @Column('nvarchar', { name: 'memo', default: () => "''" })
  memo: string;

  @Column('int', { name: 'FkfEditUser', nullable: true, default: () => "''" })
  fkfEditUser: number | null;

  @Column('nvarchar', { name: 'editDate', length: 10, default: () => "''" })
  editDate: string;

  @Column('nvarchar', { name: 'editTime', length: 5, default: () => "''" })
  editTime: string;

  @Column('nvarchar', {
    name: 'number',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  number: string | null;

  @Column('tinyint', { name: 'doubleKey', default: () => '(1)' })
  doubleKey: number;

  @Column('nvarchar', {
    name: 'customerName',
    length: 250,
    default: () => "''",
  })
  customerName: string;

  @Column('nvarchar', { name: 'treaterCode', length: 50, default: () => "''" })
  treaterCode: string;

  @Column('int', { name: 'callType', default: () => '(1)' })
  callType: number;

  @Column('nvarchar', { name: 'customer', length: 250, default: () => "''" })
  customer: string;

  @Column('int', { name: 'FkfCreateUser', nullable: true })
  fkfCreateUser: number | null;

  @Column('nvarchar', { name: 'createDate', length: 10, default: () => "''" })
  createDate: string;

  @Column('nvarchar', { name: 'createTime', length: 5, default: () => "''" })
  createTime: string;

  @Column('int', { name: 'FkfStatusCallerID', default: () => '(1)' })
  fkfStatusCallerId: number;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.crmCallers)
  @JoinColumn([{ name: 'FkfTreater', referencedColumnName: 'pkfTreater' }])
  fkfTreater: GenTreater;

  @ManyToOne(() => CrmTask, (crmTask) => crmTask.crmCallers)
  @JoinColumn([{ name: 'FkfTask', referencedColumnName: 'pkfTask' }])
  fkfTask: CrmTask;

  @RelationId((crmCallerId: CrmCallerId) => crmCallerId.fkfTreater)
  fkfTreater2: number | null;

  @RelationId((crmCallerId: CrmCallerId) => crmCallerId.fkfTask)
  fkfTask2: number | null;
}
