import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_payCalculateTamminSetting', ['pkfCalcTamminSetting'], {
  unique: true,
})
@Entity('payCalculateTamminSetting', { schema: 'dbo' })
export class PayCalculateTamminSetting {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfCalcTamminSetting' })
  pkfCalcTamminSetting: number;

  @Column('bigint', { name: 'employeePayPart' })
  employeePayPart: string;

  @Column('bigint', { name: 'employerPayPart' })
  employerPayPart: string;

  @Column('bigint', { name: 'noWorkCost' })
  noWorkCost: string;

  @Column('bigint', { name: 'hardWorkCost' })
  hardWorkCost: string;

  @Column('int', { name: 'fkfEmployee' })
  fkfEmployee: number;

  @Column('int', { name: 'year' })
  year: number;

  @Column('int', { name: 'month' })
  month: number;
}
