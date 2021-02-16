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
import { PmTools } from './pm-tools';

@Index('PK_tblActivityTools', ['pkfActivityTools'], { unique: true })
@Entity('pmActivityTools', { schema: 'dbo' })
export class PmActivityTools {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfActivityTools' })
  pkfActivityTools: number;

  @Column('int', { name: 'number' })
  number: number;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @ManyToOne(() => PmActivity, (pmActivity) => pmActivity.pmActivityTools, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'FkfActivity', referencedColumnName: 'pkfActivity' }])
  fkfActivity: PmActivity;

  @ManyToOne(() => PmTools, (pmTools) => pmTools.pmActivityTools)
  @JoinColumn([{ name: 'FkfTools', referencedColumnName: 'pkfTools' }])
  fkfTools: PmTools;

  @RelationId((pmActivityTools: PmActivityTools) => pmActivityTools.fkfActivity)
  fkfActivity2: number;

  @RelationId((pmActivityTools: PmActivityTools) => pmActivityTools.fkfTools)
  fkfTools2: number;
}
