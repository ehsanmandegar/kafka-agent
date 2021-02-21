import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_casLoanReturn', ['pkfLoanReturn'], { unique: true })
@Entity('casLoanReturn', { schema: 'dbo' })
export class CasLoanReturn {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfLoanReturn' })
  pkfLoanReturn: number;

  @Column('bigint', { name: 'mainReturnAmount', default: () => '(0)' })
  mainReturnAmount: string;

  @Column('bigint', { name: 'profitAmount', default: () => '(0)' })
  profitAmount: string;

  @Column('varchar', { name: 'dueDate', length: 10, default: () => "''" })
  dueDate: string;

  @Column('bit', { name: 'clearStatus', default: () => '(0)' })
  clearStatus: boolean;

  @Column('varchar', { name: 'clearDate', length: 10, default: () => "''" })
  clearDate: string;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('int', { name: 'FKFLoan' })
  fkfLoan: number;

  @Column('int', { name: 'FKFSanad', nullable: true })
  fkfSanad: number | null;

  @Column('int', { name: 'sanadTempNo', nullable: true })
  sanadTempNo: number | null;

  @Column('bigint', { name: 'penaltyAmount', default: () => '(0)' })
  penaltyAmount: string;

  @Column('bigint', { name: 'roundAmount', default: () => '(0)' })
  roundAmount: string;
}
