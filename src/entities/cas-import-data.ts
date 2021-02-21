import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_casImportData', ['pkfImportData'], { unique: true })
@Entity('casImportData', { schema: 'dbo' })
export class CasImportData {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfImportData' })
  pkfImportData: number;

  @Column('int', { name: 'serial', nullable: true })
  serial: number | null;

  @Column('nvarchar', { name: 'importDate', length: 50, default: () => "''" })
  importDate: string;

  @Column('nvarchar', { name: 'serialNo', length: 50, default: () => "''" })
  serialNo: string;

  @Column('nvarchar', { name: 'serialDate', nullable: true, length: 50 })
  serialDate: string | null;

  @Column('int', { name: 'accYear', nullable: true })
  accYear: number | null;

  @Column('int', { name: 'FkfGetPayType', nullable: true })
  fkfGetPayType: number | null;

  @Column('nvarchar', { name: 'treaterName', length: 255, default: () => "''" })
  treaterName: string;

  @Column('nvarchar', { name: 'treaterCode', length: 50, default: () => "''" })
  treaterCode: string;

  @Column('nvarchar', {
    name: 'treaterMoeinName',
    length: 255,
    default: () => "''",
  })
  treaterMoeinName: string;

  @Column('nvarchar', {
    name: 'treaterMoeinCode',
    length: 50,
    default: () => "''",
  })
  treaterMoeinCode: string;

  @Column('nvarchar', {
    name: 'treaterTafzili2Name',
    length: 255,
    default: () => "''",
  })
  treaterTafzili2Name: string;

  @Column('nvarchar', {
    name: 'treaterTafzili2Code',
    length: 50,
    default: () => "''",
  })
  treaterTafzili2Code: string;

  @Column('nvarchar', { name: 'markazName', length: 255, default: () => "''" })
  markazName: string;

  @Column('nvarchar', { name: 'markazCode', length: 50, default: () => "''" })
  markazCode: string;

  @Column('nvarchar', { name: 'getpayDate', length: 50, default: () => "''" })
  getpayDate: string;

  @Column('nvarchar', { name: 'memo', default: () => "''" })
  memo: string;

  @Column('nvarchar', { name: 'discountMemo', default: () => "''" })
  discountMemo: string;

  @Column('float', { name: 'feeCurrency', precision: 53, default: () => '(0)' })
  feeCurrency: number;

  @Column('int', { name: 'discount', default: () => '(0)' })
  discount: number;

  @Column('int', { name: 'returnCheckPrice', nullable: true })
  returnCheckPrice: number | null;

  @Column('int', { name: 'FkfGetPayStatus', nullable: true })
  fkfGetPayStatus: number | null;

  @Column('nvarchar', { name: 'createUser', length: 50, default: () => "''" })
  createUser: string;

  @Column('nvarchar', {
    name: 'createUserCode',
    length: 50,
    default: () => "''",
  })
  createUserCode: string;

  @Column('nvarchar', { name: 'createDate', length: 50, default: () => "''" })
  createDate: string;

  @Column('nvarchar', {
    name: 'treaterNameD',
    length: 255,
    default: () => "''",
  })
  treaterNameD: string;

  @Column('nvarchar', {
    name: 'treaterMoeinNameD',
    length: 255,
    default: () => "''",
  })
  treaterMoeinNameD: string;

  @Column('nvarchar', {
    name: 'treaterTafzili2NameD',
    length: 255,
    default: () => "''",
  })
  treaterTafzili2NameD: string;

  @Column('nvarchar', { name: 'treaterCodeD', length: 50, default: () => "''" })
  treaterCodeD: string;

  @Column('nvarchar', {
    name: 'treaterMoeinCodeD',
    length: 50,
    default: () => "''",
  })
  treaterMoeinCodeD: string;

  @Column('nvarchar', {
    name: 'treaterTafzili2CodeD',
    length: 50,
    default: () => "''",
  })
  treaterTafzili2CodeD: string;

  @Column('decimal', {
    name: 'price',
    precision: 18,
    scale: 6,
    default: () => '(0)',
  })
  price: number;

  @Column('decimal', {
    name: 'priceCur',
    precision: 18,
    scale: 6,
    default: () => '(0)',
  })
  priceCur: number;

  @Column('nvarchar', { name: 'memoD', default: () => "''" })
  memoD: string;

  @Column('nvarchar', { name: 'branchName', length: 255, default: () => "''" })
  branchName: string;

  @Column('nvarchar', { name: 'bankCode', length: 50, default: () => "''" })
  bankCode: string;

  @Column('nvarchar', { name: 'bankName', length: 255, default: () => "''" })
  bankName: string;

  @Column('int', { name: 'type', nullable: true })
  type: number | null;

  @Column('int', { name: 'pkfGetPay', nullable: true })
  pkfGetPay: number | null;

  @Column('int', { name: 'pkfGetPayDetail', nullable: true })
  pkfGetPayDetail: number | null;
}
