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
import { GenSkillGroup } from './gen-skill-group';
import { PmActivitySkills } from './pm-activity-skills';

@Index('PK_tblSkillDetail', ['pkfSkill'], { unique: true })
@Entity('genSkill', { schema: 'dbo' })
export class GenSkill {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfSkill' })
  pkfSkill: number;

  @Column('nvarchar', { name: 'skillCode', length: 25 })
  skillCode: string;

  @Column('nvarchar', { name: 'skill', length: 100 })
  skill: string;

  @Column('bit', { name: 'active', default: () => '(1)' })
  active: boolean;

  @Column('int', { name: 'pricePerH', default: () => '(0)' })
  pricePerH: number;

  @Column('nvarchar', { name: 'description', length: 255, default: () => "''" })
  description: string;

  @Column('int', { name: 'FkfDepartment' })
  fkfDepartment: number;

  @ManyToOne(() => GenSkillGroup, (genSkillGroup) => genSkillGroup.genSkills)
  @JoinColumn([
    { name: 'FkfSkillGroup', referencedColumnName: 'pkfSkillGroup' },
  ])
  fkfSkillGroup: GenSkillGroup;

  @OneToMany(
    () => PmActivitySkills,
    (pmActivitySkills) => pmActivitySkills.fkfSkill,
  )
  pmActivitySkills: PmActivitySkills[];

  @RelationId((genSkill: GenSkill) => genSkill.fkfSkillGroup)
  fkfSkillGroup2: number;
}
