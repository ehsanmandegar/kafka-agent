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
import { BasReceiptsList } from './bas-receipts-list';
import { SalStore } from './sal-store';
import { GenCountry } from './gen-country';
import { SalMotorType } from './sal-motor-type';
import { GenEmployee } from './gen-employee';
import { SalGoods } from './sal-goods';
import { GenTreater } from './gen-treater';
import { GenBank } from './gen-bank';
import { BasWeightDocument } from './bas-weight-document';
import { BasWeightFactor } from './bas-weight-factor';
import { StrMultiWeightBascole } from './str-multi-weight-bascole';

@Index('IX_basWeight', ['serial', 'accYear'], { unique: true })
@Index('IX_basWeight_1', ['fkfDestination'], {})
@Index('IX_basWeight_10', ['accYear'], {})
@Index('IX_basWeight_2', ['fkfCarType'], {})
@Index('IX_basWeight_3', ['fkfCreateUser'], {})
@Index('IX_basWeight_4', ['fkfEditUser'], {})
@Index('IX_basWeight_5', ['fkfGoods'], {})
@Index('IX_basWeight_6', ['fkfPorterage'], {})
@Index('IX_basWeight_7', ['fkfProject'], {})
@Index('IX_basWeight_8', ['fkfSource'], {})
@Index('IX_basWeight_9', ['weightDate'], {})
@Index('IX_basWeight_filtering1', ['fkfTrustExport'], { unique: true })
@Index('PK_basWeight', ['pkfWeight'], { unique: true })
@Entity('basWeight', { schema: 'dbo' })
export class BasWeight {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfWeight' })
  pkfWeight: number;

