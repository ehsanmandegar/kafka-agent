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
import { AccSanadDetailFloat } from './acc-sanad-detail-float';
import { AccSanadStatus } from './acc-sanad-status';
import { AccSanadTypes } from './acc-sanad-types';
import { GenEmployee } from './gen-employee';
import { AccSendFrom } from './acc-send-from';
import { CasGetPay } from './cas-get-pay';
import { CasGetPayDeclaration } from './cas-get-pay-declaration';
import { SalContract } from './sal-contract';

@Index('IX_accSanadFloat', ['accYear', 'tempNo'], { unique: true })
@Index('PK_accSanad2', ['pkfSanad'], { unique: true })
@Entity('accSanadFloat', { schema: 'dbo' })
export class AccSanadFloat {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfSanad' })
  pkfSanad: number;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'tempNo' })
  tempNo: number;

  @Column('int', { name: 'finalNo', nullable: true })
  finalNo: number | null;

  @Column('nvarchar', { name: 'sanadDate', length: 50 })
  sanadDate: string;

  @Column('nvarchar', { name: 'description', length: 255, default: () => "''" })
  description: string;

  @Column('varchar', { name: 'createDate', length: 10 })
  createDate: string;

  @Column('nvarchar', { name: 'editDate', length: 50, default: () => "''" })
  editDate: string;

  @Column('varchar', { name: 'assignDate', length: 10, default: () => "''" })
  assignDate: string;

  @Column('varchar', { name: 'auditDate', length: 10, default: () => "''" })
  auditDate: string;

  @Column('varchar', { name: 'finalDate', length: 10, default: () => "''" })
  finalDate: string;

  @Column('int', { name: 'getPaySerial', nullable: true })
  getPaySerial: number | null;

  @Column('int', { name: 'FkfMarkaz', nullable: true })
  fkfMarkaz: number | null;

  @Column('int', { name: 'FkfMain', nullable: true })
  fkfMain: number | null;

  @Column('int', { name: 'tempNoMain', nullable: true })
  tempNoMain: number | null;

  @Column('int', { name: 'tempNoOld', nullable: true })
  tempNoOld: number | null;

  @Column('int', { name: 'tempNoMarkaz', default: () => '(0)' })
  tempNoMarkaz: number;

  @Column('int', { name: 'sanadNo', default: () => '(0)' })
  sanadNo: number;

  @Column('int', { name: 'FkfUltimateUser', nullable: true })
  fkfUltimateUser: number | null;

  @Column('nvarchar', { name: 'ultimateDate', length: 10, default: () => "''" })
  ultimateDate: string;

  @Column('nvarchar', { name: 'sanadNoDate', length: 10, default: () => "''" })
  sanadNoDate: string;

  @Column('int', { name: 'batchNo', default: () => '(0)' })
  batchNo: number;

  @Column('nvarchar', { name: 'batchNoDate', length: 10, default: () => "''" })
  batchNoDate: string;

  @Column('int', { name: 'sanadNoMonth', default: () => '(0)' })
  sanadNoMonth: number;

  @OneToMany(
    () => AccSanadDetailFloat,
    (accSanadDetailFloat) => accSanadDetailFloat.fkfSanad2,
  )
  accSanadDetailFloats: AccSanadDetailFloat[];

  @ManyToOne(
    () => AccSanadStatus,
    (accSanadStatus) => accSanadStatus.accSanadFloats,
  )
  @JoinColumn([
    { name: 'FkfSanadStatus', referencedColumnName: 'pkfSanadStatus' },
  ])
  fkfSanadStatus: AccSanadStatus;

  @ManyToOne(
    () => AccSanadTypes,
    (accSanadTypes) => accSanadTypes.accSanadFloats,
  )
  @JoinColumn([
    { name: 'FkfSanadTypes', referencedColumnName: 'pkfSanadTypes' },
  ])
  fkfSanadTypes: AccSanadTypes;

  @ManyToOne(() => GenEmployee, (genEmployee) => genEmployee.accSanadFloats)
  @JoinColumn([{ name: 'FkfCreateUser', referencedColumnName: 'pkfEmployee' }])
  fkfCreateUser: GenEmployee;

  @ManyToOne(() => GenEmployee, (genEmployee) => genEmployee.accSanadFloats2)
  @JoinColumn([{ name: 'FkfEditUser', referencedColumnName: 'pkfEmployee' }])
  fkfEditUser: GenEmployee;

  @ManyToOne(() => GenEmployee, (genEmployee) => genEmployee.accSanadFloats3)
  @JoinColumn([{ name: 'FkfAssignUser', referencedColumnName: 'pkfEmployee' }])
  fkfAssignUser: GenEmployee;

  @ManyToOne(() => GenEmployee, (genEmployee) => genEmployee.accSanadFloats4)
  @JoinColumn([{ name: 'FkfAuditUser', referencedColumnName: 'pkfEmployee' }])
  fkfAuditUser: GenEmployee;

  @ManyToOne(() => GenEmployee, (genEmployee) => genEmployee.accSanadFloats5)
  @JoinColumn([{ name: 'FkfFinalUser', referencedColumnName: 'pkfEmployee' }])
  fkfFinalUser: GenEmployee;

  @ManyToOne(() => AccSendFrom, (accSendFrom) => accSendFrom.accSanadFloats)
  @JoinColumn([{ name: 'FkfSendFrom', referencedColumnName: 'pkfSendFrom' }])
  fkfSendFrom: AccSendFrom;

  @OneToMany(() => CasGetPay, (casGetPay) => casGetPay.fkfSanad)
  casGetPays: CasGetPay[];

  @OneToMany(
    () => CasGetPayDeclaration,
    (casGetPayDeclaration) => casGetPayDeclaration.fkfSanad,
  )
  casGetPayDeclarations: CasGetPayDeclaration[];

  @OneToMany(() => SalContract, (salContract) => salContract.fkfSanad)
  salContracts: SalContract[];

  @RelationId((accSanadFloat: AccSanadFloat) => accSanadFloat.fkfSanadStatus)
  fkfSanadStatus2: number;

  @RelationId((accSanadFloat: AccSanadFloat) => accSanadFloat.fkfSanadTypes)
  fkfSanadTypes2: number;

  @RelationId((accSanadFloat: AccSanadFloat) => accSanadFloat.fkfCreateUser)
  fkfCreateUser2: number;

  @RelationId((accSanadFloat: AccSanadFloat) => accSanadFloat.fkfEditUser)
  fkfEditUser2: number | null;

  @RelationId((accSanadFloat: AccSanadFloat) => accSanadFloat.fkfAssignUser)
  fkfAssignUser2: number | null;

  @RelationId((accSanadFloat: AccSanadFloat) => accSanadFloat.fkfAuditUser)
  fkfAuditUser2: number | null;

  @RelationId((accSanadFloat: AccSanadFloat) => accSanadFloat.fkfFinalUser)
  fkfFinalUser2: number | null;

  @RelationId((accSanadFloat: AccSanadFloat) => accSanadFloat.fkfSendFrom)
  fkfSendFrom2: number;
}
