import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalRequestGoods } from './sal-request-goods';
import { SalGoods } from './sal-goods';
import { SalGoodType } from './sal-good-type';

@Index('IX_salRequestGoodsDetail', ['fkfRequestGoods'], {})
@Index('IX_salRequestGoodsDetail_1', ['fkfOrderDetail'], {})
@Index('PK_salRequestGoodsDetail', ['pkfRequestGoodsDetail'], { unique: true })
@Entity('salRequestGoodsDetail', { schema: 'dbo' })
export class SalRequestGoodsDetail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfRequestGoodsDetail' })
  pkfRequestGoodsDetail: number;

  @Column('int', { name: 'FkfRequestGoods' })
  fkfRequestGoods: number;

  @Column('decimal', {
    name: 'amountOrder1',
    precision: 18,
    scale: 6,
    default: () => '(0)',
  })
  amountOrder1: number;

  @Column('decimal', {
    name: 'amountOrder2',
    precision: 18,
    scale: 6,
    default: () => '(0)',
  })
  amountOrder2: number;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

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

  @Column('int', { name: 'FkfOrderDetail', nullable: true })
  fkfOrderDetail: number | null;

  @Column('bit', { name: 'payOff', default: () => '(0)' })
  payOff: boolean;

  @Column('nvarchar', {
    name: 'addressNoDet',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  addressNoDet: string | null;

  @Column('int', { name: 'FkfTreaterBuy', nullable: true })
  fkfTreaterBuy: number | null;

  @Column('nvarchar', {
    name: 'notificationDate',
    length: 10,
    default: () => "''",
  })
  notificationDate: string;

  @Column('int', { name: 'FkfRequestGoodsDetailStatus', default: () => '(1)' })
  fkfRequestGoodsDetailStatus: number;

  @Column('nvarchar', { name: 'dateNeeds', length: 10, default: () => "''" })
  dateNeeds: string;

  @Column('nvarchar', {
    name: 'expirationDate',
    length: 50,
    default: () => "''",
  })
  expirationDate: string;

  @Column('nvarchar', { name: 'tracing', length: 50, default: () => "''" })
  tracing: string;

  @Column('int', { name: 'bascouleList', nullable: true })
  bascouleList: number | null;

  @ManyToOne(
    () => SalRequestGoods,
    (salRequestGoods) => salRequestGoods.salRequestGoodsDetails,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'FkfRequestGoods', referencedColumnName: 'pkfRequestGoods' },
  ])
  fkfRequestGoods2: SalRequestGoods;

  @ManyToOne(() => SalGoods, (salGoods) => salGoods.salRequestGoodsDetails)
  @JoinColumn([{ name: 'FkfGoods', referencedColumnName: 'pkfGood' }])
  fkfGoods: SalGoods;

  @ManyToOne(
    () => SalGoodType,
    (salGoodType) => salGoodType.salRequestGoodsDetails,
  )
  @JoinColumn([{ name: 'FKFGoodType', referencedColumnName: 'pkfGoodType' }])
  fkfGoodType: SalGoodType;

  @RelationId(
    (salRequestGoodsDetail: SalRequestGoodsDetail) =>
      salRequestGoodsDetail.fkfRequestGoods2,
  )
  fkfRequestGoods3: number;

  @RelationId(
    (salRequestGoodsDetail: SalRequestGoodsDetail) =>
      salRequestGoodsDetail.fkfGoods,
  )
  fkfGoods2: number;

  @RelationId(
    (salRequestGoodsDetail: SalRequestGoodsDetail) =>
      salRequestGoodsDetail.fkfGoodType,
  )
  fkfGoodType2: number | null;
}
