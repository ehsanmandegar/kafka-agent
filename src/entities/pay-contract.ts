import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PayContractFactors } from './pay-contract-factors';

@Index('PK_payContract', ['pkfContract'], { unique: true })
@Entity('payContract', { schema: 'dbo' })
export class PayContract {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfContract' })
  pkfContract: number;

  @Column('int', { name: 'fkfTreater' })
  fkfTreater: number;

  @Column('int', { name: 'fkfContractType' })
  fkfContractType: number;

  @Column('int', { name: 'contractNo' })
  contractNo: number;

  @Column('varchar', {
    name: 'exportDate',
    nullable: true,
    length: 10,
    default: () => "''",
  })
  exportDate: string | null;

  @Column('varchar', {
    name: 'validationDate',
    nullable: true,
    length: 10,
    default: () => "'0000/00/00'",
  })
  validationDate: string | null;

  @Column('varchar', {
    name: 'fld_ExpireDate',
    nullable: true,
    length: 10,
    default: () => "'9999/99/99'",
  })
  fldExpireDate: string | null;

  @Column('varchar', {
    name: 'endDate',
    nullable: true,
    length: 10,
    default: () => "''",
  })
  endDate: string | null;

  @Column('varchar', {
    name: 'employeeDate',
    nullable: true,
    length: 10,
    default: () => "''",
  })
  employeeDate: string | null;

  @Column('int', {
    name: 'fkfEmployeeType',
    nullable: true,
    default: () => '(1)',
  })
  fkfEmployeeType: number | null;

  @Column('int', { name: 'fkfPlace', nullable: true, default: () => '(1)' })
  fkfPlace: number | null;

  @Column('int', { name: 'fkfJob', nullable: true, default: () => '(1001)' })
  fkfJob: number | null;

  @Column('int', { name: 'fkfTaxGroup', nullable: true, default: () => '(1)' })
  fkfTaxGroup: number | null;

  @Column('int', { name: 'fkfTaxAgent', nullable: true, default: () => '(1)' })
  fkfTaxAgent: number | null;

  @Column('int', {
    name: 'fkfCostCenter',
    nullable: true,
    default: () => '(1)',
  })
  fkfCostCenter: number | null;

  @Column('int', {
    name: 'homeLoanRePay',
    nullable: true,
    default: () => '(0)',
  })
  homeLoanRePay: number | null;

  @Column('bit', {
    name: 'isTamminSubscript',
    nullable: true,
    default: () => '(1)',
  })
  isTamminSubscript: boolean | null;

  @Column('int', {
    name: 'fkfTamminAgent',
    nullable: true,
    default: () => '(1)',
  })
  fkfTamminAgent: number | null;

  @Column('bit', { name: 'isHardJob', nullable: true, default: () => '(0)' })
  isHardJob: boolean | null;

  @Column('bit', { name: 'isMissMaster', nullable: true, default: () => '(0)' })
  isMissMaster: boolean | null;

  @Column('bit', { name: 'isMissNoWork', nullable: true, default: () => '(0)' })
  isMissNoWork: boolean | null;

  @Column('bit', {
    name: 'isComplementSubscript',
    nullable: true,
    default: () => '(0)',
  })
  isComplementSubscript: boolean | null;

  @Column('int', {
    name: 'fkfComplementAgent',
    nullable: true,
    default: () => '(0)',
  })
  fkfComplementAgent: number | null;

  @Column('bit', {
    name: 'isActiveContract',
    nullable: true,
    default: () => '(1)',
  })
  isActiveContract: boolean | null;

  @Column('int', { name: 'accYear', nullable: true, default: () => '(0)' })
  accYear: number | null;

  @Column('bit', { name: 'IsSettlement', nullable: true, default: () => '(0)' })
  isSettlement: boolean | null;

  @Column('int', { name: 'fkAccSanadID', nullable: true, default: () => '(0)' })
  fkAccSanadId: number | null;

  @Column('varchar', {
    name: 'fld_AccSanadDate',
    nullable: true,
    length: 10,
    default: () => "''",
  })
  fldAccSanadDate: string | null;

  @Column('int', {
    name: 'fk_SettlementSanad',
    nullable: true,
    default: () => '(0)',
  })
  fkSettlementSanad: number | null;

  @Column('varchar', {
    name: 'fk_SettlementSanadDate',
    nullable: true,
    length: 10,
    default: () => "''",
  })
  fkSettlementSanadDate: string | null;

  @Column('varchar', {
    name: 'fld_SettlementTo',
    nullable: true,
    length: 10,
    default: () => "''",
  })
  fldSettlementTo: string | null;

  @Column('int', {
    name: 'fkfEmpTimeType',
    nullable: true,
    default: () => '(1)',
  })
  fkfEmpTimeType: number | null;

  @Column('int', { name: 'fld_SettlementDays', nullable: true })
  fldSettlementDays: number | null;

  @Column('int', {
    name: 'fld_SettlementLeave',
    nullable: true,
    default: () => '(0)',
  })
  fldSettlementLeave: number | null;

  @Column('varchar', {
    name: 'fld_SettlementDate',
    nullable: true,
    length: 10,
    default: () => "''",
  })
  fldSettlementDate: string | null;

  @Column('int', {
    name: 'fk_MainContract',
    nullable: true,
    default: () => '(0)',
  })
  fkMainContract: number | null;

  @Column('nvarchar', {
    name: 'fld_Adder',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  fldAdder: string | null;

  @Column('datetime', { name: 'fld_AddDate', nullable: true })
  fldAddDate: Date | null;

  @Column('nvarchar', {
    name: 'fld_Editor',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  fldEditor: string | null;

  @Column('datetime', { name: 'fld_EditDate', nullable: true })
  fldEditDate: Date | null;

  @Column('nvarchar', {
    name: 'fld_Deleter',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  fldDeleter: string | null;

  @Column('datetime', { name: 'fld_DeleteDate', nullable: true })
  fldDeleteDate: Date | null;

  @Column('bit', { name: 'fk_RowStatus', nullable: true, default: () => '(1)' })
  fkRowStatus: boolean | null;

  @Column('smallint', {
    name: 'fkfJobGroup',
    nullable: true,
    default: () => '(1)',
  })
  fkfJobGroup: number | null;

  @OneToMany(
    () => PayContractFactors,
    (payContractFactors) => payContractFactors.fkfContract,
  )
  payContractFactors: PayContractFactors[];
}
