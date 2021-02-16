import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salTrustDetailLog', ['pkfTrustDetailLog'], { unique: true })
@Entity('salTrustDetailLog', { schema: 'dbo' })
export class SalTrustDetailLog {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfTrustDetailLog' })
  pkfTrustDetailLog: number;

  @Column('int', { name: 'logType' })
  logType: number;

  @Column('int', { name: 'FkfLogUser' })
  fkfLogUser: number;

  @Column('nvarchar', { name: 'logTime', length: 5 })
  logTime: string;

  @Column('nvarchar', { name: 'logDate', length: 10 })
  logDate: string;

  @Column('nvarchar', { name: 'computerIP', length: 255 })
  computerIp: string;

  @Column('nvarchar', { name: 'computerUser', length: 255 })
  computerUser: string;

  @Column('nvarchar', { name: 'computerName', length: 255 })
  computerName: string;

  @Column('int', { name: 'pkfTrust' })
  pkfTrust: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('nvarchar', { name: 'trustDate', length: 10, default: () => "''" })
  trustDate: string;

  @Column('int', { name: 'FkfTreater' })
  fkfTreater: number;

  @Column('nvarchar', { name: 'treaterFamile', nullable: true, length: 500 })
  treaterFamile: string | null;

  @Column('int', { name: 'FkfStore' })
  fkfStore: number;

  @Column('nvarchar', { name: 'storeCode', nullable: true, length: 25 })
  storeCode: string | null;

  @Column('nvarchar', { name: 'storeName', nullable: true, length: 150 })
  storeName: string | null;

  @Column('int', { name: 'FkfTrustType' })
  fkfTrustType: number;

  @Column('nvarchar', { name: 'trustType', nullable: true, length: 50 })
  trustType: string | null;

  @Column('nvarchar', {
    name: 'billOfLading',
    length: 100,
    default: () => "''",
  })
  billOfLading: string;

  @Column('int', { name: 'FkfSource', nullable: true })
  fkfSource: number | null;

  @Column('nvarchar', { name: 'truckNO', length: 50, default: () => "''" })
  truckNo: string;

  @Column('nvarchar', { name: 'memo', length: 500, default: () => "''" })
  memo: string;

  @Column('nvarchar', { name: 'createDate', length: 10, default: () => "''" })
  createDate: string;

  @Column('nvarchar', {
    name: 'editDate',
    nullable: true,
    length: 10,
    default: () => "''",
  })
  editDate: string | null;

  @Column('int', { name: 'FkfCreateUser' })
  fkfCreateUser: number;

  @Column('nvarchar', { name: 'createUser', nullable: true, length: 150 })
  createUser: string | null;

  @Column('int', { name: 'FkfEditUser', nullable: true })
  fkfEditUser: number | null;

