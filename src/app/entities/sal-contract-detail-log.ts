import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salContractDetailLog', ['pkfContractDetailLog'], { unique: true })
@Entity('salContractDetailLog', { schema: 'dbo' })
export class SalContractDetailLog {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfContractDetailLog' })
  pkfContractDetailLog: number;

  @Column('int', { name: 'typeLog', nullable: true })
  typeLog: number | null;

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

  @Column('int', { name: 'pkfContract' })
  pkfContract: number;

  @Column('int', { name: 'FkfContractType' })
  fkfContractType: number;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('int', { name: 'FkfTreater' })
  fkfTreater: number;

  @Column('nvarchar', { name: 'contractDate', length: 10 })
  contractDate: string;

  @Column('int', { name: 'FkfCurrency', nullable: true })
  fkfCurrency: number | null;

  @Column('float', { name: 'feeCurrency', precision: 53 })
  feeCurrency: number;

  @Column('nvarchar', { name: 'memo', length: 255 })
  memo: string;

  @Column('int', { name: 'FkfStatus' })
  fkfStatus: number;

  @Column('int', { name: 'FkfCreateUser' })
  fkfCreateUser: number;

  @Column('nvarchar', { name: 'createDate', length: 10 })
  createDate: string;

  @Column('int', { name: 'FkfEditUser', nullable: true })
  fkfEditUser: number | null;

  @Column('nvarchar', { name: 'editDate', length: 10 })
  editDate: string;

  @Column('int', { name: 'FkfFinalUser', nullable: true })
  fkfFinalUser: number | null;

  @Column('nvarchar', { name: 'finalDate', length: 10 })
  finalDate: string;

  @Column('int', { name: 'sanadTempNo', nullable: true })
  sanadTempNo: number | null;

  @Column('int', { name: 'FkfProduceFactory', nullable: true })
  fkfProduceFactory: number | null;

  @Column('nvarchar', { name: 'contractNo', length: 250 })
  contractNo: string;

  @Column('nvarchar', { name: 'invoiceNo', length: 255 })
  invoiceNo: string;

  @Column('nvarchar', { name: 'proformaIinvoiceNo', length: 255 })
  proformaIinvoiceNo: string;

  @Column('nvarchar', { name: 'treaterAddress', length: 255 })
  treaterAddress: string;

  @Column('nvarchar', { name: 'getCondition', length: 255 })
  getCondition: string;

  @Column('nvarchar', { name: 'payCondition', length: 255 })
  payCondition: string;

  @Column('int', { name: 'FkfBuyPlace', nullable: true })
  fkfBuyPlace: number | null;

  @Column('int', { name: 'FkfAgency', nullable: true })
  fkfAgency: number | null;

  @Column('int', { name: 'FkfBuyFactory', nullable: true })
  fkfBuyFactory: number | null;

  @Column('int', { name: 'FkfMoeinCost', nullable: true })
  fkfMoeinCost: number | null;

  @Column('int', { name: 'usance' })
  usance: number;

  @Column('int', { name: 'serialProforma1', nullable: true })
  serialProforma1: number | null;

  @Column('nvarchar', { name: 'storeNo', length: 50 })
  storeNo: string;

  @Column('int', { name: 'FkfSeller', nullable: true })
  fkfSeller: number | null;

  @Column('nvarchar', { name: 'payoffDate', length: 10 })
  payoffDate: string;

  @Column('bigint', { name: 'addressNo', nullable: true })
  addressNo: string | null;

  @Column('int', { name: 'FkfProforma', nullable: true })
  fkfProforma: number | null;

  @Column('int', { name: 'FKFMain', nullable: true })
  fkfMain: number | null;

  @Column('int', { name: 'FkfContractTypeBuy', nullable: true })
  fkfContractTypeBuy: number | null;

  @Column('int', { name: 'FkfMoeinIncome', nullable: true })
  fkfMoeinIncome: number | null;

  @Column('bit', { name: 'sanad' })
  sanad: boolean;

  @Column('int', { name: 'FkfSanad', nullable: true })
  fkfSanad: number | null;

  @Column('bigint', { name: 'payOff' })
  payOff: string;

  @Column('nvarchar', { name: 'memoPayOff', length: 255 })
  memoPayOff: string;

  @Column('bit', { name: 'contractSale' })
  contractSale: boolean;

  @Column('int', { name: 'FkfBuyContract', nullable: true })
  fkfBuyContract: number | null;

  @Column('int', { name: 'FkfTreaterCost', nullable: true })
  fkfTreaterCost: number | null;

  @Column('bit', { name: 'contractClose' })
  contractClose: boolean;

  @Column('int', { name: 'sanadTempNoClose', nullable: true })
  sanadTempNoClose: number | null;

  @Column('int', { name: 'FKFBuySaleType' })
  fkfBuySaleType: number;

