import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PmActivityDef } from './pm-activity-def';
import { PmRequestRepairs } from './pm-request-repairs';

@Index('PK_tblActivityGroup', ['pkfActivityGroup'], { unique: true })
@Entity('pmActivityGroup', { schema: 'dbo' })
export class PmActivityGroup {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfActivityGroup' })
  pkfActivityGroup: number;

  @Column('nvarchar', { name: 'activityGroupCode', length: 25 })
  activityGroupCode: string;

  @Column('nvarchar', { name: 'activityGroup', length: 200 })
  activityGroup: string;

  @Column('bit', { name: 'active', default: () => '(1)' })
  active: boolean;

  @Column('nvarchar', { name: 'description', length: 255, default: () => "''" })
  description: string;

  @Column('int', { name: 'FkfDepartment' })
  fkfDepartment: number;

  @OneToMany(
    () => PmActivityDef,
    (pmActivityDef) => pmActivityDef.fkfActivityGroup,
  )
  pmActivityDefs: PmActivityDef[];

  @OneToMany(
    () => PmRequestRepairs,
    (pmRequestRepairs) => pmRequestRepairs.fkfActivityGroup,
  )
  pmRequestRepairs: PmRequestRepairs[];
}
