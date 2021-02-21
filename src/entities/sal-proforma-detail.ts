import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalProforma } from './sal-proforma';
import { SalStore } from './sal-store';
import { SalGoods } from './sal-goods';
import { SalContract } from './sal-contract';
import { SalGoodType } from './sal-good-type';

@Index('PK_salProformaDetail', ['pkfProformaDetail'], { unique: true })
@Entity('salProformaDetail', { schema: 'dbo' })
export class SalProformaDetail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfProformaDetail' })
  pkfProformaDetail: number;

  @Column('decimal', {
    name: 'amount1',
    precision: 18,
    scale: 6,
    default: () => '0',
  })
  amount1: number;

  @Column('decimal', {
    name: 'amount2',
    precision: 18,
    scale: 6,
    default: () => '0',
  })
  amount2: number;

  @Column('float', { name: 'fee', precision: 53, default: () => '(0)' })
  fee: number;

  @Column('int', { name: 'calcBase', default: () => '1' })
  calcBase: number;

  @Column('int', { name: 'carCount', default: () => '0' })
  carCount: number;

  @Column('bit', { name: 'payOff', default: () => '0' })
  payOff: boolean;

  @Column('bit', { name: 'estimate', default: () => '0' })
  estimate: boolean;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('int', { name: 'commisinFee', default: () => '0' })
  commisinFee: number;

  @Column('int', { name: 'FkfUnit1', nullable: true })
  fkfUnit1: number | null;

  @Column('int', { name: 'FkfUnit2', nullable: true })
  fkfUnit2: number | null;

  @Column('int', { name: 'discountP', default: () => '(0)' })
  discountP: number;

  @Column('decimal', {
    name: 'discountPercent',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  discountPercent: number;

  @Column('decimal', {
    name: 'feeAgreement',
    precision: 18,
    scale: 3,
    default: () => '(0)',
  })
  feeAgreement: number;

  @Column('nvarchar', { name: 'tracing', length: 50, default: () => "''" })
  tracing: string;

  @Column('float', { name: 'feeCurrency', precision: 53, default: () => '(0)' })
  feeCurrency: number;

  @Column('decimal', {
    name: 'weigthM',
    precision: 18,
    scale: 3,
    default: () => '(0)',
  })
  weigthM: number;

  @Column('decimal', {
    name: 'weightLength',
    precision: 18,
    scale: 3,
    default: () => '(0)',
  })
  weightLength: number;

  @Column('int', { name: 'FkfCommodityGoods', nullable: true })
  fkfCommodityGoods: number | null;

  @Column('decimal', {
    name: 'discountPCur',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  discountPCur: number;

  @ManyToOne(
    () => SalProforma,
    (salProforma) => salProforma.salProformaDetails,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([{ name: 'FkfProforma', referencedColumnName: 'pkfProforma' }])
  fkfProforma: SalProforma;

  @ManyToOne(() => SalStore, (salStore) => salStore.salProformaDetails)
  @JoinColumn([{ name: 'FkfStore', referencedColumnName: 'pkfStore' }])
  fkfStore: SalStore;

  @ManyToOne(() => SalGoods, (salGoods) => salGoods.salProformaDetails)
  @JoinColumn([{ name: 'FkfGoods', referencedColumnName: 'pkfGood' }])
  fkfGoods: SalGoods;

  @ManyToOne(() => SalContract, (salContract) => salContract.salProformaDetails)
  @JoinColumn([{ name: 'FkfContract', referencedColumnName: 'pkfContract' }])
  fkfContract: SalContract;

  @ManyToOne(() => SalGoodType, (salGoodType) => salGoodType.salProformaDetails)
  @JoinColumn([{ name: 'FKFGoodType', referencedColumnName: 'pkfGoodType' }])
  fkfGoodType: SalGoodType;

  @RelationId(
    (salProformaDetail: SalProformaDetail) => salProformaDetail.fkfProforma,
  )
  fkfProforma2: number;

  @RelationId(
    (salProformaDetail: SalProformaDetail) => salProformaDetail.fkfStore,
  )
  fkfStore2: number;

  @RelationId(
    (salProformaDetail: SalProformaDetail) => salProformaDetail.fkfGoods,
  )
  fkfGoods2: number;

  @RelationId(
    (salProformaDetail: SalProformaDetail) => salProformaDetail.fkfContract,
  )
  fkfContract2: number | null;

  @RelationId(
    (salProformaDetail: SalProformaDetail) => salProformaDetail.fkfGoodType,
  )
  fkfGoodType2: number | null;
}
