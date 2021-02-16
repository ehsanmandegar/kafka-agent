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
import { AccAccountType } from './acc-account-type';
import { AccAccountNatural } from './acc-account-natural';
import { AccKol } from './acc-kol';
import { AccMoeinCategory } from './acc-moein-category';
import { AccSanadDetailFloat } from './acc-sanad-detail-float';
import { CasGetPay } from './cas-get-pay';
import { CasGetPayDeclarationDetail } from './cas-get-pay-declaration-detail';
import { CasGetPayDetail } from './cas-get-pay-detail';
import { CasSetting } from './cas-setting';
import { SalContract } from './sal-contract';
import { SalContractOtherDetail } from './sal-contract-other-detail';
import { SalSetting } from './sal-setting';
import { SalStoreType } from './sal-store-type';

@Index('IX_accMoein', ['moeinCode', 'accYear', 'fkfKol'], { unique: true })
@Index('IX_accMoein_1', ['fkfKol'], {})
@Index('IX_accMoein_2', ['moeinName', 'fkfKol', 'accYear'], { unique: true })
@Index('PK_accMoein', ['pkfMoein'], { unique: true })
@Entity('accMoein', { schema: 'dbo' })
export class AccMoein {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfMoein' })
  pkfMoein: number;

  @Column('nvarchar', { name: 'moeinCode', length: 8 })
  moeinCode: string;

  @Column('nvarchar', { name: 'moeinName', length: 200 })
  moeinName: string;

  @Column('nvarchar', { name: 'moeinDescription', nullable: true, length: 255 })
  moeinDescription: string | null;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'FkfKol' })
  fkfKol: number;

  @Column('int', { name: 'oldPkf', nullable: true })
  oldPkf: number | null;

  @Column('bit', { name: 'isControl', default: () => '(0)' })
  isControl: boolean;

  @Column('bit', { name: 'isCurrency', default: () => '(0)' })
  isCurrency: boolean;

  @Column('bit', { name: 'isExchange', default: () => '(0)' })
  isExchange: boolean;

  @ManyToOne(() => AccAccountType, (accAccountType) => accAccountType.accMoeins)
  @JoinColumn([
    { name: 'FkfAccountType', referencedColumnName: 'pkfAccountType' },
  ])
  fkfAccountType: AccAccountType;

  @ManyToOne(
    () => AccAccountNatural,
    (accAccountNatural) => accAccountNatural.accMoeins,
  )
  @JoinColumn([
    { name: 'FkfAccountNatural', referencedColumnName: 'pkfaccAccountNatural' },
  ])
  fkfAccountNatural: AccAccountNatural;

  @ManyToOne(() => AccKol, (accKol) => accKol.accMoeins)
  @JoinColumn([{ name: 'FkfKol', referencedColumnName: 'pkfKol' }])
  fkfKol2: AccKol;

  @OneToMany(
    () => AccMoeinCategory,
    (accMoeinCategory) => accMoeinCategory.fkfMoein2,
  )
  accMoeinCategories: AccMoeinCategory[];

  @OneToMany(
    () => AccSanadDetailFloat,
    (accSanadDetailFloat) => accSanadDetailFloat.fkfMoein2,
  )
  accSanadDetailFloats: AccSanadDetailFloat[];

  @OneToMany(() => CasGetPay, (casGetPay) => casGetPay.fkfTreaterMoein)
  casGetPays: CasGetPay[];

  @OneToMany(
    () => CasGetPayDeclarationDetail,
    (casGetPayDeclarationDetail) => casGetPayDeclarationDetail.fkfTreaterMoein,
  )
  casGetPayDeclarationDetails: CasGetPayDeclarationDetail[];

  @OneToMany(
    () => CasGetPayDeclarationDetail,
    (casGetPayDeclarationDetail) => casGetPayDeclarationDetail.fkfTreaterMoein2,
  )
  casGetPayDeclarationDetails2: CasGetPayDeclarationDetail[];

  @OneToMany(
    () => CasGetPayDetail,
    (casGetPayDetail) => casGetPayDetail.fkfTreaterMoein,
  )
  casGetPayDetails: CasGetPayDetail[];

  @OneToMany(() => CasSetting, (casSetting) => casSetting.fkfMoeinTreater)
  casSettings: CasSetting[];

  @OneToMany(() => CasSetting, (casSetting) => casSetting.fkfMoeinBank)
  casSettings2: CasSetting[];

  @OneToMany(() => CasSetting, (casSetting) => casSetting.fkfMoeinCash)
  casSettings3: CasSetting[];

  @OneToMany(
    () => CasSetting,
    (casSetting) => casSetting.fkfMoeinDuringAchievable,
  )
  casSettings4: CasSetting[];

  @OneToMany(() => CasSetting, (casSetting) => casSetting.fkfMoeinReceive)
  casSettings5: CasSetting[];

  @OneToMany(() => SalContract, (salContract) => salContract.fkfMoeinCost)
  salContracts: SalContract[];

  @OneToMany(() => SalContract, (salContract) => salContract.fkfMoeinIncome)
  salContracts2: SalContract[];

  @OneToMany(() => SalContract, (salContract) => salContract.fkfTreaterMoein)
  salContracts3: SalContract[];

  @OneToMany(() => SalContract, (salContract) => salContract.fkfTreaterMoeinBed)
  salContracts4: SalContract[];

  @OneToMany(
    () => SalContractOtherDetail,
    (salContractOtherDetail) => salContractOtherDetail.fkfTreaterBedMoein,
  )
  salContractOtherDetails: SalContractOtherDetail[];

  @OneToMany(
    () => SalContractOtherDetail,
    (salContractOtherDetail) => salContractOtherDetail.fkfTreaterBedMoein2,
  )
  salContractOtherDetails2: SalContractOtherDetail[];

  @OneToMany(
    () => SalContractOtherDetail,
    (salContractOtherDetail) => salContractOtherDetail.fkfTreaterBesMoein,
  )
  salContractOtherDetails3: SalContractOtherDetail[];

  @OneToMany(
    () => SalSetting,
    (salSetting) => salSetting.fkfTreaterDiscountSale,
  )
  salSettings: SalSetting[];

  @OneToMany(
    () => SalSetting,
    (salSetting) => salSetting.fkfMoeinBailContractIncome,
  )
  salSettings2: SalSetting[];

  @OneToMany(() => SalStoreType, (salStoreType) => salStoreType.fkfPriceStock)
  salStoreTypes: SalStoreType[];

  @OneToMany(() => SalStoreType, (salStoreType) => salStoreType.fkfPrimeCost)
  salStoreTypes2: SalStoreType[];

  @OneToMany(() => SalStoreType, (salStoreType) => salStoreType.fkfSale)
  salStoreTypes3: SalStoreType[];

  @RelationId((accMoein: AccMoein) => accMoein.fkfAccountType)
  fkfAccountType2: number;

  @RelationId((accMoein: AccMoein) => accMoein.fkfAccountNatural)
  fkfAccountNatural2: number;

  @RelationId((accMoein: AccMoein) => accMoein.fkfKol2)
  fkfKol3: number;
}
