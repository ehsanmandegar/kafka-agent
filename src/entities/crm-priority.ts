import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CrmTask } from './crm-task';

@Index('PK_crmPriority', ['pkfPriority'], { unique: true })
@Entity('crmPriority', { schema: 'dbo' })
export class CrmPriority {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfPriority' })
  pkfPriority: number;

  @Column('nvarchar', { name: 'priorityCode', length: 50 })
  priorityCode: string;

  @Column('nvarchar', { name: 'priorityName', length: 100 })
  priorityName: string;

  @OneToMany(() => CrmTask, (crmTask) => crmTask.fkfPriority)
  crmTasks: CrmTask[];
}
