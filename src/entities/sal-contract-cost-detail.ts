import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { GenTreater } from './gen-treater';
import { SalContract } from './sal-contract';

@Index('PK_salContractCostDetail', ['pkfContractCostDetail'], { unique: true })
@Entity('salContractCostDetail', { schema: 'dbo' })
export class SalContractCostDetail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfContractCostDetail' })
  pkfContractCostDetail: number;

  @Column('bigint', { name: 'price' })
  price: string;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('int', { name: 'FkfTreaterBesMoein' })
  fkfTreaterBesMoein: number;

  @Column('int', { name: 'FkfBesTreater2', nullable: true })
  fkfBesTreater2: number | null;

  @Column('int', { name: 'FkfBesTreater3', nullable: true })
  fkfBesTreater3: number | null;

  @Column('nvarchar', {
    name: 'billOfLading',
    length: 150,
    default: () => "''",
  })
  billOfLading: string;

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

  @ManyToOne(
    () => GenTreater,
    (genTreater) => genTreater.salContractCostDetails,
  )
  @JoinColumn([{ name: 'FkfBesTreater', referencedColumnName: 'pkfTreater' }])
  fkfBesTreater: GenTreater;

  @ManyToOne(
    () => SalContract,
    (salContract) => salContract.salContractCostDetails,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([{ name: 'FkfContract', referencedColumnName: 'pkfContract' }])
  fkfContract: SalContract;

  @RelationId(
    (salContractCostDetail: SalContractCostDetail) =>
      salContractCostDetail.fkfBesTreater,
  )
  fkfBesTreater4: number;

  @RelationId(
    (salContractCostDetail: SalContractCostDetail) =>
      salContractCostDetail.fkfContract,
  )
  fkfContract2: number;
}
