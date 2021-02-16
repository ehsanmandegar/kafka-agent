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
import { SalCompany } from './sal-company';
import { GenStatus } from './gen-status';
import { GenEmployee } from './gen-employee';
import { SalTransferType } from './sal-transfer-type';
import { SalTransferCostDetail } from './sal-transfer-cost-detail';
import { SalTransferDetail } from './sal-transfer-detail';
import { SalTransferDocument } from './sal-transfer-document';

@Index('IX_salTransfer', ['accYear', 'serial', 'fkfTransferType'], {
  unique: true,
})
@Index('PK_salTransfer', ['pkfTransfer'], { unique: true })
@Entity('salTransfer', { schema: 'dbo' })
export class SalTransfer {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfTransfer' })
  pkfTransfer: number;

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

  @Column('bit', { name: 'sanad', default: () => '0' })
  sanad: boolean;

  @Column('int', { name: 'FkfSanad', nullable: true })
  fkfSanad: number | null;

  @Column('int', { name: 'FkfContract', nullable: true })
  fkfContract: number | null;

  @Column('int', { name: 'FkfContractEnd', nullable: true })
  fkfContractEnd: number | null;

  @Column('int', { name: 'FkfMarkaz', nullable: true })
  fkfMarkaz: number | null;

  @Column('int', { name: 'FkfFkfTransferSource', nullable: true })
  fkfFkfTransferSource: number | null;

  @Column('nvarchar', {
    name: 'transferDateDestination',
    length: 10,
    default: () => "''",
  })
  transferDateDestination: string;

  @ManyToOne(() => SalCompany, (salCompany) => salCompany.salTransfers)
  @JoinColumn([{ name: 'FkfPorterage', referencedColumnName: 'pkfComapny' }])
  fkfPorterage: SalCompany;

  @ManyToOne(() => GenStatus, (genStatus) => genStatus.salTransfers)
  @JoinColumn([{ name: 'FkfStatus', referencedColumnName: 'pkfStatus' }])
  fkfStatus: GenStatus;

  @ManyToOne(() => GenEmployee, (genEmployee) => genEmployee.salTransfers)
  @JoinColumn([{ name: 'FkfCreateUser', referencedColumnName: 'pkfEmployee' }])
  fkfCreateUser: GenEmployee;

  @ManyToOne(() => GenEmployee, (genEmployee) => genEmployee.salTransfers2)
  @JoinColumn([{ name: 'FkfEditUser', referencedColumnName: 'pkfEmployee' }])
  fkfEditUser: GenEmployee;

  @ManyToOne(() => GenEmployee, (genEmployee) => genEmployee.salTransfers3)
  @JoinColumn([{ name: 'FkfFinalUser', referencedColumnName: 'pkfEmployee' }])
  fkfFinalUser: GenEmployee;

  @ManyToOne(
    () => SalTransferType,
    (salTransferType) => salTransferType.salTransfers,
  )
  @JoinColumn([
    { name: 'FkfTransferType', referencedColumnName: 'pkfTransferType' },
  ])
  fkfTransferType2: SalTransferType;

  @OneToMany(
    () => SalTransferCostDetail,
    (salTransferCostDetail) => salTransferCostDetail.fkfTransfer2,
  )
  salTransferCostDetails: SalTransferCostDetail[];

  @OneToMany(
    () => SalTransferDetail,
    (salTransferDetail) => salTransferDetail.fkfTransfer2,
  )
  salTransferDetails: SalTransferDetail[];

  @OneToMany(
    () => SalTransferDocument,
    (salTransferDocument) => salTransferDocument.fkfTransfer,
  )
  salTransferDocuments: SalTransferDocument[];

  @RelationId((salTransfer: SalTransfer) => salTransfer.fkfPorterage)
  fkfPorterage2: number | null;

  @RelationId((salTransfer: SalTransfer) => salTransfer.fkfStatus)
  fkfStatus2: number;

  @RelationId((salTransfer: SalTransfer) => salTransfer.fkfCreateUser)
  fkfCreateUser2: number;

  @RelationId((salTransfer: SalTransfer) => salTransfer.fkfEditUser)
  fkfEditUser2: number | null;

  @RelationId((salTransfer: SalTransfer) => salTransfer.fkfFinalUser)
  fkfFinalUser2: number | null;

  @RelationId((salTransfer: SalTransfer) => salTransfer.fkfTransferType2)
  fkfTransferType3: number;
}
