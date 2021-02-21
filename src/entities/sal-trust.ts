import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { GenTreater } from './gen-treater';
import { SalStore } from './sal-store';
import { SalTrustType } from './sal-trust-type';
import { SalSource } from './sal-source';
import { GenEmployee } from './gen-employee';
import { GenStatus } from './gen-status';
import { SalTrustDetail } from './sal-trust-detail';
import { SalTrustFactorDetail } from './sal-trust-factor-detail';
import { StrMultiWeightBascole } from './str-multi-weight-bascole';
import { StrOrder } from './str-order';
import { StrTrustRelated } from './str-trust-related';

@Index('IX_salTrust', ['serial', 'accYear', 'fkfTrustType'], { unique: true })
@Index('IX_salTrust_1', ['trustDate'], {})
@Index('IX_salTrust_2', ['parent'], {})
@Index('IX_salTrust_3', ['path'], {})
@Index('IX_salTrust_4', ['fkfTreater'], {})
@Index('IX_salTrust_5', ['fkfGetter'], {})
@Index('IX_salTrustForKartabl_filtering', ['fkfContract'], { unique: true })
@Index('PK_salTrust', ['pkfTrust'], { unique: true })
@Entity('salTrust', { schema: 'dbo' })
export class SalTrust {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfTrust' })
  pkfTrust: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('nvarchar', { name: 'trustDate', length: 10, default: () => "''" })
  trustDate: string;

  @Column('int', { name: 'FkfTreater' })
  fkfTreater: number;

  @Column('int', { name: 'FkfTrustType' })
  fkfTrustType: number;

  @Column('nvarchar', {
    name: 'billOfLading',
    length: 100,
    default: () => "''",
  })
  billOfLading: string;

  @Column('nvarchar', { name: 'truckNO', length: 50, default: () => "''" })
  truckNo: string;

  @Column('nvarchar', { name: 'memo', length: 500, default: () => "''" })
  memo: string;

  @Column('nvarchar', { name: 'createDate', length: 10, default: () => "''" })
  createDate: string;

