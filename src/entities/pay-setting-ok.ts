import { Column, Entity, Index } from 'typeorm';

@Index('PK_PaySetting_OK', ['pkid'], { unique: true })
@Entity('PaySetting_OK', { schema: 'dbo' })
export class PaySettingOk {
  @Column('int', { primary: true, name: 'PKID' })
  pkid: number;

  @Column('int', { name: 'fk_SystemID', nullable: true, default: () => '(1)' })
  fkSystemId: number | null;

  @Column('int', { name: 'fk_TypeID', nullable: true, default: () => '(1)' })
  fkTypeId: number | null;

  @Column('nvarchar', {
    name: 'fld_Title',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  fldTitle: string | null;

  @Column('nvarchar', {
    name: 'fld_Descr',
    nullable: true,
    length: 200,
    default: () => "''",
  })
  fldDescr: string | null;

  @Column('nvarchar', { name: 'fld_Value', nullable: true, length: 50 })
  fldValue: string | null;

  @Column('nvarchar', { name: 'fld_MinValue', nullable: true, length: 50 })
  fldMinValue: string | null;

  @Column('nvarchar', { name: 'fld_MaxValue', nullable: true, length: 50 })
  fldMaxValue: string | null;

  @Column('nvarchar', { name: 'fld_DefaultValue', nullable: true, length: 50 })
  fldDefaultValue: string | null;

  @Column('bit', { name: 'IsActive', nullable: true, default: () => '(1)' })
  isActive: boolean | null;
}
