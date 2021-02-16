import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salStoreHouseDetailLog', ['pkfContractDetailLog'], { unique: true })
@Entity('salStoreHouseDetailLog', { schema: 'dbo' })
export class SalStoreHouseDetailLog {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfContractDetailLog' })
  pkfContractDetailLog: number;

  @Column('int', { name: 'typeLog' })
  typeLog: number;

  @Column('int', { name: 'FkfLogUser' })
  fkfLogUser: number;

  @Column('nchar', { name: 'logTime', length: 5, default: () => "''" })
  logTime: string;

  @Column('nchar', { name: 'logDate', length: 10, default: () => "''" })
  logDate: string;

  @Column('nvarchar', { name: 'computerIP', length: 255, default: () => "''" })
  computerIp: string;

  @Column('nvarchar', {
    name: 'computerUser',
    length: 255,
    default: () => "''",
  })
  computerUser: string;

  @Column('nvarchar', {
    name: 'computerName',
    length: 255,
    default: () => "''",
  })
  computerName: string;

  @Column('int', { name: 'pkfStoreHouse' })
  pkfStoreHouse: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('nvarchar', { name: 'storeHouseDate', length: 10 })
  storeHouseDate: string;

  @Column('int', { name: 'FkfStoreHouseType' })
  fkfStoreHouseType: number;

  @Column('nvarchar', { name: 'memo', length: 255 })
  memo: string;

  @Column('int', { name: 'FkfGeter', nullable: true })
  fkfGeter: number | null;

  @Column('nvarchar', { name: 'billOfLading', length: 100 })
  billOfLading: string;

  @Column('int', { name: 'FkfSource', nullable: true })
  fkfSource: number | null;

  @Column('nvarchar', { name: 'truckNO', length: 50 })
  truckNo: string;

  @Column('nvarchar', { name: 'createTime', length: 5 })
  createTime: string;

  @Column('nvarchar', { name: 'createDate', length: 10 })
  createDate: string;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('nvarchar', { name: 'address', length: 255 })
  address: string;

  @Column('nvarchar', { name: 'driverName', length: 255 })
  driverName: string;

  @Column('int', { name: 'FkfPorterage', nullable: true })
  fkfPorterage: number | null;

  @Column('int', { name: 'FkfStatus' })
  fkfStatus: number;

  @Column('int', { name: 'FkfProforma', nullable: true })
  fkfProforma: number | null;

  @Column('nvarchar', { name: 'getCondition', length: 255 })
  getCondition: string;

  @Column('int', { name: 'FkfTransfer', nullable: true })
  fkfTransfer: number | null;

  @Column('int', { name: 'FkfTypeStoreHouse', nullable: true })
  fkfTypeStoreHouse: number | null;

  @Column('int', { name: 'FkfTreaterMoein', nullable: true })
  fkfTreaterMoein: number | null;

  @Column('int', { name: 'FkfTreaterTafzili5', nullable: true })
  fkfTreaterTafzili5: number | null;

  @Column('int', { name: 'FkfTreaterTafzili6', nullable: true })
  fkfTreaterTafzili6: number | null;

  @Column('int', { name: 'sanadTempNo', nullable: true })
  sanadTempNo: number | null;

  @Column('bit', { name: 'sanad' })
  sanad: boolean;

  @Column('int', { name: 'FkfSanad', nullable: true })
  fkfSanad: number | null;

  @Column('int', { name: 'FkfContract', nullable: true })
  fkfContract: number | null;

  @Column('int', { name: 'FkfProject', nullable: true })
  fkfProject: number | null;

  @Column('int', { name: 'FkfMarkaz', nullable: true })
  fkfMarkaz: number | null;

  @Column('int', { name: 'FkfContractBuy', nullable: true })
  fkfContractBuy: number | null;

  @Column('int', { name: 'FkfProjectProduceBail', nullable: true })
  fkfProjectProduceBail: number | null;

  @Column('int', { name: 'serialStore' })
  serialStore: number;

  @Column('int', { name: 'FkfRequestGoodsDetail', nullable: true })
  fkfRequestGoodsDetail: number | null;

  @Column('int', { name: 'FkfProduce', nullable: true })
  fkfProduce: number | null;

  @Column('bit', { name: 'withOrigin' })
  withOrigin: boolean;

  @Column('bit', { name: 'isNumber' })
  isNumber: boolean;

  @Column('bit', { name: 'payOff' })
  payOff: boolean;

  @Column('bigint', { name: 'vat' })
  vat: string;

  @Column('int', { name: 'pkfStoreHouseDetail' })
  pkfStoreHouseDetail: number;

  @Column('int', { name: 'FkfGood' })
  fkfGood: number;

  @Column('decimal', { name: 'amountSource1', precision: 18, scale: 2 })
  amountSource1: number;

  @Column('decimal', { name: 'amountDestination1', precision: 18, scale: 2 })
  amountDestination1: number;

