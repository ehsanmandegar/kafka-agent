import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PmRequestRepairs } from './pm-request-repairs';

@Index('IX_pmImplementation', ['implementationCode'], { unique: true })
@Index('PK_pmImplementation', ['pkfImplementation'], { unique: true })
@Entity('pmImplementation', { schema: 'dbo' })
export class PmImplementation {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfImplementation' })
  pkfImplementation: number;

  @Column('nvarchar', { name: 'implementationCode', length: 50 })
  implementationCode: string;

  @Column('nvarchar', { name: 'implementation', length: 50 })
  implementation: string;

  @OneToMany(
    () => PmRequestRepairs,
    (pmRequestRepairs) => pmRequestRepairs.fkfImplementation,
  )
  pmRequestRepairs: PmRequestRepairs[];
}
