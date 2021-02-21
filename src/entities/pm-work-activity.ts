import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PmActivity } from './pm-activity';

@Index('PK_pmWorkActivity', ['pkfWorkActivity'], { unique: true })
@Entity('pmWorkActivity', { schema: 'dbo' })
export class PmWorkActivity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfWorkActivity' })
  pkfWorkActivity: number;

  @Column('nvarchar', { name: 'workActivity', length: 50 })
  workActivity: string;

  @OneToMany(() => PmActivity, (pmActivity) => pmActivity.fKfWorkActivity)
  pmActivities: PmActivity[];
}
