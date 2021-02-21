import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_payTaxTable', ['pkfTaxTable'], { unique: true })
@Entity('payTaxTable', { schema: 'dbo' })
export class PayTaxTable {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfTaxTable' })
  pkfTaxTable: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('bigint', { name: 'salaryFrom' })
  salaryFrom: string;

  @Column('bigint', { name: 'salaryTo' })
  salaryTo: string;

  @Column('decimal', { name: 'taxPercent', precision: 18, scale: 2 })
  taxPercent: number;

  @Column('int', { name: 'year' })
  year: number;

  @Column('bigint', { name: 'fixPrice' })
  fixPrice: string;

  @Column('int', { name: 'FkfTaxGroup' })
  fkfTaxGroup: number;

  @Column('varchar', { name: 'executeDate', length: 50 })
  executeDate: string;
}
