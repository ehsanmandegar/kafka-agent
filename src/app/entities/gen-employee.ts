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
import { AccSanadFloat } from './acc-sanad-float';
import { BalBail } from './bal-bail';
import { BasWeight } from './bas-weight';
import { CasBankConflict } from './cas-bank-conflict';
import { CasGetPay } from './cas-get-pay';
import { CasGetPayDeclaration } from './cas-get-pay-declaration';
import { CasGetPayDetail } from './cas-get-pay-detail';
import { CasLogCheck } from './cas-log-check';
import { CrmTask } from './crm-task';
import { GenResponsibility } from './gen-responsibility';
import { GenUser } from './gen-user';
import { SalContract } from './sal-contract';
import { SalPartnerContract } from './sal-partner-contract';
import { SalProforma } from './sal-proforma';
import { SalRequestGoods } from './sal-request-goods';
import { SalService } from './sal-service';
import { SalStoreHouse } from './sal-store-house';
import { SalTransfer } from './sal-transfer';
import { SalTransferStoreHouse } from './sal-transfer-store-house';
import { SalTrust } from './sal-trust';
import { SalUnderOverLoadTrust } from './sal-under-over-load-trust';

@Index('IX_genEmployee', ['employeeNo', 'accYear'], { unique: true })
@Index('IX_genEmployee_filtering1', ['accYear', 'oldPkf'], { unique: true })
@Index('PK_genEmployee', ['pkfEmployee'], { unique: true })
@Entity('genEmployee', { schema: 'dbo' })
export class GenEmployee {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfEmployee' })
  pkfEmployee: number;

  @Column('nvarchar', { name: 'firstName', length: 200 })
  firstName: string;

  @Column('nvarchar', { name: 'lastName', length: 200 })
  lastName: string;

  @Column('nvarchar', { name: 'employeeNo', length: 20 })
  employeeNo: string;

  @Column('int', { name: 'accYear', default: () => '1' })
  accYear: number;

  @Column('int', { name: 'oldPkf', nullable: true })
  oldPkf: number | null;

  @OneToMany(
    () => AccSanadFloat,
    (accSanadFloat) => accSanadFloat.fkfCreateUser,
  )
  accSanadFloats: AccSanadFloat[];

  @OneToMany(() => AccSanadFloat, (accSanadFloat) => accSanadFloat.fkfEditUser)
  accSanadFloats2: AccSanadFloat[];

  @OneToMany(
    () => AccSanadFloat,
    (accSanadFloat) => accSanadFloat.fkfAssignUser,
  )
  accSanadFloats3: AccSanadFloat[];

  @OneToMany(() => AccSanadFloat, (accSanadFloat) => accSanadFloat.fkfAuditUser)
  accSanadFloats4: AccSanadFloat[];

  @OneToMany(() => AccSanadFloat, (accSanadFloat) => accSanadFloat.fkfFinalUser)
  accSanadFloats5: AccSanadFloat[];

  @OneToMany(() => BalBail, (balBail) => balBail.fkfCreateUser)
  balBails: BalBail[];

  @OneToMany(() => BalBail, (balBail) => balBail.fkfEditUser)
  balBails2: BalBail[];

  @OneToMany(() => BasWeight, (basWeight) => basWeight.fkfCreateUser2)
  basWeights: BasWeight[];

  @OneToMany(() => BasWeight, (basWeight) => basWeight.fkfEditUser2)
  basWeights2: BasWeight[];

  @OneToMany(
    () => CasBankConflict,
    (casBankConflict) => casBankConflict.fkfCreateUser,
  )
  casBankConflicts: CasBankConflict[];

  @OneToMany(
    () => CasBankConflict,
    (casBankConflict) => casBankConflict.fkfEditUser,
  )
  casBankConflicts2: CasBankConflict[];

  @OneToMany(() => CasGetPay, (casGetPay) => casGetPay.fkfCreateUser)
  casGetPays: CasGetPay[];

  @OneToMany(() => CasGetPay, (casGetPay) => casGetPay.fkfEditUser)
  casGetPays2: CasGetPay[];

  @OneToMany(() => CasGetPay, (casGetPay) => casGetPay.fkfFinalUser)
  casGetPays3: CasGetPay[];

  @OneToMany(
    () => CasGetPayDeclaration,
    (casGetPayDeclaration) => casGetPayDeclaration.fkfCreateUser,
  )
  casGetPayDeclarations: CasGetPayDeclaration[];

  @OneToMany(
    () => CasGetPayDeclaration,
    (casGetPayDeclaration) => casGetPayDeclaration.fkfEditUser,
  )
  casGetPayDeclarations2: CasGetPayDeclaration[];

  @OneToMany(
    () => CasGetPayDeclaration,
    (casGetPayDeclaration) => casGetPayDeclaration.fkfFinalUser,
  )
  casGetPayDeclarations3: CasGetPayDeclaration[];

  @OneToMany(
    () => CasGetPayDetail,
    (casGetPayDetail) => casGetPayDetail.fkfTransferUser,
  )
  casGetPayDetails: CasGetPayDetail[];

  @OneToMany(
    () => CasGetPayDetail,
    (casGetPayDetail) => casGetPayDetail.fkfAchieveUser,
  )
  casGetPayDetails2: CasGetPayDetail[];

  @OneToMany(() => CasLogCheck, (casLogCheck) => casLogCheck.fkfCreateUser)
  casLogChecks: CasLogCheck[];

