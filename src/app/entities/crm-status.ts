import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CrmTask } from './crm-task';

@Index('PK_crmStatus', ['pkfStatus'], { unique: true })
@Entity('crmStatus', { schema: 'dbo' })
export class CrmStatus {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfStatus' })
  pkfStatus: number;

  @Column('nvarchar', { name: 'statusCode', length: 50 })
  statusCode: string;

  @Column('nvarchar', { name: 'statusName', length: 100 })
  statusName: string;

  @Column('int', { name: 'statusType' })
  statusType: number;

  @OneToMany(() => CrmTask, (crmTask) => crmTask.fkfStatus)
  crmTasks: CrmTask[];
}
