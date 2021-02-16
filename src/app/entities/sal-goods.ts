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
import { BalBailDetail } from './bal-bail-detail';
import { BasWeight } from './bas-weight';
import { PmActivityGoods } from './pm-activity-goods';
import { PmActivityRecordGoods } from './pm-activity-record-goods';
import { PmWorkTimeGoods } from './pm-work-time-goods';
import { ProForcast } from './pro-forcast';
import { ProProduce } from './pro-produce';
import { ProProduceDetail } from './pro-produce-detail';
import { ProProduceDetailDamage } from './pro-produce-detail-damage';
import { ProProducTreeDetail } from './pro-produc-tree-detail';
import { ProProducTreeDetailDamage } from './pro-produc-tree-detail-damage';
import { ProProductTree } from './pro-product-tree';
import { SalContractDetail } from './sal-contract-detail';
import { SalContractDetailOpen } from './sal-contract-detail-open';
import { SalDailyPriceDetail } from './sal-daily-price-detail';
import { SalDailyProduceDetail } from './sal-daily-produce-detail';
import { SalFormTypeCost } from './sal-form-type-cost';
import { SalUnit } from './sal-unit';
import { SalGroupGood1 } from './sal-group-good1';
import { SalGroupGood2 } from './sal-group-good2';
import { SalGroupGood3 } from './sal-group-good3';
import { SalGoodsMatter } from './sal-goods-matter';
import { SalGoodsSerial } from './sal-goods-serial';
import { SalLinkStoreGoods } from './sal-link-store-goods';
import { SalOrderDetail } from './sal-order-detail';
import { SalProduceGoods } from './sal-produce-goods';
import { SalProformaDetail } from './sal-proforma-detail';
import { SalRequestGoodsDetail } from './sal-request-goods-detail';
import { SalStockDeclareDetail } from './sal-stock-declare-detail';
import { SalStoreHouseDetail } from './sal-store-house-detail';
import { SalTag } from './sal-tag';
import { SalTransferDetail } from './sal-transfer-detail';
import { SalTransferForProduceDetail } from './sal-transfer-for-produce-detail';
import { SalTransferOrderDetail } from './sal-transfer-order-detail';
import { SalTransferTrust } from './sal-transfer-trust';
import { SalTrustDetail } from './sal-trust-detail';
import { SalUnderOverLoadTrust } from './sal-under-over-load-trust';

@Index('IX_salGoods', ['goodCode', 'accYear'], { unique: true })
@Index('IX_salGoods_1', ['goodName', 'accYear'], { unique: true })
@Index('PK_salGoods', ['pkfGood'], { unique: true })
@Entity('salGoods', { schema: 'dbo' })
export class SalGoods {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfGood' })
  pkfGood: number;

  @Column('nvarchar', { name: 'goodCode', length: 25 })
  goodCode: string;

  @Column('nvarchar', { name: 'goodName', length: 150 })
  goodName: string;

  @Column('decimal', {
    name: 'unit1factor',
    nullable: true,
    precision: 18,
    scale: 6,
    default: () => '(0)',
  })
  unit1factor: number | null;

  @Column('decimal', {
    name: 'unit2factor',
    nullable: true,
    precision: 18,
    scale: 6,
    default: () => '(0)',
  })
  unit2factor: number | null;

  @Column('bigint', { name: 'minFeeUnit1', default: () => '(0)' })
  minFeeUnit1: string;

  @Column('bigint', { name: 'minFeeUnit2', default: () => '(0)' })
  minFeeUnit2: string;

  @Column('bigint', { name: 'maxFeeUnit1', default: () => '(0)' })
  maxFeeUnit1: string;

