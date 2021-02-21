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
import { SalRequestGoodsType } from './sal-request-goods-type';
import { GenEmployee } from './gen-employee';
import { GenTreater } from './gen-treater';
import { SalStore } from './sal-store';
import { SalRequestGoodsDetail } from './sal-request-goods-detail';

@Index('IX_salRequestGoods', ['serial', 'accYear', 'fkfRequestGoodsType'], {
  unique: true,
})
@Index('IX_salRequestGoods_1', ['accYear'], {})
@Index('PK_salRequestGoods', ['pkfRequestGoods'], { unique: true })
@Index('uIX_salRequestGoods_Unique', ['turningNumber'], { unique: true })
@Index('uIX_salRequestGoods2_Unique', ['turningNumber'], { unique: true })
@Entity('salRequestGoods', { schema: 'dbo' })
export class SalRequestGoods {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfRequestGoods' })
  pkfRequestGoods: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('nvarchar', { name: 'requestGoodsDate', length: 10 })
  requestGoodsDate: string;

  @Column('int', { name: 'FkfRequestGoodsType' })
  fkfRequestGoodsType: number;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('nvarchar', { name: 'createDate', length: 10 })
  createDate: string;

  @Column('nvarchar', { name: 'editDate', length: 10, default: () => "''" })
  editDate: string;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'FkfStatus' })
  fkfStatus: number;

  @Column('nvarchar', { name: 'address', length: 255, default: () => "''" })
  address: string;

  @Column('int', { name: 'FkfOrder', nullable: true })
  fkfOrder: number | null;

  @Column('int', { name: 'FkfFinalUser', nullable: true })
  fkfFinalUser: number | null;

  @Column('nvarchar', { name: 'finalDate', length: 10, default: () => "''" })
  finalDate: string;

  @Column('nvarchar', { name: 'driverName', length: 50, default: () => "''" })
  driverName: string;

  @Column('nvarchar', { name: 'truckNO', length: 50, default: () => "''" })
  truckNo: string;

  @Column('nvarchar', { name: 'getter', length: 50, default: () => "''" })
  getter: string;

  @Column('nvarchar', { name: 'getterTell', length: 50, default: () => "''" })
  getterTell: string;

  @Column('nvarchar', { name: 'nationalCode', length: 50, default: () => "''" })
  nationalCode: string;

  @Column('nvarchar', { name: 'drivingCode', length: 50, default: () => "''" })
  drivingCode: string;

  @Column('int', { name: 'FkfMotorType', nullable: true })
  fkfMotorType: number | null;

  @Column('nvarchar', { name: 'driverTell', length: 50, default: () => "''" })
  driverTell: string;

  @Column('int', { name: 'FkfPorterage', nullable: true })
  fkfPorterage: number | null;

  @Column('nvarchar', { name: 'billofLading', length: 50, default: () => "''" })
  billofLading: string;

  @Column('nvarchar', { name: 'refrence', length: 50, default: () => "''" })
  refrence: string;

  @Column('int', { name: 'FkfStoreHouseApp', nullable: true })
  fkfStoreHouseApp: number | null;

  @Column('nvarchar', {
    name: 'turningNumber',
    length: 50,
    default: () => "''",
  })
  turningNumber: string;

  @Column('nvarchar', {
    name: 'addressSender',
    length: 500,
    default: () => "''",
  })
  addressSender: string;

  @Column('decimal', {
    name: 'valueInsuranceGood',
    nullable: true,
    precision: 18,
    scale: 6,
    default: () => '(0)',
  })
  valueInsuranceGood: number | null;

  @ManyToOne(
    () => SalRequestGoodsType,
    (salRequestGoodsType) => salRequestGoodsType.salRequestGoods,
  )
  @JoinColumn([
    {
      name: 'FkfRequestGoodsType',
      referencedColumnName: 'pkfRequestGoodsType',
    },
  ])
  fkfRequestGoodsType2: SalRequestGoodsType;

  @ManyToOne(() => GenEmployee, (genEmployee) => genEmployee.salRequestGoods)
  @JoinColumn([{ name: 'FkfCreateUser', referencedColumnName: 'pkfEmployee' }])
  fkfCreateUser: GenEmployee;

  @ManyToOne(() => GenEmployee, (genEmployee) => genEmployee.salRequestGoods2)
  @JoinColumn([{ name: 'FkfEditUser', referencedColumnName: 'pkfEmployee' }])
  fkfEditUser: GenEmployee;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.salRequestGoods)
  @JoinColumn([{ name: 'FkfProject', referencedColumnName: 'pkfTreater' }])
  fkfProject: GenTreater;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.salRequestGoods2)
  @JoinColumn([{ name: 'FkfMarkaz', referencedColumnName: 'pkfTreater' }])
  fkfMarkaz: GenTreater;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.salRequestGoods3)
  @JoinColumn([{ name: 'FkfTreater', referencedColumnName: 'pkfTreater' }])
  fkfTreater: GenTreater;

  @ManyToOne(() => SalStore, (salStore) => salStore.salRequestGoods)
  @JoinColumn([{ name: 'FkfStore', referencedColumnName: 'pkfStore' }])
  fkfStore: SalStore;

  @OneToMany(
    () => SalRequestGoodsDetail,
    (salRequestGoodsDetail) => salRequestGoodsDetail.fkfRequestGoods2,
  )
  salRequestGoodsDetails: SalRequestGoodsDetail[];

  @RelationId(
    (salRequestGoods: SalRequestGoods) => salRequestGoods.fkfRequestGoodsType2,
  )
  fkfRequestGoodsType3: number;

  @RelationId(
    (salRequestGoods: SalRequestGoods) => salRequestGoods.fkfCreateUser,
  )
  fkfCreateUser2: number;

  @RelationId((salRequestGoods: SalRequestGoods) => salRequestGoods.fkfEditUser)
  fkfEditUser2: number | null;

  @RelationId((salRequestGoods: SalRequestGoods) => salRequestGoods.fkfProject)
  fkfProject2: number | null;

  @RelationId((salRequestGoods: SalRequestGoods) => salRequestGoods.fkfMarkaz)
  fkfMarkaz2: number | null;

  @RelationId((salRequestGoods: SalRequestGoods) => salRequestGoods.fkfTreater)
  fkfTreater2: number;

  @RelationId((salRequestGoods: SalRequestGoods) => salRequestGoods.fkfStore)
  fkfStore2: number;
}
