import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { CasPayOff } from './cas-pay-off';
import { CasPortion } from './cas-portion';
import { SalContractType } from './sal-contract-type';
import { GenTreater } from './gen-treater';
import { GenCurrency } from './gen-currency';
import { GenStatus } from './gen-status';
import { GenEmployee } from './gen-employee';
import { SalCompany } from './sal-company';
import { SalBuyPlace } from './sal-buy-place';
import { AccMoein } from './acc-moein';
import { SalSeller } from './sal-seller';
import { AccSanadFloat } from './acc-sanad-float';
import { SalContractAccCoding } from './sal-contract-acc-coding';
import { SalContractCostDetail } from './sal-contract-cost-detail';
import { SalContractCostForGoodsGet } from './sal-contract-cost-for-goods-get';
import { SalContractDetail } from './sal-contract-detail';
import { SalContractDetailCommission } from './sal-contract-detail-commission';
import { SalContractFactorDetail } from './sal-contract-factor-detail';
import { SalContractOtherDetail } from './sal-contract-other-detail';
import { SalDailyProduce } from './sal-daily-produce';
import { SalDocument } from './sal-document';
import { SalProduceGoods } from './sal-produce-goods';
import { SalProforma } from './sal-proforma';
import { SalProformaDetail } from './sal-proforma-detail';
import { SalStockDeclare } from './sal-stock-declare';
import { SalTransferForProduce } from './sal-transfer-for-produce';
import { SalTransferStoreHouse } from './sal-transfer-store-house';

@Index('IX_salContract', ['fkfTreater'], {})
@Index('IX_salContract_1', ['fkfContractType', 'accYear', 'serial'], {
  unique: true,
})
@Index('IX_salContract_2', ['fkfProject'], {})
@Index('IX_salContract_4', ['fkftreaterOfficial'], {})
@Index('IX_salContract_5', ['fkfSeller'], {})
@Index('IX_salContract_6', ['fkfTreaterTafzili5'], {})
@Index('IX_salContract_7', ['fkfContractType'], {})
@Index('IX_salContract_filteringProject', ['accYear', 'fkfProject'], {
  unique: true,
})
@Index('PK_salContract', ['pkfContract'], { unique: true })
@Entity('salContract', { schema: 'dbo' })
export class SalContract {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfContract' })
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

  @Column('float', { name: 'feeCurrency', precision: 53, default: () => '(0)' })
  feeCurrency: number;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('nvarchar', { name: 'createDate', length: 10 })
  createDate: string;

  @Column('nvarchar', { name: 'editDate', length: 10, default: () => "''" })
  editDate: string;

  @Column('nvarchar', { name: 'finalDate', length: 10, default: () => "''" })
  finalDate: string;

  @Column('int', { name: 'sanadTempNo', nullable: true })
  sanadTempNo: number | null;

  @Column('nvarchar', { name: 'contractNo', length: 200 })
  contractNo: string;

  @Column('nvarchar', { name: 'invoiceNo', length: 255, default: () => "''" })
  invoiceNo: string;

  @Column('nvarchar', {
    name: 'proformaIinvoiceNo',
    length: 255,
    default: () => "''",
  })
  proformaIinvoiceNo: string;

  @Column('nvarchar', {
    name: 'treaterAddress',
    length: 255,
    default: () => "''",
  })
  treaterAddress: string;

  @Column('nvarchar', {
    name: 'getCondition',
    length: 255,
    default: () => "''",
  })
  getCondition: string;

  @Column('nvarchar', {
    name: 'payCondition',
    length: 255,
    default: () => "''",
  })
  payCondition: string;

  @Column('int', { name: 'usance', default: () => '(0)' })
  usance: number;

  @Column('int', {
    name: 'serialProforma1',
    nullable: true,
    default: () => '(0)',
  })
  serialProforma1: number | null;

  @Column('nvarchar', { name: 'storeNo', length: 50, default: () => "''" })
  storeNo: string;

  @Column('int', { name: 'FkfSeller', nullable: true })
  fkfSeller: number | null;

  @Column('nvarchar', { name: 'payoffDate', length: 10, default: () => "''" })
  payoffDate: string;

  @Column('bigint', { name: 'addressNo', nullable: true })
  addressNo: string | null;

