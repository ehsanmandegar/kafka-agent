import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PmRequestRepairs } from './pm-request-repairs';

@Index('PK_pmDeferment', ['pkfDeferment'], { unique: true })
@Entity('pmDeferment', { schema: 'dbo' })
export class PmDeferment {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfDeferment' })
  pkfDeferment: number;

  @Column('nvarchar', { name: 'deferment', length: 50, default: () => "''" })
  deferment: string;

  @Column('nvarchar', {
    name: 'defermentCode',
    length: 50,
    default: () => "''",
  })
  defermentCode: string;

  @Column('nvarchar', { name: 'memo', default: () => "''" })
  memo: string;

  @OneToMany(
    () => PmRequestRepairs,
    (pmRequestRepairs) => pmRequestRepairs.fkfDeferment,
  )
  pmRequestRepairs: PmRequestRepairs[];
}
