import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PayLoan } from './pay-loan';

@Index('PK_payLoanType', ['pkfLoanType'], { unique: true })
@Entity('payLoanType', { schema: 'dbo' })
export class PayLoanType {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'pkfLoanType' })
  pkfLoanType: number;

  @Column('nvarchar', { name: 'loanType', length: 50 })
  loanType: string;

  @Column('bit', { name: 'isActive', nullable: true, default: () => '(1)' })
  isActive: boolean | null;

  @Column('int', { name: 'FkfMoien', nullable: true, default: () => '(0)' })
  fkfMoien: number | null;

  @Column('int', { name: 'accYear', nullable: true, default: () => '(1)' })
  accYear: number | null;

  @OneToMany(() => PayLoan, (payLoan) => payLoan.fkfLoanType)
  payLoans: PayLoan[];
}