  @Column('int', { name: 'FkfProforma', nullable: true })
  fkfProforma: number | null;

  @Column('int', { name: 'FKFMain', nullable: true })
  fkfMain: number | null;

  @Column('int', { name: 'FkfContractTypeBuy', nullable: true })
  fkfContractTypeBuy: number | null;

  @Column('bit', { name: 'sanad', default: () => '(0)' })
  sanad: boolean;

  @Column('bigint', { name: 'payOff', default: () => '(0)' })
  payOff: string;

  @Column('nvarchar', { name: 'memoPayOff', length: 255, default: () => "''" })
  memoPayOff: string;

  @Column('bit', { name: 'contractSale', default: () => '(0)' })
  contractSale: boolean;

  @Column('int', { name: 'FkfBuyContract', nullable: true })
  fkfBuyContract: number | null;

  @Column('int', { name: 'FkfTreaterCost', nullable: true })
  fkfTreaterCost: number | null;

  @Column('bit', { name: 'contractClose', default: () => '(0)' })
  contractClose: boolean;

  @Column('int', { name: 'sanadTempNoClose', nullable: true })
  sanadTempNoClose: number | null;

  @Column('int', { name: 'FKFBuySaleType', default: () => '(1)' })
  fkfBuySaleType: number;

  @Column('int', { name: 'oldPkf', nullable: true })
  oldPkf: number | null;

  @Column('nvarchar', { name: 'weightDate', length: 10, default: () => "''" })
  weightDate: string;

  @Column('bit', { name: 'weight', default: () => '(0)' })
  weight: boolean;

  @Column('bit', { name: 'printed', default: () => '(0)' })
  printed: boolean;

  @Column('bigint', { name: 'vat', default: () => '(0)' })
  vat: string;

  @Column('bigint', { name: 'discount', default: () => '(0)' })
  discount: string;

  @Column('int', { name: 'serialOfficial', default: () => '(0)' })
  serialOfficial: number;

  @Column('int', { name: 'FkfTreaterTafzili5', nullable: true })
  fkfTreaterTafzili5: number | null;

  @Column('nvarchar', { name: 'editTime', length: 50, default: () => "''" })
  editTime: string;

  @Column('int', { name: 'FkfStoreHouse', nullable: true })
  fkfStoreHouse: number | null;

  @Column('int', { name: 'payoffEmp', nullable: true })
  payoffEmp: number | null;

  @Column('int', { name: 'FkfProject' })
  fkfProject: number;

  @Column('nvarchar', { name: 'NoLading', length: 25, default: () => "''" })
  noLading: string;

  @Column('nvarchar', { name: 'NoCar', length: 25, default: () => "''" })
  noCar: string;

  @Column('bit', { name: 'notify', default: () => '(0)' })
  notify: boolean;

  @Column('int', { name: 'FkftreaterOfficial', nullable: true })
  fkftreaterOfficial: number | null;

  @Column('bigint', { name: 'priceCost', default: () => '(0)' })
  priceCost: string;

  @Column('bigint', { name: 'discountTashim', default: () => '(0)' })
  discountTashim: string;

  @Column('bit', { name: 'autoExport', default: () => '(1)' })
  autoExport: boolean;

  @Column('int', { name: 'FkfSaleProject', nullable: true })
  fkfSaleProject: number | null;

  @Column('bit', { name: 'calcProduceFee4Get', default: () => '(0)' })
  calcProduceFee4Get: boolean;

  @Column('bit', { name: 'viewPrpduceFee', default: () => '(0)' })
  viewPrpduceFee: boolean;

  @Column('int', { name: 'FkfRequestGoods', nullable: true })
  fkfRequestGoods: number | null;

  @Column('int', { name: 'FkfOrder', nullable: true })
  fkfOrder: number | null;

  @Column('int', { name: 'FkfSalType', nullable: true })
  fkfSalType: number | null;

  @Column('bit', { name: 'confirmPrint', default: () => '(0)' })
  confirmPrint: boolean;

  @Column('bit', { name: 'autoImport', default: () => '(1)' })
  autoImport: boolean;

  @Column('bit', { name: 'isVat', default: () => '(0)' })
  isVat: boolean;