  @Column('int', { name: 'oldPkf', nullable: true })
  oldPkf: number | null;

  @Column('nvarchar', { name: 'weightDate', length: 10 })
  weightDate: string;

  @Column('bit', { name: 'weight' })
  weight: boolean;

  @Column('bit', { name: 'printed' })
  printed: boolean;

  @Column('bigint', { name: 'vat' })
  vat: string;

  @Column('int', { name: 'discount' })
  discount: number;

  @Column('int', { name: 'serialOfficial' })
  serialOfficial: number;

  @Column('int', { name: 'FkfTreaterMoein', nullable: true })
  fkfTreaterMoein: number | null;

  @Column('int', { name: 'FkfTreaterTafzili5', nullable: true })
  fkfTreaterTafzili5: number | null;

  @Column('int', { name: 'FkfTreaterTafzili6', nullable: true })
  fkfTreaterTafzili6: number | null;

  @Column('nvarchar', { name: 'editTime', length: 50 })
  editTime: string;

  @Column('int', { name: 'FkfStoreHouse', nullable: true })
  fkfStoreHouse: number | null;

  @Column('int', { name: 'payoffEmp', nullable: true })
  payoffEmp: number | null;

  @Column('int', { name: 'FkfProject', nullable: true })
  fkfProject: number | null;

  @Column('int', { name: 'FkfMarkaz', nullable: true })
  fkfMarkaz: number | null;

  @Column('nvarchar', { name: 'NoLading', length: 25 })
  noLading: string;

  @Column('nvarchar', { name: 'NoCar', length: 25 })
  noCar: string;

  @Column('bit', { name: 'notify' })
  notify: boolean;

  @Column('int', { name: 'FkftreaterOfficial', nullable: true })
  fkftreaterOfficial: number | null;

  @Column('bigint', { name: 'priceCost' })
  priceCost: string;

  @Column('bigint', { name: 'discountTashim' })
  discountTashim: string;

  @Column('bit', { name: 'autoExport' })
  autoExport: boolean;

  @Column('int', { name: 'FkfSaleProject', nullable: true })
  fkfSaleProject: number | null;

  @Column('int', { name: 'FkfTreaterBed', nullable: true })
  fkfTreaterBed: number | null;

  @Column('int', { name: 'FkfTreaterMoeinBed', nullable: true })
  fkfTreaterMoeinBed: number | null;

  @Column('bit', { name: 'calcProduceFee4Get' })
  calcProduceFee4Get: boolean;

  @Column('bit', { name: 'viewPrpduceFee' })
  viewPrpduceFee: boolean;

  @Column('int', { name: 'FkfRequestGoods', nullable: true })
  fkfRequestGoods: number | null;

  @Column('int', { name: 'FkfOrder', nullable: true })
  fkfOrder: number | null;

  @Column('int', { name: 'FkfSalType', nullable: true })
  fkfSalType: number | null;

  @Column('bit', { name: 'confirmPrint' })
  confirmPrint: boolean;

  @Column('bit', { name: 'autoImport' })
  autoImport: boolean;

  @Column('int', { name: 'FkfTreaterBedTafzili2', nullable: true })
  fkfTreaterBedTafzili2: number | null;

  @Column('nvarchar', { name: 'treaterCode', nullable: true, length: 50 })
  treaterCode: string | null;

  @Column('nvarchar', { name: 'famile', nullable: true, length: 100 })
  famile: string | null;

  @Column('nvarchar', { name: 'seller', nullable: true, length: 255 })
  seller: string | null;

  @Column('nvarchar', { name: 'treaterCode2', nullable: true, length: 50 })
  treaterCode2: string | null;

  @Column('nvarchar', { name: 'famile2', nullable: true, length: 250 })
  famile2: string | null;

  @Column('nvarchar', { name: 'treaterCode3', nullable: true, length: 50 })
  treaterCode3: string | null;

  @Column('nvarchar', { name: 'famile3', nullable: true, length: 100 })
  famile3: string | null;

  @Column('nvarchar', { name: 'moeinCode', nullable: true, length: 8 })
  moeinCode: string | null;

  @Column('nvarchar', { name: 'moeinName', nullable: true, length: 200 })
  moeinName: string | null;

  @Column('nvarchar', { name: 'projectCode', nullable: true, length: 50 })
  projectCode: string | null;

  @Column('nvarchar', { name: 'project', length: 250 })
  project: string;

  @Column('int', { name: 'pkfContractDetail' })
  pkfContractDetail: number;

  @Column('int', { name: 'FkfContract' })
  fkfContract: number;

  @Column('int', { name: 'FkfStore' })
  fkfStore: number;

  @Column('int', { name: 'FkfGoods' })
  fkfGoods: number;

  @Column('decimal', { name: 'amount1', precision: 18, scale: 3 })
  amount1: number;

  @Column('decimal', { name: 'amount2', precision: 18, scale: 3 })
  amount2: number;

