import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_Setting', ['settingId'], { unique: true })
@Entity('Setting', { schema: 'dbo' })
export class Setting {
  @PrimaryGeneratedColumn({ type: 'int', name: 'SettingID' })
  settingId: number;

  @Column('bit', { name: 'ISPriceLimit', default: () => '(0)' })
  isPriceLimit: boolean;

  @Column('int', { name: 'FactorCondtion', default: () => '(500)' })
  factorCondtion: number;

  @Column('int', { name: 'CompanyWarehouseID', nullable: true })
  companyWarehouseId: number | null;

  @Column('int', { name: 'DailySalesRestrictions', default: () => '(0)' })
  dailySalesRestrictions: number;

  @Column('bit', { name: 'GroupSaleRemainLimit', default: () => '(0)' })
  groupSaleRemainLimit: boolean;

  @Column('nvarchar', { name: 'Site', nullable: true, length: 100 })
  site: string | null;

  @Column('nvarchar', { name: 'Telegram', nullable: true, length: 100 })
  telegram: string | null;

  @Column('nvarchar', { name: 'Telephone', nullable: true, length: 15 })
  telephone: string | null;

  @Column('nvarchar', { name: 'ReportNumber', nullable: true, length: 10 })
  reportNumber: string | null;

  @Column('int', {
    name: 'ReservationDeleteMin',
    nullable: true,
    default: () => '(0)',
  })
  reservationDeleteMin: number | null;

  @Column('bit', { name: 'UseKartabl', default: () => '(1)' })
  useKartabl: boolean;

  @Column('bit', { name: 'IsDiscount', default: () => '(0)' })
  isDiscount: boolean;

  @Column('bit', { name: 'IsSigner', default: () => '(0)' })
  isSigner: boolean;

  @Column('nvarchar', { name: 'KeyOrderCertain', nullable: true, length: 50 })
  keyOrderCertain: string | null;

  @Column('bit', { name: 'IsSendSms', default: () => '(0)' })
  isSendSms: boolean;
}
