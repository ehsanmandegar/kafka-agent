import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalTransferOrder } from './sal-transfer-order';
import { SalGoods } from './sal-goods';

@Index('PK_salTransferOrderDetail', ['pkfTransferOrderDetail'], {
  unique: true,
})
@Entity('salTransferOrderDetail', { schema: 'dbo' })
export class SalTransferOrderDetail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfTransferOrderDetail' })
  pkfTransferOrderDetail: number;

  @Column('int', { name: 'FkfContract' })
  fkfContract: number;

  @Column('decimal', { name: 'amount', precision: 18, scale: 2 })
  amount: number;

  @Column('nvarchar', { name: 'address', length: 500 })
  address: string;

  @Column('nvarchar', {
    name: 'transferDuration',
    length: 10,
    default: () => "''",
  })
  transferDuration: string;

  @Column('nvarchar', { name: 'memo', length: 500, default: () => "''" })
  memo: string;

  @Column('nvarchar', {
    name: 'porterageSerial',
    length: 50,
    default: () => "''",
  })
  porterageSerial: string;

  @Column('decimal', {
    name: 'finalAmount',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  finalAmount: number;

  @Column('nvarchar', { name: 'weightDate', length: 10, default: () => "''" })
  weightDate: string;

  @Column('int', { name: 'FkfOrderDetial', nullable: true })
  fkfOrderDetial: number | null;

  @Column('int', { name: 'FkfContractDetail', nullable: true })
  fkfContractDetail: number | null;

  @Column('decimal', {
    name: 'amountU2',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  amountU2: number;

  @Column('decimal', {
    name: 'finalAmountU2',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  finalAmountU2: number;

  @Column('nvarchar', { name: 'outPutNo', length: 50, default: () => "''" })
  outPutNo: string;

  @Column('nvarchar', { name: 'driverTell', length: 50, default: () => "''" })
  driverTell: string;

  @Column('nvarchar', { name: 'plaqueNo', length: 50, default: () => "''" })
  plaqueNo: string;

  @Column('nvarchar', { name: 'driverName', length: 150, default: () => "''" })
  driverName: string;

  @Column('nvarchar', { name: 'getGoods', length: 150, default: () => "''" })
  getGoods: string;

  @Column('nvarchar', {
    name: 'loadingOrderNumber',
    length: 50,
    default: () => "''",
  })
  loadingOrderNumber: string;

  @Column('nvarchar', {
    name: 'porterageDate',
    length: 10,
    default: () => "''",
  })
  porterageDate: string;

  @ManyToOne(
    () => SalTransferOrder,
    (salTransferOrder) => salTransferOrder.salTransferOrderDetails,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'FkfTransferOrder', referencedColumnName: 'pkfTransferOrder' },
  ])
  fkfTransferOrder: SalTransferOrder;

  @ManyToOne(() => SalGoods, (salGoods) => salGoods.salTransferOrderDetails)
  @JoinColumn([{ name: 'FkfGoods', referencedColumnName: 'pkfGood' }])
  fkfGoods: SalGoods;

  @RelationId(
    (salTransferOrderDetail: SalTransferOrderDetail) =>
      salTransferOrderDetail.fkfTransferOrder,
  )
  fkfTransferOrder2: number;

  @RelationId(
    (salTransferOrderDetail: SalTransferOrderDetail) =>
      salTransferOrderDetail.fkfGoods,
  )
  fkfGoods2: number;
}
