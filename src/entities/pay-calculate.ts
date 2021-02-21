import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('IX_payCalculate', ['fkfTreater', 'fkfFactor', 'fldMonth', 'fldYear'], {
  unique: true,
})
@Index('PK_payCalculate', ['pkfCalculate'], { unique: true })
@Entity('payCalculate', { schema: 'dbo' })
export class PayCalculate {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfCalculate' })
  pkfCalculate: number;

  @Column('int', { name: 'serial', nullable: true })
  serial: number | null;

  @Column('int', { name: 'FkfTreater', unique: true })
  fkfTreater: number;

  @Column('int', { name: 'fkfFactor', unique: true })
  fkfFactor: number;

  @Column('int', { name: 'fk_ExtraLink', nullable: true, default: () => '(0)' })
  fkExtraLink: number | null;

  @Column('decimal', { name: 'price', precision: 18, scale: 1 })
  price: number;

  @Column('int', { name: 'fld_month', unique: true })
  fldMonth: number;

  @Column('int', { name: 'fld_year', unique: true })
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

  @Column('nvarchar', {
    name: 'fld_Desc',
    nullable: true,
    length: 100,
    default: () => "''",
  })
  fldDesc: string | null;

  @Column('int', { name: 'fkfContract', nullable: true, default: () => '(0)' })
  fkfContract: number | null;

  @Column('nvarchar', {
    name: 'fld_Adder',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  fldAdder: string | null;

  @Column('nvarchar', {
    name: 'fld_Editor',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  fldEditor: string | null;

  @Column('nvarchar', {
    name: 'fld_Deleter',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  fldDeleter: string | null;

  @Column('datetime', {
    name: 'fld_DeleteDate',
    nullable: true,
    default: () => "''",
  })
  fldDeleteDate: Date | null;
}
