import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_mesCompanyMessenger', ['pkfCompanyMessenger'], { unique: true })
@Entity('mesCompanyMessenger', { schema: 'dbo' })
export class MesCompanyMessenger {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfCompanyMessenger' })
  pkfCompanyMessenger: number;

  @Column('nvarchar', { name: 'companyName', length: 200, default: () => "''" })
  companyName: string;

  @Column('nvarchar', {
    name: 'serialMessenger',
    nullable: true,
    length: 20,
    default: () => "''",
  })
  serialMessenger: string | null;

  @Column('bit', { name: 'active', default: () => '(1)' })
  active: boolean;

  @Column('varbinary', { name: 'pic', nullable: true })
  pic: Buffer | null;

  @Column('nvarchar', { name: 'picName', nullable: true, length: 50 })
  picName: string | null;

  @Column('nvarchar', { name: 'pass', length: 50, default: () => "''" })
  pass: string;

  @Column('nvarchar', { name: 'userName', length: 50, default: () => "''" })
  userName: string;

  @Column('datetime', { name: 'lastUpdateEN', default: () => 'getdate()' })
  lastUpdateEn: Date;

  @Column('datetime', {
    name: 'lastUpdateCompanyEN',
    nullable: true,
    default: () => 'getdate()',
  })
  lastUpdateCompanyEn: Date | null;

  @Column('int', { name: 'validyDateServer', default: () => '(0)' })
  validyDateServer: number;

  @Column('bit', { name: 'sendSMS', default: () => '(0)' })
  sendSms: boolean;

  @Column('nvarchar', {
    name: 'UserNamePanel',
    length: 500,
    default: () => "''",
  })
  userNamePanel: string;

  @Column('nvarchar', {
    name: 'UserPassPanel',
    length: 50,
    default: () => "''",
  })
  userPassPanel: string;

  @Column('nvarchar', { name: 'SenderPanel', length: 50, default: () => "''" })
  senderPanel: string;
}
