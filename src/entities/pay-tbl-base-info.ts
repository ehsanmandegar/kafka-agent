import { Column, Entity, Index } from 'typeorm';

@Index('PK_tblPayBaseInfo', ['pkid'], { unique: true })
@Entity('PayTblBaseInfo', { schema: 'dbo' })
export class PayTblBaseInfo {
  @Column('int', { primary: true, name: 'PKID' })
  pkid: number;

  @Column('nvarchar', {
    name: 'fld_Title',
    nullable: true,
    length: 100,
    default: () => "''",
  })
  fldTitle: string | null;

  @Column('int', { name: 'fk_System', nullable: true })
  fkSystem: number | null;

  @Column('smallint', { name: 'fk_Type', nullable: true, default: () => '(1)' })
  fkType: number | null;

  @Column('int', { name: 'fk_Parent', nullable: true, default: () => '(0)' })
  fkParent: number | null;

  @Column('nvarchar', {
    name: 'fld_Desc',
    nullable: true,
    length: 300,
    default: () => "''",
  })
  fldDesc: string | null;

  @Column('int', { name: 'fld_Sign', nullable: true, default: () => '(1)' })
  fldSign: number | null;

  @Column('nvarchar', {
    name: 'fld_ExtraData1',
    nullable: true,
    length: 100,
    default: () => "''",
  })
  fldExtraData1: string | null;

  @Column('nvarchar', {
    name: 'fld_ExtraData2',
    nullable: true,
    length: 100,
    default: () => "''",
  })
  fldExtraData2: string | null;

  @Column('smallint', {
    name: 'fld_Order',
    nullable: true,
    default: () => '(50)',
  })
  fldOrder: number | null;

  @Column('varchar', {
    name: 'fld_ColColor',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  fldColColor: string | null;

  @Column('bit', { name: 'IsActive', nullable: true, default: () => '(1)' })
  isActive: boolean | null;

  @Column('datetime', {
    name: 'fld_AddDate',
    nullable: true,
    default: () => 'getdate()',
  })
  fldAddDate: Date | null;

  @Column('datetime', { name: 'fld_EditDate', nullable: true })
  fldEditDate: Date | null;

  @Column('datetime', { name: 'fld_DelDate', nullable: true })
  fldDelDate: Date | null;
}
