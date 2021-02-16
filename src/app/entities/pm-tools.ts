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
import { PmActivityTools } from './pm-activity-tools';
import { PmToolsGroup } from './pm-tools-group';

@Index('PK_tblTools_1', ['pkfTools'], { unique: true })
@Entity('pmTools', { schema: 'dbo' })
export class PmTools {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfTools' })
  pkfTools: number;

  @Column('nvarchar', { name: 'tools', length: 200 })
  tools: string;

  @Column('nvarchar', { name: 'toolsCode', length: 15 })
  toolsCode: string;

  @Column('nvarchar', { name: 'constractor', length: 200, default: () => "''" })
  constractor: string;

  @Column('nvarchar', { name: 'startDate', length: 10, default: () => "''" })
  startDate: string;

  @Column('nvarchar', { name: 'lifeTime', length: 150, default: () => "''" })
  lifeTime: string;

  @Column('nvarchar', { name: 'description', length: 250, default: () => "''" })
  description: string;

  @Column('int', { name: 'FkfDepartment' })
  fkfDepartment: number;

  @Column('bit', { name: 'active', default: () => '(1)' })
  active: boolean;

  @OneToMany(
    () => PmActivityTools,
    (pmActivityTools) => pmActivityTools.fkfTools,
  )
  pmActivityTools: PmActivityTools[];

  @ManyToOne(() => PmToolsGroup, (pmToolsGroup) => pmToolsGroup.pmTools)
  @JoinColumn([
    { name: 'FkfToolsGroup', referencedColumnName: 'pkfToolsGroup' },
  ])
  fkfToolsGroup: PmToolsGroup;

  @RelationId((pmTools: PmTools) => pmTools.fkfToolsGroup)
  fkfToolsGroup2: number;
}
