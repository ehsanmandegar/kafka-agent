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
import { CasGetPayType } from './cas-get-pay-type';
import { GenTreater } from './gen-treater';
import { GenCurrency } from './gen-currency';
import { CasConcern } from './cas-concern';
import { CasGetPayStatus } from './cas-get-pay-status';
import { GenEmployee } from './gen-employee';
import { AccSanadFloat } from './acc-sanad-float';
import { AccMoein } from './acc-moein';
import { CasGetPayDetail } from './cas-get-pay-detail';
import { CasPayOff } from './cas-pay-off';
import { CasPortion } from './cas-portion';

@Index('IX_casGetPay', ['serial', 'accYear', 'fkfGetPayType'], {})
@Index('IX_casGetPay_filtering', ['accYear', 'serial', 'fkfGetPayType'], {
  unique: true,
})
@Index('PK_casGetPay', ['pkfGetPay'], { unique: true })
@Entity('casGetPay', { schema: 'dbo' })
export class CasGetPay {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfGetPay' })
  pkfGetPay: number;

  @Column('int', { name: 'FkfGetPayType' })
  fkfGetPayType: number;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('varchar', { name: 'getpayDate', length: 10 })
  getpayDate: string;

  @Column('float', { name: 'feeCurrency', precision: 53, default: () => '(0)' })
  feeCurrency: number;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('int', { name: 'discount', default: () => '0' })
  discount: number;

  @Column('decimal', {
    name: 'discountCur',
    precision: 18,
    scale: 2,
    default: () => '0',
  })
  discountCur: number;

  @Column('varchar', { name: 'createDate', length: 10 })
  createDate: string;

  @Column('varchar', { name: 'editDate', length: 10, default: () => "''" })
  editDate: string;

  @Column('varchar', { name: 'finalDate', length: 10, default: () => "''" })
  finalDate: string;

  @Column('nvarchar', { name: 'getSerialNo', length: 25, default: () => "''" })
  getSerialNo: string;

  @Column('int', { name: 'sanadTempNo', nullable: true })
  sanadTempNo: number | null;

  @Column('nvarchar', {
    name: 'discountMemo',
    length: 255,
    default: () => "''",
  })
  discountMemo: string;

  @Column('int', { name: 'FKFTreaterOpening', nullable: true })
  fkfTreaterOpening: number | null;

  @Column('bigint', { name: 'besBrice', default: () => '0' })
  besBrice: string;

  @Column('nvarchar', { name: 'getter', length: 255, default: () => "''" })
  getter: string;

  @Column('nvarchar', { name: 'verifier', length: 255, default: () => "''" })
  verifier: string;

  @Column('int', { name: 'FkfDiscountType', nullable: true })
  fkfDiscountType: number | null;

  @Column('decimal', {
    name: 'profit',
    precision: 18,
    scale: 2,
    default: () => '0',
  })
  profit: number;

  @Column('nvarchar', { name: 'payOffDate', length: 10, default: () => "''" })
  payOffDate: string;

  @Column('int', { name: 'payOffDay', default: () => '0' })
  payOffDay: number;

  @Column('nvarchar', { name: 'besMemo', length: 255, default: () => "''" })
  besMemo: string;

  @Column('nvarchar', {
    name: 'getpayDatePrice',
    length: 10,
    default: () => "''",
  })
  getpayDatePrice: string;

  @Column('int', { name: 'payOffDayOld', default: () => '0' })
  payOffDayOld: number;

  @Column('decimal', {
    name: 'profitOld',
    nullable: true,
    precision: 18,
    scale: 2,
    default: () => '0',
  })
  profitOld: number | null;

  @Column('nvarchar', { name: 'facilities', length: 200, default: () => "''" })
  facilities: string;

  @Column('int', { name: 'FKFfacilities', nullable: true })
  fkFfacilities: number | null;

  @Column('bigint', { name: 'Wage', default: () => '0' })
  wage: string;

  @Column('bigint', { name: 'payOfffacilitiesPrice', default: () => '0' })
  payOfffacilitiesPrice: string;

  @Column('int', { name: 'FKFCarWash', nullable: true })
  fkfCarWash: number | null;

  @Column('int', { name: 'FKFProforma', nullable: true })
  fkfProforma: number | null;

  @Column('int', { name: 'FKFStoreHouseImport', nullable: true })
  fkfStoreHouseImport: number | null;

  @Column('bit', { name: 'sanad', default: () => '0' })
  sanad: boolean;

  @Column('bigint', { name: 'handyPrice', default: () => '0' })
  handyPrice: string;

  @Column('bigint', { name: 'forePrice', default: () => '0' })
  forePrice: string;

  @Column('bigint', { name: 'returnCheckPrice', default: () => '0' })
  returnCheckPrice: string;

  @Column('int', { name: 'FkfContract', nullable: true })
  fkfContract: number | null;

  @Column('int', { name: 'FkfMarkaz', nullable: true })
  fkfMarkaz: number | null;

  @Column('bigint', { name: 'discountTashim', default: () => '(0)' })
  discountTashim: string;

  @Column('int', { name: 'sanadTempNo2', nullable: true })
  sanadTempNo2: number | null;

  @Column('int', { name: 'FkfSanad2', nullable: true })
  fkfSanad2: number | null;

  @Column('nvarchar', { name: 'checkNoPay', length: 50, default: () => "''" })
  checkNoPay: string;

