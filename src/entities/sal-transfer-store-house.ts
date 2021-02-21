import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalCompany } from './sal-company';
import { GenStatus } from './gen-status';
import { GenEmployee } from './gen-employee';
import { SalTransferType } from './sal-transfer-type';
import { SalContract } from './sal-contract';

@Index('IX_salTransferStoreHouse', ['accYear', 'serial', 'fkfTransferType'], {
  unique: true,
})
@Index('PK_salTransferStoreHouse', ['pkfTransferStoreHouse'], { unique: true })
@Entity('salTransferStoreHouse', { schema: 'dbo' })
export class SalTransferStoreHouse {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfTransferStoreHouse' })
  pkfTransferStoreHouse: number;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('nvarchar', { name: 'transferDate', length: 10 })
  transferDate: string;

  @Column('nvarchar', { name: 'carNo', length: 25, default: () => "''" })
  carNo: string;

  @Column('nvarchar', { name: 'billNo', length: 25, default: () => "''" })
  billNo: string;

  @Column('nvarchar', { name: 'driverName', length: 150, default: () => "''" })
  driverName: string;

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

  @Column('int', { name: 'FkfTransferType' })
  fkfTransferType: number;

  @Column('nvarchar', { name: 'getNo', length: 50, default: () => "''" })
  getNo: string;

  @Column('nvarchar', { name: 'outPutNo', length: 50, default: () => "''" })
  outPutNo: string;

  @Column('int', { name: 'addressNo', nullable: true })
  addressNo: number | null;

  @Column('bit', { name: 'sanad', default: () => '(0)' })
  sanad: boolean;

  @Column('int', { name: 'FkfSanad', nullable: true })
  fkfSanad: number | null;

  @ManyToOne(
    () => SalCompany,
    (salCompany) => salCompany.salTransferStoreHouses,
  )
  @JoinColumn([{ name: 'FkfPorterage', referencedColumnName: 'pkfComapny' }])
  fkfPorterage: SalCompany;

  @ManyToOne(() => GenStatus, (genStatus) => genStatus.salTransferStoreHouses)
  @JoinColumn([{ name: 'FkfStatus', referencedColumnName: 'pkfStatus' }])
  fkfStatus: GenStatus;

  @ManyToOne(
    () => GenEmployee,
    (genEmployee) => genEmployee.salTransferStoreHouses,
  )
  @JoinColumn([{ name: 'FkfCreateUser', referencedColumnName: 'pkfEmployee' }])
  fkfCreateUser: GenEmployee;

  @ManyToOne(
    () => GenEmployee,
    (genEmployee) => genEmployee.salTransferStoreHouses2,
  )
  @JoinColumn([{ name: 'FkfEditUser', referencedColumnName: 'pkfEmployee' }])
  fkfEditUser: GenEmployee;

  @ManyToOne(
    () => GenEmployee,
    (genEmployee) => genEmployee.salTransferStoreHouses3,
  )
  @JoinColumn([{ name: 'FkfFinalUser', referencedColumnName: 'pkfEmployee' }])
  fkfFinalUser: GenEmployee;

  @ManyToOne(
    () => SalTransferType,
    (salTransferType) => salTransferType.salTransferStoreHouses,
  )
  @JoinColumn([
    { name: 'FkfTransferType', referencedColumnName: 'pkfTransferType' },
  ])
  fkfTransferType2: SalTransferType;

  @ManyToOne(
    () => SalContract,
    (salContract) => salContract.salTransferStoreHouses,
  )
  @JoinColumn([{ name: 'FkfContract', referencedColumnName: 'pkfContract' }])
  fkfContract: SalContract;

  @RelationId(
    (salTransferStoreHouse: SalTransferStoreHouse) =>
      salTransferStoreHouse.fkfPorterage,
  )
  fkfPorterage2: number | null;

  @RelationId(
    (salTransferStoreHouse: SalTransferStoreHouse) =>
      salTransferStoreHouse.fkfStatus,
  )
  fkfStatus2: number;

  @RelationId(
    (salTransferStoreHouse: SalTransferStoreHouse) =>
      salTransferStoreHouse.fkfCreateUser,
  )
  fkfCreateUser2: number;

  @RelationId(
    (salTransferStoreHouse: SalTransferStoreHouse) =>
      salTransferStoreHouse.fkfEditUser,
  )
  fkfEditUser2: number | null;

  @RelationId(
    (salTransferStoreHouse: SalTransferStoreHouse) =>
      salTransferStoreHouse.fkfFinalUser,
  )
  fkfFinalUser2: number | null;

  @RelationId(
    (salTransferStoreHouse: SalTransferStoreHouse) =>
      salTransferStoreHouse.fkfTransferType2,
  )
  fkfTransferType3: number;

  @RelationId(
    (salTransferStoreHouse: SalTransferStoreHouse) =>
      salTransferStoreHouse.fkfContract,
  )
  fkfContract2: number | null;
}
