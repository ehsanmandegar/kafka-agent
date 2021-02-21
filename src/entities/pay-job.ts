import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_payJob', ['pkfJob'], { unique: true })
@Entity('payJob', { schema: 'dbo' })
export class PayJob {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfJob' })
  pkfJob: number;

  @Column('nvarchar', { name: 'jobCode', length: 50 })
  jobCode: string;

  @Column('nvarchar', { name: 'name', length: 50 })
  name: string;

  @Column('nvarchar', { name: 'name2', nullable: true, length: 50 })
  name2: string | null;

  @Column('nvarchar', {
    name: 'fk_BimeCode',
    nullable: true,
    length: 10,
    default: () => "''",
  })
  fkBimeCode: string | null;

  @Column('int', { name: 'fk_TaxJobID', nullable: true, default: () => '(0)' })
  fkTaxJobId: number | null;

  @Column('int', { name: 'fkfJobType' })
  fkfJobType: number;

  @Column('nvarchar', { name: 'hardJobCode', nullable: true, length: 50 })
  hardJobCode: string | null;
}