  @Column('nvarchar', {
    name: 'customerSerial',
    length: 50,
    default: () => "''",
  })
  customerSerial: string;

  @Column('int', { name: 'FkfTafziliDiscount', nullable: true })
  fkfTafziliDiscount: number | null;

  @Column('tinyint', { name: 'returnMatter', default: () => '(0)' })
  returnMatter: number;

  @Column('int', { name: 'origin', default: () => '(0)' })
  origin: number;

  @Column('int', { name: 'fkfPeymentMethod', default: () => '(4)' })
  fkfPeymentMethod: number;

  @Column('int', { name: 'FkfCustomsInputSource', nullable: true })
  fkfCustomsInputSource: number | null;

  @Column('nvarchar', {
    name: 'inclusiveNumber',
    length: 50,
    default: () => "''",
  })
  inclusiveNumber: string;

  @Column('nvarchar', { name: 'kotajhDate', length: 50, default: () => "''" })
  kotajhDate: string;

  @Column('nvarchar', { name: 'creditNumber', length: 50, default: () => "''" })
  creditNumber: string;

  @Column('nvarchar', {
    name: 'creditNumberDate',
    length: 50,
    default: () => "''",
  })
  creditNumberDate: string;

  @Column('int', { name: 'FkfCustoms', nullable: true })
  fkfCustoms: number | null;

  @Column('int', { name: 'FkfCustomsInput', nullable: true })
  fkfCustomsInput: number | null;

