import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { AccMoein } from './acc-moein';

@Index('IX_casSetting', ['accYear'], { unique: true })
@Index('PK_casSetting', ['pkfSetting'], { unique: true })
@Entity('casSetting', { schema: 'dbo' })
export class CasSetting {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfSetting' })
  pkfSetting: number;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'FkfMoeinPay', nullable: true })
  fkfMoeinPay: number | null;

  @Column('int', { name: 'FkfDiscountGetG', nullable: true })
  fkfDiscountGetG: number | null;

  @Column('int', { name: 'FkfDiscountGetD', nullable: true })
  fkfDiscountGetD: number | null;

  @Column('int', { name: 'FkfDiscountPayG', nullable: true })
  fkfDiscountPayG: number | null;

  @Column('int', { name: 'FkfDiscountPayD', nullable: true })
  fkfDiscountPayD: number | null;

  @Column('bit', { name: 'typeSerialBook', default: () => '0' })
  typeSerialBook: boolean;

  @Column('int', { name: 'FkfCheckBook', nullable: true })
  fkfCheckBook: number | null;

  @Column('int', { name: 'FkfCheckBookOld', nullable: true })
  fkfCheckBookOld: number | null;

  @Column('int', { name: 'FkfMoeinCost', nullable: true })
  fkfMoeinCost: number | null;

  @Column('int', { name: 'FkfMoeinIncome', nullable: true })
  fkfMoeinIncome: number | null;

  @Column('int', { name: 'FkfMoeinMony', nullable: true })
  fkfMoeinMony: number | null;

  @Column('int', { name: 'FkfMoeinFund', nullable: true })
  fkfMoeinFund: number | null;

  @Column('int', { name: 'FkfMoeinSalary', nullable: true })
  fkfMoeinSalary: number | null;

  @Column('bit', { name: 'searchCurentTime', default: () => '0' })
  searchCurentTime: boolean;

  @Column('bit', { name: 'billNo', default: () => '0' })
  billNo: boolean;

  @Column('bit', { name: 'sumTotalPriceGetDef', default: () => '1' })
  sumTotalPriceGetDef: boolean;

  @Column('bit', { name: 'sumTotalPricePayDef', default: () => '1' })
  sumTotalPricePayDef: boolean;

  @Column('bit', { name: 'printTelAddressTreater', default: () => '0' })
  printTelAddressTreater: boolean;

  @Column('bit', { name: 'reminTreaterToDate', default: () => '1' })
  reminTreaterToDate: boolean;

  @Column('int', { name: 'FkfMoeinFixedAssets', nullable: true })
  fkfMoeinFixedAssets: number | null;

  @Column('int', { name: 'FkfMoeinDebt', nullable: true })
  fkfMoeinDebt: number | null;

  @Column('int', { name: 'FkfMoeinPartner', nullable: true })
  fkfMoeinPartner: number | null;

  @Column('int', { name: 'FkfDiscountGetGM', nullable: true })
  fkfDiscountGetGm: number | null;

  @Column('int', { name: 'FkfDiscountGetDM', nullable: true })
  fkfDiscountGetDm: number | null;

  @Column('int', { name: 'FkfDiscountPayGM', nullable: true })
  fkfDiscountPayGm: number | null;

  @Column('int', { name: 'FkfDiscountPayDM', nullable: true })
  fkfDiscountPayDm: number | null;

  @Column('int', { name: 'FkfEntezamiBeNafMoein', nullable: true })
  fkfEntezamiBeNafMoein: number | null;

  @Column('int', { name: 'FkfEntezamiBeOhdehMoein', nullable: true })
  fkfEntezamiBeOhdehMoein: number | null;

  @Column('int', { name: 'FkfEntezamiTreaterMoein', nullable: true })
  fkfEntezamiTreaterMoein: number | null;

  @Column('int', { name: 'FkfMoeinPrePaymentBenefitWageLoan', nullable: true })
  fkfMoeinPrePaymentBenefitWageLoan: number | null;

  @Column('int', { name: 'FkfMoeinCostBenefitWageFutureYears', nullable: true })
  fkfMoeinCostBenefitWageFutureYears: number | null;

  @Column('int', { name: 'FkfMoeinControlLoanPay', nullable: true })
  fkfMoeinControlLoanPay: number | null;

  @Column('int', { name: 'FkfMoeinCostLateLoan', nullable: true })
  fkfMoeinCostLateLoan: number | null;

  @Column('int', { name: 'FkfMoeinPayNoC', nullable: true })
  fkfMoeinPayNoC: number | null;

  @Column('int', { name: 'FkfMoeinReceiveNoC', nullable: true })
  fkfMoeinReceiveNoC: number | null;

  @Column('int', { name: 'alarmGetCheck', default: () => '(1)' })
  alarmGetCheck: number;

  @Column('int', { name: 'alarmPayCheck', default: () => '(1)' })
  alarmPayCheck: number;

  @Column('int', { name: 'treaterBankToBank', nullable: true })
  treaterBankToBank: number | null;

  @Column('int', { name: 'treaterBankToBankM', nullable: true })
  treaterBankToBankM: number | null;

  @Column('int', { name: 'FkfMoeinTreaterReturnCheck', nullable: true })
  fkfMoeinTreaterReturnCheck: number | null;

  @Column('int', { name: 'FkfMoeinTreaterSuppliers', nullable: true })
  fkfMoeinTreaterSuppliers: number | null;

  @Column('int', { name: 'FkfMoeinTreaterCommercialCustomers', nullable: true })
  fkfMoeinTreaterCommercialCustomers: number | null;

  @Column('bit', { name: 'reportCashingPriceBank', default: () => '(1)' })
  reportCashingPriceBank: boolean;

  @Column('bit', { name: 'reportCashingPriceCash', default: () => '(1)' })
  reportCashingPriceCash: boolean;

  @Column('bit', { name: 'reportCashingCashKelerPrice', default: () => '(1)' })
  reportCashingCashKelerPrice: boolean;

  @Column('bit', {
    name: 'reportCashingCashCheckBookPrice',
    default: () => '(1)',
  })
  reportCashingCashCheckBookPrice: boolean;

  @Column('bit', {
    name: 'reportCashingCashTreaterPriceSale',
    default: () => '(1)',
  })
  reportCashingCashTreaterPriceSale: boolean;

  @Column('bit', {
    name: 'reportCashingCashTreaterPriceBuy',
    default: () => '(1)',
  })
  reportCashingCashTreaterPriceBuy: boolean;

  @Column('bit', {
    name: 'reportCashingCashCkeckPayPrice',
    default: () => '(1)',
  })
  reportCashingCashCkeckPayPrice: boolean;

  @Column('int', { name: 'FkfMoeinTashim', nullable: true })
  fkfMoeinTashim: number | null;

  @Column('bit', { name: 'reportMoeinSummery', default: () => '(0)' })
  reportMoeinSummery: boolean;

  @Column('int', { name: 'bankFees', nullable: true })
  bankFees: number | null;

  @Column('int', { name: 'bankFeesM', nullable: true })
  bankFeesM: number | null;

  @Column('bit', { name: 'serialGetAuto', default: () => '(1)' })
  serialGetAuto: boolean;

  @Column('bit', { name: 'serialPayAuto', default: () => '(1)' })
  serialPayAuto: boolean;

  @Column('bit', { name: 'serialBanktoBankAuto', default: () => '(1)' })
  serialBanktoBankAuto: boolean;

  @Column('bit', { name: 'portionBuyImport', default: () => '(0)' })
  portionBuyImport: boolean;

  @Column('bit', { name: 'typePayCheckTafzili', default: () => '(1)' })
  typePayCheckTafzili: boolean;

  @Column('int', { name: 'FkfMoeinFundInWay', nullable: true })
  fkfMoeinFundInWay: number | null;

  @Column('bit', { name: 'getPayLockAfterTashim', default: () => '(1)' })
  getPayLockAfterTashim: boolean;

  @Column('int', { name: 'alarmLoan', default: () => '(1)' })
  alarmLoan: number;

  @ManyToOne(() => AccMoein, (accMoein) => accMoein.casSettings)
  @JoinColumn([{ name: 'FkfMoeinTreater', referencedColumnName: 'pkfMoein' }])
  fkfMoeinTreater: AccMoein;

  @ManyToOne(() => AccMoein, (accMoein) => accMoein.casSettings2)
  @JoinColumn([{ name: 'FkfMoeinBank', referencedColumnName: 'pkfMoein' }])
  fkfMoeinBank: AccMoein;

  @ManyToOne(() => AccMoein, (accMoein) => accMoein.casSettings3)
  @JoinColumn([{ name: 'FkfMoeinCash', referencedColumnName: 'pkfMoein' }])
  fkfMoeinCash: AccMoein;

  @ManyToOne(() => AccMoein, (accMoein) => accMoein.casSettings4)
  @JoinColumn([
    { name: 'FkfMoeinDuringAchievable', referencedColumnName: 'pkfMoein' },
  ])
  fkfMoeinDuringAchievable: AccMoein;

  @ManyToOne(() => AccMoein, (accMoein) => accMoein.casSettings5)
  @JoinColumn([{ name: 'FkfMoeinReceive', referencedColumnName: 'pkfMoein' }])
  fkfMoeinReceive: AccMoein;

  @RelationId((casSetting: CasSetting) => casSetting.fkfMoeinTreater)
  fkfMoeinTreater2: number | null;

  @RelationId((casSetting: CasSetting) => casSetting.fkfMoeinBank)
  fkfMoeinBank2: number | null;

  @RelationId((casSetting: CasSetting) => casSetting.fkfMoeinCash)
  fkfMoeinCash2: number | null;

  @RelationId((casSetting: CasSetting) => casSetting.fkfMoeinDuringAchievable)
  fkfMoeinDuringAchievable2: number | null;

  @RelationId((casSetting: CasSetting) => casSetting.fkfMoeinReceive)
  fkfMoeinReceive2: number | null;
}
