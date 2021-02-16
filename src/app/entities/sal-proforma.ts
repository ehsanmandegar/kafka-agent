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
import { GenTreater } from './gen-treater';
import { GenStatus } from './gen-status';
import { GenEmployee } from './gen-employee';
import { SalSeller } from './sal-seller';
import { SalContract } from './sal-contract';
import { SalProformaDetail } from './sal-proforma-detail';

@Index('IX_salProforma', ['serial', 'accYear'], { unique: true })
@Index('PK_salProforma', ['pkfProforma'], { unique: true })
@Entity('salProforma', { schema: 'dbo' })
export class SalProforma {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfProforma' })
  pkfProforma: number;

  @Column('nvarchar', { name: 'proformaDate', length: 10 })
  proformaDate: string;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('nvarchar', { name: 'address', length: 255, default: () => "''" })
  address: string;

  @Column('nvarchar', { name: 'createDate', length: 10 })
  createDate: string;

  @Column('nvarchar', { name: 'editDate', length: 10, default: () => "''" })
  editDate: string;

  @Column('nvarchar', { name: 'finalDate', length: 10, default: () => "''" })
  finalDate: string;

  @Column('int', { name: 'usance', default: () => '0' })
  usance: number;

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

  @Column('nvarchar', { name: 'storeNo', length: 50, default: () => "''" })
  storeNo: string;

  @Column('nvarchar', { name: 'payoffDate', length: 10, default: () => "''" })
  payoffDate: string;

  @Column('bigint', { name: 'addressNo', nullable: true })
  addressNo: string | null;

  @Column('bigint', { name: 'prepayment', default: () => '0' })
  prepayment: string;

  @Column('int', { name: 'FkfProformaType' })
  fkfProformaType: number;

  @Column('int', { name: 'FkfTreaterMoein', nullable: true })
  fkfTreaterMoein: number | null;

  @Column('int', { name: 'FkfTreaterTafzili5', nullable: true })
  fkfTreaterTafzili5: number | null;

  @Column('int', { name: 'FkfTreaterTafzili6', nullable: true })
  fkfTreaterTafzili6: number | null;

  @Column('bigint', { name: 'vat', default: () => '(0)' })
  vat: string;

  @Column('int', { name: 'FkfProject', nullable: true })
  fkfProject: number | null;

  @Column('int', { name: 'FkfMarkaz', nullable: true })
  fkfMarkaz: number | null;

  @Column('nvarchar', { name: 'getter', length: 100, default: () => "''" })
  getter: string;

  @Column('nvarchar', { name: 'getterTell', length: 100, default: () => "''" })
  getterTell: string;

  @Column('float', { name: 'DiscountP', precision: 53, default: () => '(0)' })
  discountP: number;

  @Column('nvarchar', { name: 'banks', length: 255, default: () => "''" })
  banks: string;

  @Column('int', { name: 'FkfOrigin', nullable: true })
  fkfOrigin: number | null;

  @Column('int', { name: 'FkfDestination', nullable: true })
  fkfDestination: number | null;

  @Column('int', { name: 'FkfTransportMode', nullable: true })
  fkfTransportMode: number | null;

  @Column('int', { name: 'FkfCurrency', nullable: true })
  fkfCurrency: number | null;

  @Column('int', { name: 'FkfLocationLoading', nullable: true })
  fkfLocationLoading: number | null;

  @Column('nvarchar', { name: 'shipment', length: 50, default: () => "''" })
  shipment: string;

  @Column('nvarchar', {
    name: 'partialShipment',
    length: 255,
    default: () => "''",
  })
  partialShipment: string;

  @Column('float', { name: 'rialRate', precision: 53, default: () => '(0)' })
  rialRate: number;

  @Column('int', { name: 'FkfDeliveryTerm', nullable: true })
  fkfDeliveryTerm: number | null;

  @Column('nvarchar', { name: 'PINumber', length: 50, default: () => "''" })
  piNumber: string;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.salProformas)
  @JoinColumn([{ name: 'FkfTraeter', referencedColumnName: 'pkfTreater' }])
  fkfTraeter: GenTreater;

  @ManyToOne(() => GenStatus, (genStatus) => genStatus.salProformas)
  @JoinColumn([{ name: 'FkfStatus', referencedColumnName: 'pkfStatus' }])
  fkfStatus: GenStatus;

  @ManyToOne(() => GenEmployee, (genEmployee) => genEmployee.salProformas)
  @JoinColumn([{ name: 'FkfCreateUser', referencedColumnName: 'pkfEmployee' }])
  fkfCreateUser: GenEmployee;

  @ManyToOne(() => GenEmployee, (genEmployee) => genEmployee.salProformas2)
  @JoinColumn([{ name: 'FkfEditUser', referencedColumnName: 'pkfEmployee' }])
  fkfEditUser: GenEmployee;

  @ManyToOne(() => GenEmployee, (genEmployee) => genEmployee.salProformas3)
  @JoinColumn([{ name: 'FkfFinalUser', referencedColumnName: 'pkfEmployee' }])
  fkfFinalUser: GenEmployee;

  @ManyToOne(() => SalSeller, (salSeller) => salSeller.salProformas)
  @JoinColumn([{ name: 'FkfSeller', referencedColumnName: 'pkfSeller' }])
  fkfSeller: SalSeller;

  @ManyToOne(() => SalContract, (salContract) => salContract.salProformas)
  @JoinColumn([{ name: 'FkfBuyContract', referencedColumnName: 'pkfContract' }])
  fkfBuyContract: SalContract;

  @OneToMany(
    () => SalProformaDetail,
    (salProformaDetail) => salProformaDetail.fkfProforma,
  )
  salProformaDetails: SalProformaDetail[];

  @RelationId((salProforma: SalProforma) => salProforma.fkfTraeter)
  fkfTraeter2: number;

  @RelationId((salProforma: SalProforma) => salProforma.fkfStatus)
  fkfStatus2: number;

  @RelationId((salProforma: SalProforma) => salProforma.fkfCreateUser)
  fkfCreateUser2: number;

  @RelationId((salProforma: SalProforma) => salProforma.fkfEditUser)
  fkfEditUser2: number | null;

  @RelationId((salProforma: SalProforma) => salProforma.fkfFinalUser)
  fkfFinalUser2: number | null;

  @RelationId((salProforma: SalProforma) => salProforma.fkfSeller)
  fkfSeller2: number | null;

  @RelationId((salProforma: SalProforma) => salProforma.fkfBuyContract)
  fkfBuyContract2: number | null;
}
