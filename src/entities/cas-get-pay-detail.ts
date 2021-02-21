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
import { CasGetPay } from './cas-get-pay';
import { GenTreater } from './gen-treater';
import { CasType } from './cas-type';
import { GenBank } from './gen-bank';
import { CasCheckState } from './cas-check-state';
import { GenEmployee } from './gen-employee';
import { CasCheckGet } from './cas-check-get';
import { AccMoein } from './acc-moein';
import { CasLogCheck } from './cas-log-check';
import { CasPayOff } from './cas-pay-off';

@Index('PK_casGetPayDetail', ['pkfGetPayDetail'], { unique: true })
@Entity('casGetPayDetail', { schema: 'dbo' })
export class CasGetPayDetail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfGetPayDetail' })
  pkfGetPayDetail: number;

  @Column('nvarchar', { name: 'serialNo', length: 50 })
  serialNo: string;

  @Column('nvarchar', { name: 'serialDate', length: 50 })
  serialDate: string;

  @Column('bigint', { name: 'price' })
  price: string;

  @Column('decimal', {
    name: 'priceCur',
    precision: 18,
    scale: 2,
    default: () => '0',
  })
  priceCur: number;

  @Column('nvarchar', { name: 'branchName', length: 50, default: () => "''" })
  branchName: string;

  @Column('nvarchar', {
    name: 'accountNumber',
    length: 100,
    default: () => "''",
  })
  accountNumber: string;

  @Column('nvarchar', { name: 'checkOwner', length: 100, default: () => "''" })
  checkOwner: string;

  @Column('int', { name: 'checkBookNo', nullable: true })
  checkBookNo: number | null;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('int', { name: 'FkfGetPayCheck', nullable: true })
  fkfGetPayCheck: number | null;

  @Column('nvarchar', { name: 'transferDate', length: 10, default: () => "''" })
  transferDate: string;

  @Column('nvarchar', {
    name: 'createTransferDate',
    length: 10,
    default: () => "''",
  })
  createTransferDate: string;

  @Column('int', { name: 'tempNoCheckToBank', nullable: true })
  tempNoCheckToBank: number | null;

  @Column('nvarchar', { name: 'achieveDate', length: 50, default: () => "''" })
  achieveDate: string;

  @Column('nvarchar', {
    name: 'createAchieveDate',
    length: 10,
    default: () => "''",
  })
  createAchieveDate: string;

  @Column('int', {
    name: 'tempNoAchieveToBank',
    nullable: true,
    default: () => "''",
  })
  tempNoAchieveToBank: number | null;

  @Column('bit', { name: 'openingChekToBank', default: () => '(0)' })
  openingChekToBank: boolean;

  @Column('bit', { name: 'payCheckCash', default: () => '(0)' })
  payCheckCash: boolean;

  @Column('int', { name: 'FkfLogCheck', nullable: true })
  fkfLogCheck: number | null;

  @Column('bigint', { name: 'priceCost', default: () => '(0)' })
  priceCost: string;

  @Column('bit', { name: 'isSendManagment', default: () => '(0)' })
  isSendManagment: boolean;

  @Column('bit', { name: 'isSendCustomer', default: () => '(0)' })
  isSendCustomer: boolean;

  @Column('nvarchar', {
    name: 'memoCheckAction',
    length: 252,
    default: () => "''",
  })
  memoCheckAction: string;

  @Column('int', { name: 'FkfTreaterCheckAction', nullable: true })
  fkfTreaterCheckAction: number | null;

  @Column('nvarchar', { name: 'rasDate', length: 10, default: () => "''" })
  rasDate: string;

  @Column('bit', { name: 'isCheckOwner', default: () => '(1)' })
  isCheckOwner: boolean;

  @ManyToOne(() => CasGetPay, (casGetPay) => casGetPay.casGetPayDetails, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'FkfGetPay', referencedColumnName: 'pkfGetPay' }])
  fkfGetPay: CasGetPay;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.casGetPayDetails)
  @JoinColumn([{ name: 'FkfTreater', referencedColumnName: 'pkfTreater' }])
  fkfTreater: GenTreater;

  @ManyToOne(() => CasType, (casType) => casType.casGetPayDetails)
  @JoinColumn([{ name: 'FkfType', referencedColumnName: 'pkfType' }])
  fkfType: CasType;

  @ManyToOne(() => GenBank, (genBank) => genBank.casGetPayDetails)
  @JoinColumn([{ name: 'FkfBank', referencedColumnName: 'pkfBank' }])
  fkfBank: GenBank;

  @ManyToOne(
    () => CasCheckState,
    (casCheckState) => casCheckState.casGetPayDetails,
  )
  @JoinColumn([
    { name: 'FkfCheckState', referencedColumnName: 'pkfCheckState' },
  ])
  fkfCheckState: CasCheckState;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.casGetPayDetails2)
  @JoinColumn([{ name: 'FkfCheckToBank', referencedColumnName: 'pkfTreater' }])
  fkfCheckToBank: GenTreater;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.casGetPayDetails3)
  @JoinColumn([{ name: 'FkfCheckToBank', referencedColumnName: 'pkfTreater' }])
  fkfCheckToBank2: GenTreater;

  @ManyToOne(() => GenEmployee, (genEmployee) => genEmployee.casGetPayDetails)
  @JoinColumn([
    { name: 'FkfTransferUser', referencedColumnName: 'pkfEmployee' },
  ])
  fkfTransferUser: GenEmployee;

  @ManyToOne(() => GenEmployee, (genEmployee) => genEmployee.casGetPayDetails2)
  @JoinColumn([{ name: 'FkfAchieveUser', referencedColumnName: 'pkfEmployee' }])
  fkfAchieveUser: GenEmployee;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.casGetPayDetails4)
  @JoinColumn([
    { name: 'FkfCheckToCoffer', referencedColumnName: 'pkfTreater' },
  ])
  fkfCheckToCoffer: GenTreater;

  @ManyToOne(() => CasCheckGet, (casCheckGet) => casCheckGet.casGetPayDetails)
  @JoinColumn([{ name: 'FKFCheckGet', referencedColumnName: 'pkfCheckGet' }])
  fkfCheckGet: CasCheckGet;

  @ManyToOne(() => AccMoein, (accMoein) => accMoein.casGetPayDetails)
  @JoinColumn([{ name: 'FkfTreaterMoein', referencedColumnName: 'pkfMoein' }])
  fkfTreaterMoein: AccMoein;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.casGetPayDetails5)
  @JoinColumn([
    { name: 'FkfTreaterTafzili5', referencedColumnName: 'pkfTreater' },
  ])
  fkfTreaterTafzili: GenTreater;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.casGetPayDetails6)
  @JoinColumn([
    { name: 'FkfTreaterTafzili6', referencedColumnName: 'pkfTreater' },
  ])
  fkfTreaterTafzili2: GenTreater;

  @OneToMany(() => CasLogCheck, (casLogCheck) => casLogCheck.fkfGetPayDetail)
  casLogChecks: CasLogCheck[];

  @OneToMany(() => CasPayOff, (casPayOff) => casPayOff.fkfGetPayDetail)
  casPayOffs: CasPayOff[];

  @RelationId((casGetPayDetail: CasGetPayDetail) => casGetPayDetail.fkfGetPay)
  fkfGetPay2: number;

  @RelationId((casGetPayDetail: CasGetPayDetail) => casGetPayDetail.fkfTreater)
  fkfTreater2: number;

  @RelationId((casGetPayDetail: CasGetPayDetail) => casGetPayDetail.fkfType)
  fkfType2: number;

  @RelationId((casGetPayDetail: CasGetPayDetail) => casGetPayDetail.fkfBank)
  fkfBank2: number | null;

  @RelationId(
    (casGetPayDetail: CasGetPayDetail) => casGetPayDetail.fkfCheckState,
  )
  fkfCheckState2: number | null;

  @RelationId(
    (casGetPayDetail: CasGetPayDetail) => casGetPayDetail.fkfCheckToBank,
  )
  fkfCheckToBank3: number | null;

  @RelationId(
    (casGetPayDetail: CasGetPayDetail) => casGetPayDetail.fkfCheckToBank2,
  )
  fkfCheckToBank4: number | null;

  @RelationId(
    (casGetPayDetail: CasGetPayDetail) => casGetPayDetail.fkfTransferUser,
  )
  fkfTransferUser2: number | null;

  @RelationId(
    (casGetPayDetail: CasGetPayDetail) => casGetPayDetail.fkfAchieveUser,
  )
  fkfAchieveUser2: number | null;

  @RelationId(
    (casGetPayDetail: CasGetPayDetail) => casGetPayDetail.fkfCheckToCoffer,
  )
  fkfCheckToCoffer2: number | null;

  @RelationId((casGetPayDetail: CasGetPayDetail) => casGetPayDetail.fkfCheckGet)
  fkfCheckGet2: number | null;

  @RelationId(
    (casGetPayDetail: CasGetPayDetail) => casGetPayDetail.fkfTreaterMoein,
  )
  fkfTreaterMoein2: number | null;

  @RelationId(
    (casGetPayDetail: CasGetPayDetail) => casGetPayDetail.fkfTreaterTafzili,
  )
  fkfTreaterTafzili3: number | null;

  @RelationId(
    (casGetPayDetail: CasGetPayDetail) => casGetPayDetail.fkfTreaterTafzili2,
  )
  fkfTreaterTafzili4: number | null;
}
