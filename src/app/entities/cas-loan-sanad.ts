import { Column, Entity, Index } from 'typeorm';

@Index('PK_casLoanSanad', ['pkfLoanSanad'], { unique: true })
@Entity('casLoanSanad', { schema: 'dbo' })
export class CasLoanSanad {
  @Column('int', { primary: true, name: 'pkfLoanSanad' })
  pkfLoanSanad: number;

  @Column('nvarchar', { name: 'loanSanad', length: 50 })
  loanSanad: string;
}
