import { Column, Entity } from 'typeorm';

@Entity('salStoreHouseDelete', { schema: 'dbo' })
export class SalStoreHouseDelete {
  @Column('int', { name: 'pkfStoreHouse' })
  pkfStoreHouse: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('nvarchar', { name: 'storeHouseDate', length: 10 })
  storeHouseDate: string;

  @Column('int', { name: 'FkfStoreHouseType' })
  fkfStoreHouseType: number;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('nvarchar', { name: 'geter', length: 255, default: () => "''" })
  geter: string;

  @Column('nvarchar', {
    name: 'billOfLading',
    length: 100,
    default: () => "''",
  })
  billOfLading: string;

  @Column('nvarchar', { name: 'source', length: 255, default: () => "''" })
  source: string;

  @Column('nvarchar', { name: 'truckNO', length: 50, default: () => "''" })
  truckNo: string;

  @Column('nvarchar', { name: 'createTime', length: 5 })
  createTime: string;

  @Column('nvarchar', { name: 'createDate', length: 50 })
  createDate: string;

  @Column('nvarchar', { name: 'address', length: 255, default: () => "''" })
  address: string;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('nvarchar', { name: 'editUser', length: 255, default: () => "''" })
  editUser: string;

  @Column('nvarchar', { name: 'editDate', length: 10, default: () => "''" })
  editDate: string;

  @Column('nvarchar', { name: 'createUser', length: 50 })
  createUser: string;

  @Column('nvarchar', { name: 'deleteUser', length: 255 })
  deleteUser: string;

  @Column('nvarchar', { name: 'deleteDate', length: 10 })
  deleteDate: string;

  @Column('nvarchar', { name: 'deleteTime', length: 5 })
  deleteTime: string;

  @Column('nvarchar', { name: 'driverName', length: 255, default: () => "''" })
  driverName: string;

  @Column('nvarchar', { name: 'porterage', length: 255, default: () => "''" })
  porterage: string;
}