  @OneToMany(() => CrmTask, (crmTask) => crmTask.fkfCreateUser)
  crmTasks: CrmTask[];

  @OneToMany(() => CrmTask, (crmTask) => crmTask.fkfEditUser)
  crmTasks2: CrmTask[];

  @OneToMany(() => CrmTask, (crmTask) => crmTask.fkfAssigned)
  crmTasks3: CrmTask[];

  @ManyToOne(
    () => GenResponsibility,
    (genResponsibility) => genResponsibility.genEmployees,
  )
  @JoinColumn([
    { name: 'FkfResponsibility', referencedColumnName: 'pkfResponsibility' },
  ])
  fkfResponsibility: GenResponsibility;

  @ManyToOne(() => GenEmployee, (genEmployee) => genEmployee.genEmployees)
  @JoinColumn([{ name: 'oldPkf', referencedColumnName: 'pkfEmployee' }])
  oldPkf2: GenEmployee;

  @OneToMany(() => GenEmployee, (genEmployee) => genEmployee.oldPkf2)
  genEmployees: GenEmployee[];

  @OneToMany(() => GenUser, (genUser) => genUser.fkfEmployee)
  genUsers: GenUser[];

  @OneToMany(() => SalContract, (salContract) => salContract.fkfCreateUser)
  salContracts: SalContract[];

  @OneToMany(() => SalContract, (salContract) => salContract.fkfEditUser)
  salContracts2: SalContract[];

  @OneToMany(() => SalContract, (salContract) => salContract.fkfFinalUser)
  salContracts3: SalContract[];

  @OneToMany(
    () => SalPartnerContract,
    (salPartnerContract) => salPartnerContract.fkfCreateUser,
  )
  salPartnerContracts: SalPartnerContract[];

  @OneToMany(
    () => SalPartnerContract,
    (salPartnerContract) => salPartnerContract.fkfEditUser,
  )
  salPartnerContracts2: SalPartnerContract[];

  @OneToMany(() => SalProforma, (salProforma) => salProforma.fkfCreateUser)
  salProformas: SalProforma[];

  @OneToMany(() => SalProforma, (salProforma) => salProforma.fkfEditUser)
  salProformas2: SalProforma[];

  @OneToMany(() => SalProforma, (salProforma) => salProforma.fkfFinalUser)
  salProformas3: SalProforma[];

  @OneToMany(
    () => SalRequestGoods,
    (salRequestGoods) => salRequestGoods.fkfCreateUser,
  )
  salRequestGoods: SalRequestGoods[];

  @OneToMany(
    () => SalRequestGoods,
    (salRequestGoods) => salRequestGoods.fkfEditUser,
  )
  salRequestGoods2: SalRequestGoods[];

  @OneToMany(() => SalService, (salService) => salService.fkfCreateUser)
  salServices: SalService[];

  @OneToMany(() => SalService, (salService) => salService.fkfEditUser)
  salServices2: SalService[];

  @OneToMany(() => SalService, (salService) => salService.fkfFinalUser)
  salServices3: SalService[];

  @OneToMany(
    () => SalStoreHouse,
    (salStoreHouse) => salStoreHouse.fkfCreateUser,
  )
  salStoreHouses: SalStoreHouse[];

  @OneToMany(() => SalStoreHouse, (salStoreHouse) => salStoreHouse.fkfEditUser)
  salStoreHouses2: SalStoreHouse[];

  @OneToMany(() => SalTransfer, (salTransfer) => salTransfer.fkfCreateUser)
  salTransfers: SalTransfer[];

  @OneToMany(() => SalTransfer, (salTransfer) => salTransfer.fkfEditUser)
  salTransfers2: SalTransfer[];

  @OneToMany(() => SalTransfer, (salTransfer) => salTransfer.fkfFinalUser)
  salTransfers3: SalTransfer[];

  @OneToMany(
    () => SalTransferStoreHouse,
    (salTransferStoreHouse) => salTransferStoreHouse.fkfCreateUser,
  )
  salTransferStoreHouses: SalTransferStoreHouse[];

  @OneToMany(
    () => SalTransferStoreHouse,
    (salTransferStoreHouse) => salTransferStoreHouse.fkfEditUser,
  )
  salTransferStoreHouses2: SalTransferStoreHouse[];

  @OneToMany(
    () => SalTransferStoreHouse,
    (salTransferStoreHouse) => salTransferStoreHouse.fkfFinalUser,
  )
  salTransferStoreHouses3: SalTransferStoreHouse[];

  @OneToMany(() => SalTrust, (salTrust) => salTrust.fkfCreateUser)
  salTrusts: SalTrust[];

  @OneToMany(() => SalTrust, (salTrust) => salTrust.fkfEditUser)
  salTrusts2: SalTrust[];

  @OneToMany(
    () => SalUnderOverLoadTrust,
    (salUnderOverLoadTrust) => salUnderOverLoadTrust.fkfCreateUser,
  )
  salUnderOverLoadTrusts: SalUnderOverLoadTrust[];

  @OneToMany(
    () => SalUnderOverLoadTrust,
    (salUnderOverLoadTrust) => salUnderOverLoadTrust.fkfEditUser,
  )
  salUnderOverLoadTrusts2: SalUnderOverLoadTrust[];

  @RelationId((genEmployee: GenEmployee) => genEmployee.fkfResponsibility)
  fkfResponsibility2: number;

  @RelationId((genEmployee: GenEmployee) => genEmployee.oldPkf2)
  oldPkf3: number | null;
}
