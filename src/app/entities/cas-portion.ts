import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { CasGetPay } from './cas-get-pay';
import { SalContract } from './sal-contract';

@Index('PK_casPortion', ['pkfPortion'], { unique: true })
@Entity('casPortion', { schema: 'dbo' })
export class CasPortion {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfPortion' })
  pkfPortion: number;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('nvarchar', { name: 'memo', length: 250, default: () => "''" })
  memo: string;

  @Column('bigint', { name: 'price', default: () => '(0)' })
  price: string;

  @Column('int', { name: 'FKFGetCheck', nullable: true })
  fkfGetCheck: number | null;

  @Column('int', { name: 'FkfPay', nullable: true })
  fkfPay: number | null;

  @Column('int', { name: 'FKFSanadDetailBes', nullable: true })
  fkfSanadDetailBes: number | null;

  @Column('int', { name: 'FKFSanadDetailBed', nullable: true })
  fkfSanadDetailBed: number | null;

  @Column('int', { name: 'FkfBuy', nullable: true })
  fkfBuy: number | null;

  @Column('int', { name: 'FkfBuyOtherBed', nullable: true })
  fkfBuyOtherBed: number | null;

  @Column('int', { name: 'FkfBuyOtherBes', nullable: true })
  fkfBuyOtherBes: number | null;

  @Column('int', { name: 'FkfSaleOtherBed', nullable: true })
  fkfSaleOtherBed: number | null;

  @Column('int', { name: 'FkfSaleOtherBes', nullable: true })
  fkfSaleOtherBes: number | null;

  @Column('int', { name: 'FKFSaleReturn', nullable: true })
  fkfSaleReturn: number | null;

  @Column('int', { name: 'FkfBuyReturn', nullable: true })
  fkfBuyReturn: number | null;

  @Column('int', { name: 'FKFGetPayDetailG', nullable: true })
  fkfGetPayDetailG: number | null;

  @Column('int', { name: 'FKFGetPayDetailP', nullable: true })
  fkfGetPayDetailP: number | null;

  @Column('int', { name: 'FKFGetCheckRe', nullable: true })
  fkfGetCheckRe: number | null;

  @Column('int', { name: 'FkfTransferCostDetail', nullable: true })
  fkfTransferCostDetail: number | null;

  @Column('int', { name: 'FKFSaleServise', nullable: true })
  fkfSaleServise: number | null;

  @Column('int', { name: 'FKFSanadImportDetailBes', nullable: true })
  fkfSanadImportDetailBes: number | null;

  @Column('int', { name: 'FKFSanadImportDetailBed', nullable: true })
  fkfSanadImportDetailBed: number | null;

  @Column('int', { name: 'FkfBuyCostBes', nullable: true })
  fkfBuyCostBes: number | null;

  @Column('int', { name: 'FKFPayCheckRe', nullable: true })
  fkfPayCheckRe: number | null;

  @Column('int', { name: 'FKFGetPayDetailGNagative', nullable: true })
  fkfGetPayDetailGNagative: number | null;

  @Column('int', { name: 'FKFGetPayDetailPNagative', nullable: true })
  fkfGetPayDetailPNagative: number | null;

  @Column('int', { name: 'FKFLoanBed', nullable: true })
  fkfLoanBed: number | null;

  @Column('int', { name: 'FKFPayTeraterCheckRe', nullable: true })
  fkfPayTeraterCheckRe: number | null;

  @Column('int', { name: 'FkfSaleCommesion', nullable: true })
  fkfSaleCommesion: number | null;

  @Column('int', { name: 'FKFGetCheckToPayRe', nullable: true })
  fkfGetCheckToPayRe: number | null;

  @Column('int', { name: 'ras', default: () => '(0)' })
  ras: number;

  @Column('int', { name: 'FKFGetDeclaration', nullable: true })
  fkfGetDeclaration: number | null;

  @ManyToOne(() => CasGetPay, (casGetPay) => casGetPay.casPortions, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'FKFGet', referencedColumnName: 'pkfGetPay' }])
  fkfGet: CasGetPay;

  @ManyToOne(() => SalContract, (salContract) => salContract.casPortions, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'FKFSale', referencedColumnName: 'pkfContract' }])
  fkfSale: SalContract;

  @RelationId((casPortion: CasPortion) => casPortion.fkfGet)
  fkfGet2: number | null;

  @RelationId((casPortion: CasPortion) => casPortion.fkfSale)
  fkfSale2: number | null;
}
