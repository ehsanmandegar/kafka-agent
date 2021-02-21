import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PayContractFactors } from './pay-contract-factors';

@Index('PK_payFactor', ['pkfFactor'], { unique: true })
@Entity('payFactor', { schema: 'dbo' })
export class PayFactor {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfFactor' })
  pkfFactor: number;

  @Column('nvarchar', {
    name: 'fld_FactorTitle',
    length: 100,
    default: () => "''",
  })
  fldFactorTitle: string;

  @Column('nvarchar', {
    name: 'fld_FactorDesc',
    nullable: true,
    length: 200,
    default: () => "''",
  })
  fldFactorDesc: string | null;

  @Column('int', { name: 'FkfFactorLevel' })
  fkfFactorLevel: number;

  @Column('int', { name: 'FkfFactorUseOption' })
  fkfFactorUseOption: number;

  @Column('int', { name: 'FkfFactorType' })
  fkfFactorType: number;

  @Column('nvarchar', {
    name: 'fld_Function',
    nullable: true,
    length: 500,
    default: () => "''",
  })
  fldFunction: string | null;

  @Column('nvarchar', {
    name: 'fld_FunctionDesc',
    nullable: true,
    length: 500,
    default: () => "''",
  })
  fldFunctionDesc: string | null;

  @Column('tinyint', {
    name: 'fk_FactorGroup',
    nullable: true,
    default: () => '(1)',
  })
  fkFactorGroup: number | null;

  @Column('tinyint', {
    name: 'fk_FactorSubGroup',
    nullable: true,
    default: () => '(1)',
  })
  fkFactorSubGroup: number | null;

  @Column('bit', { name: 'IsTaxAble', default: () => '(0)' })
  isTaxAble: boolean;

  @Column('bit', { name: 'IsInsurancAble', default: () => '(0)' })
  isInsurancAble: boolean;

  @Column('bit', { name: 'IsSystem', nullable: true, default: () => '(0)' })
  isSystem: boolean | null;

  @Column('int', { name: 'fkfCalcBase' })
  fkfCalcBase: number;

  @Column('bit', {
    name: 'IsExportAccSanad',
    nullable: true,
    default: () => '(1)',
  })
  isExportAccSanad: boolean | null;

  @Column('int', { name: 'FkfMoien' })
  fkfMoien: number;

  @Column('int', { name: 'FkfMoienPayment', nullable: true })
  fkfMoienPayment: number | null;

  @Column('smallint', { name: 'fld_Order', default: () => '(100)' })
  fldOrder: number;

  @Column('tinyint', {
    name: 'fk_ViewNofDecimal',
    nullable: true,
    default: () => '(0)',
  })
  fkViewNofDecimal: number | null;

  @Column('tinyint', {
    name: 'fk_StoreDataType',
    nullable: true,
    default: () => '(1)',
  })
  fkStoreDataType: number | null;

  @Column('tinyint', {
    name: 'fk_ViewDataType',
    nullable: true,
    default: () => '(1)',
  })
  fkViewDataType: number | null;

  @Column('bit', {
    name: 'fld_ShowInFish',
    nullable: true,
    default: () => '(1)',
  })
  fldShowInFish: boolean | null;

  @Column('smallint', {
    name: 'fld_ColWidth',
    nullable: true,
    default: () => '(100)',
  })
  fldColWidth: number | null;

  @Column('int', { name: 'accYear', default: () => '(1)' })
  accYear: number;

  @Column('bit', { name: 'IsActive' })
  isActive: boolean;

  @Column('int', { name: 'fld_FactorCode', nullable: true })
  fldFactorCode: number | null;

  @Column('bit', {
    name: 'fldInsert2Disk',
    nullable: true,
    default: () => '(0)',
  })
  fldInsert2Disk: boolean | null;

  @OneToMany(
    () => PayContractFactors,
    (payContractFactors) => payContractFactors.fkfFactor,
  )
  payContractFactors: PayContractFactors[];
}
