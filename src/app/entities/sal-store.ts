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
import { ProProduce } from './pro-produce';
import { SalContractAccCoding } from './sal-contract-acc-coding';
import { SalContractDetail } from './sal-contract-detail';
import { SalDailyProduceDetail } from './sal-daily-produce-detail';
import { SalInventoryCycle } from './sal-inventory-cycle';
import { SalLinkStoreGoods } from './sal-link-store-goods';
import { SalOrderDetail } from './sal-order-detail';
import { SalProformaDetail } from './sal-proforma-detail';
import { SalRequestGoods } from './sal-request-goods';
import { SalStockDeclare } from './sal-stock-declare';
import { GenAccessType } from './gen-access-type';
import { SalStoreType } from './sal-store-type';
import { SalStoreHouseDetail } from './sal-store-house-detail';
import { SalTag } from './sal-tag';
import { SalTransferDetail } from './sal-transfer-detail';
import { SalTransferForProduceDetail } from './sal-transfer-for-produce-detail';
import { SalTransferTrust } from './sal-transfer-trust';
import { SalTrust } from './sal-trust';
import { SalUnderOverLoadTrust } from './sal-under-over-load-trust';

@Index('IX_salStore', ['storeCode', 'accYear'], { unique: true })
@Index('IX_salStore_1', ['storeName', 'accYear'], { unique: true })
@Index('PK_salStore', ['pkfStore'], { unique: true })
@Entity('salStore', { schema: 'dbo' })
export class SalStore {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfStore' })
  pkfStore: number;

  @Column('nvarchar', { name: 'storeCode', length: 25 })
  storeCode: string;

  @Column('nvarchar', { name: 'storeName', length: 150 })
  storeName: string;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('nvarchar', { name: 'address', length: 255, default: () => "''" })
  address: string;

  @Column('nvarchar', { name: 'tel', length: 150 })
  tel: string;

  @Column('nvarchar', { name: 'fax', length: 150, default: () => "''" })
  fax: string;

  @Column('nvarchar', { name: 'owner', length: 150, default: () => "''" })
  owner: string;

  @Column('bit', { name: 'origin', default: () => '0' })
  origin: boolean;

  @Column('int', { name: 'oldPkf', nullable: true })
  oldPkf: number | null;

  @Column('int', { name: 'FkfTafzili', nullable: true })
  fkfTafzili: number | null;

  @Column('int', { name: 'FkfStoreKeeping', default: () => '(1)' })
  fkfStoreKeeping: number;

  @Column('int', { name: 'FkfTreaterBes', nullable: true })
  fkfTreaterBes: number | null;

  @Column('int', { name: 'FkfTreaterMoeinBes', nullable: true })
  fkfTreaterMoeinBes: number | null;

  @Column('int', { name: 'FKFKindTafzili', nullable: true })
  fkfKindTafzili: number | null;

  @Column('int', { name: 'FkfCostCenter', nullable: true })
  fkfCostCenter: number | null;

  @Column('bit', { name: 'active', default: () => '(1)' })
  active: boolean;

  @Column('int', { name: 'FkStoreTrust', nullable: true })
  fkStoreTrust: number | null;

  @Column('bit', { name: 'negativeStorage', default: () => '(1)' })
  negativeStorage: boolean;

  @Column('nvarchar', { name: 'storeNameEN', length: 150, default: () => "''" })
  storeNameEn: string;

  @OneToMany(() => BalBailDetail, (balBailDetail) => balBailDetail.fkfStore)
  balBailDetails: BalBailDetail[];

  @OneToMany(() => BasWeight, (basWeight) => basWeight.fkfSource2)
  basWeights: BasWeight[];

  @OneToMany(() => BasWeight, (basWeight) => basWeight.fkfDestination2)
  basWeights2: BasWeight[];

  @OneToMany(() => ProProduce, (proProduce) => proProduce.fkfStore)
  proProduces: ProProduce[];

  @OneToMany(() => ProProduce, (proProduce) => proProduce.fkfStoreDamage)
  proProduces2: ProProduce[];

  @OneToMany(() => ProProduce, (proProduce) => proProduce.fkfStoreProduce)
  proProduces3: ProProduce[];