  @Column('nvarchar', {
    name: 'editDate',
    nullable: true,
    length: 10,
    default: () => "''",
  })
  editDate: string | null;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'weightWithLoad', default: () => '0' })
  weightWithLoad: number;

  @Column('int', { name: 'weightWithOutLoad', default: () => '0' })
  weightWithOutLoad: number;

  @Column('int', { name: 'weightSource', default: () => '0' })
  weightSource: number;

  @Column('nvarchar', { name: 'orderNO', length: 50, default: () => "''" })
  orderNo: string;

  @Column('int', { name: 'FkfGetter', nullable: true })
  fkfGetter: number | null;

  @Column('nvarchar', { name: 'exitTime', length: 15, default: () => "''" })
  exitTime: string;

  @Column('nvarchar', { name: 'createTime', length: 15, default: () => "''" })
  createTime: string;

  @Column('nvarchar', { name: 'path', length: 255, default: () => "''" })
  path: string;

  @Column('nvarchar', { name: 'mainOrderNO', length: 50, default: () => "''" })
  mainOrderNo: string;

  @Column('int', { name: 'parent', nullable: true })
  parent: number | null;

  @Column('nvarchar', { name: 'finalDate', length: 10, default: () => "''" })
  finalDate: string;

  @Column('int', { name: 'FkfFinalUser', nullable: true })
  fkfFinalUser: number | null;

  @Column('int', { name: 'sanadTempNo', nullable: true })
  sanadTempNo: number | null;

  @Column('bit', { name: 'payoff', default: () => '0' })
  payoff: boolean;

  @Column('bit', { name: 'sanad', default: () => '0' })
  sanad: boolean;

  @Column('bit', { name: 'goodDeclare', default: () => '0' })
  goodDeclare: boolean;

  @Column('int', { name: 'FkfSanad', nullable: true })
  fkfSanad: number | null;

  @Column('nvarchar', { name: 'driverName', length: 200, default: () => "''" })
  driverName: string;

  @Column('nvarchar', { name: 'porterage', length: 200, default: () => "''" })
  porterage: string;

  @Column('int', { name: 'oldPkf', nullable: true })
  oldPkf: number | null;

  @Column('bigint', { name: 'serial2', nullable: true })
  serial2: string | null;

  @Column('bit', { name: 'eventual', default: () => '0' })
  eventual: boolean;

  @Column('int', { name: 'FkfWeight', nullable: true })
  fkfWeight: number | null;

  @Column('nvarchar', { name: 'driverMobile', length: 50, default: () => "''" })
  driverMobile: string;

  @Column('int', { name: 'rowNumber', default: () => '(0)' })
  rowNumber: number;

  @Column('int', { name: 'FkfReceiptType', default: () => '(1)' })
  fkfReceiptType: number;

  @Column('int', { name: 'FkfPorterage', nullable: true })
  fkfPorterage: number | null;

  @Column('int', { name: 'loadDeduction', default: () => '(0)' })
  loadDeduction: number;

  @Column('nvarchar', {
    name: 'treaterMobile',
    length: 50,
    default: () => "''",
  })
  treaterMobile: string;

  @Column('int', { name: 'FkfContract', nullable: true })
  fkfContract: number | null;

  @Column('int', { name: 'FkfTransferTrust', nullable: true })
  fkfTransferTrust: number | null;

  @Column('nvarchar', { name: 'nationalCode', length: 50, default: () => "''" })
  nationalCode: string;

  @Column('int', { name: 'FkfTreaterMain', nullable: true })
  fkfTreaterMain: number | null;

  @Column('bit', { name: 'isSendKartabl', default: () => '(0)' })
  isSendKartabl: boolean;

  @Column('int', { name: 'FkfSenderToKartabl', nullable: true })
  fkfSenderToKartabl: number | null;

  @Column('nvarchar', {
    name: 'sendToKartablDate',
    length: 10,
    default: () => "''",
  })
  sendToKartablDate: string;

  @Column('nvarchar', {
    name: 'sendToKartablTime',
    length: 10,
    default: () => "''",
  })
  sendToKartablTime: string;

  @Column('bit', { name: 'isSendKartablBack', default: () => '(0)' })
  isSendKartablBack: boolean;

  @Column('int', { name: 'FkfSenderToKartablBack', nullable: true })
  fkfSenderToKartablBack: number | null;

  @Column('nvarchar', {
    name: 'sendToKartablDateBack',
    length: 10,
    default: () => "''",
  })
  sendToKartablDateBack: string;

  @Column('nvarchar', {
    name: 'sendToKartablTimeBack',
    length: 10,
    default: () => "''",
  })
  sendToKartablTimeBack: string;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.salTrusts)
  @JoinColumn([{ name: 'FkfTreater', referencedColumnName: 'pkfTreater' }])
  fkfTreater2: GenTreater;

  @ManyToOne(() => SalStore, (salStore) => salStore.salTrusts)
  @JoinColumn([{ name: 'FkfStore', referencedColumnName: 'pkfStore' }])
  fkfStore: SalStore;

  @ManyToOne(() => SalTrustType, (salTrustType) => salTrustType.salTrusts)
  @JoinColumn([{ name: 'FkfTrustType', referencedColumnName: 'pkfTrustType' }])
  fkfTrustType2: SalTrustType;

  @ManyToOne(() => SalSource, (salSource) => salSource.salTrusts)
  @JoinColumn([{ name: 'FkfSource', referencedColumnName: 'pkfSource' }])
  fkfSource: SalSource;

  @ManyToOne(() => GenEmployee, (genEmployee) => genEmployee.salTrusts)
  @JoinColumn([{ name: 'FkfCreateUser', referencedColumnName: 'pkfEmployee' }])
  fkfCreateUser: GenEmployee;

  @ManyToOne(() => GenEmployee, (genEmployee) => genEmployee.salTrusts2)
  @JoinColumn([{ name: 'FkfEditUser', referencedColumnName: 'pkfEmployee' }])
  fkfEditUser: GenEmployee;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.salTrusts2)
  @JoinColumn([{ name: 'FkfGetter', referencedColumnName: 'pkfTreater' }])
  fkfGetter2: GenTreater;

  @ManyToOne(() => GenStatus, (genStatus) => genStatus.salTrusts)
  @JoinColumn([{ name: 'FkfStatus', referencedColumnName: 'pkfStatus' }])
  fkfStatus: GenStatus;

  @OneToMany(() => SalTrustDetail, (salTrustDetail) => salTrustDetail.fkfTrust2)
  salTrustDetails: SalTrustDetail[];

  @OneToMany(
    () => SalTrustFactorDetail,
    (salTrustFactorDetail) => salTrustFactorDetail.fkfTrust,
  )
  salTrustFactorDetails: SalTrustFactorDetail[];

  @OneToMany(
    () => StrMultiWeightBascole,
    (strMultiWeightBascole) => strMultiWeightBascole.fkfTrustExport,
  )
  strMultiWeightBascoles: StrMultiWeightBascole[];

  @OneToMany(() => StrOrder, (strOrder) => strOrder.fkfTrust)
  strOrders: StrOrder[];

  @OneToOne(
    () => StrTrustRelated,
    (strTrustRelated) => strTrustRelated.fkfTrust2,
  )
  strTrustRelated: StrTrustRelated;

  @RelationId((salTrust: SalTrust) => salTrust.fkfTreater2)
  fkfTreater3: number;

  @RelationId((salTrust: SalTrust) => salTrust.fkfStore)
  fkfStore2: number;

  @RelationId((salTrust: SalTrust) => salTrust.fkfTrustType2)
  fkfTrustType3: number;

  @RelationId((salTrust: SalTrust) => salTrust.fkfSource)
  fkfSource2: number | null;

  @RelationId((salTrust: SalTrust) => salTrust.fkfCreateUser)
  fkfCreateUser2: number;

  @RelationId((salTrust: SalTrust) => salTrust.fkfEditUser)
  fkfEditUser2: number | null;

  @RelationId((salTrust: SalTrust) => salTrust.fkfGetter2)
  fkfGetter3: number | null;

  @RelationId((salTrust: SalTrust) => salTrust.fkfStatus)
  fkfStatus2: number;
}
