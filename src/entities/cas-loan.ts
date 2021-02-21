import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('IX_casLoan', ['serial', 'accYear'], { unique: true })
@Index('PK_casLoan1', ['pkfLoan'], { unique: true })
@Entity('casLoan', { schema: 'dbo' })
export class CasLoan {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfLoan' })
  pkfLoan: number;

  @Column('int', { name: 'serial', default: () => '(0)' })
  serial: number;

  @Column('int', { name: 'FKFLoantype', default: () => '(0)' })
  fkfLoantype: number;

  @Column('int', { name: 'FKFBenefitType' })
  fkfBenefitType: number;

  @Column('varchar', { name: 'loanDate', length: 10, default: () => "' '" })
  loanDate: string;

  @Column('bigint', { name: 'mainAmount', default: () => '(0)' })
  mainAmount: string;

  @Column('int', { name: 'FKFTashilat' })
  fkfTashilat: number;

  @Column('int', { name: 'FKFTreater' })
  fkfTreater: number;

  @Column('int', { name: 'FKFTreaterMoien' })
  fkfTreaterMoien: number;

  @Column('decimal', {
    name: 'benefitRate',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  benefitRate: number;

  @Column('varchar', { name: 'beginDate', length: 10, default: () => "''" })
  beginDate: string;

  @Column('int', { name: 'roundCount', default: () => '(0)' })
  roundCount: number;

  @Column('int', { name: 'addTo', default: () => '(0)' })
  addTo: number;

  @Column('int', { name: 'accYear', default: () => '(0)' })
  accYear: number;

  @Column('int', { name: 'modat', default: () => '(12)' })
  modat: number;

  @Column('int', { name: 'period', default: () => '(30)' })
  period: number;

  @Column('int', { name: 'FKFSanad', nullable: true })
  fkfSanad: number | null;

  @Column('int', { name: 'sanadTempNo', nullable: true })
  sanadTempNo: number | null;

  @Column('int', { name: 'FkfCreateUser', nullable: true })
  fkfCreateUser: number | null;

  @Column('nvarchar', { name: 'createDate', nullable: true, length: 10 })
  createDate: string | null;

  @Column('int', { name: 'FkfEditUser', nullable: true })
  fkfEditUser: number | null;

  @Column('nvarchar', { name: 'editDate', nullable: true, length: 10 })
  editDate: string | null;

  @Column('int', { name: 'FkfMarkaz', nullable: true })
  fkfMarkaz: number | null;

  @Column('int', { name: 'FkfFactorBank', nullable: true })
  fkfFactorBank: number | null;

  @Column('int', { name: 'FkfLoanSanad', default: () => '(2)' })
  fkfLoanSanad: number;

  @Column('bigint', { name: 'prePay', default: () => '(0)' })
  prePay: string;

  @Column('int', { name: 'FKFMoeinLoantype', nullable: true })
  fkfMoeinLoantype: number | null;

  @Column('int', { name: 'FKFTreater2', nullable: true })
  fkfTreater2: number | null;

  @Column('int', { name: 'oldpkf', nullable: true })
  oldpkf: number | null;

  @Column('int', { name: 'newPkf', nullable: true })
  newPkf: number | null;
}