  @Column('nvarchar', { name: 'editUser', nullable: true, length: 150 })
  editUser: string | null;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'weightWithLoad', default: () => '(0)' })
  weightWithLoad: number;

  @Column('int', { name: 'weightWithOutLoad', default: () => '(0)' })
  weightWithOutLoad: number;

  @Column('int', { name: 'weightSource', default: () => '(0)' })
  weightSource: number;

  @Column('nvarchar', { name: 'orderNO', length: 50, default: () => "''" })
  orderNo: string;

  @Column('int', { name: 'FkfGetter', nullable: true })
  fkfGetter: number | null;

  @Column('nvarchar', { name: 'getterFamile', nullable: true, length: 150 })
  getterFamile: string | null;

  @Column('nvarchar', { name: 'exitTime', length: 15, default: () => "''" })
  exitTime: string;

  @Column('nvarchar', { name: 'createTime', length: 15, default: () => "''" })
  createTime: string;

  @Column('nvarchar', { name: 'path', length: 255, default: () => "''" })
  path: string;

  @Column('nvarchar', { name: 'mainOrderNO', length: 50, default: () => "''" })
  mainOrderNo: string;

  @Column('int', { name: 'parent', nullable: true })
  parent: number | null;

  @Column('int', { name: 'FkfStatus' })
  fkfStatus: number;

  @Column('nvarchar', { name: 'status', nullable: true, length: 50 })
  status: string | null;

  @Column('nvarchar', { name: 'finalDate', length: 10, default: () => "''" })
  finalDate: string;

  @Column('int', { name: 'FkfFinalUser', nullable: true })
  fkfFinalUser: number | null;

  @Column('nvarchar', { name: 'finalUser', nullable: true, length: 150 })
  finalUser: string | null;

  @Column('int', { name: 'sanadTempNo', nullable: true })
  sanadTempNo: number | null;

  @Column('bit', { name: 'payoff', default: () => '(0)' })
  payoff: boolean;

  @Column('bit', { name: 'sanad', default: () => '(0)' })
  sanad: boolean;

  @Column('bit', { name: 'goodDeclare', default: () => '(0)' })
  goodDeclare: boolean;

  @Column('int', { name: 'FkfSanad', nullable: true })
  fkfSanad: number | null;

  @Column('nvarchar', { name: 'driverName', length: 200, default: () => "''" })
  driverName: string;

  @Column('nvarchar', { name: 'porterage', length: 200, default: () => "''" })
  porterage: string;

  @Column('int', { name: 'oldPkf', nullable: true })
  oldPkf: number | null;

  @Column('bigint', { name: 'serial2', nullable: true })
  serial2: string | null;

  @Column('bit', { name: 'eventual', default: () => '(0)' })
  eventual: boolean;

  @Column('int', { name: 'FkfWeight', nullable: true })
  fkfWeight: number | null;

  @Column('nvarchar', { name: 'driverMobile', length: 50, default: () => "''" })
  driverMobile: string;

  @Column('int', { name: 'rowNumber', default: () => '(0)' })
  rowNumber: number;

  @Column('int', { name: 'FkfReceiptType', default: () => '(1)' })
  fkfReceiptType: number;

  @Column('nvarchar', { name: 'receiptType', nullable: true, length: 50 })
  receiptType: string | null;

  @Column('int', { name: 'FkfPorterage', nullable: true })
  fkfPorterage: number | null;

  @Column('nvarchar', { name: 'porterageName', nullable: true, length: 50 })
  porterageName: string | null;

  @Column('int', { name: 'loadDeduction', default: () => '(0)' })
  loadDeduction: number;

  @Column('nvarchar', {
    name: 'treaterMobile',
    length: 50,
    default: () => "''",
  })
  treaterMobile: string;

  @Column('int', { name: 'FkfContract', nullable: true })
  fkfContract: number | null;

  @Column('int', { name: 'FkfTransferTrust', nullable: true })
  fkfTransferTrust: number | null;

  @Column('nvarchar', { name: 'nationalCode', length: 50, default: () => "''" })
  nationalCode: string;

  @Column('int', { name: 'FkfTreaterMain', nullable: true })
  fkfTreaterMain: number | null;

  @Column('int', { name: 'pkfTrustDetail' })
  pkfTrustDetail: number;

  @Column('int', { name: 'FkfTrust' })
  fkfTrust: number;

  @Column('int', { name: 'FkfGood' })
  fkfGood: number;

  @Column('nvarchar', { name: 'goodCode', nullable: true, length: 25 })
  goodCode: string | null;

  @Column('nvarchar', { name: 'goodName', nullable: true, length: 150 })
  goodName: string | null;

  @Column('decimal', { name: 'amount1', precision: 12, scale: 2 })
  amount1: number;

  @Column('decimal', {
    name: 'amount2',
    precision: 12,
    scale: 2,
    default: () => '(0)',
  })
  amount2: number;

  @Column('nvarchar', { name: 'mainOrderNO1', length: 50, default: () => "''" })
  mainOrderNo1: string;

  @Column('int', { name: 'FkfWarehouse', nullable: true })
  fkfWarehouse: number | null;

  @Column('nvarchar', { name: 'orderNO1', length: 50, default: () => "''" })
  orderNo1: string;

  @Column('nvarchar', { name: 'memo1', length: 500, default: () => "''" })
  memo1: string;

  @Column('bit', { name: 'payOff1', default: () => '(0)' })
  payOff1: boolean;

  @Column('bigint', { name: 'storeCost', default: () => '(0)' })
  storeCost: string;

  @Column('decimal', {
    name: 'amount1Export',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  amount1Export: number;

  @Column('decimal', {
    name: 'amount2Export',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  amount2Export: number;

  @Column('nvarchar', { name: 'memoOrder', length: 255, default: () => "''" })
  memoOrder: string;

  @Column('bit', { name: 'typeK', default: () => '(0)' })
  typeK: boolean;

  @Column('bit', { name: 'typeM', default: () => '(0)' })
  typeM: boolean;

  @Column('nvarchar', { name: 'dateOrder', length: 50, default: () => "''" })
  dateOrder: string;

  @Column('int', { name: 'pkfTrustDetail2', nullable: true })
  pkfTrustDetail2: number | null;

  @Column('decimal', {
    name: 'amount1Temp',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  amount1Temp: number;

  @Column('decimal', {
    name: 'amount2Temp',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  amount2Temp: number;

  @Column('int', { name: 'weightSourceDetail', default: () => '(0)' })
  weightSourceDetail: number;

  @Column('int', { name: 'oldPkf1', nullable: true })
  oldPkf1: number | null;

  @Column('nvarchar', { name: 'tracing', length: 50, default: () => "''" })
  tracing: string;

  @Column('int', { name: 'coverWeight', default: () => '(0)' })
  coverWeight: number;

  @Column('int', { name: 'FkfTDR', nullable: true })
  fkfTdr: number | null;

  @Column('bigint', { name: 'cutCost', default: () => '(0)' })
  cutCost: string;

  @Column('bigint', { name: 'loadCost', default: () => '(0)' })
  loadCost: string;

  @Column('nvarchar', { name: 'kovilNo', length: 50, default: () => "''" })
  kovilNo: string;

  @Column('int', { name: 'FkfStatusCut', default: () => '(1)' })
  fkfStatusCut: number;

  @Column('int', { name: 'FkfHealthRoll', default: () => '(3)' })
  fkfHealthRoll: number;

  @Column('nvarchar', {
    name: 'statusDescription',
    length: 255,
    default: () => "N''",
  })
  statusDescription: string;

  @Column('int', { name: 'FkfTDRExport', nullable: true })
  fkfTdrExport: number | null;

  @Column('int', { name: 'FkfStatusCutOld', nullable: true })
  fkfStatusCutOld: number | null;

  @Column('int', { name: 'FkfTrustRe', nullable: true })
  fkfTrustRe: number | null;
}
