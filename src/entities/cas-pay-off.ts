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
import { CasGetPayOpening } from './cas-get-pay-opening';
import { CasGetPayDetail } from './cas-get-pay-detail';
import { CasReturnChecksOpening } from './cas-return-checks-opening';
import { SalContract } from './sal-contract';
import { SalContractOpen } from './sal-contract-open';

@Index('PK_casPayOff', ['pkfPayOff'], { unique: true })
@Entity('casPayOff', { schema: 'dbo' })
export class CasPayOff {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfPayOff' })
  pkfPayOff: number;

  @Column('bigint', { name: 'payOff' })
  payOff: string;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('int', { name: 'FkfGetPayBes', nullable: true })
  fkfGetPayBes: number | null;

  @Column('int', { name: 'FkfGetPayBesOpen', nullable: true })
  fkfGetPayBesOpen: number | null;

  @Column('int', { name: 'FkfGetPay2', nullable: true })
  fkfGetPay2: number | null;

  @Column('int', { name: 'FkfGetPay2Opening', nullable: true })
  fkfGetPay2Opening: number | null;

  @Column('int', { name: 'FkfContractBuy', nullable: true })
  fkfContractBuy: number | null;

  @Column('int', { name: 'FkfContractBuyOpen', nullable: true })
  fkfContractBuyOpen: number | null;

  @ManyToOne(() => CasGetPay, (casGetPay) => casGetPay.casPayOffs)
  @JoinColumn([{ name: 'FkfGetPay', referencedColumnName: 'pkfGetPay' }])
  fkfGetPay: CasGetPay;

  @ManyToOne(
    () => CasGetPayOpening,
    (casGetPayOpening) => casGetPayOpening.casPayOffs,
  )
  @JoinColumn([
    { name: 'FkfGetPayOpening', referencedColumnName: 'pkfGetPayOpening' },
  ])
  fkfGetPayOpening: CasGetPayOpening;

  @ManyToOne(
    () => CasGetPayDetail,
    (casGetPayDetail) => casGetPayDetail.casPayOffs,
  )
  @JoinColumn([
    { name: 'FkfGetPayDetail', referencedColumnName: 'pkfGetPayDetail' },
  ])
  fkfGetPayDetail: CasGetPayDetail;

  @ManyToOne(
    () => CasReturnChecksOpening,
    (casReturnChecksOpening) => casReturnChecksOpening.casPayOffs,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    {
      name: 'FkfReturnCheckOpening',
      referencedColumnName: 'pkfReturnCheckOpening',
    },
  ])
  fkfReturnCheckOpening: CasReturnChecksOpening;

  @ManyToOne(() => CasGetPay, (casGetPay) => casGetPay.casPayOffs2, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'FkfGetPayPay', referencedColumnName: 'pkfGetPay' }])
  fkfGetPayPay: CasGetPay;

  @ManyToOne(
    () => CasGetPayOpening,
    (casGetPayOpening) => casGetPayOpening.casPayOffs2,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'FkfGetPayOpeningPay', referencedColumnName: 'pkfGetPayOpening' },
  ])
  fkfGetPayOpeningPay: CasGetPayOpening;

  @ManyToOne(() => SalContract, (salContract) => salContract.casPayOffs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'FkfContract', referencedColumnName: 'pkfContract' }])
  fkfContract: SalContract;

  @ManyToOne(
    () => SalContractOpen,
    (salContractOpen) => salContractOpen.casPayOffs,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'FkfContractOpen', referencedColumnName: 'pkfContractOpen' },
  ])
  fkfContractOpen: SalContractOpen;

  @RelationId((casPayOff: CasPayOff) => casPayOff.fkfGetPay)
  fkfGetPay3: number | null;

  @RelationId((casPayOff: CasPayOff) => casPayOff.fkfGetPayOpening)
  fkfGetPayOpening2: number | null;

  @RelationId((casPayOff: CasPayOff) => casPayOff.fkfGetPayDetail)
  fkfGetPayDetail2: number | null;

  @RelationId((casPayOff: CasPayOff) => casPayOff.fkfReturnCheckOpening)
  fkfReturnCheckOpening2: number | null;

  @RelationId((casPayOff: CasPayOff) => casPayOff.fkfGetPayPay)
  fkfGetPayPay2: number | null;

  @RelationId((casPayOff: CasPayOff) => casPayOff.fkfGetPayOpeningPay)
  fkfGetPayOpeningPay2: number | null;

  @RelationId((casPayOff: CasPayOff) => casPayOff.fkfContract)
  fkfContract2: number | null;

  @RelationId((casPayOff: CasPayOff) => casPayOff.fkfContractOpen)
  fkfContractOpen2: number | null;
}