  @Column('nvarchar', {
    name: 'KotajhNumber',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  kotajhNumber: string | null;

  @Column('int', { name: 'FkfTreaterSallerEx', nullable: true })
  fkfTreaterSallerEx: number | null;

  @Column('decimal', {
    name: 'rialPriceLicence',
    precision: 24,
    scale: 8,
    default: () => '(0)',
  })
  rialPriceLicence: number;

  @Column('decimal', {
    name: 'curencyPriceLicence',
    precision: 24,
    scale: 8,
    default: () => '(0)',
  })
  curencyPriceLicence: number;

  @Column('decimal', {
    name: 'equlityRate',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  equlityRate: number;

  @Column('decimal', {
    name: 'cIFValue',
    precision: 24,
    scale: 8,
    default: () => '(0)',
  })
  cIfValue: number;

  @Column('decimal', {
    name: 'customProfit',
    precision: 24,
    scale: 8,
    default: () => '(0)',
  })
  customProfit: number;

  @Column('decimal', {
    name: 'taxRate',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  taxRate: number;

  @Column('decimal', {
    name: 'vatRate',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  vatRate: number;

  @Column('decimal', {
    name: 'rialPriceOffice',
    precision: 24,
    scale: 8,
    default: () => '(0)',
  })
  rialPriceOffice: number;

  @Column('decimal', {
    name: 'equlityRateOffice',
    precision: 24,
    scale: 8,
    default: () => '(0)',
  })
  equlityRateOffice: number;

  @Column('decimal', {
    name: 'curencyPriceOffice',
    precision: 24,
    scale: 8,
    default: () => '(0)',
  })
  curencyPriceOffice: number;

  @Column('nvarchar', { name: 'cityAddress', length: 50, default: () => "''" })
  cityAddress: string;

  @Column('nvarchar', { name: 'stateAddress', length: 50, default: () => "''" })
  stateAddress: string;

  @Column('int', { name: 'FkfPartnerContract', nullable: true })
  fkfPartnerContract: number | null;

  @Column('int', { name: 'FkfTransferSource', nullable: true })
  fkfTransferSource: number | null;

  @Column('int', { name: 'FkfLocationLoading', nullable: true })
  fkfLocationLoading: number | null;

  @Column('int', { name: 'FkfOriginCou', nullable: true })
  fkfOriginCou: number | null;

  @Column('int', { name: 'FkfDestination', nullable: true })
  fkfDestination: number | null;

  @Column('int', { name: 'FkfTransportMode', nullable: true })
  fkfTransportMode: number | null;

  @Column('nvarchar', { name: 'shipment', length: 50, default: () => "''" })
  shipment: string;

  @Column('nvarchar', {
    name: 'partialShipment',
    length: 255,
    default: () => "''",
  })
  partialShipment: string;

  @Column('nvarchar', { name: 'CMR', length: 30, default: () => "''" })
  cmr: string;

  @Column('nvarchar', { name: 'vessel', length: 30, default: () => "''" })
  vessel: string;

  @Column('int', { name: 'FkfPacking', nullable: true })
  fkfPacking: number | null;

  @Column('int', { name: 'FkfPorterage', nullable: true })
  fkfPorterage: number | null;

  @Column('nvarchar', {
    name: 'billOfLoading',
    length: 30,
    default: () => "''",
  })
  billOfLoading: string;

  @Column('int', { name: 'FkfCity', nullable: true })
  fkfCity: number | null;

  @Column('int', { name: 'FkfDeliveryTerm', nullable: true })
  fkfDeliveryTerm: number | null;

  @Column('nvarchar', { name: 'PINumber', length: 50, default: () => "''" })
  piNumber: string;

  @Column('int', { name: 'finalSerial', default: () => '(0)' })
  finalSerial: number;

  @Column('nvarchar', { name: 'tempDate', length: 10, default: () => "''" })
  tempDate: string;

  @Column('nvarchar', { name: 'rasDate', length: 10, default: () => "''" })
  rasDate: string;

  @OneToMany(() => CasPayOff, (casPayOff) => casPayOff.fkfContract)
  casPayOffs: CasPayOff[];

  @OneToMany(() => CasPortion, (casPortion) => casPortion.fkfSale)
  casPortions: CasPortion[];

  @ManyToOne(
    () => SalContractType,
    (salContractType) => salContractType.salContracts,
  )
  @JoinColumn([
    { name: 'FkfContractType', referencedColumnName: 'pkfContractType' },
  ])
  fkfContractType2: SalContractType;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.salContracts)
  @JoinColumn([{ name: 'FkfTreater', referencedColumnName: 'pkfTreater' }])
  fkfTreater2: GenTreater;

  @ManyToOne(() => GenCurrency, (genCurrency) => genCurrency.salContracts)
  @JoinColumn([{ name: 'FkfCurrency', referencedColumnName: 'pkfCurrency' }])
  fkfCurrency: GenCurrency;

  @ManyToOne(() => GenStatus, (genStatus) => genStatus.salContracts)
  @JoinColumn([{ name: 'FkfStatus', referencedColumnName: 'pkfStatus' }])
  fkfStatus: GenStatus;

  @ManyToOne(() => GenEmployee, (genEmployee) => genEmployee.salContracts)
  @JoinColumn([{ name: 'FkfCreateUser', referencedColumnName: 'pkfEmployee' }])
  fkfCreateUser: GenEmployee;

  @ManyToOne(() => GenEmployee, (genEmployee) => genEmployee.salContracts2)
  @JoinColumn([{ name: 'FkfEditUser', referencedColumnName: 'pkfEmployee' }])
  fkfEditUser: GenEmployee;

  @ManyToOne(() => GenEmployee, (genEmployee) => genEmployee.salContracts3)
  @JoinColumn([{ name: 'FkfFinalUser', referencedColumnName: 'pkfEmployee' }])
  fkfFinalUser: GenEmployee;

  @ManyToOne(() => SalCompany, (salCompany) => salCompany.salContracts)
  @JoinColumn([
    { name: 'FkfProduceFactory', referencedColumnName: 'pkfComapny' },
  ])
  fkfProduceFactory: SalCompany;

  @ManyToOne(() => SalBuyPlace, (salBuyPlace) => salBuyPlace.salContracts)
  @JoinColumn([{ name: 'FkfBuyPlace', referencedColumnName: 'pkfbuyPlace' }])
  fkfBuyPlace: SalBuyPlace;

  @ManyToOne(() => SalCompany, (salCompany) => salCompany.salContracts2)
  @JoinColumn([{ name: 'FkfAgency', referencedColumnName: 'pkfComapny' }])
  fkfAgency: SalCompany;

  @ManyToOne(() => SalCompany, (salCompany) => salCompany.salContracts3)
  @JoinColumn([{ name: 'FkfBuyFactory', referencedColumnName: 'pkfComapny' }])
  fkfBuyFactory: SalCompany;

  @ManyToOne(() => AccMoein, (accMoein) => accMoein.salContracts)
  @JoinColumn([{ name: 'FkfMoeinCost', referencedColumnName: 'pkfMoein' }])
  fkfMoeinCost: AccMoein;

  @ManyToOne(() => SalSeller, (salSeller) => salSeller.salContracts)
  @JoinColumn([{ name: 'FkfSeller', referencedColumnName: 'pkfSeller' }])
  fkfSeller2: SalSeller;

  @ManyToOne(() => AccMoein, (accMoein) => accMoein.salContracts2)
  @JoinColumn([{ name: 'FkfMoeinIncome', referencedColumnName: 'pkfMoein' }])
  fkfMoeinIncome: AccMoein;

  @ManyToOne(() => AccSanadFloat, (accSanadFloat) => accSanadFloat.salContracts)
  @JoinColumn([{ name: 'FkfSanad', referencedColumnName: 'pkfSanad' }])
  fkfSanad: AccSanadFloat;

  @ManyToOne(() => AccMoein, (accMoein) => accMoein.salContracts3)
  @JoinColumn([{ name: 'FkfTreaterMoein', referencedColumnName: 'pkfMoein' }])
  fkfTreaterMoein: AccMoein;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.salContracts2)
  @JoinColumn([
    { name: 'FkfTreaterTafzili5', referencedColumnName: 'pkfTreater' },
  ])
  fkfTreaterTafzili: GenTreater;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.salContracts3)
  @JoinColumn([
    { name: 'FkfTreaterTafzili6', referencedColumnName: 'pkfTreater' },
  ])
  fkfTreaterTafzili2: GenTreater;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.salContracts4)
  @JoinColumn([{ name: 'FkfProject', referencedColumnName: 'pkfTreater' }])
  fkfProject2: GenTreater;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.salContracts5)
  @JoinColumn([{ name: 'FkfMarkaz', referencedColumnName: 'pkfTreater' }])
  fkfMarkaz: GenTreater;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.salContracts6)
  @JoinColumn([
    { name: 'FkftreaterOfficial', referencedColumnName: 'pkfTreater' },
  ])
  fkftreaterOfficial2: GenTreater;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.salContracts7)
  @JoinColumn([{ name: 'FkfTreaterBed', referencedColumnName: 'pkfTreater' }])
  fkfTreaterBed: GenTreater;

  @ManyToOne(() => AccMoein, (accMoein) => accMoein.salContracts4)
  @JoinColumn([
    { name: 'FkfTreaterMoeinBed', referencedColumnName: 'pkfMoein' },
  ])
  fkfTreaterMoeinBed: AccMoein;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.salContracts8)
  @JoinColumn([
    { name: 'FkfTreaterBedTafzili2', referencedColumnName: 'pkfTreater' },
  ])
  fkfTreaterBedTafzili: GenTreater;

