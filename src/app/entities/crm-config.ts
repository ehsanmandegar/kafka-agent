import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_crmConfig', ['pkfConfig'], { unique: true })
@Entity('crmConfig', { schema: 'dbo' })
export class CrmConfig {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfConfig' })
  pkfConfig: number;

  @Column('nvarchar', {
    name: 'webServiceURL',
    length: 50,
    default: () => "''",
  })
  webServiceUrl: string;

  @Column('nvarchar', { name: 'userName', length: 50, default: () => "''" })
  userName: string;

  @Column('nvarchar', { name: 'password', length: 50, default: () => "''" })
  password: string;

  @Column('int', { name: 'WSID', nullable: true, default: () => '(0)' })
  wsid: number | null;

  @Column('nvarchar', { name: 'sendNumber', length: 50, default: () => "''" })
  sendNumber: string;

  @Column('nvarchar', { name: 'domain', length: 50, default: () => "''" })
  domain: string;

  @Column('bit', {
    name: 'isFlashMessage',
    nullable: true,
    default: () => '(0)',
  })
  isFlashMessage: boolean | null;

  @Column('int', { name: 'sendType', default: () => '(1)' })
  sendType: number;

  @Column('nvarchar', { name: 'portName', length: 50, default: () => "''" })
  portName: string;

  @Column('nvarchar', { name: 'baudRate', length: 50, default: () => "''" })
  baudRate: string;

  @Column('int', { name: 'dataBits', nullable: true })
  dataBits: number | null;

  @Column('int', { name: 'stopBits', nullable: true })
  stopBits: number | null;

  @Column('nvarchar', { name: 'parityBits', length: 50, default: () => "''" })
  parityBits: string;

  @Column('int', { name: 'timeOut', nullable: true })
  timeOut: number | null;

  @Column('int', { name: 'repeadSend', default: () => '(1)' })
  repeadSend: number;
}
