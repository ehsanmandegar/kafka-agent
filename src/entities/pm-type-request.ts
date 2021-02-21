import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PmRequestRepairs } from './pm-request-repairs';

@Index('PK_pmTypeRequest', ['pkfTypeRequest'], { unique: true })
@Entity('pmTypeRequest', { schema: 'dbo' })
export class PmTypeRequest {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfTypeRequest' })
  pkfTypeRequest: number;

  @Column('nvarchar', { name: 'typeRequestCode', length: 50 })
  typeRequestCode: string;

  @Column('nvarchar', { name: 'typeRequest', length: 50 })
  typeRequest: string;

  @OneToMany(
    () => PmRequestRepairs,
    (pmRequestRepairs) => pmRequestRepairs.requestType,
  )
  pmRequestRepairs: PmRequestRepairs[];
}
