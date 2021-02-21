import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { PmActivity } from './pm-activity';
import { GenSkill } from './gen-skill';

@Index('PK_tblActivitySkill', ['pkfActivitySkills'], { unique: true })
@Entity('pmActivitySkills', { schema: 'dbo' })
export class PmActivitySkills {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfActivitySkills' })
  pkfActivitySkills: number;

  @Column('int', { name: 'skillTime', default: () => '(0)' })
  skillTime: number;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @ManyToOne(() => PmActivity, (pmActivity) => pmActivity.pmActivitySkills, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'FkfActivity', referencedColumnName: 'pkfActivity' }])
  fkfActivity: PmActivity;

  @ManyToOne(() => GenSkill, (genSkill) => genSkill.pmActivitySkills)
  @JoinColumn([{ name: 'FkfSkill', referencedColumnName: 'pkfSkill' }])
  fkfSkill: GenSkill;

  @RelationId(
    (pmActivitySkills: PmActivitySkills) => pmActivitySkills.fkfActivity,
  )
  fkfActivity2: number;

  @RelationId((pmActivitySkills: PmActivitySkills) => pmActivitySkills.fkfSkill)
  fkfSkill2: number;
}
