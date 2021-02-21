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
import { GenTreater } from './gen-treater';
import { CasGetPayType } from './cas-get-pay-type';
import { CasCheckCancel } from './cas-check-cancel';

@Index('PK_casCheckBatch', ['pkfCheckBatch'], { unique: true })
@Entity('casCheckBatch', { schema: 'dbo' })
export class CasCheckBatch {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfCheckBatch' })
  pkfCheckBatch: number;

  @Column('bigint', { name: 'firstNo' })
  firstNo: string;

  @Column('bigint', { name: 'endNo' })
  endNo: string;

  @Column('varchar', { name: 'checkBatchDate', length: 10 })
  checkBatchDate: string;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('bit', { name: 'oldYear', default: () => '(0)' })
  oldYear: boolean;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.casCheckBatches)
  @JoinColumn([{ name: 'FkfTreater', referencedColumnName: 'pkfTreater' }])
  fkfTreater: GenTreater;

  @ManyToOne(
    () => CasGetPayType,
    (casGetPayType) => casGetPayType.casCheckBatches,
  )
  @JoinColumn([
    { name: 'FkfGetPayType', referencedColumnName: 'pkfGetPayType' },
  ])
  fkfGetPayType: CasGetPayType;

  @OneToMany(
    () => CasCheckCancel,
    (casCheckCancel) => casCheckCancel.fkfCheckBatch2,
  )
  casCheckCancels: CasCheckCancel[];

  @RelationId((casCheckBatch: CasCheckBatch) => casCheckBatch.fkfTreater)
  fkfTreater2: number;

  @RelationId((casCheckBatch: CasCheckBatch) => casCheckBatch.fkfGetPayType)
  fkfGetPayType2: number | null;
}
