import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CrmTask } from './crm-task';

@Index('PK_crmTypeGroup', ['pkfTypeGroup'], { unique: true })
@Entity('crmTypeGroup', { schema: 'dbo' })
export class CrmTypeGroup {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfTypeGroup' })
  pkfTypeGroup: number;

  @Column('nvarchar', { name: 'TypeGroupCode', length: 50 })
  typeGroupCode: string;

  @Column('nvarchar', { name: 'TypeGroupName', length: 100 })
  typeGroupName: string;

  @OneToMany(() => CrmTask, (crmTask) => crmTask.fkfTypeGroup)
  crmTasks: CrmTask[];
}
