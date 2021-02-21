import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { BasWeight } from './bas-weight';
import { CasBankConflict } from './cas-bank-conflict';
import { CasCheckBatch } from './cas-check-batch';
import { CasGetPay } from './cas-get-pay';
import { CasGetPayDeclarationDetail } from './cas-get-pay-declaration-detail';
import { CasGetPayDetail } from './cas-get-pay-detail';
import { CasLogCheck } from './cas-log-check';
import { CasPayOrder } from './cas-pay-order';
import { CrmCallerId } from './crm-caller-id';
import { CrmTask } from './crm-task';
import { GenBankAccount } from './gen-bank-account';
import { GenTitle } from './gen-title';
import { AccCategoryTafzili } from './acc-category-tafzili';
import { GenCategory } from './gen-category';
import { GenBank } from './gen-bank';
import { CasAccountType } from './cas-account-type';
import { GenTreaterTypeAccounting } from './gen-treater-type-accounting';
import { GenTreaterDocument } from './gen-treater-document';
import { GenTreaterPartnerFullInfo } from './gen-treater-partner-full-info';
import { PayEmployee } from './pay-employee';
import { PayLoan } from './pay-loan';
import { PmActivityRecord } from './pm-activity-record';
import { PmProposal } from './pm-proposal';
import { PmRequestRepairs } from './pm-request-repairs';
import { PmTimeWork } from './pm-time-work';
import { PmTimeWorkReport } from './pm-time-work-report';
import { ProProduce } from './pro-produce';
import { SalBuyContract } from './sal-buy-contract';
import { SalContract } from './sal-contract';
import { SalContractCost } from './sal-contract-cost';
import { SalContractCostDetail } from './sal-contract-cost-detail';
import { SalContractCostForGoodsGet } from './sal-contract-cost-for-goods-get';
import { SalContractDetail } from './sal-contract-detail';
import { SalContractOpen } from './sal-contract-open';
import { SalContractOtherDetail } from './sal-contract-other-detail';
import { SalCutRequestDetail } from './sal-cut-request-detail';
import { SalFactor } from './sal-factor';
import { SalFactorTrust } from './sal-factor-trust';
import { SalInventoryCycle } from './sal-inventory-cycle';
import { SalOrder } from './sal-order';
import { SalPartnerContract } from './sal-partner-contract';
import { SalPartnerContractDetail } from './sal-partner-contract-detail';
import { SalProforma } from './sal-proforma';
import { SalRequestGoods } from './sal-request-goods';
import { SalService } from './sal-service';
import { SalServiceDetail } from './sal-service-detail';
import { SalServiceFactor } from './sal-service-factor';
import { SalServiceType } from './sal-service-type';
import { SalStoreHouse } from './sal-store-house';
import { SalTag } from './sal-tag';
import { SalTransferCostDetail } from './sal-transfer-cost-detail';
import { SalTransferTrust } from './sal-transfer-trust';
import { SalTrust } from './sal-trust';
import { SalTrustFactorDetail } from './sal-trust-factor-detail';
import { SalUnderOverLoadTrust } from './sal-under-over-load-trust';

@Index('IX_genTreater', ['treaterCode', 'accYear', 'fkfTreaterType'], {
  unique: true,
})
@Index(
  'IX_genTreater_1',
  [
    'name',
    'famile',
    'aliasName',
    'fkfBank',
    'accountNumber',
    'fkfTreaterType',
    'accYear',
  ],
  {},
)
@Index('IX_genTreater_2', ['fkfMarkaz'], {})
@Index('PK_genTreater', ['pkfTreater'], { unique: true })
@Entity('genTreater', { schema: 'dbo' })
export class GenTreater {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfTreater' })
  pkfTreater: number;

  @Column('int', { name: 'FkfTreaterType' })
  fkfTreaterType: number;

  @Column('nvarchar', { name: 'treaterCode', length: 50 })
  treaterCode: string;

