import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PmRequestRepairs } from './pm-request-repairs';

@Index('IX_pmExecutionPlace', ['executionPlaceCode'], { unique: true })
@Index('PK_pmExecutionPlace', ['pkfExecutionPlace'], { unique: true })
@Entity('pmExecutionPlace', { schema: 'dbo' })
export class PmExecutionPlace {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfExecutionPlace' })
  pkfExecutionPlace: number;

  @Column('nvarchar', { name: 'executionPlaceCode', length: 50 })
  executionPlaceCode: string;

  @Column('nvarchar', { name: 'executionPlace', length: 50 })
  executionPlace: string;

  @OneToMany(
    () => PmRequestRepairs,
    (pmRequestRepairs) => pmRequestRepairs.fkfExecutionPlace,
  )
  pmRequestRepairs: PmRequestRepairs[];
}
