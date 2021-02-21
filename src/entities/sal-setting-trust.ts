import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salSettingTrust', ['pkfSettingTrust'], { unique: true })
@Entity('salSettingTrust', { schema: 'dbo' })
export class SalSettingTrust {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfSettingTrust' })
  pkfSettingTrust: number;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'FKFStoreReceipt', nullable: true })
  fkfStoreReceipt: number | null;

  @Column('int', { name: 'UnitTareR', nullable: true })
  unitTareR: number | null;

  @Column('bit', { name: 'orderNoReciptAuto', default: () => '(0)' })
  orderNoReciptAuto: boolean;

  @Column('bit', { name: 'directPrintR', default: () => '(0)' })
  directPrintR: boolean;

  @Column('bit', { name: 'gotoSerial', default: () => '(0)' })
  gotoSerial: boolean;

  @Column('bit', { name: 'billOfLading', default: () => '(1)' })
  billOfLading: boolean;

  @Column('bit', { name: 'payResidLock', default: () => '(1)' })
  payResidLock: boolean;

  @Column('bit', { name: 'mainOrderNoUnigTreGood', default: () => '(0)' })
  mainOrderNoUnigTreGood: boolean;

  @Column('int', { name: 'FKFStoreRelease', nullable: true })
  fkfStoreRelease: number | null;

  @Column('bit', { name: 'calcUnit24relase', default: () => '(0)' })
  calcUnit24relase: boolean;

  @Column('bit', { name: 'amountExportRelease', default: () => '(0)' })
  amountExportRelease: boolean;

  @Column('int', { name: 'FKFStoreExport', nullable: true })
  fkfStoreExport: number | null;

  @Column('int', { name: 'print4LoadingRow', default: () => '(0)' })
  print4LoadingRow: number;

  @Column('bit', { name: 'serialExportAuto', default: () => '(1)' })
  serialExportAuto: boolean;

  @Column('int', { name: 'FactorCostStore', nullable: true })
  factorCostStore: number | null;

  @Column('int', { name: 'roundCostStore', default: () => '(0)' })
  roundCostStore: number;

  @Column('bit', { name: 'tare', default: () => '(1)' })
  tare: boolean;

  @Column('int', { name: 'FactorIncomeTax', nullable: true })
  factorIncomeTax: number | null;

  @Column('int', { name: 'roundIncomeTax', default: () => '(0)' })
  roundIncomeTax: number;

  @Column('bit', { name: 'printCostStore', default: () => '(1)' })
  printCostStore: boolean;

  @Column('int', { name: 'UnitTare', nullable: true })
  unitTare: number | null;

  @Column('bit', { name: 'directPrintK', default: () => '(0)' })
  directPrintK: boolean;

  @Column('bit', { name: 'print4loadingFProduce', default: () => '(0)' })
  print4loadingFProduce: boolean;

  @Column('float', { name: 'VatP', precision: 53, default: () => '(0)' })
  vatP: number;

  @Column('bit', { name: 'SerialServiceAuto', default: () => '(1)' })
  serialServiceAuto: boolean;

  @Column('bit', { name: 'searchCurentTime', default: () => '(0)' })
  searchCurentTime: boolean;

  @Column('int', { name: 'FkfUnitStorePrice', nullable: true })
  fkfUnitStorePrice: number | null;

  @Column('int', { name: 'storePrice', default: () => '(0)' })
  storePrice: number;

  @Column('bit', { name: 'equipment', default: () => '(0)' })
  equipment: boolean;

  @Column('int', { name: 'FactorCut', nullable: true })
  factorCut: number | null;

  @Column('bit', { name: 'loadDeducationImport', default: () => '(0)' })
  loadDeducationImport: boolean;

  @Column('bit', { name: 'loadDeducationExport', default: () => '(0)' })
  loadDeducationExport: boolean;

  @Column('bit', { name: 'weightForExport', default: () => '(0)' })
  weightForExport: boolean;

  @Column('int', { name: 'FkfUnitLoadPrice', nullable: true })
  fkfUnitLoadPrice: number | null;

  @Column('int', { name: 'loadPrice', default: () => '(0)' })
  loadPrice: number;

  @Column('int', { name: 'FkfLoadItem', nullable: true })
  fkfLoadItem: number | null;

  @Column('bit', { name: 'printWithoutFactor', default: () => '(1)' })
  printWithoutFactor: boolean;

  @Column('nvarchar', { name: 'sqlDbName', length: 50, default: () => "''" })
  sqlDbName: string;

  @Column('nvarchar', { name: 'sqlIP', length: 50, default: () => "''" })
  sqlIp: string;

  @Column('nvarchar', { name: 'sqlPass', length: 50, default: () => "''" })
  sqlPass: string;

  @Column('nvarchar', { name: 'sqlUser', length: 50, default: () => "''" })
  sqlUser: string;

  @Column('bit', { name: 'smsToTibaSamaneh', default: () => '(0)' })
  smsToTibaSamaneh: boolean;

  @Column('int', { name: 'FkfCartage', nullable: true })
  fkfCartage: number | null;

  @Column('bit', { name: 'loadingControl2Export', default: () => '(0)' })
  loadingControl2Export: boolean;

  @Column('decimal', {
    name: 'difPercentCutWithRelease',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  difPercentCutWithRelease: number;

  @Column('bigint', { name: 'tracingAuto', default: () => '(0)' })
  tracingAuto: string;

  @Column('decimal', {
    name: 'releaseTeloMin',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  releaseTeloMin: number;

  @Column('decimal', {
    name: 'releaseTeloMax',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  releaseTeloMax: number;

  @Column('nvarchar', {
    name: 'sendToKartablURL',
    length: 500,
    default: () => "''",
  })
  sendToKartablUrl: string;

  @Column('nvarchar', {
    name: 'kartablCereditCode',
    length: 500,
    default: () => "''",
  })
  kartablCereditCode: string;

  @Column('bit', { name: 'mainOrderNoIsMandetory', default: () => '(0)' })
  mainOrderNoIsMandetory: boolean;

  @Column('bit', { name: 'existTracingStartEndTracing', default: () => '(0)' })
  existTracingStartEndTracing: boolean;

  @Column('bit', { name: 'exprtWight', default: () => '(0)' })
  exprtWight: boolean;

  @Column('bit', { name: 'sentExportFromWeightOneRow', default: () => '(0)' })
  sentExportFromWeightOneRow: boolean;

  @Column('bit', { name: 'planing', default: () => '(0)' })
  planing: boolean;
}
