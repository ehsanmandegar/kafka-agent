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
import { SalStoreHouseType } from './sal-store-house-type';
import { GenTreater } from './gen-treater';
import { SalSource } from './sal-source';
import { GenEmployee } from './gen-employee';
import { SalPorterage } from './sal-porterage';
import { GenStatus } from './gen-status';
import { SalTypeStoreHouse } from './sal-type-store-house';
import { SalStoreHouseDetail } from './sal-store-house-detail';
import { SalStoreHouseDocument } from './sal-store-house-document';

@Index('IX_salStoreHouse', ['serial', 'fkfStoreHouseType', 'accYear'], {
  unique: true,
})
@Index('IX_salStoreHouse_1', ['fkfTypeStoreHouse'], {})
@Index('IX_salStoreHouse_2', ['fkfProject'], {})
@Index('IX_salStoreHouse_3', ['fkfStoreHouseType'], {})
@Index('IX_salStoreHouse_4', ['fkfTypeStoreHouse'], {})
@Index('PK_salStoreHouse', ['pkfStoreHouse'], { unique: true })
@Entity('salStoreHouse', { schema: 'dbo' })
export class SalStoreHouse {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfStoreHouse' })
  pkfStoreHouse: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('nvarchar', { name: 'storeHouseDate', length: 10 })
  storeHouseDate: string;

  @Column('int', { name: 'FkfStoreHouseType' })
  fkfStoreHouseType: number;

  @Column('nvarchar', { name: 'memo', length: 255 })
  memo: string;

  @Column('nvarchar', { name: 'billOfLading', length: 100 })
  billOfLading: string;

  @Column('nvarchar', { name: 'truckNO', length: 50 })
  truckNo: string;

  @Column('nvarchar', { name: 'createTime', length: 5 })
  createTime: string;

  @Column('nvarchar', { name: 'createDate', length: 10 })
  createDate: string;

  @Column('nvarchar', { name: 'editDate', length: 10, default: () => "''" })
  editDate: string;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('nvarchar', { name: 'address', length: 255 })
  address: string;

  @Column('nvarchar', { name: 'driverName', length: 255, default: () => "''" })
  driverName: string;

  @Column('int', { name: 'FkfProforma', nullable: true })
  fkfProforma: number | null;

  @Column('nvarchar', {
    name: 'getCondition',
    length: 255,
    default: () => "''",
  })
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

  @Column('bit', { name: 'sanad', default: () => '(0)' })
  sanad: boolean;

  @Column('int', { name: 'FkfSanad', nullable: true })
  fkfSanad: number | null;

  @Column('int', { name: 'FkfContract', nullable: true })
  fkfContract: number | null;

  @Column('int', { name: 'FkfProject' })
  fkfProject: number;

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

  @Column('bit', { name: 'withOrigin', default: () => '(1)' })
  withOrigin: boolean;

  @Column('bit', { name: 'isNumber', default: () => '(0)' })
  isNumber: boolean;

  @Column('bit', { name: 'payOff', default: () => '(0)' })
  payOff: boolean;

  @Column('bigint', { name: 'vat', default: () => '(0)' })
  vat: string;

  @Column('nvarchar', {
    name: 'transportDate',
    length: 10,
    default: () => "''",
  })
  transportDate: string;

  @Column('int', { name: 'FkfStoreHouseApp', nullable: true })
  fkfStoreHouseApp: number | null;

  @Column('int', { name: 'refrencePkf', nullable: true })
  refrencePkf: number | null;

