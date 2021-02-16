import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalContractCost } from './sal-contract-cost';
import { GenTreater } from './gen-treater';
import { SalTransfer } from './sal-transfer';

@Index('IX_salTransferCostDetail', ['fkfTransfer'], {})
@Index('PK_salTransferCostDetail', ['pkfTransferCostDetail'], { unique: true })
@Entity('salTransferCostDetail', { schema: 'dbo' })
export class SalTransferCostDetail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfTransferCostDetail' })
  pkfTransferCostDetail: number;

  @Column('bigint', { name: 'price' })
  price: string;

  @Column('int', { name: 'FkfTransfer' })
  fkfTransfer: number;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('nvarchar', {
    name: 'billOfLading',
    length: 100,
    default: () => "''",
  })
  billOfLading: string;

  @Column('int', { name: 'FkfTreaterMoein', nullable: true })
  fkfTreaterMoein: number | null;

  @Column('nvarchar', { name: 'driverName', length: 150, default: () => "''" })
  driverName: string;

  @Column('nvarchar', {
    name: 'driverFamile',
    length: 150,
    default: () => "''",
  })
  driverFamile: string;

  @Column('nvarchar', {
    name: 'driverNationalCode',
    length: 50,
    default: () => "''",
  })
  driverNationalCode: string;

  @Column('nvarchar', { name: 'driverTell', length: 150, default: () => "''" })
  driverTell: string;

  @Column('nvarchar', { name: 'driverDate', length: 150, default: () => "''" })
  driverDate: string;

  @Column('int', { name: 'FkfDriverCity', nullable: true })
  fkfDriverCity: number | null;

  @Column('bit', { name: 'isVat', default: () => '(0)' })
  isVat: boolean;

  @Column('nvarchar', { name: 'carNoDet', length: 50, default: () => "''" })
  carNoDet: string;

  @Column('int', { name: 'FkfBesTreater2', nullable: true })
  fkfBesTreater2: number | null;

  @Column('int', { name: 'FkfBesTreater3', nullable: true })
  fkfBesTreater3: number | null;

  @ManyToOne(
    () => SalContractCost,
    (salContractCost) => salContractCost.salTransferCostDetails,
  )
  @JoinColumn([
    { name: 'FkfContractCost', referencedColumnName: 'pkfContractCost' },
  ])
  fkfContractCost: SalContractCost;

  @ManyToOne(
    () => GenTreater,
    (genTreater) => genTreater.salTransferCostDetails,
  )
  @JoinColumn([{ name: 'FkfBesTreater', referencedColumnName: 'pkfTreater' }])
  fkfBesTreater: GenTreater;

  @ManyToOne(
    () => SalTransfer,
    (salTransfer) => salTransfer.salTransferCostDetails,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([{ name: 'FkfTransfer', referencedColumnName: 'pkfTransfer' }])
  fkfTransfer2: SalTransfer;

  @RelationId(
    (salTransferCostDetail: SalTransferCostDetail) =>
      salTransferCostDetail.fkfContractCost,
  )
  fkfContractCost2: number;

  @RelationId(
    (salTransferCostDetail: SalTransferCostDetail) =>
      salTransferCostDetail.fkfBesTreater,
  )
  fkfBesTreater4: number;

  @RelationId(
    (salTransferCostDetail: SalTransferCostDetail) =>
      salTransferCostDetail.fkfTransfer2,
  )
  fkfTransfer3: number;
}