  @OneToMany(
    () => SalContractAccCoding,
    (salContractAccCoding) => salContractAccCoding.fkfContract,
  )
  salContractAccCodings: SalContractAccCoding[];

  @OneToMany(
    () => SalContractCostDetail,
    (salContractCostDetail) => salContractCostDetail.fkfContract,
  )
  salContractCostDetails: SalContractCostDetail[];

  @OneToMany(
    () => SalContractCostForGoodsGet,
    (salContractCostForGoodsGet) => salContractCostForGoodsGet.fkfContract2,
  )
  salContractCostForGoodsGets: SalContractCostForGoodsGet[];

  @OneToMany(
    () => SalContractDetail,
    (salContractDetail) => salContractDetail.fkfContract2,
  )
  salContractDetails: SalContractDetail[];

  @OneToMany(
    () => SalContractDetailCommission,
    (salContractDetailCommission) => salContractDetailCommission.fkfContract,
  )
  salContractDetailCommissions: SalContractDetailCommission[];

  @OneToMany(
    () => SalContractFactorDetail,
    (salContractFactorDetail) => salContractFactorDetail.fkfContract2,
  )
  salContractFactorDetails: SalContractFactorDetail[];

  @OneToMany(
    () => SalContractOtherDetail,
    (salContractOtherDetail) => salContractOtherDetail.fkfContract,
  )
  salContractOtherDetails: SalContractOtherDetail[];

