import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_DeviceDetail', ['pkfDeviceDetail'], { unique: true })
@Entity('salDeviceDetail', { schema: 'dbo' })
export class SalDeviceDetail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfDeviceDetail' })
  pkfDeviceDetail: number;

  @Column('nvarchar', { name: 'deviceCode', length: 50, default: () => "''" })
  deviceCode: string;

  @Column('nvarchar', { name: 'device', length: 50, default: () => "''" })
  device: string;

  @Column('nvarchar', { name: 'memo', default: () => "''" })
  memo: string;
}
