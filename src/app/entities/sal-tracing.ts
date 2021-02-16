import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalWarehouse } from './sal-warehouse';
import { SalTrustDetail } from './sal-trust-detail';
import { SalTrustStatusRoll } from './sal-trust-status-roll';

@Index('IX_salTracing', ['tracing', 'accYear'], { unique: true })
@Index('IX_salTracing_1', ['fkfOrderKartabl'], {})
@Index('IX_salTracing_2', ['fkfTransferDetail'], {})
@Index('IX_salTracing_3', ['fkfTrustDetail'], {})
@Index('PK_salTracing', ['pkfTracing'], { unique: true })
@Entity('salTracing', { schema: 'dbo' })
export class SalTracing {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfTracing' })
  pkfTracing: number;

  @Column('nvarchar', { name: 'tracing', length: 50, default: () => "''" })
  tracing: string;

  @Column('int', { name: 'FkfTransferDetail', nullable: true })
  fkfTransferDetail: number | null;

  @Column('int', { name: 'FkfWarehouse', nullable: true })
  fkfWarehouse: number | null;

  @Column('nvarchar', { name: 'kovilNo', nullable: true, length: 50 })
  kovilNo: string | null;

  @Column('int', { name: 'weight', default: () => '(0)' })
  weight: number;

  @Column('int', { name: 'coverWeight', default: () => '(0)' })
  coverWeight: number;

  @Column('nvarchar', { name: 'memo', length: 500, default: () => "''" })
  memo: string;

  @Column('nvarchar', {
    name: 'statusDescription',
    length: 2505,
    default: () => "''",
  })
  statusDescription: string;

  @Column('int', { name: 'FkfStatusCutOld', nullable: true })
  fkfStatusCutOld: number | null;

  @Column('int', { name: 'FkfTrustRe', nullable: true })
  fkfTrustRe: number | null;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'weightDes', default: () => '(0)' })
  weightDes: number;

  @Column('int', { name: 'FkfOrderKartabl', nullable: true })
  fkfOrderKartabl: number | null;

  @Column('int', { name: 'FkfTrustDetail', nullable: true })
  fkfTrustDetail: number | null;

  @ManyToOne(() => SalWarehouse, (salWarehouse) => salWarehouse.salTracings)
  @JoinColumn([
    { name: 'FkfTransferDetail', referencedColumnName: 'pkfWarehouse' },
  ])
  fkfTransferDetail2: SalWarehouse;

  @ManyToOne(
    () => SalTrustDetail,
    (salTrustDetail) => salTrustDetail.salTracings,
  )
  @JoinColumn([{ name: 'FkfTDR', referencedColumnName: 'pkfTrustDetail' }])
  fkfTdr: SalTrustDetail;

  @ManyToOne(
    () => SalTrustStatusRoll,
    (salTrustStatusRoll) => salTrustStatusRoll.salTracings,
  )
  @JoinColumn([{ name: 'FkfStatusCut', referencedColumnName: 'pkfRollStatus' }])
  fkfStatusCut: SalTrustStatusRoll;

  @ManyToOne(
    () => SalTrustStatusRoll,
    (salTrustStatusRoll) => salTrustStatusRoll.salTracings2,
  )
  @JoinColumn([
    { name: 'FkfHealthRoll', referencedColumnName: 'pkfRollStatus' },
  ])
  fkfHealthRoll: SalTrustStatusRoll;

  @ManyToOne(
    () => SalTrustDetail,
    (salTrustDetail) => salTrustDetail.salTracings2,
  )
  @JoinColumn([
    { name: 'FkfTDRExport', referencedColumnName: 'pkfTrustDetail' },
  ])
  fkfTdrExport: SalTrustDetail;

  @ManyToOne(
    () => SalTrustDetail,
    (salTrustDetail) => salTrustDetail.salTracings3,
  )
  @JoinColumn([
    { name: 'FkfTrustDetail', referencedColumnName: 'pkfTrustDetail' },
  ])
  fkfTrustDetail2: SalTrustDetail;

  @RelationId((salTracing: SalTracing) => salTracing.fkfTransferDetail2)
  fkfTransferDetail3: number | null;

  @RelationId((salTracing: SalTracing) => salTracing.fkfTdr)
  fkfTdr2: number | null;

  @RelationId((salTracing: SalTracing) => salTracing.fkfStatusCut)
  fkfStatusCut2: number;

  @RelationId((salTracing: SalTracing) => salTracing.fkfHealthRoll)
  fkfHealthRoll2: number;

  @RelationId((salTracing: SalTracing) => salTracing.fkfTdrExport)
  fkfTdrExport2: number | null;

  @RelationId((salTracing: SalTracing) => salTracing.fkfTrustDetail2)
  fkfTrustDetail3: number | null;
}