  @OneToMany(
    () => SalDailyProduce,
    (salDailyProduce) => salDailyProduce.fkfContract,
  )
  salDailyProduces: SalDailyProduce[];

  @OneToMany(() => SalDocument, (salDocument) => salDocument.fkfSalContract)
  salDocuments: SalDocument[];

  @OneToMany(
    () => SalProduceGoods,
    (salProduceGoods) => salProduceGoods.fkfContract2,
  )
  salProduceGoods: SalProduceGoods[];

  @OneToMany(() => SalProforma, (salProforma) => salProforma.fkfBuyContract)
  salProformas: SalProforma[];

  @OneToMany(
    () => SalProformaDetail,
    (salProformaDetail) => salProformaDetail.fkfContract,
  )
  salProformaDetails: SalProformaDetail[];

  @OneToMany(
    () => SalStockDeclare,
    (salStockDeclare) => salStockDeclare.fkfContract2,
  )
  salStockDeclares: SalStockDeclare[];

  @OneToMany(
    () => SalTransferForProduce,
    (salTransferForProduce) => salTransferForProduce.fkfContract,
  )
  salTransferForProduces: SalTransferForProduce[];

  @OneToMany(
    () => SalTransferStoreHouse,
    (salTransferStoreHouse) => salTransferStoreHouse.fkfContract,
  )
  salTransferStoreHouses: SalTransferStoreHouse[];

  @RelationId((salContract: SalContract) => salContract.fkfContractType2)
  fkfContractType3: number;

  @RelationId((salContract: SalContract) => salContract.fkfTreater2)
  fkfTreater3: number;

  @RelationId((salContract: SalContract) => salContract.fkfCurrency)
  fkfCurrency2: number | null;

  @RelationId((salContract: SalContract) => salContract.fkfStatus)
  fkfStatus2: number;

  @RelationId((salContract: SalContract) => salContract.fkfCreateUser)
  fkfCreateUser2: number;

  @RelationId((salContract: SalContract) => salContract.fkfEditUser)
  fkfEditUser2: number | null;

  @RelationId((salContract: SalContract) => salContract.fkfFinalUser)
  fkfFinalUser2: number | null;

  @RelationId((salContract: SalContract) => salContract.fkfProduceFactory)
  fkfProduceFactory2: number | null;

  @RelationId((salContract: SalContract) => salContract.fkfBuyPlace)
  fkfBuyPlace2: number | null;

  @RelationId((salContract: SalContract) => salContract.fkfAgency)
  fkfAgency2: number | null;

  @RelationId((salContract: SalContract) => salContract.fkfBuyFactory)
  fkfBuyFactory2: number | null;

  @RelationId((salContract: SalContract) => salContract.fkfMoeinCost)
  fkfMoeinCost2: number | null;

  @RelationId((salContract: SalContract) => salContract.fkfSeller2)
  fkfSeller3: number | null;

  @RelationId((salContract: SalContract) => salContract.fkfMoeinIncome)
  fkfMoeinIncome2: number | null;

  @RelationId((salContract: SalContract) => salContract.fkfSanad)
  fkfSanad2: number | null;

  @RelationId((salContract: SalContract) => salContract.fkfTreaterMoein)
  fkfTreaterMoein2: number | null;

  @RelationId((salContract: SalContract) => salContract.fkfTreaterTafzili)
  fkfTreaterTafzili3: number | null;

  @RelationId((salContract: SalContract) => salContract.fkfTreaterTafzili2)
  fkfTreaterTafzili4: number | null;

  @RelationId((salContract: SalContract) => salContract.fkfProject2)
  fkfProject3: number;

  @RelationId((salContract: SalContract) => salContract.fkfMarkaz)
  fkfMarkaz2: number | null;

  @RelationId((salContract: SalContract) => salContract.fkftreaterOfficial2)
  fkftreaterOfficial3: number | null;

  @RelationId((salContract: SalContract) => salContract.fkfTreaterBed)
  fkfTreaterBed2: number | null;

  @RelationId((salContract: SalContract) => salContract.fkfTreaterMoeinBed)
  fkfTreaterMoeinBed2: number | null;

  @RelationId((salContract: SalContract) => salContract.fkfTreaterBedTafzili)
  fkfTreaterBedTafzili2: number | null;
}
