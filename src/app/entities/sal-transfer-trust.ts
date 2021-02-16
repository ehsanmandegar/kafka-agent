import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { GenTreater } from './gen-treater';
import { SalStore } from './sal-store';
import { SalGoods } from './sal-goods';

@Index('IX_salTransferTrust', ['serial', 'accYear'], { unique: true })
@Index('IX_salTransferTrust_1', ['mainOrderNoStart'], {})
@Index('IX_salTransferTrust_2', ['mainOrderNoEnd'], {})
@Index('IX_salTransferTrust_3', ['fkfTreater'], {})
@Index('IX_salTransferTrust_4', ['fkfGoodStart'], {})
@Index('IX_salTransferTrust_5', ['fkfGoodEnd'], {})
@Index('IX_salTransferTrust_6', ['transferDate'], {})
@Index('PK_salTransferTrust', ['pkfTransferTrust'], { unique: true })
@Entity('salTransferTrust', { schema: 'dbo' })
export class SalTransferTrust {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfTransferTrust' })
  pkfTransferTrust: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('nvarchar', { name: 'transferDate', length: 10 })
  transferDate: string;

  @Column('int', { name: 'FkfTreater' })
  fkfTreater: number;

  @Column('int', { name: 'FkfGoodStart' })
  fkfGoodStart: number;

  @Column('int', { name: 'FkfGoodEnd' })
  fkfGoodEnd: number;

  @Column('decimal', { name: 'amount1Start', precision: 12, scale: 2 })
  amount1Start: number;

  @Column('decimal', {
    name: 'amount2Start',
    precision: 12,
    scale: 2,
    default: () => '0',
  })
  amount2Start: number;

  @Column('nvarchar', { name: 'mainOrderNOStart', length: 50 })
  mainOrderNoStart: string;

  @Column('nvarchar', { name: 'mainOrderNOEnd', length: 50 })
  mainOrderNoEnd: string;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'FkfStatus' })
  fkfStatus: number;

  @Column('int', { name: 'FkfCreateUser' })
  fkfCreateUser: number;

  @Column('nvarchar', { name: 'createDate', length: 10 })
  createDate: string;

  @Column('int', { name: 'FkfEditUser', nullable: true })
  fkfEditUser: number | null;

  @Column('nvarchar', { name: 'editDate', length: 10, default: () => "''" })
  editDate: string;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('decimal', { name: 'amount1End', precision: 18, scale: 0 })
  amount1End: number;

  @Column('decimal', {
    name: 'amount2End',
    precision: 18,
    scale: 0,
    default: () => '0',
  })
  amount2End: number;

  @Column('nvarchar', { name: 'tracingStart', nullable: true, length: 50 })
  tracingStart: string | null;

  @Column('nvarchar', { name: 'tracingEnd', nullable: true, length: 50 })
  tracingEnd: string | null;

  @Column('nvarchar', { name: 'memo2', length: 255, default: () => "''" })
  memo2: string;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.salTransferTrusts)
  @JoinColumn([{ name: 'FkfTreater', referencedColumnName: 'pkfTreater' }])
  fkfTreater2: GenTreater;

  @ManyToOne(() => SalStore, (salStore) => salStore.salTransferTrusts)
  @JoinColumn([{ name: 'FkfStore', referencedColumnName: 'pkfStore' }])
  fkfStore: SalStore;

  @ManyToOne(() => SalGoods, (salGoods) => salGoods.salTransferTrusts)
  @JoinColumn([{ name: 'FkfGoodStart', referencedColumnName: 'pkfGood' }])
  fkfGoodStart2: SalGoods;

  @ManyToOne(() => SalGoods, (salGoods) => salGoods.salTransferTrusts2)
  @JoinColumn([{ name: 'FkfGoodEnd', referencedColumnName: 'pkfGood' }])
  fkfGoodEnd2: SalGoods;

  @RelationId(
    (salTransferTrust: SalTransferTrust) => salTransferTrust.fkfTreater2,
  )
  fkfTreater3: number;

  @RelationId((salTransferTrust: SalTransferTrust) => salTransferTrust.fkfStore)
  fkfStore2: number;

  @RelationId(
    (salTransferTrust: SalTransferTrust) => salTransferTrust.fkfGoodStart2,
  )
  fkfGoodStart3: number;

  @RelationId(
    (salTransferTrust: SalTransferTrust) => salTransferTrust.fkfGoodEnd2,
  )
  fkfGoodEnd3: number;
}
