import { Column, Entity, Index } from 'typeorm';

@Index('PK_salImporttingDataFromSale', ['pkfImporttingExport'], {
  unique: true,
})
@Entity('salImporttingDataFromSale', { schema: 'dbo' })
export class SalImporttingDataFromSale {
  @Column('int', { primary: true, name: 'pkfImporttingExport' })
  pkfImporttingExport: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('nvarchar', {
    name: 'storeHouseDate',
    length: 10,
    default: () => "''",
  })
  storeHouseDate: string;

  @Column('nvarchar', { name: 'storeCode', length: 50, default: () => "''" })
  storeCode: string;

  @Column('nvarchar', { name: 'storeName', length: 255, default: () => "''" })
  storeName: string;

  @Column('nvarchar', { name: 'goodCode', length: 50, default: () => "''" })
  goodCode: string;

  @Column('nvarchar', { name: 'goodName', length: 255, default: () => "''" })
  goodName: string;

  @Column('nvarchar', { name: 'unitName1', length: 50, default: () => "''" })
  unitName1: string;

  @Column('nvarchar', { name: 'unitName2', length: 50, default: () => "''" })
  unitName2: string;

  @Column('decimal', {
    name: 'export1',
    precision: 18,
    scale: 3,
    default: () => '(0)',
  })
  export1: number;

  @Column('decimal', { name: 'export2', precision: 18, scale: 3 })
  export2: number;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('nvarchar', { name: 'treaterCode', length: 50, default: () => "''" })
  treaterCode: string;

  @Column('nvarchar', { name: 'treater', length: 255, default: () => "''" })
  treater: string;

  @Column('nvarchar', { name: 'projectCode', length: 50 })
  projectCode: string;

  @Column('nvarchar', { name: 'project', length: 255, default: () => "''" })
  project: string;

  @Column('nvarchar', { name: 'moeinCode', length: 50 })
  moeinCode: string;

  @Column('nvarchar', { name: 'moein', length: 255, default: () => "''" })
  moein: string;

  @Column('nvarchar', { name: 'tafzili2Code', length: 50, default: () => "''" })
  tafzili2Code: string;

  @Column('nvarchar', { name: 'tafzili2', length: 255, default: () => "''" })
  tafzili2: string;

  @Column('int', { name: 'fee', default: () => '(0)' })
  fee: number;
}
