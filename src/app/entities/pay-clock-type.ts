import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_PayClockType', ['pkid'], { unique: true })
@Entity('PayClockType', { schema: 'dbo' })
export class PayClockType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'PKID' })
  pkid: number;

  @Column('smallint', {
    name: 'fld_Code',
    nullable: true,
    default: () => '(0)',
  })
  fldCode: number | null;

  @Column('nvarchar', {
    name: 'fld_Title',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  fldTitle: string | null;

  @Column('nvarchar', {
    name: 'fld_Desc',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  fldDesc: string | null;

  @Column('bit', { name: 'IsActive', nullable: true, default: () => '(1)' })
  isActive: boolean | null;
}
