import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salImportData', ['pkfImportting'], { unique: true })
@Entity('salImportData', { schema: 'dbo' })
export class SalImportData {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfImportting' })
  pkfImportting: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('nvarchar', { name: 'importDate', length: 10, default: () => "''" })
  importDate: string;

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
    name: 'amount1',
    precision: 18,
    scale: 6,
    default: () => '(0)',
  })
  amount1: number;

  @Column('decimal', {
    name: 'amount2',
    precision: 18,
    scale: 6,
    default: () => '(0)',
  })
  amount2: number;

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

  @Column('float', { name: 'fee', precision: 53, default: () => '(0)' })
  fee: number;

  @Column('nvarchar', { name: 'createDate', length: 10 })
  createDate: string;

  @Column('int', { name: 'FkfCreateUser' })
  fkfCreateUser: number;

  @Column('int', { name: 'FKFTypeStoreHouse' })
  fkfTypeStoreHouse: number;

  @Column('int', { name: 'FKFStoreHouseType', default: () => '(1)' })
  fkfStoreHouseType: number;

  @Column('nvarchar', {
    name: 'treaterNameOfficial',
    length: 255,
    default: () => "''",
  })
  treaterNameOfficial: string;

  @Column('nvarchar', {
    name: 'treaterCodeOfficial',
    length: 50,
    default: () => "''",
  })
  treaterCodeOfficial: string;

  @Column('int', { name: 'serialOfficial', nullable: true })
  serialOfficial: number | null;

  @Column('nvarchar', { name: 'calcBase', length: 50, default: () => "''" })
  calcBase: string;

  @Column('int', { name: 'FkfContractDetail', nullable: true })
  fkfContractDetail: number | null;

  @Column('nvarchar', { name: 'weightDate', length: 50, default: () => "''" })
  weightDate: string;

  @Column('int', { name: 'discountP', default: () => '(0)' })
  discountP: number;

  @Column('decimal', {
    name: 'amountSource1',
    precision: 18,
    scale: 6,
    default: () => '(0)',
  })
  amountSource1: number;

  @Column('decimal', {
    name: 'amountSource2',
    precision: 18,
    scale: 6,
    default: () => '(0)',
  })
  amountSource2: number;

  @Column('nvarchar', {
    name: 'billOfLoading',
    length: 50,
    default: () => "''",
  })
  billOfLoading: string;

  @Column('nvarchar', { name: 'outPutNo', length: 50, default: () => "''" })
  outPutNo: string;

  @Column('nvarchar', { name: 'truckNo', length: 50, default: () => "''" })
  truckNo: string;

  @Column('nvarchar', { name: 'memo', length: 500, default: () => "''" })
  memo: string;

  @Column('nvarchar', { name: 'storeNo', length: 50, default: () => "''" })
  storeNo: string;
}
