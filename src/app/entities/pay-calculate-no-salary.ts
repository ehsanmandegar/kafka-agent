import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_payCalculateNoSalary', ['pkfCalculateNoSalary'], { unique: true })
@Entity('payCalculateNoSalary', { schema: 'dbo' })
export class PayCalculateNoSalary {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfCalculateNoSalary' })
  pkfCalculateNoSalary: number;

  @Column('int', { name: 'FkfTreater' })
  fkfTreater: number;

  @Column('int', { name: 'fkfNoSalaryType' })
  fkfNoSalaryType: number;

  @Column('decimal', { name: 'price', precision: 18, scale: 2 })
  price: number;

  @Column('int', { name: 'month' })
  month: number;

  @Column('int', { name: 'year' })
  year: number;

  @Column('varchar', {
    name: 'inputDate',
    nullable: true,
    length: 50,
    default: () => 'getdate()',
  })
  inputDate: string | null;

  @Column('bit', { name: 'closed' })
  closed: boolean;

  @Column('int', { name: 'FkfSanad', nullable: true })
  fkfSanad: number | null;

  @Column('int', { name: 'SanadTempNo', nullable: true })
  sanadTempNo: number | null;
}