  @Column('bit', { name: 'active', default: () => '(1)' })
  active: boolean;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'FkfAccessType' })
  fkfAccessType: number;

  @Column('int', { name: 'type', default: () => '(1)' })
  type: number;

  @Column('nvarchar', { name: 'name', length: 100, default: () => "''" })
  name: string;

  @Column('nvarchar', { name: 'famile', length: 400, default: () => "''" })
  famile: string;

  @Column('nvarchar', { name: 'company', length: 100, default: () => "''" })
  company: string;

  @Column('nvarchar', { name: 'address', length: 255, default: () => "''" })
  address: string;

  @Column('nvarchar', { name: 'tel', length: 60, default: () => "''" })
  tel: string;

  @Column('nvarchar', { name: 'mobile', length: 60, default: () => "''" })
  mobile: string;

  @Column('nvarchar', { name: 'fax', length: 60, default: () => "''" })
  fax: string;

  @Column('nvarchar', { name: 'mail', length: 70, default: () => "''" })
  mail: string;

  @Column('nvarchar', { name: 'url', length: 150, default: () => "''" })
  url: string;

  @Column('nvarchar', { name: 'manager', length: 100, default: () => "''" })
  manager: string;

  @Column('bigint', { name: 'credit', default: () => '(0)' })
  credit: string;

  @Column('nvarchar', { name: 'reagent', length: 100, default: () => "''" })
  reagent: string;

  @Column('int', { name: 'FkfMoein', nullable: true })
  fkfMoein: number | null;

  @Column('int', { name: 'FkfBank', nullable: true })
  fkfBank: number | null;

  @Column('nvarchar', {
    name: 'accountNumber',
    length: 50,
    default: () => "''",
  })
  accountNumber: string;

  @Column('int', { name: 'branchCode', nullable: true })
  branchCode: number | null;

  @Column('nvarchar', { name: 'branchName', length: 150, default: () => "''" })
  branchName: string;

  @Column('nvarchar', {
    name: 'accountOwner',
    length: 100,
    default: () => "''",
  })
  accountOwner: string;

  @Column('int', { name: 'firstNo', nullable: true })
  firstNo: number | null;

  @Column('int', { name: 'endNo', nullable: true })
  endNo: number | null;

  @Column('bigint', { name: 'bedPrice', default: () => '(0)' })
  bedPrice: string;

  @Column('bigint', { name: 'besPrice', default: () => '(0)' })
  besPrice: string;

  @Column('int', { name: 'FkfCurrency', nullable: true })
  fkfCurrency: number | null;

  @Column('decimal', {
    name: 'bedPriceCur',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  bedPriceCur: number;

  @Column('decimal', {
    name: 'besPriceCur',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  besPriceCur: number;

  @Column('int', { name: 'feeCur', default: () => '(0)' })
  feeCur: number;

  @Column('nvarchar', { name: 'passWeb', length: 50, default: () => "''" })
  passWeb: string;

  @Column('nvarchar', {
    name: 'dirtyDate',
    length: 50,
    default: () => "'1387/01/01'",
  })
  dirtyDate: string;

  @Column('int', { name: 'oldPkf', nullable: true })
  oldPkf: number | null;

  @Column('nvarchar', { name: 'mainOrderNO', length: 50, default: () => "''" })
  mainOrderNo: string;

  @Column('nvarchar', {
    name: 'economicCode',
    length: 100,
    default: () => "''",
  })
  economicCode: string;

  @Column('nvarchar', { name: 'zipCode', length: 100, default: () => "''" })
  zipCode: string;

  @Column('nvarchar', { name: 'regNumber', length: 50, default: () => "''" })
  regNumber: string;

  @Column('int', { name: 'FkfMarkaz', nullable: true })
  fkfMarkaz: number | null;

  @Column('int', { name: 'FKFKindTafzili', nullable: true })
  fkfKindTafzili: number | null;

  @Column('int', { name: 'FkfCity', nullable: true })
  fkfCity: number | null;

  @Column('nvarchar', {
    name: 'defultPrintCheck',
    length: 255,
    default: () => "''",
  })
  defultPrintCheck: string;

  @Column('bigint', { name: 'yearlimeted', default: () => '(0)' })
  yearlimeted: string;

  @Column('nvarchar', {
    name: 'yearlimetedDate',
    length: 10,
    default: () => "''",
  })
  yearlimetedDate: string;

  @Column('int', { name: 'FKFCurrencyDef', nullable: true })
  fkfCurrencyDef: number | null;

  @Column('bit', { name: 'isCurrency', default: () => '(0)' })
  isCurrency: boolean;

  @Column('int', { name: 'FkfProjectType', nullable: true })
  fkfProjectType: number | null;

  @Column('nvarchar', { name: 'cardNumber', length: 50, default: () => "''" })
  cardNumber: string;

  @Column('bigint', { name: 'yearlimetedWarranty', default: () => '(0)' })
  yearlimetedWarranty: string;

  @Column('nvarchar', {
    name: 'yearlimetedDateWarranty',
    length: 10,
    default: () => "''",
  })
  yearlimetedDateWarranty: string;

  @Column('nvarchar', { name: 'aliasName', length: 100, default: () => "''" })
  aliasName: string;

  @Column('bigint', { name: 'creditreturnCheque', default: () => '(0)' })
  creditreturnCheque: string;

  @Column('int', { name: 'roleId', default: () => '(0)' })
  roleId: number;

  @Column('bit', { name: 'pm', default: () => '(0)' })
  pm: boolean;

  @Column('nvarchar', {
    name: 'taxValidityDate',
    length: 10,
    default: () => "''",
  })
  taxValidityDate: string;

  @Column('bigint', { name: 'yearlimetedLC', default: () => '(0)' })
  yearlimetedLc: string;

  @Column('nvarchar', {
    name: 'yearlimetedDateLC',
    length: 10,
    default: () => "''",
  })
  yearlimetedDateLc: string;

  @Column('int', { name: 'FKFBankCredit', nullable: true })
  fkfBankCredit: number | null;

  @Column('bigint', { name: 'yearlimetedLCVisual', default: () => '(0)' })
  yearlimetedLcVisual: string;

  @Column('nvarchar', {
    name: 'yearlimetedDateLCVisual',
    length: 10,
    default: () => "''",
  })
  yearlimetedDateLcVisual: string;

  @Column('int', { name: 'FkfCreditType', nullable: true })
  fkfCreditType: number | null;

  @Column('bigint', { name: 'yearlimetedOld', default: () => '(0)' })
  yearlimetedOld: string;

  @Column('bigint', { name: 'yearlimetedLCOld', default: () => '(0)' })
  yearlimetedLcOld: string;

  @Column('bigint', { name: 'yearlimetedWarrantyOld', default: () => '(0)' })
  yearlimetedWarrantyOld: string;

  @Column('bigint', { name: 'yearlimetedLCVisualOld', default: () => '(0)' })
  yearlimetedLcVisualOld: string;

  @Column('nvarchar', { name: 'nameEN', length: 100, default: () => "''" })
  nameEn: string;

  @Column('nvarchar', { name: 'famileEN', length: 100, default: () => "''" })
  famileEn: string;

  @Column('nvarchar', { name: 'aliasNameEN', length: 100, default: () => "''" })
  aliasNameEn: string;

  @Column('nvarchar', {
    name: 'identityCode',
    length: 100,
    default: () => "''",
  })
  identityCode: string;

  @Column('int', { name: 'FkfPart', nullable: true })
  fkfPart: number | null;

  @Column('nvarchar', { name: 'teibaCode', length: 50, default: () => "''" })
  teibaCode: string;

  @Column('nvarchar', {
    name: 'registrationNo',
    length: 50,
    default: () => "''",
  })
  registrationNo: string;

  @OneToMany(() => BasWeight, (basWeight) => basWeight.fkfProject2)
  basWeights: BasWeight[];

  @OneToMany(
    () => CasBankConflict,
    (casBankConflict) => casBankConflict.fkfBank2,
  )
  casBankConflicts: CasBankConflict[];

  @OneToMany(() => CasCheckBatch, (casCheckBatch) => casCheckBatch.fkfTreater)
  casCheckBatches: CasCheckBatch[];

  @OneToMany(() => CasGetPay, (casGetPay) => casGetPay.fkfTreater)
  casGetPays: CasGetPay[];

  @OneToMany(() => CasGetPay, (casGetPay) => casGetPay.fkfTreaterTafzili)
  casGetPays2: CasGetPay[];

  @OneToMany(() => CasGetPay, (casGetPay) => casGetPay.fkfTreaterTafzili2)
  casGetPays3: CasGetPay[];

  @OneToMany(
    () => CasGetPayDeclarationDetail,
    (casGetPayDeclarationDetail) => casGetPayDeclarationDetail.fkfTreater,
  )
  casGetPayDeclarationDetails: CasGetPayDeclarationDetail[];

  @OneToMany(
    () => CasGetPayDeclarationDetail,
    (casGetPayDeclarationDetail) => casGetPayDeclarationDetail.fkfTreater2,
  )
  casGetPayDeclarationDetails2: CasGetPayDeclarationDetail[];

  @OneToMany(
    () => CasGetPayDeclarationDetail,
    (casGetPayDeclarationDetail) =>
      casGetPayDeclarationDetail.fkfTreaterTafzili,
  )
  casGetPayDeclarationDetails3: CasGetPayDeclarationDetail[];

  @OneToMany(
    () => CasGetPayDeclarationDetail,
    (casGetPayDeclarationDetail) =>
      casGetPayDeclarationDetail.fkfTreaterTafzili2,
  )
  casGetPayDeclarationDetails4: CasGetPayDeclarationDetail[];

  @OneToMany(
    () => CasGetPayDeclarationDetail,
    (casGetPayDeclarationDetail) =>
      casGetPayDeclarationDetail.fkfTreaterTafzili3,
  )
  casGetPayDeclarationDetails5: CasGetPayDeclarationDetail[];

  @OneToMany(
    () => CasGetPayDeclarationDetail,
    (casGetPayDeclarationDetail) =>
      casGetPayDeclarationDetail.fkfTreaterTafzili4,
  )
  casGetPayDeclarationDetails6: CasGetPayDeclarationDetail[];

  @OneToMany(
    () => CasGetPayDetail,
    (casGetPayDetail) => casGetPayDetail.fkfTreater,
  )
  casGetPayDetails: CasGetPayDetail[];

  @OneToMany(
    () => CasGetPayDetail,
    (casGetPayDetail) => casGetPayDetail.fkfCheckToBank,
  )
  casGetPayDetails2: CasGetPayDetail[];

  @OneToMany(
    () => CasGetPayDetail,
    (casGetPayDetail) => casGetPayDetail.fkfCheckToBank2,
  )
  casGetPayDetails3: CasGetPayDetail[];

  @OneToMany(
    () => CasGetPayDetail,
    (casGetPayDetail) => casGetPayDetail.fkfCheckToCoffer,
  )
  casGetPayDetails4: CasGetPayDetail[];

  @OneToMany(
    () => CasGetPayDetail,
    (casGetPayDetail) => casGetPayDetail.fkfTreaterTafzili,
  )
  casGetPayDetails5: CasGetPayDetail[];

  @OneToMany(
    () => CasGetPayDetail,
    (casGetPayDetail) => casGetPayDetail.fkfTreaterTafzili2,
  )
  casGetPayDetails6: CasGetPayDetail[];

  @OneToMany(() => CasLogCheck, (casLogCheck) => casLogCheck.fkfCheckToTreater)
  casLogChecks: CasLogCheck[];

  @OneToMany(() => CasPayOrder, (casPayOrder) => casPayOrder.fkfTreater2)
  casPayOrders: CasPayOrder[];

  @OneToMany(() => CrmCallerId, (crmCallerId) => crmCallerId.fkfTreater)
  crmCallers: CrmCallerId[];

  @OneToMany(() => CrmTask, (crmTask) => crmTask.fkfTreater)
  crmTasks: CrmTask[];

  @OneToMany(
    () => GenBankAccount,
    (genBankAccount) => genBankAccount.fkfTreater,
  )
  genBankAccounts: GenBankAccount[];

  @ManyToOne(() => GenTitle, (genTitle) => genTitle.genTreaters)
  @JoinColumn([{ name: 'FkfTitle', referencedColumnName: 'pkfTitle' }])
  fkfTitle: GenTitle;

  @ManyToOne(
    () => AccCategoryTafzili,
    (accCategoryTafzili) => accCategoryTafzili.genTreaters,
  )
  @JoinColumn([
    { name: 'FkfTafzili', referencedColumnName: 'pkfCategoryTafzili' },
  ])
  fkfTafzili: AccCategoryTafzili;

  @ManyToOne(() => GenCategory, (genCategory) => genCategory.genTreaters)
  @JoinColumn([{ name: 'FkfCategory', referencedColumnName: 'pkfCategory' }])
  fkfCategory: GenCategory;

  @ManyToOne(() => GenBank, (genBank) => genBank.genTreaters)
  @JoinColumn([{ name: 'FkfBank', referencedColumnName: 'pkfBank' }])
  fkfBank2: GenBank;

  @ManyToOne(
    () => CasAccountType,
    (casAccountType) => casAccountType.genTreaters,
  )
  @JoinColumn([
    { name: 'FkfAccountType', referencedColumnName: 'pkfAccountType' },
  ])
  fkfAccountType: CasAccountType;

  @ManyToOne(
    () => GenTreaterTypeAccounting,
    (genTreaterTypeAccounting) => genTreaterTypeAccounting.genTreaters,
  )
  @JoinColumn([
    {
      name: 'FKFTreaterTypeAccounting',
      referencedColumnName: 'pkfTreaterTypeAccounting',
    },
  ])
  fkfTreaterTypeAccounting: GenTreaterTypeAccounting;

  @OneToMany(
    () => GenTreaterDocument,
    (genTreaterDocument) => genTreaterDocument.fkfTreater,
  )
  genTreaterDocuments: GenTreaterDocument[];

  @OneToMany(
    () => GenTreaterPartnerFullInfo,
    (genTreaterPartnerFullInfo) => genTreaterPartnerFullInfo.fkfTreaterPartner,
  )
  genTreaterPartnerFullInfos: GenTreaterPartnerFullInfo[];

  @OneToMany(() => PayEmployee, (payEmployee) => payEmployee.fkfTreater)
  payEmployees: PayEmployee[];

  @OneToMany(() => PayLoan, (payLoan) => payLoan.fkfEmployee)
  payLoans: PayLoan[];

  @OneToMany(
    () => PmActivityRecord,
    (pmActivityRecord) => pmActivityRecord.fkfEmployee,
  )
  pmActivityRecords: PmActivityRecord[];

  @OneToMany(() => PmProposal, (pmProposal) => pmProposal.fkfEmployee)
  pmProposals: PmProposal[];

  @OneToMany(
    () => PmRequestRepairs,
    (pmRequestRepairs) => pmRequestRepairs.fkfRequested,
  )
  pmRequestRepairs: PmRequestRepairs[];

  @OneToMany(
    () => PmRequestRepairs,
    (pmRequestRepairs) => pmRequestRepairs.fkfFunctor,
  )
  pmRequestRepairs2: PmRequestRepairs[];

  @OneToMany(
    () => PmRequestRepairs,
    (pmRequestRepairs) => pmRequestRepairs.fkfLeader,
  )
  pmRequestRepairs3: PmRequestRepairs[];

  @OneToMany(() => PmTimeWork, (pmTimeWork) => pmTimeWork.fkfWorkTreater)
  pmTimeWorks: PmTimeWork[];

  @OneToMany(
    () => PmTimeWorkReport,
    (pmTimeWorkReport) => pmTimeWorkReport.fkfReporter,
  )
  pmTimeWorkReports: PmTimeWorkReport[];

  @OneToMany(() => ProProduce, (proProduce) => proProduce.fkfProject)
  proProduces: ProProduce[];

  @OneToMany(() => ProProduce, (proProduce) => proProduce.fkfHeadShift)
  proProduces2: ProProduce[];

  @OneToMany(() => ProProduce, (proProduce) => proProduce.fkfprojectEnd)
  proProduces3: ProProduce[];

  @OneToMany(
    () => SalBuyContract,
    (salBuyContract) => salBuyContract.fKfTreater,
  )
  salBuyContracts: SalBuyContract[];

  @OneToMany(() => SalContract, (salContract) => salContract.fkfTreater2)
  salContracts: SalContract[];

  @OneToMany(() => SalContract, (salContract) => salContract.fkfTreaterTafzili)
  salContracts2: SalContract[];

  @OneToMany(() => SalContract, (salContract) => salContract.fkfTreaterTafzili2)
  salContracts3: SalContract[];

  @OneToMany(() => SalContract, (salContract) => salContract.fkfProject2)
  salContracts4: SalContract[];

  @OneToMany(() => SalContract, (salContract) => salContract.fkfMarkaz)
  salContracts5: SalContract[];

  @OneToMany(
    () => SalContract,
    (salContract) => salContract.fkftreaterOfficial2,
  )
  salContracts6: SalContract[];

  @OneToMany(() => SalContract, (salContract) => salContract.fkfTreaterBed)
  salContracts7: SalContract[];

  @OneToMany(
    () => SalContract,
    (salContract) => salContract.fkfTreaterBedTafzili,
  )
  salContracts8: SalContract[];

  @OneToMany(
    () => SalContractCost,
    (salContractCost) => salContractCost.fkfBesTreater,
  )
  salContractCosts: SalContractCost[];

  @OneToMany(
    () => SalContractCostDetail,
    (salContractCostDetail) => salContractCostDetail.fkfBesTreater,
  )
  salContractCostDetails: SalContractCostDetail[];

  @OneToMany(
    () => SalContractCostForGoodsGet,
    (salContractCostForGoodsGet) => salContractCostForGoodsGet.fkfBesTreater2,
  )
  salContractCostForGoodsGets: SalContractCostForGoodsGet[];

  @OneToMany(
    () => SalContractDetail,
    (salContractDetail) => salContractDetail.fkfProduceTreater,
  )
  salContractDetails: SalContractDetail[];

  @OneToMany(
    () => SalContractOpen,
    (salContractOpen) => salContractOpen.fkfTreater,
  )
  salContractOpens: SalContractOpen[];

  @OneToMany(
    () => SalContractOtherDetail,
    (salContractOtherDetail) => salContractOtherDetail.fkfTreaterBed,
  )
  salContractOtherDetails: SalContractOtherDetail[];

  @OneToMany(
    () => SalContractOtherDetail,
    (salContractOtherDetail) => salContractOtherDetail.fkfTreaterBes,
  )
  salContractOtherDetails2: SalContractOtherDetail[];

  @OneToMany(
    () => SalContractOtherDetail,
    (salContractOtherDetail) => salContractOtherDetail.fkfTreaterDif,
  )
  salContractOtherDetails3: SalContractOtherDetail[];

  @OneToMany(
    () => SalCutRequestDetail,
    (salCutRequestDetail) => salCutRequestDetail.fkfTreater,
  )
  salCutRequestDetails: SalCutRequestDetail[];

  @OneToMany(() => SalFactor, (salFactor) => salFactor.fkfTreater)
  salFactors: SalFactor[];

  @OneToMany(
    () => SalFactorTrust,
    (salFactorTrust) => salFactorTrust.fkfTreaterBed,
  )
  salFactorTrusts: SalFactorTrust[];

  @OneToMany(
    () => SalInventoryCycle,
    (salInventoryCycle) => salInventoryCycle.fkfOperator,
  )
  salInventoryCycles: SalInventoryCycle[];

  @OneToMany(() => SalOrder, (salOrder) => salOrder.fkfTraeter2)
  salOrders: SalOrder[];

  @OneToMany(() => SalOrder, (salOrder) => salOrder.fkfProject2)
  salOrders2: SalOrder[];

  @OneToOne(
    () => SalPartnerContract,
    (salPartnerContract) => salPartnerContract.fkfContract2,
  )
  salPartnerContract: SalPartnerContract;

  @OneToMany(
    () => SalPartnerContract,
    (salPartnerContract) => salPartnerContract.fkfTreaterIncome,
  )
  salPartnerContracts: SalPartnerContract[];

  @OneToMany(
    () => SalPartnerContract,
    (salPartnerContract) => salPartnerContract.fkfTreaterCost,
  )
  salPartnerContracts2: SalPartnerContract[];

  @OneToMany(
    () => SalPartnerContractDetail,
    (salPartnerContractDetail) => salPartnerContractDetail.fKfTreaterPartner,
  )
  salPartnerContractDetails: SalPartnerContractDetail[];

  @OneToMany(() => SalProforma, (salProforma) => salProforma.fkfTraeter)
  salProformas: SalProforma[];

  @OneToMany(
    () => SalRequestGoods,
    (salRequestGoods) => salRequestGoods.fkfProject,
  )
  salRequestGoods: SalRequestGoods[];

  @OneToMany(
    () => SalRequestGoods,
    (salRequestGoods) => salRequestGoods.fkfMarkaz,
  )
  salRequestGoods2: SalRequestGoods[];

  @OneToMany(
    () => SalRequestGoods,
    (salRequestGoods) => salRequestGoods.fkfTreater,
  )
  salRequestGoods3: SalRequestGoods[];

  @OneToMany(() => SalService, (salService) => salService.fkfTreater)
  salServices: SalService[];

  @OneToMany(
    () => SalServiceDetail,
    (salServiceDetail) => salServiceDetail.fkfTreaterBes,
  )
  salServiceDetails: SalServiceDetail[];

  @OneToMany(
    () => SalServiceFactor,
    (salServiceFactor) => salServiceFactor.fkfTreater,
  )
  salServiceFactors: SalServiceFactor[];

  @OneToMany(
    () => SalServiceType,
    (salServiceType) => salServiceType.fkfTreaterBes,
  )
  salServiceTypes: SalServiceType[];

  @OneToMany(() => SalStoreHouse, (salStoreHouse) => salStoreHouse.fkfGeter)
  salStoreHouses: SalStoreHouse[];

  @OneToMany(() => SalStoreHouse, (salStoreHouse) => salStoreHouse.fkfProject2)
  salStoreHouses2: SalStoreHouse[];

  @OneToMany(() => SalStoreHouse, (salStoreHouse) => salStoreHouse.fkfMarkaz)
  salStoreHouses3: SalStoreHouse[];

  @OneToMany(() => SalTag, (salTag) => salTag.fkfOperator)
  salTags: SalTag[];

  @OneToMany(() => SalTag, (salTag) => salTag.fkfOperator2)
  salTags2: SalTag[];

  @OneToMany(() => SalTag, (salTag) => salTag.fkfOperator3)
  salTags3: SalTag[];

  @OneToMany(
    () => SalTransferCostDetail,
    (salTransferCostDetail) => salTransferCostDetail.fkfBesTreater,
  )
  salTransferCostDetails: SalTransferCostDetail[];

  @OneToMany(
    () => SalTransferTrust,
    (salTransferTrust) => salTransferTrust.fkfTreater2,
  )
  salTransferTrusts: SalTransferTrust[];

  @OneToMany(() => SalTrust, (salTrust) => salTrust.fkfTreater2)
  salTrusts: SalTrust[];

  @OneToMany(() => SalTrust, (salTrust) => salTrust.fkfGetter2)
  salTrusts2: SalTrust[];

  @OneToMany(
    () => SalTrustFactorDetail,
    (salTrustFactorDetail) => salTrustFactorDetail.fkfTreaterBed,
  )
  salTrustFactorDetails: SalTrustFactorDetail[];

  @OneToMany(
    () => SalUnderOverLoadTrust,
    (salUnderOverLoadTrust) => salUnderOverLoadTrust.fkfTreater2,
  )
  salUnderOverLoadTrusts: SalUnderOverLoadTrust[];

  @RelationId((genTreater: GenTreater) => genTreater.fkfTitle)
  fkfTitle2: number | null;

  @RelationId((genTreater: GenTreater) => genTreater.fkfTafzili)
  fkfTafzili2: number | null;

  @RelationId((genTreater: GenTreater) => genTreater.fkfCategory)
  fkfCategory2: number | null;

  @RelationId((genTreater: GenTreater) => genTreater.fkfBank2)
  fkfBank3: number | null;

  @RelationId((genTreater: GenTreater) => genTreater.fkfAccountType)
  fkfAccountType2: number | null;

  @RelationId((genTreater: GenTreater) => genTreater.fkfTreaterTypeAccounting)
  fkfTreaterTypeAccounting2: number;
}
