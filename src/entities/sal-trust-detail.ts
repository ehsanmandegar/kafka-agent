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
import { SalCutRequestDetail } from './sal-cut-request-detail';
import { SalTracing } from './sal-tracing';
import { SalTrust } from './sal-trust';
import { SalGoods } from './sal-goods';
import { SalWarehouse } from './sal-warehouse';
import { SalTrustStatusRoll } from './sal-trust-status-roll';
import { StrOrder } from './str-order';

@Index('IX_salTrustDetail', ['tracing'], {})
@Index('IX_salTrustDetail_1', ['fkfGood'], {})
@Index('IX_salTrustDetail_2', ['mainOrderNo'], {})
@Index('IX_salTrustDetail_3', ['fkfTrust'], {})
@Index('PK_salTrustDetail', ['pkfTrustDetail'], { unique: true })
@Entity('salTrustDetail', { schema: 'dbo' })
export class SalTrustDetail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfTrustDetail' })
  pkfTrustDetail: number;

  @Column('int', { name: 'FkfTrust' })
  fkfTrust: number;

  @Column('int', { name: 'FkfGood' })
  fkfGood: number;

  @Column('decimal', { name: 'amount1', precision: 12, scale: 2 })
  amount1: number;

  @Column('decimal', {
    name: 'amount2',
    precision: 12,
    scale: 2,
    default: () => '0',
  })
  amount2: number;

  @Column('nvarchar', { name: 'mainOrderNO', length: 50, default: () => "''" })
  mainOrderNo: string;

  @Column('nvarchar', { name: 'orderNO', length: 50, default: () => "''" })
  orderNo: string;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('bit', { name: 'payOff', default: () => '0' })
  payOff: boolean;

  @Column('bigint', { name: 'storeCost', default: () => '0' })
  storeCost: string;

  @Column('decimal', {
    name: 'amount1Export',
    precision: 18,
    scale: 2,
    default: () => '0',
  })
  amount1Export: number;

  @Column('decimal', {
    name: 'amount2Export',
    precision: 18,
    scale: 2,
    default: () => '0',
  })
  amount2Export: number;

  @Column('nvarchar', { name: 'memoOrder', length: 255, default: () => "''" })
  memoOrder: string;

  @Column('bit', { name: 'typeK', default: () => '0' })
  typeK: boolean;

  @Column('bit', { name: 'typeM', default: () => '0' })
  typeM: boolean;

  @Column('nvarchar', { name: 'dateOrder', length: 50, default: () => "''" })
  dateOrder: string;

  @Column('int', { name: 'pkfTrustDetail2', nullable: true })
  pkfTrustDetail2: number | null;

  @Column('decimal', {
    name: 'amount1Temp',
    precision: 18,
    scale: 2,
    default: () => '0',
  })
  amount1Temp: number;

  @Column('decimal', {
    name: 'amount2Temp',
    precision: 18,
    scale: 2,
    default: () => '0',
  })
  amount2Temp: number;

  @Column('int', { name: 'weightSourceDetail', default: () => '0' })
  weightSourceDetail: number;

  @Column('int', { name: 'oldPkf', nullable: true })
  oldPkf: number | null;

  @Column('nvarchar', { name: 'tracing', length: 50, default: () => "''" })
  tracing: string;

  @Column('int', { name: 'coverWeight', default: () => '(0)' })
  coverWeight: number;

  @Column('int', { name: 'FkfTDR1', nullable: true })
  fkfTdr1: number | null;

  @Column('bigint', { name: 'cutCost', default: () => '(0)' })
  cutCost: string;

  @Column('bigint', { name: 'loadCost', default: () => '(0)' })
  loadCost: string;

  @Column('nvarchar', { name: 'kovilNo', length: 50, default: () => "''" })
  kovilNo: string;

  @Column('nvarchar', {
    name: 'statusDescription1',
    length: 255,
    default: () => "N''",
  })
  statusDescription1: string;

  @Column('int', { name: 'FkfTDRExport1', nullable: true })
  fkfTdrExport1: number | null;

  @Column('int', { name: 'FkfStatusCutOld1', nullable: true })
  fkfStatusCutOld1: number | null;

  @Column('int', { name: 'FkfTrustRe', nullable: true })
  fkfTrustRe: number | null;

  @OneToMany(
    () => SalCutRequestDetail,
    (salCutRequestDetail) => salCutRequestDetail.fkfTrustDetail2,
  )
  salCutRequestDetails: SalCutRequestDetail[];

  @OneToMany(
    () => SalCutRequestDetail,
    (salCutRequestDetail) => salCutRequestDetail.fkfTrustDetailTracing,
  )
  salCutRequestDetails2: SalCutRequestDetail[];

  @OneToMany(() => SalTracing, (salTracing) => salTracing.fkfTdr)
  salTracings: SalTracing[];

  @OneToMany(() => SalTracing, (salTracing) => salTracing.fkfTdrExport)
  salTracings2: SalTracing[];

  @OneToMany(() => SalTracing, (salTracing) => salTracing.fkfTrustDetail2)
  salTracings3: SalTracing[];

  @ManyToOne(() => SalTrust, (salTrust) => salTrust.salTrustDetails, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'FkfTrust', referencedColumnName: 'pkfTrust' }])
  fkfTrust2: SalTrust;

  @ManyToOne(() => SalGoods, (salGoods) => salGoods.salTrustDetails)
  @JoinColumn([{ name: 'FkfGood', referencedColumnName: 'pkfGood' }])
  fkfGood2: SalGoods;

  @ManyToOne(() => SalWarehouse, (salWarehouse) => salWarehouse.salTrustDetails)
  @JoinColumn([{ name: 'FkfWarehouse', referencedColumnName: 'pkfWarehouse' }])
  fkfWarehouse: SalWarehouse;

  @ManyToOne(
    () => SalTrustStatusRoll,
    (salTrustStatusRoll) => salTrustStatusRoll.salTrustDetails,
  )
  @JoinColumn([
    { name: 'FkfStatusCut1', referencedColumnName: 'pkfRollStatus' },
  ])
  fkfStatusCut: SalTrustStatusRoll;

  @ManyToOne(
    () => SalTrustStatusRoll,
    (salTrustStatusRoll) => salTrustStatusRoll.salTrustDetails2,
  )
  @JoinColumn([
    { name: 'FkfHealthRoll1', referencedColumnName: 'pkfRollStatus' },
  ])
  fkfHealthRoll: SalTrustStatusRoll;

  @OneToMany(() => StrOrder, (strOrder) => strOrder.fkfTrustDetail)
  strOrders: StrOrder[];

  @RelationId((salTrustDetail: SalTrustDetail) => salTrustDetail.fkfTrust2)
  fkfTrust3: number;

  @RelationId((salTrustDetail: SalTrustDetail) => salTrustDetail.fkfGood2)
  fkfGood3: number;

  @RelationId((salTrustDetail: SalTrustDetail) => salTrustDetail.fkfWarehouse)
  fkfWarehouse2: number | null;

  @RelationId((salTrustDetail: SalTrustDetail) => salTrustDetail.fkfStatusCut)
  fkfStatusCut2: number;

  @RelationId((salTrustDetail: SalTrustDetail) => salTrustDetail.fkfHealthRoll)
  fkfHealthRoll2: number;
}
