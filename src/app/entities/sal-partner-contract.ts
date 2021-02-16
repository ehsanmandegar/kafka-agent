import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalBuyContract } from './sal-buy-contract';
import { GenTreater } from './gen-treater';
import { GenEmployee } from './gen-employee';
import { SalPartnerContractDetail } from './sal-partner-contract-detail';
import { SalPatnerContractDocument } from './sal-patner-contract-document';

@Index('IX_salPartnerContract', ['fkfContract'], { unique: true })
@Index('IX_salPartnerContract_1', ['serial', 'accYear'], { unique: true })
@Index('PK_salPartnerContract', ['pkfPartnerContract'], { unique: true })
@Entity('salPartnerContract', { schema: 'dbo' })
export class SalPartnerContract {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfPartnerContract' })
  pkfPartnerContract: number;

  @Column('nvarchar', { name: 'contractDate', length: 10, default: () => "''" })
  contractDate: string;

  @Column('int', { name: 'FkfContract' })
  fkfContract: number;

  @Column('int', { name: 'FkfMoeinIncome' })
  fkfMoeinIncome: number;

  @Column('int', { name: 'FkfMoeinCost' })
  fkfMoeinCost: number;

  @Column('int', { name: 'FkfTreaterPayType' })
  fkfTreaterPayType: number;

  @Column('decimal', {
    name: 'taxRateOfPartner',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  taxRateOfPartner: number;

  @Column('decimal', {
    name: 'taxRateOfVat',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  taxRateOfVat: number;

  @Column('nvarchar', { name: 'memo', length: 500, default: () => "''" })
  memo: string;

  @Column('varchar', { name: 'createDate', length: 10 })
  createDate: string;

  @Column('nvarchar', { name: 'editDate', length: 50, default: () => "''" })
  editDate: string;

  @Column('varchar', { name: 'finalDate', length: 10, default: () => "''" })
  finalDate: string;

  @Column('int', { name: 'FkfFinalUser', nullable: true })
  fkfFinalUser: number | null;

  @Column('bit', { name: 'isClosed' })
  isClosed: boolean;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('int', { name: 'status', default: () => '(1)' })
  status: number;

  @Column('decimal', {
    name: 'treaterPay',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  treaterPay: number;

  @OneToMany(
    () => SalBuyContract,
    (salBuyContract) => salBuyContract.fkfPartnerContract,
  )
  salBuyContracts: SalBuyContract[];

  @OneToOne(() => GenTreater, (genTreater) => genTreater.salPartnerContract)
  @JoinColumn([{ name: 'FkfContract', referencedColumnName: 'pkfTreater' }])
  fkfContract2: GenTreater;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.salPartnerContracts)
  @JoinColumn([
    { name: 'FkfTreaterIncome', referencedColumnName: 'pkfTreater' },
  ])
  fkfTreaterIncome: GenTreater;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.salPartnerContracts2)
  @JoinColumn([{ name: 'FkfTreaterCost', referencedColumnName: 'pkfTreater' }])
  fkfTreaterCost: GenTreater;

  @ManyToOne(
    () => GenEmployee,
    (genEmployee) => genEmployee.salPartnerContracts,
  )
  @JoinColumn([{ name: 'FkfCreateUser', referencedColumnName: 'pkfEmployee' }])
  fkfCreateUser: GenEmployee;

  @ManyToOne(
    () => GenEmployee,
    (genEmployee) => genEmployee.salPartnerContracts2,
  )
  @JoinColumn([{ name: 'FkfEditUser', referencedColumnName: 'pkfEmployee' }])
  fkfEditUser: GenEmployee;

  @OneToMany(
    () => SalPartnerContractDetail,
    (salPartnerContractDetail) => salPartnerContractDetail.fkfPartnerContract,
  )
  salPartnerContractDetails: SalPartnerContractDetail[];

  @OneToMany(
    () => SalPatnerContractDocument,
    (salPatnerContractDocument) => salPatnerContractDocument.fkfPartnerContract,
  )
  salPatnerContractDocuments: SalPatnerContractDocument[];

  @RelationId(
    (salPartnerContract: SalPartnerContract) => salPartnerContract.fkfContract2,
  )
  fkfContract3: number;

  @RelationId(
    (salPartnerContract: SalPartnerContract) =>
      salPartnerContract.fkfTreaterIncome,
  )
  fkfTreaterIncome2: number;

  @RelationId(
    (salPartnerContract: SalPartnerContract) =>
      salPartnerContract.fkfTreaterCost,
  )
  fkfTreaterCost2: number;

  @RelationId(
    (salPartnerContract: SalPartnerContract) =>
      salPartnerContract.fkfCreateUser,
  )
  fkfCreateUser2: number;

  @RelationId(
    (salPartnerContract: SalPartnerContract) => salPartnerContract.fkfEditUser,
  )
  fkfEditUser2: number | null;
}
