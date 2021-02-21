import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_payMonthTry', ['pkfMonthTry'], { unique: true })
@Entity('payMonthTry', { schema: 'dbo' })
export class PayMonthTry {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfMonthTry' })
  pkfMonthTry: number;

  @Column('int', { name: 'serial', nullable: true })
  serial: number | null;

  @Column('int', { name: 'FkfTreater' })
  fkfTreater: number;

  @Column('int', { name: 'fkfFactor' })
  fkfFactor: number;

  @Column('nvarchar', { name: 'price', length: 50 })
  price: string;

  @Column('int', { name: 'fld_month' })
  fldMonth: number;

  @Column('int', { name: 'fld_year' })
  fldYear: number;

  @Column('varchar', {
    name: 'inputDate',
    nullable: true,
    length: 50,
    default: () => 'getdate()',
  })
  inputDate: string | null;

  @Column('bit', { name: 'closed' })
  closed: boolean;

  @Column('datetime', { name: 'fld_CloseDate', nullable: true })
  fldCloseDate: Date | null;

  @Column('int', { name: 'FkfSanad', nullable: true })
  fkfSanad: number | null;

  @Column('int', { name: 'SanadTempNo', nullable: true })
  sanadTempNo: number | null;

  @Column('smallint', { name: 'accYear', nullable: true, default: () => '(0)' })
  accYear: number | null;

  @Column('datetime', {
    name: 'fld_AddDate',
    nullable: true,
    default: () => 'getdate()',
  })
  fldAddDate: Date | null;

  @Column('datetime', {
    name: 'fld_EditDate',
    nullable: true,
    default: () => 'getdate()',
  })
  fldEditDate: Date | null;
}
