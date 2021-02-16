import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { GenSkill } from './gen-skill';

@Index('PK_tblSkill', ['pkfSkillGroup'], { unique: true })
@Entity('genSkillGroup', { schema: 'dbo' })
export class GenSkillGroup {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfSkillGroup' })
  pkfSkillGroup: number;

  @Column('nvarchar', { name: 'skillGroupCode', length: 25 })
  skillGroupCode: string;

  @Column('nvarchar', { name: 'skillGroup', length: 200 })
  skillGroup: string;

  @Column('nvarchar', { name: 'description', length: 255, default: () => "''" })
  description: string;

  @Column('int', { name: 'FkfDepartment' })
  fkfDepartment: number;

  @OneToMany(() => GenSkill, (genSkill) => genSkill.fkfSkillGroup)
  genSkills: GenSkill[];
}
