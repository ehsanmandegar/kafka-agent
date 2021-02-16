import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalOrder } from './sal-order';
import { SalStore } from './sal-store';
import { SalGoods } from './sal-goods';
import { SalGoodType } from './sal-good-type';
import { SalOrderStatus } from './sal-order-status';

@Index('IX_salOrderDetail', ['fkfOrder'], {})
@Index('IX_salOrderDetail_1', ['fkfStore'], {})
@Index('IX_salOrderDetail_2', ['fkfGoods'], {})
@Index('IX_salOrderDetail_3', ['fkfPortrageD'], {})
@Index('IX_salOrderDetail_4', ['fkfPorterage'], {})
@Index('PK_salOrderDetail', ['pkfOrderDetail'], { unique: true })
@Entity('salOrderDetail', { schema: 'dbo' })
export class SalOrderDetail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfOrderDetail' })
  pkfOrderDetail: number;

  @Column('int', { name: 'FkfOrder' })
  fkfOrder: number;

  @Column('int', { name: 'FkfStore' })
  fkfStore: number;

  @Column('int', { name: 'FkfGoods' })
  fkfGoods: number;

  @Column('decimal', {
    name: 'amount1',
    nullable: true,
    precision: 18,
    scale: 6,
    default: () => '(0)',
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

  @Column('float', { name: 'fee', precision: 53, default: () => '(0)' })
  fee: number;

  @Column('int', { name: 'calcBase', default: () => '(1)' })
  calcBase: number;

  @Column('int', { name: 'carCount', default: () => '(0)' })
  carCount: number;

  @Column('int', { name: 'FkfContract', nullable: true })
  fkfContract: number | null;

  @Column('bit', { name: 'payOff', default: () => '(0)' })
  payOff: boolean;

  @Column('bit', { name: 'estimate', default: () => '(0)' })
  estimate: boolean;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('int', { name: 'commisinFee', default: () => '(0)' })
  commisinFee: number;

  @Column('int', { name: 'FkfUnit1', nullable: true })
  fkfUnit1: number | null;

  @Column('int', { name: 'FkfUnit2', nullable: true })
  fkfUnit2: number | null;

  @Column('int', { name: 'serialD', default: () => '(0)' })
  serialD: number;

  @Column('nvarchar', { name: 'nationalCode', length: 50, default: () => "''" })
  nationalCode: string;

  @Column('nvarchar', { name: 'drivingCode', length: 50, default: () => "''" })
  drivingCode: string;

  @Column('nvarchar', { name: 'driverName', length: 50, default: () => "''" })
  driverName: string;

  @Column('int', { name: 'FkfMotorType', nullable: true })
  fkfMotorType: number | null;

  @Column('nvarchar', { name: 'noCar', length: 50, default: () => "''" })
  noCar: string;

  @Column('nvarchar', { name: 'driverTell', length: 50, default: () => "''" })
  driverTell: string;

  @Column('nvarchar', { name: 'billofLading', length: 50, default: () => "''" })
  billofLading: string;

  @Column('int', { name: 'FkfPorterage', nullable: true })
  fkfPorterage: number | null;

  @Column('int', { name: 'goodUniqe', default: () => '(0)' })
  goodUniqe: number;

  @Column('bit', { name: 'vatAgreement', default: () => '(0)' })
  vatAgreement: boolean;

  @Column('int', { name: 'FkfDestinationStore', nullable: true })
  fkfDestinationStore: number | null;

  @Column('int', { name: 'addressNoDet', nullable: true })
  addressNoDet: number | null;

  @Column('int', { name: 'fkfReleasedLoadDetail', nullable: true })
  fkfReleasedLoadDetail: number | null;

  @Column('nvarchar', { name: 'getDateOrder', length: 10, default: () => "''" })
  getDateOrder: string;

  @Column('int', { name: 'FkffRequestGoodsDetail', nullable: true })
  fkffRequestGoodsDetail: number | null;

  @Column('int', { name: 'FkfPortrageD', nullable: true })
  fkfPortrageD: number | null;

  @Column('decimal', {
    name: 'discountPercent',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  discountPercent: number;

  @Column('int', { name: 'discount', default: () => '(0)' })
  discount: number;

  @Column('float', {
    name: 'feeAgreement',
    precision: 53,
    default: () => '(0)',
  })
  feeAgreement: number;

  @Column('float', { name: 'feeCur', precision: 53, default: () => '(0)' })
  feeCur: number;

  @Column('decimal', {
    name: 'discountPCur',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  discountPCur: number;

  @ManyToOne(() => SalOrder, (salOrder) => salOrder.salOrderDetails, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'FkfOrder', referencedColumnName: 'pkfOrder' }])
  fkfOrder2: SalOrder;

  @ManyToOne(() => SalStore, (salStore) => salStore.salOrderDetails)
  @JoinColumn([{ name: 'FkfStore', referencedColumnName: 'pkfStore' }])
  fkfStore2: SalStore;

  @ManyToOne(() => SalGoods, (salGoods) => salGoods.salOrderDetails)
  @JoinColumn([{ name: 'FkfGoods', referencedColumnName: 'pkfGood' }])
  fkfGoods2: SalGoods;

  @ManyToOne(() => SalGoodType, (salGoodType) => salGoodType.salOrderDetails)
  @JoinColumn([{ name: 'FKFGoodType', referencedColumnName: 'pkfGoodType' }])
  fkfGoodType: SalGoodType;

  @ManyToOne(
    () => SalOrderStatus,
    (salOrderStatus) => salOrderStatus.salOrderDetails,
  )
  @JoinColumn([
    { name: 'FkfOrderStatus', referencedColumnName: 'pkfOrderStatus' },
  ])
  fkfOrderStatus: SalOrderStatus;

  @RelationId((salOrderDetail: SalOrderDetail) => salOrderDetail.fkfOrder2)
  fkfOrder3: number;

  @RelationId((salOrderDetail: SalOrderDetail) => salOrderDetail.fkfStore2)
  fkfStore3: number;

  @RelationId((salOrderDetail: SalOrderDetail) => salOrderDetail.fkfGoods2)
  fkfGoods3: number;

  @RelationId((salOrderDetail: SalOrderDetail) => salOrderDetail.fkfGoodType)
  fkfGoodType2: number | null;

  @RelationId((salOrderDetail: SalOrderDetail) => salOrderDetail.fkfOrderStatus)
  fkfOrderStatus2: number | null;
}
