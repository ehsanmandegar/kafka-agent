import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { PmActivityGroup } from './pm-activity-group';
import { PmActivityType } from './pm-activity-type';

@Index('PK_pmActivityDef', ['pkfActivity'], { unique: true })
@Entity('pmActivityDef', { schema: 'dbo' })
export class PmActivityDef {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfActivity' })
  pkfActivity: number;

  @Column('nvarchar', { name: 'activityCode', length: 50, default: () => "''" })
  activityCode: string;

  @Column('nvarchar', { name: 'activity', length: 500, default: () => "''" })
  activity: string;

  @Column('nvarchar', { name: 'description', nullable: true, length: 250 })
  description: string | null;

  @ManyToOne(
    () => PmActivityGroup,
    (pmActivityGroup) => pmActivityGroup.pmActivityDefs,
  )
  @JoinColumn([
    { name: 'fkfActivityGroup', referencedColumnName: 'pkfActivityGroup' },
  ])
  fkfActivityGroup: PmActivityGroup;

  @ManyToOne(
    () => PmActivityType,
    (pmActivityType) => pmActivityType.pmActivityDefs,
  )
  @JoinColumn([
    { name: 'fkfActivityType', referencedColumnName: 'pkfActivityType' },
  ])
  fkfActivityType: PmActivityType;

  @RelationId((pmActivityDef: PmActivityDef) => pmActivityDef.fkfActivityGroup)
  fkfActivityGroup2: number;

  @RelationId((pmActivityDef: PmActivityDef) => pmActivityDef.fkfActivityType)
  fkfActivityType2: number;
}