  @Column('decimal', { name: 'amountSource2', precision: 18, scale: 2 })
  amountSource2: number;

  @Column('decimal', { name: 'amountDestination2', precision: 18, scale: 2 })
  amountDestination2: number;

  @Column('decimal', { name: 'amountOrder1', precision: 18, scale: 2 })
  amountOrder1: number;

  @Column('decimal', { name: 'amountOrder2', precision: 18, scale: 2 })
  amountOrder2: number;

  @Column('int', { name: 'FKFGoodType', nullable: true })
  fkfGoodType: number | null;

  @Column('nvarchar', { name: 'memoDetail', length: 255 })
  memoDetail: string;

  @Column('int', { name: 'FKFStore' })
  fkfStore: number;

  @Column('decimal', { name: 'amountFinal1', precision: 18, scale: 2 })
  amountFinal1: number;

  @Column('decimal', { name: 'amountFinal2', precision: 18, scale: 2 })
  amountFinal2: number;

  @Column('int', { name: 'FkfPerformaDetail', nullable: true })
  fkfPerformaDetail: number | null;

  @Column('float', { name: 'fee', precision: 53 })
  fee: number;

  @Column('float', { name: 'buyFee', precision: 53 })
  buyFee: number;

  @Column('nvarchar', { name: 'tracing', length: 100 })
  tracing: string;

  @Column('int', { name: 'FkfTransferDetail', nullable: true })
  fkfTransferDetail: number | null;

  @Column('decimal', { name: 'difAmount', precision: 18, scale: 3 })
  difAmount: number;

  @Column('bigint', { name: 'priceWageRates' })
  priceWageRates: string;

  @Column('decimal', { name: 'amountWastePercent', precision: 18, scale: 3 })
  amountWastePercent: number;

  @Column('int', { name: 'idAddress' })
  idAddress: number;

  @Column('nvarchar', { name: 'outPutNo', length: 100 })
  outPutNo: string;

  @Column('nvarchar', { name: 'orderNo', length: 50 })
  orderNo: string;

  @Column('int', { name: 'point', nullable: true })
  point: number | null;

  @Column('int', { name: 'logC', nullable: true })
  logC: number | null;

  @Column('bigint', { name: 'virtualKaredex' })
  virtualKaredex: string;

  @Column('int', { name: 'FkfProduceDetail', nullable: true })
  fkfProduceDetail: number | null;

  @Column('int', { name: 'FkfImporttingExport', nullable: true })
  fkfImporttingExport: number | null;

  @Column('bit', { name: 'buildKardex' })
  buildKardex: boolean;

  @Column('int', { name: 'FkfImportDetail', nullable: true })
  fkfImportDetail: number | null;

  @Column('int', { name: 'FkfWeight', nullable: true })
  fkfWeight: number | null;

  @Column('nvarchar', { name: 'storeHouseType', length: 100 })
  storeHouseType: string;

  @Column('nvarchar', { name: 'geterCode', nullable: true, length: 50 })
  geterCode: string | null;

  @Column('nvarchar', { name: 'geterName', nullable: true, length: 100 })
  geterName: string | null;

  @Column('nvarchar', { name: 'sourceCode', nullable: true, length: 50 })
  sourceCode: string | null;

  @Column('nvarchar', { name: 'source', nullable: true, length: 150 })
  source: string | null;

  @Column('int', { name: 'FkfCreateUser' })
  fkfCreateUser: number;

  @Column('nvarchar', { name: 'createUser', nullable: true, length: 401 })
  createUser: string | null;

  @Column('int', { name: 'porterageCode', nullable: true })
  porterageCode: number | null;

  @Column('nvarchar', { name: 'porterage', nullable: true, length: 50 })
  porterage: string | null;

  @Column('nvarchar', { name: 'tafzili2Code', nullable: true, length: 50 })
  tafzili2Code: string | null;

  @Column('nvarchar', { name: 'tafzili2', nullable: true, length: 250 })
  tafzili2: string | null;

  @Column('nvarchar', { name: 'projectCode', nullable: true, length: 50 })
  projectCode: string | null;

  @Column('nvarchar', { name: 'project', length: 250 })
  project: string;

  @Column('nvarchar', { name: 'markazCode', nullable: true, length: 50 })
  markazCode: string | null;

  @Column('nvarchar', { name: 'markaz', nullable: true, length: 100 })
  markaz: string | null;

  @Column('nvarchar', { name: 'goodCode', length: 25 })
  goodCode: string;

  @Column('nvarchar', { name: 'goodName', length: 250 })
  goodName: string;

  @Column('nvarchar', { name: 'storeCode', length: 25 })
  storeCode: string;

  @Column('nvarchar', { name: 'storeName', length: 150 })
  storeName: string;

  @Column('nvarchar', { name: 'goodType', nullable: true, length: 250 })
  goodType: string | null;

  @Column('nvarchar', { name: 'typeStoreHouse', nullable: true, length: 250 })
  typeStoreHouse: string | null;
}
