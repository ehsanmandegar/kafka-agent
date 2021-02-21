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
import { SalSeller } from './sal-seller';
import { GenContact } from './gen-contact';
import { SalOrderDetail } from './sal-order-detail';

@Index('IX_salOrder', ['fkfProject'], {})
@Index('IX_salOrder_1', ['serial', 'accYear', 'fkfOrderType'], { unique: true })
@Index('IX_salOrder_2', ['fkfContact'], {})
@Index('IX_salOrder_3', ['fkfProject'], {})
@Index('IX_salOrder_4', ['fkfTraeter'], {})
@Index('IX_salOrder_5', ['fkfPorterage'], {})
@Index('PK_salOrder', ['pkfOrder'], { unique: true })
@Entity('salOrder', { schema: 'dbo' })
export class SalOrder {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfOrder' })
  pkfOrder: number;

  @Column('int', { name: 'FkfTraeter' })
  fkfTraeter: number;

  @Column('nvarchar', { name: 'OrderDate', length: 10 })
  orderDate: string;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('nvarchar', { name: 'address', length: 255, default: () => "''" })
  address: string;

  @Column('int', { name: 'FkfStatus' })
  fkfStatus: number;

  @Column('int', { name: 'FkfCreateUser' })
  fkfCreateUser: number;

  @Column('nvarchar', { name: 'createDate', length: 10 })
  createDate: string;

  @Column('int', { name: 'FkfEditUser', nullable: true })
  fkfEditUser: number | null;

  @Column('nvarchar', { name: 'editDate', length: 10, default: () => "''" })
  editDate: string;

  @Column('int', { name: 'FkfFinalUser', nullable: true })
  fkfFinalUser: number | null;

  @Column('nvarchar', { name: 'finalDate', length: 10, default: () => "''" })
  finalDate: string;

  @Column('int', { name: 'usance', default: () => '(0)' })
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

  @Column('bigint', { name: 'prepayment', default: () => '(0)' })
  prepayment: string;

  @Column('int', { name: 'FkfOrderType' })
  fkfOrderType: number;

  @Column('int', { name: 'FkfBuyContract', nullable: true })
  fkfBuyContract: number | null;

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

  @Column('int', { name: 'FkfSaleProject', nullable: true })
  fkfSaleProject: number | null;

  @Column('bit', { name: 'weight', default: () => '(0)' })
  weight: boolean;

  @Column('int', { name: 'oldPkf', nullable: true })
  oldPkf: number | null;

  @Column('int', { name: 'FkfPorterage', nullable: true })
  fkfPorterage: number | null;

  @Column('int', { name: 'FkftreaterOfficial', nullable: true })
  fkftreaterOfficial: number | null;

  @Column('nvarchar', { name: 'finalMemo', length: 1000, default: () => "''" })
  finalMemo: string;

  @Column('nvarchar', { name: 'cityAddress', length: 150, default: () => "''" })
  cityAddress: string;

  @Column('nvarchar', {
    name: 'stateAddress',
    length: 150,
    default: () => "''",
  })
  stateAddress: string;

  @Column('int', { name: 'FkfContact', nullable: true })
  fkfContact: number | null;

  @Column('int', { name: 'FkfCity', nullable: true })
  fkfCity: number | null;

  @Column('int', { name: 'FkfCurrency', nullable: true })
  fkfCurrency: number | null;

  @Column('float', { name: 'feeCurrency', precision: 53, default: () => '(0)' })
  feeCurrency: number;

  @Column('bit', { name: 'orderToSaleWithVat', default: () => '(1)' })
  orderToSaleWithVat: boolean;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.salOrders)
  @JoinColumn([{ name: 'FkfTraeter', referencedColumnName: 'pkfTreater' }])
  fkfTraeter2: GenTreater;

  @ManyToOne(() => SalSeller, (salSeller) => salSeller.salOrders)
  @JoinColumn([{ name: 'FkfSeller', referencedColumnName: 'pkfSeller' }])
  fkfSeller: SalSeller;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.salOrders2)
  @JoinColumn([{ name: 'FkfProject', referencedColumnName: 'pkfTreater' }])
  fkfProject2: GenTreater;

  @ManyToOne(() => GenContact, (genContact) => genContact.salOrders)
  @JoinColumn([{ name: 'FkfContact', referencedColumnName: 'pkfContact' }])
  fkfContact2: GenContact;

  @OneToMany(() => SalOrderDetail, (salOrderDetail) => salOrderDetail.fkfOrder2)
  salOrderDetails: SalOrderDetail[];

  @RelationId((salOrder: SalOrder) => salOrder.fkfTraeter2)
  fkfTraeter3: number;

  @RelationId((salOrder: SalOrder) => salOrder.fkfSeller)
  fkfSeller2: number | null;

  @RelationId((salOrder: SalOrder) => salOrder.fkfProject2)
  fkfProject3: number | null;

  @RelationId((salOrder: SalOrder) => salOrder.fkfContact2)
  fkfContact3: number | null;
}
