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
import { BasReceiptsList } from './bas-receipts-list';
import { SalGoodsSerial } from './sal-goods-serial';
import { SalStoreHouse } from './sal-store-house';
import { SalGoods } from './sal-goods';
import { SalGoodType } from './sal-good-type';
import { SalStore } from './sal-store';
import { SalStoreHouseDetailCost } from './sal-store-house-detail-cost';

@Index('IX_salStoreHouseDetail', ['fkfGood'], {})
@Index('IX_salStoreHouseDetail_1', ['fkfStore'], {})
@Index('IX_salStoreHouseDetail_2', ['fkfStoreHouse'], {})
@Index('IX_salStoreHouseDetail_3', ['fkfOrderDetail'], {})
@Index('IX_salStoreHouseDetail_4', ['fkfPerformaDetail'], {})
@Index('IX_salStoreHouseDetail_5', ['amountFinal1'], {})
@Index('IX_salStoreHouseDetail_6', ['fkfRequestGoodsDetail'], {})
@Index('PK_salStoreHouseDetail', ['pkfStoreHouseDetail'], { unique: true })
@Entity('salStoreHouseDetail', { schema: 'dbo' })
export class SalStoreHouseDetail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfStoreHouseDetail' })
  pkfStoreHouseDetail: number;

  @Column('int', { name: 'FkfStoreHouse' })
  fkfStoreHouse: number;

  @Column('int', { name: 'FkfGood' })
  fkfGood: number;

  @Column('decimal', {
    name: 'amountSource1',
    precision: 18,
    scale: 6,
    default: () => '(0)',
  })
  amountSource1: number;

  @Column('decimal', {
    name: 'amountDestination1',
    precision: 18,
    scale: 6,
    default: () => '(0)',
  })
  amountDestination1: number;

  @Column('decimal', {
    name: 'amountSource2',
    precision: 18,
    scale: 6,
    default: () => '(0)',
  })
  amountSource2: number;

  @Column('decimal', {
    name: 'amountDestination2',
    precision: 18,
    scale: 6,
    default: () => '(0)',
  })
  amountDestination2: number;

  @Column('decimal', {
    name: 'amountOrder1',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  amountOrder1: number;

  @Column('decimal', {
    name: 'amountOrder2',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  amountOrder2: number;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('int', { name: 'FKFStore' })
  fkfStore: number;

  @Column('decimal', {
    name: 'amountFinal1',
    precision: 18,
    scale: 6,
    default: () => '(0)',
  })
  amountFinal1: number;

  @Column('decimal', {
    name: 'amountFinal2',
    precision: 18,
    scale: 6,
    default: () => '(0)',
  })
  amountFinal2: number;

  @Column('int', { name: 'FkfPerformaDetail', nullable: true })
  fkfPerformaDetail: number | null;

  @Column('float', { name: 'fee', precision: 53, default: () => '(0)' })
  fee: number;

  @Column('float', { name: 'buyFee', precision: 53, default: () => '(0)' })
  buyFee: number;

  @Column('nvarchar', { name: 'tracing', length: 100, default: () => "''" })
  tracing: string;

  @Column('int', { name: 'FkfTransferDetail', nullable: true })
  fkfTransferDetail: number | null;

  @Column('decimal', {
    name: 'difAmount',
    precision: 18,
    scale: 3,
    default: () => '(0)',
  })
  difAmount: number;

  @Column('bigint', { name: 'priceWageRates', default: () => '(0)' })
  priceWageRates: string;

  @Column('decimal', {
    name: 'amountWastePercent',
    precision: 18,
    scale: 3,
    default: () => '(0)',
  })
  amountWastePercent: number;

  @Column('int', { name: 'idAddress', default: () => '(0)' })
  idAddress: number;

  @Column('int', { name: 'FkfContractBuy', nullable: true })
  fkfContractBuy: number | null;

  @Column('nvarchar', { name: 'outPutNo', length: 100, default: () => "''" })
  outPutNo: string;

  @Column('nvarchar', { name: 'orderNo', length: 50, default: () => "''" })
  orderNo: string;

  @Column('int', { name: 'point', nullable: true })
  point: number | null;

  @Column('int', { name: 'logC', nullable: true })
  logC: number | null;

  @Column('bigint', { name: 'virtualKaredex', default: () => '(99999999)' })
  virtualKaredex: string;

  @Column('int', { name: 'FkfProduceDetail', nullable: true })
  fkfProduceDetail: number | null;

  @Column('int', { name: 'FkfImporttingExport', nullable: true })
  fkfImporttingExport: number | null;

  @Column('bit', { name: 'buildKardex', default: () => '(0)' })
  buildKardex: boolean;

  @Column('int', { name: 'FkfImportDetail', nullable: true })
  fkfImportDetail: number | null;

  @Column('int', { name: 'FkfRequestGoodsDetail', nullable: true })
  fkfRequestGoodsDetail: number | null;

  @Column('int', { name: 'FkfWeight', nullable: true })
  fkfWeight: number | null;

  @Column('float', { name: 'priceLoad', precision: 53, default: () => '(0)' })
  priceLoad: number;

  @Column('float', { name: 'pricePay', precision: 53, default: () => '(0)' })
  pricePay: number;

  @Column('bit', { name: 'estimate', default: () => '(0)' })
  estimate: boolean;

  @Column('int', { name: 'FkfOrderDetail', nullable: true })
  fkfOrderDetail: number | null;

  @Column('nvarchar', {
    name: 'billOfLoadingFactory',
    length: 100,
    default: () => "''",
  })
  billOfLoadingFactory: string;

  @Column('nvarchar', {
    name: 'expirationDate',
    length: 50,
    default: () => "''",
  })
  expirationDate: string;

  @Column('int', { name: 'FkfBascoule', nullable: true })
  fkfBascoule: number | null;

  @Column('decimal', {
    name: 'coverWeightTreater',
    precision: 18,
    scale: 6,
    default: () => '(0)',
  })
  coverWeightTreater: number;

  @OneToMany(
    () => BasReceiptsList,
    (basReceiptsList) => basReceiptsList.fkfStoreHouseDetail,
  )
  basReceiptsLists: BasReceiptsList[];

  @OneToMany(
    () => SalGoodsSerial,
    (salGoodsSerial) => salGoodsSerial.fkfStoreDetail,
  )
  salGoodsSerials: SalGoodsSerial[];

  @OneToMany(
    () => SalGoodsSerial,
    (salGoodsSerial) => salGoodsSerial.fkfStoreDetailExport,
  )
  salGoodsSerials2: SalGoodsSerial[];

  @ManyToOne(
    () => SalStoreHouse,
    (salStoreHouse) => salStoreHouse.salStoreHouseDetails,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'FkfStoreHouse', referencedColumnName: 'pkfStoreHouse' },
  ])
  fkfStoreHouse2: SalStoreHouse;

  @ManyToOne(() => SalGoods, (salGoods) => salGoods.salStoreHouseDetails)
  @JoinColumn([{ name: 'FkfGood', referencedColumnName: 'pkfGood' }])
  fkfGood2: SalGoods;

  @ManyToOne(
    () => SalGoodType,
    (salGoodType) => salGoodType.salStoreHouseDetails,
  )
  @JoinColumn([{ name: 'FKFGoodType', referencedColumnName: 'pkfGoodType' }])
  fkfGoodType: SalGoodType;

  @ManyToOne(() => SalStore, (salStore) => salStore.salStoreHouseDetails)
  @JoinColumn([{ name: 'FKFStore', referencedColumnName: 'pkfStore' }])
  fkfStore2: SalStore;

  @OneToMany(
    () => SalStoreHouseDetailCost,
    (salStoreHouseDetailCost) => salStoreHouseDetailCost.fkfStoreHouseDetail,
  )
  salStoreHouseDetailCosts: SalStoreHouseDetailCost[];

  @RelationId(
    (salStoreHouseDetail: SalStoreHouseDetail) =>
      salStoreHouseDetail.fkfStoreHouse2,
  )
  fkfStoreHouse3: number;

  @RelationId(
    (salStoreHouseDetail: SalStoreHouseDetail) => salStoreHouseDetail.fkfGood2,
  )
  fkfGood3: number;

  @RelationId(
    (salStoreHouseDetail: SalStoreHouseDetail) =>
      salStoreHouseDetail.fkfGoodType,
  )
  fkfGoodType2: number | null;

  @RelationId(
    (salStoreHouseDetail: SalStoreHouseDetail) => salStoreHouseDetail.fkfStore2,
  )
  fkfStore3: number;
}
