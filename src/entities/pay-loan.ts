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
import { PayLoanType } from './pay-loan-type';
import { GenTreater } from './gen-treater';
import { PayLoanReturn } from './pay-loan-return';

@Index('PK_payLoan', ['pkfLoan'], { unique: true })
@Entity('payLoan', { schema: 'dbo' })
export class PayLoan {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfLoan' })
  pkfLoan: number;

  @Column('int', { name: 'loanNo' })
  loanNo: number;

  @Column('int', { name: 'fkfFacilityType' })
  fkfFacilityType: number;

  @Column('int', { name: 'fkfCurrency', nullable: true, default: () => '(1)' })
  fkfCurrency: number | null;

  @Column('varchar', { name: 'loanDate', nullable: true, length: 10 })
  loanDate: string | null;

  @Column('int', { name: 'mainAmount', nullable: true, default: () => '(0)' })
  mainAmount: number | null;

  @Column('real', {
    name: 'profitAmount',
    nullable: true,
    precision: 24,
    default: () => '(0)',
  })
  profitAmount: number | null;

  @Column('int', { name: 'totalAmount', nullable: true })
  totalAmount: number | null;

  @Column('int', { name: 'remainAmount', nullable: true, default: () => '(0)' })
  remainAmount: number | null;

  @Column('int', { name: 'fld_PayQTY', nullable: true, default: () => '(1)' })
  fldPayQty: number | null;

  @Column('real', {
    name: 'fld_Karmozd',
    nullable: true,
    precision: 24,
    default: () => '(0)',
  })
  fldKarmozd: number | null;

  @Column('varchar', {
    name: 'fld_StartDate',
    nullable: true,
    length: 10,
    default: () => "''",
  })
  fldStartDate: string | null;

  @Column('varchar', {
    name: 'fld_LastDate',
    nullable: true,
    length: 10,
    default: () => "''",
  })
  fldLastDate: string | null;

  @Column('real', {
    name: 'fld_BenefitRate',
    nullable: true,
    precision: 24,
    default: () => '(0)',
  })
  fldBenefitRate: number | null;

  @Column('int', { name: 'fld_LastPay', nullable: true, default: () => '(0)' })
  fldLastPay: number | null;

  @Column('int', { name: 'fld_PayPrice', nullable: true, default: () => '(0)' })
  fldPayPrice: number | null;

  @Column('int', { name: 'accYear', nullable: true, default: () => '(0)' })
  accYear: number | null;

  @Column('nvarchar', { name: 'fld_Desc', nullable: true, length: 300 })
  fldDesc: string | null;

  @ManyToOne(() => PayLoanType, (payLoanType) => payLoanType.payLoans)
  @JoinColumn([{ name: 'fkfLoanType', referencedColumnName: 'pkfLoanType' }])
  fkfLoanType: PayLoanType;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.payLoans)
  @JoinColumn([{ name: 'fkfEmployee', referencedColumnName: 'pkfTreater' }])
  fkfEmployee: GenTreater;

  @OneToMany(() => PayLoanReturn, (payLoanReturn) => payLoanReturn.fkfLoan)
  payLoanReturns: PayLoanReturn[];

  @RelationId((payLoan: PayLoan) => payLoan.fkfLoanType)
  fkfLoanType2: number;

  @RelationId((payLoan: PayLoan) => payLoan.fkfEmployee)
  fkfEmployee2: number | null;
}