  @Column('nvarchar', { name: 'weightDate', length: 10 })
  weightDate: string;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'weight1', default: () => '(0)' })
  weight1: number;

  @Column('int', { name: 'weight2', default: () => '(0)' })
  weight2: number;

  @Column('int', { name: 'FkfSource', nullable: true })
  fkfSource: number | null;

  @Column('int', { name: 'FkfPorterage', nullable: true })
  fkfPorterage: number | null;

  @Column('nvarchar', { name: 'nationalCode', length: 50, default: () => "''" })
  nationalCode: string;

  @Column('nvarchar', { name: 'driverName', length: 250, default: () => "''" })
  driverName: string;

  @Column('nvarchar', { name: 'plaqueNo', length: 6, default: () => "''" })
  plaqueNo: string;

  @Column('nvarchar', { name: 'plaqueCity', length: 50, default: () => "''" })
  plaqueCity: string;

  @Column('int', { name: 'FkfCarType', nullable: true })
  fkfCarType: number | null;

  @Column('int', { name: 'FkfCreateUser' })
  fkfCreateUser: number;

  @Column('nvarchar', { name: 'createDate', length: 10 })
  createDate: string;

  @Column('nvarchar', { name: 'createTime', length: 5 })
  createTime: string;

  @Column('int', { name: 'FkfEditUser', nullable: true })
  fkfEditUser: number | null;

  @Column('nvarchar', { name: 'editDate', length: 10, default: () => "''" })
  editDate: string;

  @Column('nvarchar', { name: 'editTime', length: 5, default: () => "''" })
  editTime: string;

  @Column('int', { name: 'FkfGoods' })
  fkfGoods: number;

  @Column('int', { name: 'FkfProject' })
  fkfProject: number;

  @Column('nvarchar', { name: 'addressNo', length: 20, default: () => "''" })
  addressNo: string;

  @Column('nvarchar', { name: 'memo', length: 250, default: () => "''" })
  memo: string;

  @Column('int', { name: 'FkfType' })
  fkfType: number;

  @Column('int', { name: 'FkfWeighbridge1' })
  fkfWeighbridge1: number;

  @Column('int', { name: 'FkfWeighbridge2', nullable: true })
  fkfWeighbridge2: number | null;

  @Column('int', { name: 'weightOrder', default: () => '(0)' })
  weightOrder: number;

  @Column('nvarchar', { name: 'driverTell', length: 50, default: () => "''" })
  driverTell: string;

  @Column('int', { name: 'amount', default: () => '(0)' })
  amount: number;

  @Column('int', { name: 'FkfDestination', nullable: true })
  fkfDestination: number | null;

  @Column('nvarchar', { name: 'billOfLading', length: 50, default: () => "''" })
  billOfLading: string;

  @Column('nvarchar', { name: 'bankCardNo', length: 50, default: () => "''" })
  bankCardNo: string;

  @Column('bigint', { name: 'transferCost', default: () => '(0)' })
  transferCost: string;

  @Column('nvarchar', { name: 'orderNO', length: 50, default: () => "''" })
  orderNo: string;

  @Column('int', { name: 'FkfTrustExport', nullable: true })
  fkfTrustExport: number | null;

  @Column('int', { name: 'loadDeduction', default: () => '(0)' })
  loadDeduction: number;

  @Column('int', { name: 'sanadTempNo', nullable: true })
  sanadTempNo: number | null;

  @Column('int', { name: 'fkfSanad', nullable: true })
  fkfSanad: number | null;

  @Column('nvarchar', { name: 'plaqueWord', length: 50, default: () => "''" })
  plaqueWord: string;

  @Column('nvarchar', { name: 'plaqueNo2', length: 50, default: () => "''" })
  plaqueNo2: string;

  @Column('nvarchar', { name: 'shabaCode', length: 50, default: () => "''" })
  shabaCode: string;

  @Column('int', { name: 'FkfParentBascole', nullable: true })
  fkfParentBascole: number | null;

  @OneToMany(
    () => BasReceiptsList,
    (basReceiptsList) => basReceiptsList.fkfWeight,
  )
  basReceiptsLists: BasReceiptsList[];

  @ManyToOne(() => SalStore, (salStore) => salStore.basWeights)
  @JoinColumn([{ name: 'FkfSource', referencedColumnName: 'pkfStore' }])
  fkfSource2: SalStore;

  @ManyToOne(() => GenCountry, (genCountry) => genCountry.basWeights)
  @JoinColumn([
    { name: 'FkfPlaqueCountry', referencedColumnName: 'pkfCountry' },
  ])
  fkfPlaqueCountry: GenCountry;

  @ManyToOne(() => SalMotorType, (salMotorType) => salMotorType.basWeights)
  @JoinColumn([{ name: 'FkfCarType', referencedColumnName: 'pkfMotorType' }])
  fkfCarType2: SalMotorType;

  @ManyToOne(() => GenEmployee, (genEmployee) => genEmployee.basWeights)
  @JoinColumn([{ name: 'FkfCreateUser', referencedColumnName: 'pkfEmployee' }])
  fkfCreateUser2: GenEmployee;

  @ManyToOne(() => GenEmployee, (genEmployee) => genEmployee.basWeights2)
  @JoinColumn([{ name: 'FkfEditUser', referencedColumnName: 'pkfEmployee' }])
  fkfEditUser2: GenEmployee;

  @ManyToOne(() => SalGoods, (salGoods) => salGoods.basWeights)
  @JoinColumn([{ name: 'FkfGoods', referencedColumnName: 'pkfGood' }])
  fkfGoods2: SalGoods;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.basWeights)
  @JoinColumn([{ name: 'FkfProject', referencedColumnName: 'pkfTreater' }])
  fkfProject2: GenTreater;

  @ManyToOne(() => SalStore, (salStore) => salStore.basWeights2)
  @JoinColumn([{ name: 'FkfDestination', referencedColumnName: 'pkfStore' }])
  fkfDestination2: SalStore;

  @ManyToOne(() => GenBank, (genBank) => genBank.basWeights)
  @JoinColumn([{ name: 'FkfBank', referencedColumnName: 'pkfBank' }])
  fkfBank: GenBank;

  @OneToMany(
    () => BasWeightDocument,
    (basWeightDocument) => basWeightDocument.fkfWeight,
  )
  basWeightDocuments: BasWeightDocument[];

  @OneToMany(
    () => BasWeightFactor,
    (basWeightFactor) => basWeightFactor.fkfWeight,
  )
  basWeightFactors: BasWeightFactor[];

  @OneToMany(
    () => StrMultiWeightBascole,
    (strMultiWeightBascole) => strMultiWeightBascole.fkfWeight,
  )
  strMultiWeightBascoles: StrMultiWeightBascole[];

  @RelationId((basWeight: BasWeight) => basWeight.fkfSource2)
  fkfSource3: number | null;

  @RelationId((basWeight: BasWeight) => basWeight.fkfPlaqueCountry)
  fkfPlaqueCountry2: number;

  @RelationId((basWeight: BasWeight) => basWeight.fkfCarType2)
  fkfCarType3: number | null;

  @RelationId((basWeight: BasWeight) => basWeight.fkfCreateUser2)
  fkfCreateUser3: number;

  @RelationId((basWeight: BasWeight) => basWeight.fkfEditUser2)
  fkfEditUser3: number | null;

  @RelationId((basWeight: BasWeight) => basWeight.fkfGoods2)
  fkfGoods3: number;

  @RelationId((basWeight: BasWeight) => basWeight.fkfProject2)
  fkfProject3: number;

  @RelationId((basWeight: BasWeight) => basWeight.fkfDestination2)
  fkfDestination3: number | null;

  @RelationId((basWeight: BasWeight) => basWeight.fkfBank)
  fkfBank2: number | null;
}
