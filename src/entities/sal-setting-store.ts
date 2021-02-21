import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('IX_salSettingStore', ['accYear'], { unique: true })
@Index('PK_salSettingStore', ['pkfSettingStore'], { unique: true })
@Entity('salSettingStore', { schema: 'dbo' })
export class SalSettingStore {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfSettingStore' })
  pkfSettingStore: number;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('nvarchar', { name: 'dirtyDate', length: 50, default: () => "''" })
  dirtyDate: string;

  @Column('bit', { name: 'searchCurentTime', default: () => '(0)' })
  searchCurentTime: boolean;

  @Column('bit', { name: 'negativeStore', default: () => '(1)' })
  negativeStore: boolean;

  @Column('bit', { name: 'serialImportAuto', default: () => '(1)' })
  serialImportAuto: boolean;

  @Column('bit', { name: 'serialExportAuto', default: () => '(1)' })
  serialExportAuto: boolean;

  @Column('int', { name: 'FKFStoreDefExport', nullable: true })
  fkfStoreDefExport: number | null;

  @Column('int', { name: 'FKFStoreDefImport', nullable: true })
  fkfStoreDefImport: number | null;

  @Column('int', { name: 'FkfMarkazDefImport', nullable: true })
  fkfMarkazDefImport: number | null;

  @Column('int', { name: 'FkfProjectDefImport', nullable: true })
  fkfProjectDefImport: number | null;

  @Column('int', { name: 'FkfMarkazDefExport', nullable: true })
  fkfMarkazDefExport: number | null;

  @Column('int', { name: 'FkfProjectDefExport', nullable: true })
  fkfProjectDefExport: number | null;

  @Column('int', { name: 'FkfTafziliContractCostProduce', nullable: true })
  fkfTafziliContractCostProduce: number | null;

  @Column('int', { name: 'FkfTafziliContractCostProduceM', nullable: true })
  fkfTafziliContractCostProduceM: number | null;

  @Column('int', { name: 'FkfTafziliContractIncomeProduce', nullable: true })
  fkfTafziliContractIncomeProduce: number | null;

  @Column('int', { name: 'FkfTafziliContractIncomeProduceM', nullable: true })
  fkfTafziliContractIncomeProduceM: number | null;

  @Column('int', { name: 'FkfTafziliInterfacesCost', nullable: true })
  fkfTafziliInterfacesCost: number | null;

  @Column('int', { name: 'FkfTafziliInterfacesCostM', nullable: true })
  fkfTafziliInterfacesCostM: number | null;

  @Column('int', { name: 'sendSanad', nullable: true, default: () => '(1)' })
  sendSanad: number | null;

  @Column('nvarchar', { name: 'updateDate', length: 10, default: () => "''" })
  updateDate: string;

  @Column('bit', { name: 'sendSanadExportWithSale', default: () => '(1)' })
  sendSanadExportWithSale: boolean;

  @Column('int', { name: 'FkfMoeinToWard', nullable: true })
  fkfMoeinToWard: number | null;

  @Column('int', { name: 'FkfMoeinToConstruction', nullable: true })
  fkfMoeinToConstruction: number | null;

  @Column('bit', { name: 'kardexOrdering', default: () => '(0)' })
  kardexOrdering: boolean;

  @Column('bit', { name: 'storeAccess', default: () => '(0)' })
  storeAccess: boolean;

  @Column('int', { name: 'flow', default: () => '(1)' })
  flow: number;

  @Column('bit', { name: 'towardImport', default: () => '(0)' })
  towardImport: boolean;

  @Column('int', { name: 'FkfMoeinTrust', nullable: true })
  fkfMoeinTrust: number | null;

  @Column('int', { name: 'FkfMoeinTrustSide', nullable: true })
  fkfMoeinTrustSide: number | null;

  @Column('bit', { name: 'automaticOrderKardex', default: () => '(0)' })
  automaticOrderKardex: boolean;

  @Column('bit', { name: 'repNoMandatoryUniqe', default: () => '(0)' })
  repNoMandatoryUniqe: boolean;

  @Column('int', { name: 'FkfMoeinConvert', nullable: true })
  fkfMoeinConvert: number | null;

  @Column('bit', {
    name: 'addCostToPrimeCostForTransfer',
    default: () => '(0)',
  })
  addCostToPrimeCostForTransfer: boolean;

  @Column('bit', { name: 'importAddAvarge', default: () => '(0)' })
  importAddAvarge: boolean;

  @Column('bit', { name: 'withPkf', default: () => '(1)' })
  withPkf: boolean;

  @Column('bit', { name: 'equalAmountStartEnd', default: () => '(1)' })
  equalAmountStartEnd: boolean;

  @Column('bit', { name: 'useGoodCoding', default: () => '(0)' })
  useGoodCoding: boolean;

  @Column('int', { name: 'maxLevelGoodCoding', default: () => '(0)' })
  maxLevelGoodCoding: number;

  @Column('int', { name: 'typeSearchGoods', default: () => '(1)' })
  typeSearchGoods: number;

  @Column('bit', { name: 'equalGoodsStartEnd', default: () => '(1)' })
  equalGoodsStartEnd: boolean;

  @Column('bit', { name: 'storeAccess4RequestGoods', default: () => '(0)' })
  storeAccess4RequestGoods: boolean;

  @Column('bit', { name: 'orderNoAuto', default: () => '(0)' })
  orderNoAuto: boolean;

  @Column('int', { name: 'FkfTypeStoreHouseImport', nullable: true })
  fkfTypeStoreHouseImport: number | null;

  @Column('int', { name: 'FkfTypeStoreHouseExport', nullable: true })
  fkfTypeStoreHouseExport: number | null;

  @Column('bit', { name: 'weightDateReff', default: () => '(0)' })
  weightDateReff: boolean;

  @Column('bit', { name: 'storeHouseImportTemp', default: () => '(0)' })
  storeHouseImportTemp: boolean;

  @Column('bit', {
    name: 'addCostToPrimeCostForTransferCon',
    default: () => '(1)',
  })
  addCostToPrimeCostForTransferCon: boolean;

  @Column('int', { name: 'lenBarcode', default: () => '(0)' })
  lenBarcode: number;

  @Column('int', { name: 'levelGroupGoodCode', default: () => '(0)' })
  levelGroupGoodCode: number;

  @Column('int', { name: 'levelGoodCode', default: () => '(0)' })
  levelGoodCode: number;

  @Column('bit', { name: 'mainOrderNoISMandatory', default: () => '(0)' })
  mainOrderNoIsMandatory: boolean;
}
