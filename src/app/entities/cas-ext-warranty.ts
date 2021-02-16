import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { CasWarranty } from './cas-warranty';

@Index('PK_casExtWarranty', ['pkfExtWarranty'], { unique: true })
@Entity('casExtWarranty', { schema: 'dbo' })
export class CasExtWarranty {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfExtWarranty' })
  pkfExtWarranty: number;

  @Column('nvarchar', { name: 'payOffDate', length: 10 })
  payOffDate: string;

  @Column('nvarchar', { name: 'memo', length: 500 })
  memo: string;

  @Column('int', { name: 'FkfExtUser' })
  fkfExtUser: number;

  @Column('nvarchar', { name: 'extDate', length: 10 })
  extDate: string;

  @Column('nvarchar', { name: 'extTime', length: 10 })
  extTime: string;

  @ManyToOne(() => CasWarranty, (casWarranty) => casWarranty.casExtWarranties)
  @JoinColumn([{ name: 'FkfWarranty', referencedColumnName: 'pkfWarranty' }])
  fkfWarranty: CasWarranty;

  @RelationId((casExtWarranty: CasExtWarranty) => casExtWarranty.fkfWarranty)
  fkfWarranty2: number;
}
