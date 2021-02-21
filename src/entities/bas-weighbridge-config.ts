import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_basWeighbridgeConfig', ['pkfWeighbridgeConfig'], { unique: true })
@Entity('basWeighbridgeConfig', { schema: 'dbo' })
export class BasWeighbridgeConfig {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfWeighbridgeConfig' })
  pkfWeighbridgeConfig: number;

  @Column('int', { name: 'FKFWeighbridge' })
  fkfWeighbridge: number;

  @Column('nvarchar', { name: 'portName', length: 50, default: () => "''" })
  portName: string;

  @Column('nvarchar', { name: 'baudRate', length: 50, default: () => "''" })
  baudRate: string;

  @Column('nvarchar', { name: 'stopBit', length: 50, default: () => "''" })
  stopBit: string;

  @Column('nvarchar', { name: 'parity', length: 50, default: () => "''" })
  parity: string;

  @Column('nvarchar', { name: 'capacity', length: 50, default: () => "''" })
  capacity: string;

  @Column('bit', { name: 'DTR', default: () => '(1)' })
  dtr: boolean;

  @Column('bit', { name: 'RTP', default: () => '(1)' })
  rtp: boolean;

  @Column('nvarchar', { name: 'dataBits', length: 50, default: () => "''" })
  dataBits: string;

  @Column('nvarchar', {
    name: 'connectionProtocol',
    length: 50,
    default: () => "''",
  })
  connectionProtocol: string;

  @Column('nvarchar', { name: 'company', length: 50, default: () => "''" })
  company: string;
}