  @Column('decimal', { name: 'fee', precision: 18, scale: 5 })
  fee: number;

  @Column('decimal', { name: 'feeCur', precision: 18, scale: 2 })
  feeCur: number;

  @Column('tinyint', { name: 'calcBase' })
  calcBase: number;

  @Column('nvarchar', { name: 'getDate', nullable: true, length: 10 })
  getDate: string | null;

  @Column('int', { name: 'FkfDestinationStore', nullable: true })
  fkfDestinationStore: number | null;

  @Column('int', { name: 'FkfBuyContractDet', nullable: true })
  fkfBuyContractDet: number | null;

  @Column('int', { name: 'carCount' })
  carCount: number;

  @Column('nvarchar', { name: 'getNo', length: 100 })
  getNo: string;

  @Column('nvarchar', { name: 'outPutNo', length: 100 })
  outPutNo: string;

  @Column('nvarchar', { name: 'driverName', length: 255 })
  driverName: string;

  @Column('int', { name: 'FkfProformaDetail', nullable: true })
  fkfProformaDetail: number | null;

  @Column('bit', { name: 'estimate' })
  estimate: boolean;

  @Column('decimal', { name: 'buyFee', precision: 18, scale: 5 })
  buyFee: number;

  @Column('decimal', { name: 'buyFeeCur', precision: 18, scale: 2 })
  buyFeeCur: number;

  @Column('decimal', { name: 'discountDet', precision: 18, scale: 2 })
  discountDet: number;

  @Column('int', { name: 'FKFGoodType', nullable: true })
  fkfGoodType: number | null;

  @Column('int', { name: 'FkfBuy', nullable: true })
  fkfBuy: number | null;

  @Column('int', { name: 'FkfProduceTreater', nullable: true })
  fkfProduceTreater: number | null;

  @Column('decimal', { name: 'produceFee', precision: 18, scale: 3 })
  produceFee: number;

  @Column('nvarchar', { name: 'memoDet', length: 255 })
  memoDet: string;

  @Column('nvarchar', { name: 'storeNoDet', length: 50 })
  storeNoDet: string;

  @Column('int', { name: 'commisinFee' })
  commisinFee: number;

  @Column('int', { name: 'FkfUnit1', nullable: true })
  fkfUnit1: number | null;

  @Column('int', { name: 'FkfUnit2', nullable: true })
  fkfUnit2: number | null;

  @Column('decimal', { name: 'amount1D', precision: 18, scale: 3 })
  amount1D: number;

  @Column('decimal', { name: 'amount2D', precision: 18, scale: 3 })
  amount2D: number;

  @Column('int', { name: 'discountP' })
  discountP: number;

  @Column('int', { name: 'FKFContractDetailStatus' })
  fkfContractDetailStatus: number;

  @Column('nvarchar', { name: 'orderNo', length: 50 })
  orderNo: string;

  @Column('int', { name: 'point', nullable: true })
  point: number | null;

  @Column('bit', { name: 'warningWeight' })
  warningWeight: boolean;

  @Column('int', { name: 'FkfGoodsMain', nullable: true })
  fkfGoodsMain: number | null;

  @Column('decimal', { name: 'wastePercent', precision: 18, scale: 2 })
  wastePercent: number;

  @Column('decimal', { name: 'weightPost', precision: 18, scale: 3 })
  weightPost: number;

  @Column('decimal', { name: 'weightLoss', precision: 18, scale: 3 })
  weightLoss: number;

  @Column('int', { name: 'FkfOrderDetail', nullable: true })
  fkfOrderDetail: number | null;

  @Column('int', { name: 'goodUniqe' })
  goodUniqe: number;

  @Column('decimal', { name: 'feeAgreement', precision: 18, scale: 5 })
  feeAgreement: number;

  @Column('decimal', { name: 'wageFee', precision: 18, scale: 5 })
  wageFee: number;

  @Column('int', { name: 'FkfRequestGoodsDetail', nullable: true })
  fkfRequestGoodsDetail: number | null;

  @Column('int', { name: 'FkfImporttingExport', nullable: true })
  fkfImporttingExport: number | null;

  @Column('decimal', { name: 'amount1ImportOld', precision: 18, scale: 3 })
  amount1ImportOld: number;

  @Column('decimal', { name: 'amount2ImportOld', precision: 18, scale: 3 })
  amount2ImportOld: number;

  @Column('int', { name: 'FkfReturn', nullable: true })
  fkfReturn: number | null;

  @Column('nvarchar', { name: 'storeCode', length: 25 })
  storeCode: string;

  @Column('nvarchar', { name: 'storeName', length: 150 })
  storeName: string;

  @Column('nvarchar', { name: 'goodCode', length: 25 })
  goodCode: string;

  @Column('nvarchar', { name: 'goodName', length: 150 })
  goodName: string;
}
