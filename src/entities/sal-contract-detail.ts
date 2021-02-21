import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalContract } from './sal-contract';
import { SalStore } from './sal-store';
import { SalGoods } from './sal-goods';
import { SalCalcBase } from './sal-calc-base';
import { SalGoodType } from './sal-good-type';
import { GenTreater } from './gen-treater';

@Index('IX_salContractDetail', ['fkfContract'], {})
@Index('IX_salContractDetail_1', ['fkfStore'], {})
@Index('IX_salContractDetail_2', ['fkfGoods'], {})
@Index('IX_salContractDetail_3', ['fkfBuyContract'], {})
@Index('IX_salContractDetail_4', ['fkfOrderDetail'], {})
@Index('IX_salContractDetail_5', ['fkfRequestGoodsDetail'], {})
@Index('IX_salContractDetail_6', ['fkfOrderDetail'], {})
@Index('PK_salContractDetail', ['pkfContractDetail'], { unique: true })
@Entity('salContractDetail', { schema: 'dbo' })
export class SalContractDetail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfContractDetail' })
  pkfContractDetail: number;

  @Column('int', { name: 'FkfContract' })
  fkfContract: number;

  @Column('int', { name: 'FkfStore' })
  fkfStore: number;

  @Column('int', { name: 'FkfGoods' })
  fkfGoods: number;

  @Column('decimal', {
    name: 'amount1',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  amount1: number | null;

  @Column('decimal', {
    name: 'amount2',
    nullable: true,
    precision: 18,
    scale: 6,
    default: () => '(0)',
  })
  amount2: number | null;

  @Column('float', { name: 'fee', precision: 53 })
  fee: number;

  @Column('float', { name: 'feeCur', precision: 53, default: () => '(0)' })
  feeCur: number;

  @Column('nvarchar', {
    name: 'getDate',
    nullable: true,
    length: 10,
    default: () => "''",
  })
  getDate: string | null;

  @Column('int', { name: 'FkfBuyContract', nullable: true })
  fkfBuyContract: number | null;

  @Column('int', { name: 'carCount', default: () => '(0)' })
  carCount: number;

  @Column('nvarchar', { name: 'getNo', length: 100, default: () => "''" })
  getNo: string;

  @Column('nvarchar', { name: 'outPutNo', length: 100, default: () => "''" })
  outPutNo: string;

  @Column('nvarchar', { name: 'driverName', length: 255, default: () => "''" })
  driverName: string;

  @Column('int', { name: 'FkfProformaDetail', nullable: true })
  fkfProformaDetail: number | null;

  @Column('bit', { name: 'estimate', default: () => '(0)' })
  estimate: boolean;

  @Column('decimal', {
    name: 'buyFee',
    precision: 18,
    scale: 5,
    default: () => '(0)',
  })
  buyFee: number;

  @Column('decimal', {
    name: 'buyFeeCur',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  buyFeeCur: number;

  @Column('decimal', {
    name: 'discount',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  discount: number;

  @Column('int', { name: 'FkfBuy', nullable: true })
  fkfBuy: number | null;

  @Column('decimal', {
    name: 'produceFee',
    precision: 18,
    scale: 3,
    default: () => '(0)',
  })
  produceFee: number;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('nvarchar', { name: 'storeNo', length: 50, default: () => "''" })
  storeNo: string;

  @Column('int', { name: 'commisinFee', default: () => '(0)' })
  commisinFee: number;

  @Column('int', { name: 'FkfUnit1', nullable: true })
  fkfUnit1: number | null;

  @Column('int', { name: 'FkfUnit2', nullable: true })
  fkfUnit2: number | null;

  @Column('decimal', {
    name: 'amount1D',
    nullable: true,
    precision: 18,
    scale: 6,
    default: () => '(0)',
  })
  amount1D: number | null;

  @Column('decimal', {
    name: 'amount2D',
    nullable: true,
    precision: 18,
    scale: 6,
    default: () => '(0)',
  })
  amount2D: number | null;

  @Column('int', { name: 'discountP', default: () => '(0)' })
  discountP: number;

  @Column('int', { name: 'FKFContractDetailStatus', default: () => '(3)' })
  fkfContractDetailStatus: number;

  @Column('nvarchar', { name: 'orderNo', length: 50, default: () => "''" })
  orderNo: string;

  @Column('int', { name: 'point', nullable: true })
  point: number | null;

  @Column('bit', { name: 'warningWeight', default: () => '(0)' })
  warningWeight: boolean;

  @Column('int', { name: 'FkfGoodsMain', nullable: true })
  fkfGoodsMain: number | null;

  @Column('decimal', {
    name: 'wastePercent',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  wastePercent: number;

  @Column('decimal', {
    name: 'weightPost',
    precision: 18,
    scale: 3,
    default: () => '(0)',
  })
  weightPost: number;

  @Column('decimal', {
    name: 'weightLoss',
    precision: 18,
    scale: 3,
    default: () => '(0)',
  })
  weightLoss: number;

  @Column('int', { name: 'FkfOrderDetail', nullable: true })
  fkfOrderDetail: number | null;

  @Column('int', { name: 'goodUniqe', default: () => '(0)' })
  goodUniqe: number;

  @Column('decimal', {
    name: 'feeAgreement',
    precision: 18,
    scale: 5,
    default: () => '(0)',
  })
  feeAgreement: number;

  @Column('decimal', {
    name: 'wageFee',
    precision: 18,
    scale: 5,
    default: () => '(0)',
  })
  wageFee: number;

  @Column('int', { name: 'FkfRequestGoodsDetail', nullable: true })
  fkfRequestGoodsDetail: number | null;

  @Column('int', { name: 'FkfImporttingExport', nullable: true })
  fkfImporttingExport: number | null;

  @Column('decimal', {
    name: 'amount1ImportOld',
    nullable: true,
    precision: 18,
    scale: 6,
    default: () => '(0)',
  })
  amount1ImportOld: number | null;

  @Column('decimal', {
    name: 'amount2ImportOld',
    nullable: true,
    precision: 18,
    scale: 6,
    default: () => '(0)',
  })
  amount2ImportOld: number | null;

  @Column('int', { name: 'FkfReturn', nullable: true })
  fkfReturn: number | null;

  @Column('int', { name: 'addressNoDet', nullable: true })
  addressNoDet: number | null;

  @Column('int', { name: 'unitCommisin', default: () => '(1)' })
  unitCommisin: number;

  @Column('bit', { name: 'printed', default: () => '(0)' })
  printed: boolean;

  @Column('nvarchar', { name: 'tracing', length: 100, default: () => "''" })
  tracing: string;

  @Column('int', { name: 'FkfReserve', nullable: true })
  fkfReserve: number | null;

  @Column('bigint', { name: 'bookServeDiffrence', default: () => '(0)' })
  bookServeDiffrence: string;

  @Column('bigint', { name: 'bookLicenceDiffrence', default: () => '(0)' })
  bookLicenceDiffrence: string;

  @Column('bigint', { name: 'otherTaxes', default: () => '(0)' })
  otherTaxes: string;

  @Column('float', {
    name: 'curLicencePrice',
    precision: 53,
    default: () => '(0)',
  })
  curLicencePrice: number;

  @Column('float', {
    name: 'curLicenceBalance',
    precision: 53,
    default: () => '(0)',
  })
  curLicenceBalance: number;

  @Column('bigint', { name: 'licencePriceRate', default: () => '(0)' })
  licencePriceRate: string;

  @Column('decimal', {
    name: 'curBookBalance',
    nullable: true,
    precision: 13,
    scale: 5,
    default: () => '(0)',
  })
  curBookBalance: number | null;

  @Column('bit', { name: 'garanty', default: () => '(0)' })
  garanty: boolean;

  @Column('decimal', {
    name: 'returnAmountLastYear',
    nullable: true,
    precision: 18,
    scale: 6,
    default: () => '(0)',
  })
  returnAmountLastYear: number | null;

  @Column('float', { name: 'offerRate', precision: 53, default: () => '(0)' })
  offerRate: number;

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

  @Column('decimal', {
    name: 'amount3',
    nullable: true,
    precision: 18,
    scale: 6,
    default: () => '(0)',
  })
  amount3: number | null;

  @Column('int', { name: 'FkfCommodityGoods', nullable: true })
  fkfCommodityGoods: number | null;

  @Column('decimal', {
    name: 'amount4',
    nullable: true,
    precision: 18,
    scale: 6,
    default: () => '(0)',
  })
  amount4: number | null;

  @Column('nvarchar', { name: 'plaqueNo', length: 30, default: () => "''" })
  plaqueNo: string;

  @Column('nvarchar', { name: 'driverTell', length: 30, default: () => "''" })
  driverTell: string;

  @Column('nvarchar', { name: 'driverTellEN', length: 30, default: () => "''" })
  driverTellEn: string;

  @Column('nvarchar', {
    name: 'driverNationalCode',
    length: 50,
    default: () => "''",
  })
  driverNationalCode: string;

  @Column('nvarchar', {
    name: 'FkfTransferOrderDetail',
    nullable: true,
    length: 250,
    default: () => "''",
  })
  fkfTransferOrderDetail: string | null;

  @Column('decimal', {
    name: 'priceCurDiscountP',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  priceCurDiscountP: number;

  @Column('int', { name: 'FkfTreaterCostCenter', nullable: true })
  fkfTreaterCostCenter: number | null;

  @Column('bit', { name: 'isSendCustomer', default: () => '(0)' })
  isSendCustomer: boolean;

  @Column('float', { name: 'companyFee', precision: 53, default: () => '(0)' })
  companyFee: number;

  @Column('int', { name: 'FkfBascoule', nullable: true })
  fkfBascoule: number | null;

  @Column('int', { name: 'coverWeight', default: () => '(0)' })
  coverWeight: number;

  @Column('int', { name: 'coverWeightTreater', default: () => '(0)' })
  coverWeightTreater: number;

  @Column('int', { name: 'FkforderStatusSale', nullable: true })
  fkforderStatusSale: number | null;

  @ManyToOne(
    () => SalContract,
    (salContract) => salContract.salContractDetails,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([{ name: 'FkfContract', referencedColumnName: 'pkfContract' }])
  fkfContract2: SalContract;

  @ManyToOne(() => SalStore, (salStore) => salStore.salContractDetails)
  @JoinColumn([{ name: 'FkfStore', referencedColumnName: 'pkfStore' }])
  fkfStore2: SalStore;

  @ManyToOne(() => SalGoods, (salGoods) => salGoods.salContractDetails)
  @JoinColumn([{ name: 'FkfGoods', referencedColumnName: 'pkfGood' }])
  fkfGoods2: SalGoods;

  @ManyToOne(() => SalCalcBase, (salCalcBase) => salCalcBase.salContractDetails)
  @JoinColumn([{ name: 'calcBase', referencedColumnName: 'pkfCalcBase' }])
  calcBase: SalCalcBase;

  @ManyToOne(() => SalStore, (salStore) => salStore.salContractDetails2)
  @JoinColumn([
    { name: 'FkfDestinationStore', referencedColumnName: 'pkfStore' },
  ])
  fkfDestinationStore: SalStore;

  @ManyToOne(() => SalGoodType, (salGoodType) => salGoodType.salContractDetails)
  @JoinColumn([{ name: 'FKFGoodType', referencedColumnName: 'pkfGoodType' }])
  fkfGoodType: SalGoodType;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.salContractDetails)
  @JoinColumn([
    { name: 'FkfProduceTreater', referencedColumnName: 'pkfTreater' },
  ])
  fkfProduceTreater: GenTreater;

  @RelationId(
    (salContractDetail: SalContractDetail) => salContractDetail.fkfContract2,
  )
  fkfContract3: number;

  @RelationId(
    (salContractDetail: SalContractDetail) => salContractDetail.fkfStore2,
  )
  fkfStore3: number;

  @RelationId(
    (salContractDetail: SalContractDetail) => salContractDetail.fkfGoods2,
  )
  fkfGoods3: number;

  @RelationId(
    (salContractDetail: SalContractDetail) => salContractDetail.calcBase,
  )
  calcBase2: number;

  @RelationId(
    (salContractDetail: SalContractDetail) =>
      salContractDetail.fkfDestinationStore,
  )
  fkfDestinationStore2: number | null;

  @RelationId(
    (salContractDetail: SalContractDetail) => salContractDetail.fkfGoodType,
  )
  fkfGoodType2: number | null;

  @RelationId(
    (salContractDetail: SalContractDetail) =>
      salContractDetail.fkfProduceTreater,
  )
  fkfProduceTreater2: number | null;
}
