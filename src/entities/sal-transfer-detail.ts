import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalTransfer } from './sal-transfer';
import { SalStore } from './sal-store';
import { SalGoods } from './sal-goods';
import { SalContractDetailStatus } from './sal-contract-detail-status';

@Index('IX_salTransferDetail', ['fkfEndGoods'], {})
@Index('IX_salTransferDetail_1', ['fkfEndStore'], {})
@Index('IX_salTransferDetail_2', ['fkfStartGoods'], {})
@Index('IX_salTransferDetail_3', ['fkfStartStore'], {})
@Index('IX_salTransferDetail_4', ['fkfTransfer'], {})
@Index('PK_salTransferDetail', ['pkfTransferDetail'], { unique: true })
@Entity('salTransferDetail', { schema: 'dbo' })
export class SalTransferDetail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfTransferDetail' })
  pkfTransferDetail: number;

  @Column('int', { name: 'FkfTransfer' })
  fkfTransfer: number;

  @Column('int', { name: 'FkfStartStore' })
  fkfStartStore: number;

  @Column('int', { name: 'FkfStartGoods' })
  fkfStartGoods: number;

  @Column('decimal', { name: 'startAmount1', precision: 18, scale: 6 })
  startAmount1: number;

  @Column('decimal', {
    name: 'startAmount2',
    precision: 18,
    scale: 6,
    default: () => '0',
  })
  startAmount2: number;

  @Column('int', { name: 'FkfEndStore', nullable: true })
  fkfEndStore: number | null;

  @Column('int', { name: 'FkfEndGoods', nullable: true })
  fkfEndGoods: number | null;

  @Column('decimal', { name: 'endAmount1', precision: 18, scale: 6 })
  endAmount1: number;

  @Column('decimal', {
    name: 'endAmount2',
    precision: 18,
    scale: 6,
    default: () => '0',
  })
  endAmount2: number;

  @Column('nvarchar', { name: 'getNo', length: 25, default: () => "''" })
  getNo: string;

  @Column('nvarchar', { name: 'outPutNo', length: 25, default: () => "''" })
  outPutNo: string;

  @Column('decimal', { name: 'fee', precision: 18, scale: 3 })
  fee: number;

  @Column('decimal', {
    name: 'feeCur',
    precision: 18,
    scale: 2,
    default: () => '0',
  })
  feeCur: number;

  @Column('int', { name: 'FKFGoodType', nullable: true })
  fkfGoodType: number | null;

  @Column('nvarchar', { name: 'carNoDet', length: 25, default: () => "''" })
  carNoDet: string;

  @Column('nvarchar', { name: 'getDate', length: 10, default: () => "''" })
  getDate: string;

  @Column('nvarchar', {
    name: 'driverNameDet',
    length: 150,
    default: () => "''",
  })
  driverNameDet: string;

  @Column('nvarchar', { name: 'loadingDate', length: 10, default: () => "''" })
  loadingDate: string;

  @Column('nvarchar', {
    name: 'orderNoSource',
    length: 50,
    default: () => "''",
  })
  orderNoSource: string;

  @Column('int', { name: 'point', nullable: true })
  point: number | null;

  @Column('nvarchar', {
    name: 'orderNoTarget',
    length: 50,
    default: () => "''",
  })
  orderNoTarget: string;

  @Column('decimal', {
    name: 'buyFee',
    precision: 18,
    scale: 5,
    default: () => '(0)',
  })
  buyFee: number;

  @Column('nvarchar', {
    name: 'billOfLading',
    length: 100,
    default: () => "''",
  })
  billOfLading: string;

  @Column('int', { name: 'fkfReleasedLoadDetail', nullable: true })
  fkfReleasedLoadDetail: number | null;

  @Column('int', { name: 'FkfBuy', nullable: true })
  fkfBuy: number | null;

  @Column('nvarchar', { name: 'addressT', length: 255, default: () => "''" })
  addressT: string;

  @Column('nvarchar', { name: 'packing', length: 255, default: () => "''" })
  packing: string;

  @Column('int', { name: 'FkfWeight', nullable: true })
  fkfWeight: number | null;

  @Column('int', { name: 'FkfRequestGoodsDetail', nullable: true })
  fkfRequestGoodsDetail: number | null;

  @Column('nvarchar', { name: 'tracingStart', length: 50, default: () => "''" })
  tracingStart: string;

  @Column('nvarchar', { name: 'tracingEnd', length: 50, default: () => "''" })
  tracingEnd: string;

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

  @Column('decimal', {
    name: 'coverWeightTreater',
    precision: 18,
    scale: 6,
    default: () => '(0)',
  })
  coverWeightTreater: number;

  @ManyToOne(
    () => SalTransfer,
    (salTransfer) => salTransfer.salTransferDetails,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([{ name: 'FkfTransfer', referencedColumnName: 'pkfTransfer' }])
  fkfTransfer2: SalTransfer;

  @ManyToOne(() => SalStore, (salStore) => salStore.salTransferDetails)
  @JoinColumn([{ name: 'FkfStartStore', referencedColumnName: 'pkfStore' }])
  fkfStartStore2: SalStore;

  @ManyToOne(() => SalGoods, (salGoods) => salGoods.salTransferDetails)
  @JoinColumn([{ name: 'FkfStartGoods', referencedColumnName: 'pkfGood' }])
  fkfStartGoods2: SalGoods;

  @ManyToOne(() => SalStore, (salStore) => salStore.salTransferDetails2)
  @JoinColumn([{ name: 'FkfEndStore', referencedColumnName: 'pkfStore' }])
  fkfEndStore2: SalStore;

  @ManyToOne(() => SalGoods, (salGoods) => salGoods.salTransferDetails2)
  @JoinColumn([{ name: 'FkfEndGoods', referencedColumnName: 'pkfGood' }])
  fkfEndGoods2: SalGoods;

  @ManyToOne(
    () => SalContractDetailStatus,
    (salContractDetailStatus) => salContractDetailStatus.salTransferDetails,
  )
  @JoinColumn([
    { name: 'FKFDetailStatusStart', referencedColumnName: 'pkfStatus' },
  ])
  fkfDetailStatusStart: SalContractDetailStatus;

  @ManyToOne(
    () => SalContractDetailStatus,
    (salContractDetailStatus) => salContractDetailStatus.salTransferDetails2,
  )
  @JoinColumn([
    { name: 'FKFDetailStatusEnd', referencedColumnName: 'pkfStatus' },
  ])
  fkfDetailStatusEnd: SalContractDetailStatus;

  @RelationId(
    (salTransferDetail: SalTransferDetail) => salTransferDetail.fkfTransfer2,
  )
  fkfTransfer3: number;

  @RelationId(
    (salTransferDetail: SalTransferDetail) => salTransferDetail.fkfStartStore2,
  )
  fkfStartStore3: number;

  @RelationId(
    (salTransferDetail: SalTransferDetail) => salTransferDetail.fkfStartGoods2,
  )
  fkfStartGoods3: number;

  @RelationId(
    (salTransferDetail: SalTransferDetail) => salTransferDetail.fkfEndStore2,
  )
  fkfEndStore3: number | null;

  @RelationId(
    (salTransferDetail: SalTransferDetail) => salTransferDetail.fkfEndGoods2,
  )
  fkfEndGoods3: number | null;

  @RelationId(
    (salTransferDetail: SalTransferDetail) =>
      salTransferDetail.fkfDetailStatusStart,
  )
  fkfDetailStatusStart2: number;

  @RelationId(
    (salTransferDetail: SalTransferDetail) =>
      salTransferDetail.fkfDetailStatusEnd,
  )
  fkfDetailStatusEnd2: number;
}
