import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { CasCheckBatch } from './cas-check-batch';

@Index('IX_casCheckCancel', ['checkNo', 'fkfCheckBatch'], { unique: true })
@Index('PK_casCheckCancel', ['pkfCheckCancel'], { unique: true })
@Entity('casCheckCancel', { schema: 'dbo' })
export class CasCheckCancel {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfCheckCancel' })
  pkfCheckCancel: number;

  @Column('bigint', { name: 'checkNo' })
  checkNo: string;

  @Column('int', { name: 'FkfCheckBatch' })
  fkfCheckBatch: number;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('varchar', { name: 'checkCancelDate', length: 10 })
  checkCancelDate: string;

  @Column('int', { name: 'typeCheck', default: () => '1' })
  typeCheck: number;

  @ManyToOne(
    () => CasCheckBatch,
    (casCheckBatch) => casCheckBatch.casCheckCancels,
  )
  @JoinColumn([
    { name: 'FkfCheckBatch', referencedColumnName: 'pkfCheckBatch' },
  ])
  fkfCheckBatch2: CasCheckBatch;

  @RelationId((casCheckCancel: CasCheckCancel) => casCheckCancel.fkfCheckBatch2)
  fkfCheckBatch3: number;
}