  @OneToMany(
    () => SalContractAccCoding,
    (salContractAccCoding) => salContractAccCoding.fkfStore,
  )
  salContractAccCodings: SalContractAccCoding[];

  @OneToMany(
    () => SalContractDetail,
    (salContractDetail) => salContractDetail.fkfStore2,
  )
  salContractDetails: SalContractDetail[];

  @OneToMany(
    () => SalContractDetail,
    (salContractDetail) => salContractDetail.fkfDestinationStore,
  )
  salContractDetails2: SalContractDetail[];

  @OneToMany(
    () => SalDailyProduceDetail,
    (salDailyProduceDetail) => salDailyProduceDetail.fkfStore,
  )
  salDailyProduceDetails: SalDailyProduceDetail[];

  @OneToMany(
    () => SalInventoryCycle,
    (salInventoryCycle) => salInventoryCycle.fkfStore2,
  )
  salInventoryCycles: SalInventoryCycle[];

  @OneToMany(
    () => SalLinkStoreGoods,
    (salLinkStoreGoods) => salLinkStoreGoods.fkfStore,
  )
  salLinkStoreGoods: SalLinkStoreGoods[];

  @OneToMany(() => SalOrderDetail, (salOrderDetail) => salOrderDetail.fkfStore2)
  salOrderDetails: SalOrderDetail[];

  @OneToMany(
    () => SalProformaDetail,
    (salProformaDetail) => salProformaDetail.fkfStore,
  )
  salProformaDetails: SalProformaDetail[];

  @OneToMany(
    () => SalRequestGoods,
    (salRequestGoods) => salRequestGoods.fkfStore,
  )
  salRequestGoods: SalRequestGoods[];

  @OneToMany(
    () => SalStockDeclare,
    (salStockDeclare) => salStockDeclare.fkfStore2,
  )
  salStockDeclares: SalStockDeclare[];

  @ManyToOne(() => GenAccessType, (genAccessType) => genAccessType.salStores)
  @JoinColumn([
    { name: 'FkfAccessType', referencedColumnName: 'pkfAccessType' },
  ])
  fkfAccessType: GenAccessType;

  @ManyToOne(() => SalStoreType, (salStoreType) => salStoreType.salStores)
  @JoinColumn([{ name: 'FkfStoreType', referencedColumnName: 'pkfStoreType' }])
  fkfStoreType: SalStoreType;

  @OneToMany(
    () => SalStoreHouseDetail,
    (salStoreHouseDetail) => salStoreHouseDetail.fkfStore2,
  )
  salStoreHouseDetails: SalStoreHouseDetail[];

  @OneToMany(() => SalTag, (salTag) => salTag.fkfStore2)
  salTags: SalTag[];

  @OneToMany(
    () => SalTransferDetail,
    (salTransferDetail) => salTransferDetail.fkfStartStore2,
  )
  salTransferDetails: SalTransferDetail[];

  @OneToMany(
    () => SalTransferDetail,
    (salTransferDetail) => salTransferDetail.fkfEndStore2,
  )
  salTransferDetails2: SalTransferDetail[];

  @OneToMany(
    () => SalTransferForProduceDetail,
    (salTransferForProduceDetail) => salTransferForProduceDetail.fkfStore,
  )
  salTransferForProduceDetails: SalTransferForProduceDetail[];

  @OneToMany(
    () => SalTransferTrust,
    (salTransferTrust) => salTransferTrust.fkfStore,
  )
  salTransferTrusts: SalTransferTrust[];

  @OneToMany(() => SalTrust, (salTrust) => salTrust.fkfStore)
  salTrusts: SalTrust[];

  @OneToMany(
    () => SalUnderOverLoadTrust,
    (salUnderOverLoadTrust) => salUnderOverLoadTrust.fkfStore,
  )
  salUnderOverLoadTrusts: SalUnderOverLoadTrust[];

  @RelationId((salStore: SalStore) => salStore.fkfAccessType)
  fkfAccessType2: number;

  @RelationId((salStore: SalStore) => salStore.fkfStoreType)
  fkfStoreType2: number | null;
}