  @Column('bigint', { name: 'maxFeeUnit2', default: () => '(0)' })
  maxFeeUnit2: string;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'storePrice', default: () => '(0)' })
  storePrice: number;

  @Column('int', { name: 'amountOneUnit', nullable: true })
  amountOneUnit: number | null;

  @Column('int', { name: 'pointOrder', default: () => '(0)' })
  pointOrder: number;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('int', { name: 'oldPkf', nullable: true })
  oldPkf: number | null;

  @Column('int', { name: 'FKFDegree', nullable: true })
  fkfDegree: number | null;

  @Column('int', { name: 'FKFForceColor', nullable: true })
  fkfForceColor: number | null;

  @Column('int', { name: 'FKFSize', nullable: true })
  fkfSize: number | null;

  @Column('int', { name: 'FKFColor', nullable: true })
  fkfColor: number | null;

  @Column('int', { name: 'FKFBackGround', nullable: true })
  fkfBackGround: number | null;

  @Column('int', { name: 'feeSale', default: () => '(0)' })
  feeSale: number;

  @Column('int', { name: 'feeBuy', default: () => '(0)' })
  feeBuy: number;

  @Column('nvarchar', { name: 'placeCode', length: 50, default: () => "''" })
  placeCode: string;

  @Column('decimal', {
    name: 'weight',
    precision: 18,
    scale: 0,
    default: () => '(0)',
  })
  weight: number;

  @Column('int', { name: 'displayCode', nullable: true })
  displayCode: number | null;

  @Column('int', { name: 'FkfGoodTypeProduce', nullable: true })
  fkfGoodTypeProduce: number | null;

  @Column('decimal', {
    name: 'gauge',
    precision: 10,
    scale: 2,
    default: () => '(0)',
  })
  gauge: number;

  @Column('decimal', {
    name: 'width',
    precision: 18,
    scale: 3,
    default: () => '(0)',
  })
  width: number;

  @Column('float', { name: 'vatTax', precision: 53, default: () => '(1.5)' })
  vatTax: number;

  @Column('float', { name: 'vatSide', precision: 53, default: () => '(1.5)' })
  vatSide: number;

  @Column('bit', { name: 'serialable', default: () => '(0)' })
  serialable: boolean;

  @Column('decimal', {
    name: 'length',
    precision: 18,
    scale: 3,
    default: () => '(0)',
  })
  length: number;

  @Column('decimal', {
    name: 'density',
    precision: 18,
    scale: 3,
    default: () => '(0)',
  })
  density: number;

  @Column('nvarchar', { name: 'baseType', length: 255, default: () => "''" })
  baseType: string;

  @Column('decimal', {
    name: 'goodSize',
    precision: 18,
    scale: 3,
    default: () => '(0)',
  })
  goodSize: number;

  @Column('int', { name: 'goodWidth', default: () => '(0)' })
  goodWidth: number;

  @Column('nvarchar', {
    name: 'technicalCode',
    length: 50,
    default: () => "''",
  })
  technicalCode: string;

  @Column('int', { name: 'minAmount', default: () => '(0)' })
  minAmount: number;

  @Column('int', { name: 'maxAmount', default: () => '(0)' })
  maxAmount: number;

  @Column('int', { name: 'orderAmount', default: () => '(0)' })
  orderAmount: number;

  @Column('float', { name: 'standardFee', precision: 53, default: () => '(1)' })
  standardFee: number;

  @Column('int', { name: 'FkfServiseSale', nullable: true })
  fkfServiseSale: number | null;

  @Column('int', { name: 'FkfServiseSaleM', nullable: true })
  fkfServiseSaleM: number | null;

  @Column('int', { name: 'FkfServiseBuy', nullable: true })
  fkfServiseBuy: number | null;

  @Column('int', { name: 'FkfServiseBuyM', nullable: true })
  fkfServiseBuyM: number | null;

  @Column('decimal', {
    name: 'discountP',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  discountP: number;

  @Column('bit', { name: 'emergency', default: () => '(0)' })
  emergency: boolean;

  @Column('bit', { name: 'active', default: () => '(1)' })
  active: boolean;

  @Column('nvarchar', { name: 'goodCodeEq', length: 50, default: () => "''" })
  goodCodeEq: string;

  @Column('nvarchar', {
    name: 'goodNameEnglish',
    length: 250,
    default: () => "''",
  })
  goodNameEnglish: string;

  @Column('int', { name: 'tariff', default: () => '(0)' })
  tariff: number;

  @Column('bit', { name: 'mustStandard', default: () => '(0)' })
  mustStandard: boolean;

  @Column('int', { name: 'pirceG', default: () => '(0)' })
  pirceG: number;

  @Column('nvarchar', { name: 'goodNameVat', length: 200, default: () => "''" })
  goodNameVat: string;

  @Column('bit', { name: 'bascoule', default: () => '(0)' })
  bascoule: boolean;

  @Column('bit', { name: 'resturan', default: () => '(0)' })
  resturan: boolean;

  @Column('int', { name: 'FKFGroupGood4', nullable: true })
  fkfGroupGood4: number | null;

  @Column('int', { name: 'FKFGroupGood5', nullable: true })
  fkfGroupGood5: number | null;

  @Column('decimal', {
    name: 'weightPerMetter',
    precision: 18,
    scale: 6,
    default: () => '(0)',
  })
  weightPerMetter: number;

  @Column('nvarchar', { name: 'barcode', length: 50, default: () => "''" })
  barcode: string;

  @Column('int', { name: 'FKFGroupGood6', nullable: true })
  fkfGroupGood6: number | null;

  @Column('int', { name: 'FKFGroupGood', nullable: true })
  fkfGroupGood: number | null;

  @Column('int', { name: 'feeSaleTotal', default: () => '(0)' })
  feeSaleTotal: number;

  @OneToMany(() => BalBailDetail, (balBailDetail) => balBailDetail.fkfGood)
  balBailDetails: BalBailDetail[];

  @OneToMany(() => BasWeight, (basWeight) => basWeight.fkfGoods2)
  basWeights: BasWeight[];

  @OneToMany(
    () => PmActivityGoods,
    (pmActivityGoods) => pmActivityGoods.fKfGoods,
  )
  pmActivityGoods: PmActivityGoods[];

  @OneToMany(
    () => PmActivityRecordGoods,
    (pmActivityRecordGoods) => pmActivityRecordGoods.fKfGoods,
  )
  pmActivityRecordGoods: PmActivityRecordGoods[];

  @OneToMany(
    () => PmWorkTimeGoods,
    (pmWorkTimeGoods) => pmWorkTimeGoods.fKfGoods,
  )
  pmWorkTimeGoods: PmWorkTimeGoods[];

  @OneToMany(() => ProForcast, (proForcast) => proForcast.fkfGoods)
  proForcasts: ProForcast[];

  @OneToMany(() => ProProduce, (proProduce) => proProduce.fkfGoodUse)
  proProduces: ProProduce[];

  @OneToMany(
    () => ProProduceDetail,
    (proProduceDetail) => proProduceDetail.fkfGoods2,
  )
  proProduceDetails: ProProduceDetail[];

  @OneToMany(
    () => ProProduceDetailDamage,
    (proProduceDetailDamage) => proProduceDetailDamage.fkfGoods,
  )
  proProduceDetailDamages: ProProduceDetailDamage[];

  @OneToMany(
    () => ProProducTreeDetail,
    (proProducTreeDetail) => proProducTreeDetail.fkfGoods2,
  )
  proProducTreeDetails: ProProducTreeDetail[];

  @OneToMany(
    () => ProProducTreeDetailDamage,
    (proProducTreeDetailDamage) => proProducTreeDetailDamage.fkfGoods,
  )
  proProducTreeDetailDamages: ProProducTreeDetailDamage[];

  @OneToMany(() => ProProductTree, (proProductTree) => proProductTree.fkfGoods)
  proProductTrees: ProProductTree[];

  @OneToMany(
    () => SalContractDetail,
    (salContractDetail) => salContractDetail.fkfGoods2,
  )
  salContractDetails: SalContractDetail[];

  @OneToMany(
    () => SalContractDetailOpen,
    (salContractDetailOpen) => salContractDetailOpen.fkfGoods,
  )
  salContractDetailOpens: SalContractDetailOpen[];

  @OneToMany(
    () => SalDailyPriceDetail,
    (salDailyPriceDetail) => salDailyPriceDetail.fkfGoods2,
  )
  salDailyPriceDetails: SalDailyPriceDetail[];

  @OneToMany(
    () => SalDailyProduceDetail,
    (salDailyProduceDetail) => salDailyProduceDetail.fkfGoods,
  )
  salDailyProduceDetails: SalDailyProduceDetail[];

  @OneToMany(
    () => SalFormTypeCost,
    (salFormTypeCost) => salFormTypeCost.fkfGoods2,
  )
  salFormTypeCosts: SalFormTypeCost[];

  @ManyToOne(() => SalUnit, (salUnit) => salUnit.salGoods)
  @JoinColumn([{ name: 'FkfUnit1', referencedColumnName: 'pkfUnit' }])
  fkfUnit: SalUnit;

  @ManyToOne(() => SalUnit, (salUnit) => salUnit.salGoods2)
  @JoinColumn([{ name: 'FkfUnit2', referencedColumnName: 'pkfUnit' }])
  fkfUnit2: SalUnit;

  @ManyToOne(() => SalGroupGood1, (salGroupGood1) => salGroupGood1.salGoods)
  @JoinColumn([
    { name: 'FKFGroupGood1', referencedColumnName: 'pkfGroupGood1' },
  ])
  fkfGroupGood2: SalGroupGood1;

  @ManyToOne(() => SalGroupGood2, (salGroupGood2) => salGroupGood2.salGoods)
  @JoinColumn([
    { name: 'FKFGroupGood2', referencedColumnName: 'pkfGroupGood2' },
  ])
  fkfGroupGood3: SalGroupGood2;

  @ManyToOne(() => SalUnit, (salUnit) => salUnit.salGoods3)
  @JoinColumn([{ name: 'FkfUnitStorePrice', referencedColumnName: 'pkfUnit' }])
  fkfUnitStorePrice: SalUnit;

  @ManyToOne(() => SalGroupGood3, (salGroupGood3) => salGroupGood3.salGoods)
  @JoinColumn([
    { name: 'FKFGroupGood3', referencedColumnName: 'pkfGroupGood3' },
  ])
  fkfGroupGood7: SalGroupGood3;

  @ManyToOne(() => SalGoodsMatter, (salGoodsMatter) => salGoodsMatter.salGoods)
  @JoinColumn([
    { name: 'FkfGoodsMatter', referencedColumnName: 'pkfGoodsMatter' },
  ])
  fkfGoodsMatter: SalGoodsMatter;

  @OneToMany(() => SalGoodsSerial, (salGoodsSerial) => salGoodsSerial.fkfGoods2)
  salGoodsSerials: SalGoodsSerial[];

  @OneToMany(
    () => SalLinkStoreGoods,
    (salLinkStoreGoods) => salLinkStoreGoods.fkfGoods,
  )
  salLinkStoreGoods: SalLinkStoreGoods[];

  @OneToMany(() => SalOrderDetail, (salOrderDetail) => salOrderDetail.fkfGoods2)
  salOrderDetails: SalOrderDetail[];

  @OneToMany(
    () => SalProduceGoods,
    (salProduceGoods) => salProduceGoods.fkfGoods2,
  )
  salProduceGoods: SalProduceGoods[];

  @OneToMany(
    () => SalProduceGoods,
    (salProduceGoods) => salProduceGoods.fkfProduceGoods2,
  )
  salProduceGoods2: SalProduceGoods[];

  @OneToMany(
    () => SalProformaDetail,
    (salProformaDetail) => salProformaDetail.fkfGoods,
  )
  salProformaDetails: SalProformaDetail[];

  @OneToMany(
    () => SalRequestGoodsDetail,
    (salRequestGoodsDetail) => salRequestGoodsDetail.fkfGoods,
  )
  salRequestGoodsDetails: SalRequestGoodsDetail[];

  @OneToMany(
    () => SalStockDeclareDetail,
    (salStockDeclareDetail) => salStockDeclareDetail.fkfGoods,
  )
  salStockDeclareDetails: SalStockDeclareDetail[];

  @OneToMany(
    () => SalStoreHouseDetail,
    (salStoreHouseDetail) => salStoreHouseDetail.fkfGood2,
  )
  salStoreHouseDetails: SalStoreHouseDetail[];

  @OneToMany(() => SalTag, (salTag) => salTag.fkfGoods2)
  salTags: SalTag[];

  @OneToMany(
    () => SalTransferDetail,
    (salTransferDetail) => salTransferDetail.fkfStartGoods2,
  )
  salTransferDetails: SalTransferDetail[];

  @OneToMany(
    () => SalTransferDetail,
    (salTransferDetail) => salTransferDetail.fkfEndGoods2,
  )
  salTransferDetails2: SalTransferDetail[];

  @OneToMany(
    () => SalTransferForProduceDetail,
    (salTransferForProduceDetail) => salTransferForProduceDetail.fkfGoods,
  )
  salTransferForProduceDetails: SalTransferForProduceDetail[];

  @OneToMany(
    () => SalTransferOrderDetail,
    (salTransferOrderDetail) => salTransferOrderDetail.fkfGoods,
  )
  salTransferOrderDetails: SalTransferOrderDetail[];

  @OneToMany(
    () => SalTransferTrust,
    (salTransferTrust) => salTransferTrust.fkfGoodStart2,
  )
  salTransferTrusts: SalTransferTrust[];

  @OneToMany(
    () => SalTransferTrust,
    (salTransferTrust) => salTransferTrust.fkfGoodEnd2,
  )
  salTransferTrusts2: SalTransferTrust[];

  @OneToMany(() => SalTrustDetail, (salTrustDetail) => salTrustDetail.fkfGood2)
  salTrustDetails: SalTrustDetail[];

  @OneToMany(
    () => SalUnderOverLoadTrust,
    (salUnderOverLoadTrust) => salUnderOverLoadTrust.fkfGood2,
  )
  salUnderOverLoadTrusts: SalUnderOverLoadTrust[];

  @RelationId((salGoods: SalGoods) => salGoods.fkfUnit)
  fkfUnit3: number;

  @RelationId((salGoods: SalGoods) => salGoods.fkfUnit2)
  fkfUnit4: number | null;

  @RelationId((salGoods: SalGoods) => salGoods.fkfGroupGood2)
  fkfGroupGood8: number | null;

  @RelationId((salGoods: SalGoods) => salGoods.fkfGroupGood3)
  fkfGroupGood9: number | null;

  @RelationId((salGoods: SalGoods) => salGoods.fkfUnitStorePrice)
  fkfUnitStorePrice2: number | null;

  @RelationId((salGoods: SalGoods) => salGoods.fkfGroupGood7)
  fkfGroupGoo10: number | null;

  @RelationId((salGoods: SalGoods) => salGoods.fkfGoodsMatter)
  fkfGoodsMatter2: number | null;
}