  @ManyToOne(
    () => SalStoreHouseType,
    (salStoreHouseType) => salStoreHouseType.salStoreHouses,
  )
  @JoinColumn([
    { name: 'FkfStoreHouseType', referencedColumnName: 'pkfStoreHouseType' },
  ])
  fkfStoreHouseType2: SalStoreHouseType;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.salStoreHouses)
  @JoinColumn([{ name: 'FkfGeter', referencedColumnName: 'pkfTreater' }])
  fkfGeter: GenTreater;

  @ManyToOne(() => SalSource, (salSource) => salSource.salStoreHouses)
  @JoinColumn([{ name: 'FkfSource', referencedColumnName: 'pkfSource' }])
  fkfSource: SalSource;

  @ManyToOne(() => GenEmployee, (genEmployee) => genEmployee.salStoreHouses)
  @JoinColumn([{ name: 'FkfCreateUser', referencedColumnName: 'pkfEmployee' }])
  fkfCreateUser: GenEmployee;

  @ManyToOne(() => GenEmployee, (genEmployee) => genEmployee.salStoreHouses2)
  @JoinColumn([{ name: 'FkfEditUser', referencedColumnName: 'pkfEmployee' }])
  fkfEditUser: GenEmployee;

  @ManyToOne(() => SalPorterage, (salPorterage) => salPorterage.salStoreHouses)
  @JoinColumn([{ name: 'FkfPorterage', referencedColumnName: 'pkfPorterage' }])
  fkfPorterage: SalPorterage;

  @ManyToOne(() => GenStatus, (genStatus) => genStatus.salStoreHouses)
  @JoinColumn([{ name: 'FkfStatus', referencedColumnName: 'pkfStatus' }])
  fkfStatus: GenStatus;

  @ManyToOne(
    () => SalTypeStoreHouse,
    (salTypeStoreHouse) => salTypeStoreHouse.salStoreHouses,
  )
  @JoinColumn([
    { name: 'FkfTypeStoreHouse', referencedColumnName: 'pkfStoreHouseType' },
  ])
  fkfTypeStoreHouse2: SalTypeStoreHouse;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.salStoreHouses2)
  @JoinColumn([{ name: 'FkfProject', referencedColumnName: 'pkfTreater' }])
  fkfProject2: GenTreater;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.salStoreHouses3)
  @JoinColumn([{ name: 'FkfMarkaz', referencedColumnName: 'pkfTreater' }])
  fkfMarkaz: GenTreater;

  @ManyToOne(() => GenStatus, (genStatus) => genStatus.salStoreHouses2)
  @JoinColumn([{ name: 'FkfStatusPrice', referencedColumnName: 'pkfStatus' }])
  fkfStatusPrice: GenStatus;

  @OneToMany(
    () => SalStoreHouseDetail,
    (salStoreHouseDetail) => salStoreHouseDetail.fkfStoreHouse2,
  )
  salStoreHouseDetails: SalStoreHouseDetail[];

  @OneToMany(
    () => SalStoreHouseDocument,
    (salStoreHouseDocument) => salStoreHouseDocument.fkfStoreHouse,
  )
  salStoreHouseDocuments: SalStoreHouseDocument[];

  @RelationId(
    (salStoreHouse: SalStoreHouse) => salStoreHouse.fkfStoreHouseType2,
  )
  fkfStoreHouseType3: number;

  @RelationId((salStoreHouse: SalStoreHouse) => salStoreHouse.fkfGeter)
  fkfGeter2: number | null;

  @RelationId((salStoreHouse: SalStoreHouse) => salStoreHouse.fkfSource)
  fkfSource2: number | null;

  @RelationId((salStoreHouse: SalStoreHouse) => salStoreHouse.fkfCreateUser)
  fkfCreateUser2: number;

  @RelationId((salStoreHouse: SalStoreHouse) => salStoreHouse.fkfEditUser)
  fkfEditUser2: number | null;

  @RelationId((salStoreHouse: SalStoreHouse) => salStoreHouse.fkfPorterage)
  fkfPorterage2: number | null;

  @RelationId((salStoreHouse: SalStoreHouse) => salStoreHouse.fkfStatus)
  fkfStatus2: number;

  @RelationId(
    (salStoreHouse: SalStoreHouse) => salStoreHouse.fkfTypeStoreHouse2,
  )
  fkfTypeStoreHouse3: number | null;

  @RelationId((salStoreHouse: SalStoreHouse) => salStoreHouse.fkfProject2)
  fkfProject3: number;

  @RelationId((salStoreHouse: SalStoreHouse) => salStoreHouse.fkfMarkaz)
  fkfMarkaz2: number | null;

  @RelationId((salStoreHouse: SalStoreHouse) => salStoreHouse.fkfStatusPrice)
  fkfStatusPrice2: number;
}
