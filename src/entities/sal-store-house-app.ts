import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SalStoreHouseDetailApp } from './sal-store-house-detail-app';

@Index('IX_salStoreHouseApp', ['accYear', 'serial'], { unique: true })
@Index('PK_salStoreHouseApp', ['pkfStoreHouseApp'], { unique: true })
@Entity('salStoreHouseApp', { schema: 'dbo' })
export class SalStoreHouseApp {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfStoreHouseApp' })
  pkfStoreHouseApp: number;

  @Column('int', { name: 'serial', default: () => '(0)' })
  serial: number;

  @Column('nvarchar', { name: 'createDate', length: 20, default: () => "''" })
  createDate: string;

  @Column('nvarchar', { name: 'createTime', length: 20, default: () => "''" })
  createTime: string;

  @Column('int', { name: 'createUser' })
  createUser: number;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'type', default: () => '(1)' })
  type: number;

  @OneToMany(
    () => SalStoreHouseDetailApp,
    (salStoreHouseDetailApp) => salStoreHouseDetailApp.fkfsalStoreHouseApp,
  )
  salStoreHouseDetailApps: SalStoreHouseDetailApp[];
}