  @Column('nvarchar', { name: 'createTime', length: 5, default: () => "''" })
  createTime: string;

  @Column('bit', { name: 'creditlimit', default: () => '(0)' })
  creditlimit: boolean;

  @ManyToOne(() => CasGetPayType, (casGetPayType) => casGetPayType.casGetPays)
  @JoinColumn([
    { name: 'FkfGetPayType', referencedColumnName: 'pkfGetPayType' },
  ])
  fkfGetPayType2: CasGetPayType;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.casGetPays)
  @JoinColumn([{ name: 'FkfTreater', referencedColumnName: 'pkfTreater' }])
  fkfTreater: GenTreater;

  @ManyToOne(() => GenCurrency, (genCurrency) => genCurrency.casGetPays)
  @JoinColumn([{ name: 'FkfCurrency', referencedColumnName: 'pkfCurrency' }])
  fkfCurrency: GenCurrency;

  @ManyToOne(() => CasConcern, (casConcern) => casConcern.casGetPays)
  @JoinColumn([{ name: 'FkfConcern', referencedColumnName: 'pkfConcern' }])
  fkfConcern: CasConcern;

  @ManyToOne(
    () => CasGetPayStatus,
    (casGetPayStatus) => casGetPayStatus.casGetPays,
  )
  @JoinColumn([
    { name: 'FkfGetPayStatus', referencedColumnName: 'pkfGetPayStatus' },
  ])
  fkfGetPayStatus: CasGetPayStatus;

  @ManyToOne(() => GenEmployee, (genEmployee) => genEmployee.casGetPays)
  @JoinColumn([{ name: 'FkfCreateUser', referencedColumnName: 'pkfEmployee' }])
  fkfCreateUser: GenEmployee;

  @ManyToOne(() => GenEmployee, (genEmployee) => genEmployee.casGetPays2)
  @JoinColumn([{ name: 'FkfEditUser', referencedColumnName: 'pkfEmployee' }])
  fkfEditUser: GenEmployee;

  @ManyToOne(() => GenEmployee, (genEmployee) => genEmployee.casGetPays3)
  @JoinColumn([{ name: 'FkfFinalUser', referencedColumnName: 'pkfEmployee' }])
  fkfFinalUser: GenEmployee;

  @ManyToOne(() => AccSanadFloat, (accSanadFloat) => accSanadFloat.casGetPays)
  @JoinColumn([{ name: 'FkfSanad', referencedColumnName: 'pkfSanad' }])
  fkfSanad: AccSanadFloat;

  @ManyToOne(() => AccMoein, (accMoein) => accMoein.casGetPays)
  @JoinColumn([{ name: 'FkfTreaterMoein', referencedColumnName: 'pkfMoein' }])
  fkfTreaterMoein: AccMoein;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.casGetPays2)
  @JoinColumn([
    { name: 'FkfTreaterTafzili5', referencedColumnName: 'pkfTreater' },
  ])
  fkfTreaterTafzili: GenTreater;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.casGetPays3)
  @JoinColumn([
    { name: 'FkfTreaterTafzili6', referencedColumnName: 'pkfTreater' },
  ])
  fkfTreaterTafzili2: GenTreater;

  @OneToMany(
    () => CasGetPayDetail,
    (casGetPayDetail) => casGetPayDetail.fkfGetPay,
  )
  casGetPayDetails: CasGetPayDetail[];

  @OneToMany(() => CasPayOff, (casPayOff) => casPayOff.fkfGetPay)
  casPayOffs: CasPayOff[];

  @OneToMany(() => CasPayOff, (casPayOff) => casPayOff.fkfGetPayPay)
  casPayOffs2: CasPayOff[];

  @OneToMany(() => CasPortion, (casPortion) => casPortion.fkfGet)
  casPortions: CasPortion[];

  @RelationId((casGetPay: CasGetPay) => casGetPay.fkfGetPayType2)
  fkfGetPayType3: number;

  @RelationId((casGetPay: CasGetPay) => casGetPay.fkfTreater)
  fkfTreater2: number;

  @RelationId((casGetPay: CasGetPay) => casGetPay.fkfCurrency)
  fkfCurrency2: number | null;

  @RelationId((casGetPay: CasGetPay) => casGetPay.fkfConcern)
  fkfConcern2: number | null;

  @RelationId((casGetPay: CasGetPay) => casGetPay.fkfGetPayStatus)
  fkfGetPayStatus2: number;

  @RelationId((casGetPay: CasGetPay) => casGetPay.fkfCreateUser)
  fkfCreateUser2: number;

  @RelationId((casGetPay: CasGetPay) => casGetPay.fkfEditUser)
  fkfEditUser2: number | null;

  @RelationId((casGetPay: CasGetPay) => casGetPay.fkfFinalUser)
  fkfFinalUser2: number | null;

  @RelationId((casGetPay: CasGetPay) => casGetPay.fkfSanad)
  fkfSanad3: number | null;

  @RelationId((casGetPay: CasGetPay) => casGetPay.fkfTreaterMoein)
  fkfTreaterMoein2: number | null;

  @RelationId((casGetPay: CasGetPay) => casGetPay.fkfTreaterTafzili)
  fkfTreaterTafzili3: number | null;

  @RelationId((casGetPay: CasGetPay) => casGetPay.fkfTreaterTafzili2)
  fkfTreaterTafzili4: number | null;
}
