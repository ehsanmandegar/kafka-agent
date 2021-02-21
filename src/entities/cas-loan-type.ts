import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_casLoanType', ['pkfLoanType'], { unique: true })
@Entity('casLoanType', { schema: 'dbo' })
export class CasLoanType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfLoanType' })
  pkfLoanType: number;

  @Column('nvarchar', { name: 'loanType', length: 50 })
  loanType: string;

  @Column('bit', { name: 'isActive', default: () => '(1)' })
  isActive: boolean;

  @Column('int', { name: 'fkfMoien', nullable: true })
  fkfMoien: number | null;

  @Column('int', { name: 'accYear', nullable: true })
  accYear: number | null;

  @Column('nchar', { name: 'oldPkf', nullable: true, length: 10 })
  oldPkf: string | null;

  @Column('bit', { name: 'mozarebeh', default: () => '(0)' })
  mozarebeh: boolean;
}
