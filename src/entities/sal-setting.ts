import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { AccMoein } from './acc-moein';

@Index('IX_salSetting', ['accYear'], { unique: true })
@Index('PK_salSetting', ['pkfSetting'], { unique: true })
@Entity('salSetting', { schema: 'dbo' })
export class SalSetting {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfSetting' })
  pkfSetting: number;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'FKFStoreBuy', nullable: true })
  fkfStoreBuy: number | null;

  @Column('int', { name: 'FKFStoreSale', nullable: true })
  fkfStoreSale: number | null;

  @Column('int', { name: 'FKFStoreProforma', nullable: true })
  fkfStoreProforma: number | null;

  @Column('bit', { name: 'serialSaleAuto', default: () => '1' })
  serialSaleAuto: boolean;

  @Column('bit', { name: 'serialBuyAuto', default: () => '1' })
  serialBuyAuto: boolean;

  @Column('bit', { name: 'searchCurentTime', default: () => '0' })
  searchCurentTime: boolean;

  @Column('bit', { name: 'amount1ZeroSale', default: () => '0' })
  amount1ZeroSale: boolean;

  @Column('bit', { name: 'amount1ZeroBuy', default: () => '0' })
  amount1ZeroBuy: boolean;

  @Column('bit', { name: 'propagation', default: () => '1' })
  propagation: boolean;

  @Column('bit', { name: 'uniqeContaractAddressNoSale', default: () => '0' })
  uniqeContaractAddressNoSale: boolean;

  @Column('bit', {
    name: 'uniqeContaractAddressNoProforma',
    default: () => '0',
  })
  uniqeContaractAddressNoProforma: boolean;

  @Column('bit', { name: 'SerialServiceAuto', default: () => '1' })
  serialServiceAuto: boolean;

  @Column('bit', { name: 'datePerformToSale', default: () => '0' })
  datePerformToSale: boolean;

  @Column('int', { name: 'unitDefSD', nullable: true })
  unitDefSd: number | null;

  @Column('bit', { name: 'vat', default: () => '(0)' })
  vat: boolean;

  @Column('int', { name: 'FkfTreaterSaleReturn', nullable: true })
  fkfTreaterSaleReturn: number | null;

  @Column('int', { name: 'FkfTreaterDiscountBuy', nullable: true })
  fkfTreaterDiscountBuy: number | null;

  @Column('int', { name: 'FkfTreaterBuyReturn', nullable: true })
  fkfTreaterBuyReturn: number | null;

  @Column('bit', { name: 'repeatGoodsBuySale', default: () => '(0)' })
  repeatGoodsBuySale: boolean;

  @Column('bit', { name: 'repeatGoods', default: () => '(0)' })
  repeatGoods: boolean;

  @Column('int', { name: 'FkfTreaterSaleTax', nullable: true })
  fkfTreaterSaleTax: number | null;

  @Column('int', { name: 'FkfTreaterSaleSide', nullable: true })
  fkfTreaterSaleSide: number | null;

  @Column('int', { name: 'FkfTreaterBuyTax', nullable: true })
  fkfTreaterBuyTax: number | null;

  @Column('int', { name: 'FkfTreaterBuySide', nullable: true })
  fkfTreaterBuySide: number | null;

  @Column('int', { name: 'FkfTafziliContractCostKom', nullable: true })
  fkfTafziliContractCostKom: number | null;

  @Column('int', { name: 'FkfTafziliContractCostKomM', nullable: true })
  fkfTafziliContractCostKomM: number | null;

  @Column('int', { name: 'FkfTafziliContractIncomeKom', nullable: true })
  fkfTafziliContractIncomeKom: number | null;

  @Column('int', { name: 'FkfTafziliContractIncomeKomM', nullable: true })
  fkfTafziliContractIncomeKomM: number | null;

  @Column('int', { name: 'FkfTafziliContractCostBuyProduct', nullable: true })
  fkfTafziliContractCostBuyProduct: number | null;

  @Column('int', { name: 'FkfTafziliContractCostBuyProductM', nullable: true })
  fkfTafziliContractCostBuyProductM: number | null;

  @Column('int', { name: 'FkfTafziliContractIncomeBuyProduct', nullable: true })
  fkfTafziliContractIncomeBuyProduct: number | null;

  @Column('int', {
    name: 'FkfTafziliContractIncomeBuyProductM',
    nullable: true,
  })
  fkfTafziliContractIncomeBuyProductM: number | null;

  @Column('int', {
    name: 'FkfTafziliContractCostProduceDamage',
    nullable: true,
  })
  fkfTafziliContractCostProduceDamage: number | null;

  @Column('int', {
    name: 'FkfTafziliContractCostProduceDamageM',
    nullable: true,
  })
  fkfTafziliContractCostProduceDamageM: number | null;

  @Column('int', { name: 'FkfMoeinSaleDef', nullable: true })
  fkfMoeinSaleDef: number | null;

  @Column('int', { name: 'FkfMoeinBuyDef', nullable: true })
  fkfMoeinBuyDef: number | null;

  @Column('int', { name: 'FkfMoeinBuyBed', nullable: true })
  fkfMoeinBuyBed: number | null;

  @Column('int', { name: 'FkfMoeinBuy', nullable: true })
  fkfMoeinBuy: number | null;

  @Column('int', { name: 'FkfMoeinBuy2', nullable: true })
  fkfMoeinBuy2: number | null;

  @Column('int', { name: 'FkfMarkazDefBuy', nullable: true })
  fkfMarkazDefBuy: number | null;

  @Column('int', { name: 'FkfProjectDefBuy', nullable: true })
  fkfProjectDefBuy: number | null;

  @Column('int', { name: 'FkfMarkazDefSale', nullable: true })
  fkfMarkazDefSale: number | null;

  @Column('int', { name: 'FkfProjectDefSale', nullable: true })
  fkfProjectDefSale: number | null;

  @Column('int', { name: 'FkfTreaterSaleTaxM', nullable: true })
  fkfTreaterSaleTaxM: number | null;

  @Column('int', { name: 'FkfTreaterSaleSideM', nullable: true })
  fkfTreaterSaleSideM: number | null;

  @Column('int', { name: 'FkfTreaterBuyTaxM', nullable: true })
  fkfTreaterBuyTaxM: number | null;

  @Column('int', { name: 'FkfTreaterBuySideM', nullable: true })
  fkfTreaterBuySideM: number | null;

  @Column('bit', { name: 'addresNoAuto', default: () => '(0)' })
  addresNoAuto: boolean;

  @Column('bit', { name: 'addresNoUniqe', default: () => '(0)' })
  addresNoUniqe: boolean;

  @Column('bit', { name: 'addresNoGoto', default: () => '(0)' })
  addresNoGoto: boolean;

  @Column('bit', { name: 'addresNoSaleSerial', default: () => '(0)' })
  addresNoSaleSerial: boolean;

  @Column('bit', { name: 'mandatoryGetCondition', default: () => '(0)' })
  mandatoryGetCondition: boolean;

  @Column('bit', { name: 'storeNoIsUniqe', default: () => '(0)' })
  storeNoIsUniqe: boolean;

  @Column('int', { name: 'FkfOrderStatusAfterSale', nullable: true })
  fkfOrderStatusAfterSale: number | null;

  @Column('bit', { name: 'vatBuy', default: () => '(0)' })
  vatBuy: boolean;

  @Column('int', { name: 'FKFMoeinBailContract', nullable: true })
  fkfMoeinBailContract: number | null;

  @Column('bit', { name: 'importProduceNotSanad', default: () => '(0)' })
  importProduceNotSanad: boolean;

  @Column('bit', { name: 'importDamageNotSanad', default: () => '(0)' })
  importDamageNotSanad: boolean;

  @Column('bit', { name: 'directPrintS', default: () => '(0)' })
  directPrintS: boolean;

  @Column('int', { name: 'FKFStoreDirectUse', nullable: true })
  fkfStoreDirectUse: number | null;

  @Column('int', { name: 'FkfProjectDirectUse', nullable: true })
  fkfProjectDirectUse: number | null;

  @Column('bit', { name: 'calcPayOffFromOrderDate', default: () => '(0)' })
  calcPayOffFromOrderDate: boolean;

  @Column('bit', { name: 'saleSerialWithStore', default: () => '(0)' })
  saleSerialWithStore: boolean;

  @Column('bit', { name: 'estimateOrderToSale', default: () => '(0)' })
  estimateOrderToSale: boolean;

  @Column('bit', { name: 'storeProjectNullOrderToSale', default: () => '(0)' })
  storeProjectNullOrderToSale: boolean;

  @Column('decimal', {
    name: 'salePercent',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  salePercent: number;

  @Column('int', { name: 'FKFCostTreaterBailProduce', nullable: true })
  fkfCostTreaterBailProduce: number | null;

  @Column('decimal', {
    name: 'salePercentTo',
    precision: 18,
    scale: 2,
    default: () => '(2)',
  })
  salePercentTo: number;

  @Column('bit', { name: 'changeOrderAfterSale', default: () => '(0)' })
  changeOrderAfterSale: boolean;

  @Column('nvarchar', { name: 'pathFax', default: () => "''" })
  pathFax: string;

  @Column('int', { name: 'FKFCategoryTafziliOrder', nullable: true })
  fkfCategoryTafziliOrder: number | null;

  @Column('bit', { name: 'sendOrderSaleToTafzili', default: () => '(0)' })
  sendOrderSaleToTafzili: boolean;

  @Column('bit', { name: 'serialSaleOrderAuto', default: () => '(1)' })
  serialSaleOrderAuto: boolean;

  @Column('bit', { name: 'discountPercentPerTerater', default: () => '(1)' })
  discountPercentPerTerater: boolean;

  @Column('decimal', {
    name: 'difOrderwithSaleP',
    precision: 18,
    scale: 1,
    default: () => '(0)',
  })
  difOrderwithSaleP: number;

  @Column('bit', { name: 'sendVat4ImportContract', default: () => '(0)' })
  sendVat4ImportContract: boolean;

  @Column('int', { name: 'FkfTreaterPublicOrder', nullable: true })
  fkfTreaterPublicOrder: number | null;

  @Column('bit', { name: 'finalImportFromSale', default: () => '(0)' })
  finalImportFromSale: boolean;

  @Column('int', { name: 'FkfTreaterDef4Sale', nullable: true })
  fkfTreaterDef4Sale: number | null;

  @Column('bit', { name: 'PrintSaleFactorIm', default: () => '(0)' })
  printSaleFactorIm: boolean;

  @Column('bit', { name: 'saveOpenGetForm4Sale', default: () => '(0)' })
  saveOpenGetForm4Sale: boolean;

  @Column('int', { name: 'defNumberGoods4Sale', default: () => '(0)' })
  defNumberGoods4Sale: number;

  @Column('bit', { name: 'saleBarcode', default: () => '(0)' })
  saleBarcode: boolean;

  @Column('bit', { name: 'calUnitDefSD', default: () => '(0)' })
  calUnitDefSd: boolean;

  @Column('bit', { name: 'feeImportWithVat', default: () => '(0)' })
  feeImportWithVat: boolean;

  @Column('bit', { name: 'sendSanadBuySummery', default: () => '(0)' })
  sendSanadBuySummery: boolean;

  @Column('bit', {
    name: 'customerSerialMandetoryAndUniqe',
    default: () => '(0)',
  })
  customerSerialMandetoryAndUniqe: boolean;

  @Column('bit', { name: 'salerMandetory', default: () => '(0)' })
  salerMandetory: boolean;

  @Column('bit', {
    name: 'summeryGoodsFromImportDataSale',
    default: () => '(0)',
  })
  summeryGoodsFromImportDataSale: boolean;

  @Column('int', { name: 'FkfMoeinBuyBedEx', nullable: true })
  fkfMoeinBuyBedEx: number | null;

  @Column('int', { name: 'FkfTreaterCommissionSale', nullable: true })
  fkfTreaterCommissionSale: number | null;

  @Column('int', { name: 'FkfTreaterCommissionSaleM', nullable: true })
  fkfTreaterCommissionSaleM: number | null;

  @Column('bit', { name: 'vatAgreement', default: () => '(0)' })
  vatAgreement: boolean;

  @Column('int', { name: 'alarmCreditedate', default: () => '(1)' })
  alarmCreditedate: number;

  @Column('bit', { name: 'vatPerforma', default: () => '(0)' })
  vatPerforma: boolean;

  @Column('bit', { name: 'saleWithImport', default: () => '(0)' })
  saleWithImport: boolean;

  @Column('bit', { name: 'feeAgreementCommisinFee', default: () => '(0)' })
  feeAgreementCommisinFee: boolean;

  @Column('int', { name: 'FKFTreaterSaleReturnWithoutOrigin', nullable: true })
  fkfTreaterSaleReturnWithoutOrigin: number | null;

  @Column('int', { name: 'FKFTreaterBuyReturnWithoutOrigin', nullable: true })
  fkfTreaterBuyReturnWithoutOrigin: number | null;

  @Column('bit', { name: 'errorAlarmValidity', default: () => '(0)' })
  errorAlarmValidity: boolean;

  @Column('bit', { name: 'seperateDiscount', default: () => '(0)' })
  seperateDiscount: boolean;

  @Column('bigint', { name: 'limitationVat', default: () => '(0)' })
  limitationVat: string;

  @Column('bit', { name: 'weightDateToFactor', default: () => '(0)' })
  weightDateToFactor: boolean;

  @Column('bit', { name: 'sendImportTrustFromSale', default: () => '(0)' })
  sendImportTrustFromSale: boolean;

  @Column('bit', { name: 'mandetoryGetDateOrder', default: () => '(0)' })
  mandetoryGetDateOrder: boolean;

  @Column('int', { name: 'percentContractCost', default: () => '(20)' })
  percentContractCost: number;

  @Column('bit', { name: 'payoffDateSaleMandatory', default: () => '(0)' })
  payoffDateSaleMandatory: boolean;

  @Column('bit', { name: 'payoffDateBuyMandatory', default: () => '(0)' })
  payoffDateBuyMandatory: boolean;

  @Column('bit', { name: 'mandetoryDraftVPoint', default: () => '(0)' })
  mandetoryDraftVPoint: boolean;

  @Column('bit', { name: 'chekVatBeforPrint', default: () => '(1)' })
  chekVatBeforPrint: boolean;

  @Column('bit', { name: 'vatOrderBuy', default: () => '(0)' })
  vatOrderBuy: boolean;

  @Column('int', { name: 'typeOrderBuyFlow', default: () => '(1)' })
  typeOrderBuyFlow: number;

  @Column('int', { name: 'typeOrderSaleFlow', default: () => '(1)' })
  typeOrderSaleFlow: number;

  @Column('int', { name: 'FkfOrderStatusBuy', nullable: true })
  fkfOrderStatusBuy: number | null;

  @Column('bit', {
    name: 'sendTransferOrderToSaleOneOrder',
    default: () => '(1)',
  })
  sendTransferOrderToSaleOneOrder: boolean;

  @Column('bit', {
    name: 'estimateSaleNOTsendStorehoseExport',
    default: () => '(0)',
  })
  estimateSaleNoTsendStorehoseExport: boolean;

  @Column('int', { name: 'FkfOrderStatusToTransfer', nullable: true })
  fkfOrderStatusToTransfer: number | null;

  @Column('int', { name: 'FkfOrderStatusToFinalAmount', nullable: true })
  fkfOrderStatusToFinalAmount: number | null;

  @Column('bit', { name: 'notSendResidBuyFromSale', default: () => '(0)' })
  notSendResidBuyFromSale: boolean;

  @Column('int', { name: 'FKFMoeinSaleEstimate', nullable: true })
  fkfMoeinSaleEstimate: number | null;

  @Column('bit', {
    name: 'transferOrderToSaleWithWeight',
    default: () => '(0)',
  })
  transferOrderToSaleWithWeight: boolean;

  @Column('int', { name: 'FkfSanadStatus', nullable: true })
  fkfSanadStatus: number | null;

  @Column('bit', { name: 'setFinalSerialSale', default: () => '(0)' })
  setFinalSerialSale: boolean;

  @Column('int', { name: 'startFinalSerialSale', default: () => '(0)' })
  startFinalSerialSale: number;

  @Column('bit', { name: 'serialProformaAuto', default: () => '(1)' })
  serialProformaAuto: boolean;

  @Column('int', { name: 'exportPrice', default: () => '(-1)' })
  exportPrice: number;

  @Column('int', { name: 'FkfUnitExportPrice', nullable: true })
  fkfUnitExportPrice: number | null;

  @Column('bit', { name: 'serialExitOrderAuto', default: () => '(1)' })
  serialExitOrderAuto: boolean;

  @Column('bit', { name: 'orderToSaleVatManderory', default: () => '(1)' })
  orderToSaleVatManderory: boolean;

  @Column('bit', {
    name: 'contractcommisinCommisinFeeFromFeeAgreement',
    default: () => '(0)',
  })
  contractcommisinCommisinFeeFromFeeAgreement: boolean;

  @Column('bit', { name: 'feeAgreementToFeeNotDiscount', default: () => '(0)' })
  feeAgreementToFeeNotDiscount: boolean;

  @Column('bit', { name: 'isNegativeReleasedLoad', default: () => '(0)' })
  isNegativeReleasedLoad: boolean;

  @Column('bit', {
    name: 'transferForProductEndAmountWithBascuol',
    default: () => '(0)',
  })
  transferForProductEndAmountWithBascuol: boolean;

  @ManyToOne(() => AccMoein, (accMoein) => accMoein.salSettings)
  @JoinColumn([
    { name: 'FkfTreaterDiscountSale', referencedColumnName: 'pkfMoein' },
  ])
  fkfTreaterDiscountSale: AccMoein;

  @ManyToOne(() => AccMoein, (accMoein) => accMoein.salSettings2)
  @JoinColumn([
    { name: 'FKFMoeinBailContractIncome', referencedColumnName: 'pkfMoein' },
  ])
  fkfMoeinBailContractIncome: AccMoein;

  @RelationId((salSetting: SalSetting) => salSetting.fkfTreaterDiscountSale)
  fkfTreaterDiscountSale2: number | null;

  @RelationId((salSetting: SalSetting) => salSetting.fkfMoeinBailContractIncome)
  fkfMoeinBailContractIncome2: number | null;
}
