import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PmTools } from './pm-tools';

@Index('PK_tblTools', ['pkfToolsGroup'], { unique: true })
@Entity('pmToolsGroup', { schema: 'dbo' })
export class PmToolsGroup {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfToolsGroup' })
  pkfToolsGroup: number;

  @Column('nvarchar', { name: 'toolsGroupCode', length: 15 })
  toolsGroupCode: string;

  @Column('nvarchar', { name: 'toolsGroup', length: 200 })
  toolsGroup: string;

  @Column('bit', { name: 'active', default: () => '(1)' })
  active: boolean;

  @Column('nvarchar', { name: 'description', length: 250, default: () => "''" })
  description: string;

  @Column('int', { name: 'FkfDepartment' })
  fkfDepartment: number;

  @OneToMany(() => PmTools, (pmTools) => pmTools.fkfToolsGroup)
  pmTools: PmTools[];
}
