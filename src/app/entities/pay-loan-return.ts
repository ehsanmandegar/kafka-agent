import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { PayLoan } from './pay-loan';

@Index('PK_payLoanReturn', ['pkfLoanReturn'], { unique: true })
@Entity('payLoanReturn', { schema: 'dbo' })
export class PayLoanReturn {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfLoanReturn' })
  pkfLoanReturn: number;

  @Column('int', { name: 'serial', nullable: true })
  serial: number | null;

  @Column('int', { name: 'mainReturnAmount', nullable: true })
  mainReturnAmount: number | null;

  @Column('int', { name: 'profitAmount', nullable: true })
  profitAmount: number | null;

  @Column('varchar', { name: 'dueDate', nullable: true, length: 10 })
  dueDate: string | null;

  @Column('int', { name: 'penaltyAmount', nullable: true })
  penaltyAmount: number | null;

  @Column('int', { name: 'returnAmount', nullable: true })
  returnAmount: number | null;

  @Column('int', { name: 'clearStatus', nullable: true })
  clearStatus: number | null;

  @Column('varchar', { name: 'clearDate', nullable: true, length: 10 })
  clearDate: string | null;

  @Column('bit', { name: 'isManualClear', nullable: true })
  isManualClear: boolean | null;

  @Column('nvarchar', { name: 'payNo', nullable: true, length: 50 })
  payNo: string | null;

  @Column('nvarchar', { name: 'recieveNo', nullable: true, length: 50 })
  recieveNo: string | null;

  @Column('nvarchar', { name: 'recieveSalary', nullable: true, length: 50 })
  recieveSalary: string | null;

  @Column('text', { name: 'desc', nullable: true })
  desc: string | null;

  @ManyToOne(() => PayLoan, (payLoan) => payLoan.payLoanReturns)
  @JoinColumn([{ name: 'fkfLoan', referencedColumnName: 'pkfLoan' }])
  fkfLoan: PayLoan;

  @RelationId((payLoanReturn: PayLoanReturn) => payLoanReturn.fkfLoan)
  fkfLoan2: number;
}
