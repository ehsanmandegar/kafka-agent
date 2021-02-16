import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PmActivityDef } from './pm-activity-def';
import { PmRequestRepairs } from './pm-request-repairs';

@Index('PK_pmActivityType', ['pkfActivityType'], { unique: true })
@Entity('pmActivityType', { schema: 'dbo' })
export class PmActivityType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfActivityType' })
  pkfActivityType: number;

  @Column('nvarchar', { name: 'activityType', length: 200 })
  activityType: string;

  @Column('nvarchar', { name: 'activityTypeCode', length: 25 })
  activityTypeCode: string;

  @Column('int', { name: 'active', default: () => '(1)' })
  active: number;

  @Column('nvarchar', { name: 'description', length: 255, default: () => "''" })
  description: string;

  @Column('int', { name: 'FkfDepartment' })
  fkfDepartment: number;

  @OneToMany(
    () => PmActivityDef,
    (pmActivityDef) => pmActivityDef.fkfActivityType,
  )
  pmActivityDefs: PmActivityDef[];

  @OneToMany(
    () => PmRequestRepairs,
    (pmRequestRepairs) => pmRequestRepairs.fkfActivityType,
  )
  pmRequestRepairs: PmRequestRepairs[];
}
