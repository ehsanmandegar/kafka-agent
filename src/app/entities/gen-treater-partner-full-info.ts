import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { GenTreater } from './gen-treater';

@Index('PK_genTreaterPartnerFullInfo', ['pkfTreaterPartnerFullInfo'], {
  unique: true,
})
@Entity('genTreaterPartnerFullInfo', { schema: 'dbo' })
export class GenTreaterPartnerFullInfo {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfTreaterPartnerFullInfo' })
  pkfTreaterPartnerFullInfo: number;

  @Column('nvarchar', { name: 'codeEmployee', nullable: true, length: 100 })
  codeEmployee: string | null;

  @Column('nvarchar', { name: 'name', nullable: true, length: 100 })
  name: string | null;

  @Column('nvarchar', { name: 'family', nullable: true, length: 100 })
  family: string | null;

  @Column('nvarchar', { name: 'fName', length: 100 })
  fName: string;

  @Column('nvarchar', { name: 'idNumber', length: 10 })
  idNumber: string;

  @Column('nvarchar', { name: 'serialNumber', length: 6 })
  serialNumber: string;

  @Column('nvarchar', { name: 'nationalCode', length: 10 })
  nationalCode: string;

  @Column('nvarchar', { name: 'birthaday', length: 10 })
  birthaday: string;

  @Column('nvarchar', { name: 'homeAddress', length: 500 })
  homeAddress: string;

  @Column('nvarchar', { name: 'workAddress', length: 500 })
  workAddress: string;

  @Column('nvarchar', { name: 'homeTel', length: 50 })
  homeTel: string;

  @Column('nvarchar', { name: 'workTel', length: 50 })
  workTel: string;

  @Column('nvarchar', { name: 'mobile', length: 50 })
  mobile: string;

  @Column('nvarchar', { name: 'fax', length: 50 })
  fax: string;

  @Column('nvarchar', { name: 'email', length: 100 })
  email: string;

  @Column('nvarchar', { name: 'economicCode', length: 14 })
  economicCode: string;

  @Column('nvarchar', { name: 'businessLicenceNo', length: 50 })
  businessLicenceNo: string;

  @Column('nvarchar', { name: 'businessLicenceDate', length: 10 })
  businessLicenceDate: string;

  @Column('int', { name: 'FkfBusinessPlace' })
  fkfBusinessPlace: number;

  @Column('nvarchar', { name: 'homePostalCode', length: 10 })
  homePostalCode: string;

  @Column('nvarchar', { name: 'workPostalCode', length: 10 })
  workPostalCode: string;

  @Column('nvarchar', { name: 'businessLicenceExpireDate', length: 10 })
  businessLicenceExpireDate: string;

  @Column('int', { name: 'FkfTradeUnit', nullable: true })
  fkfTradeUnit: number | null;

  @Column('int', { name: 'FkfTreaterPartnerStatus', nullable: true })
  fkfTreaterPartnerStatus: number | null;

  @Column('nvarchar', { name: 'registerDate', nullable: true, length: 10 })
  registerDate: string | null;

  @Column('nvarchar', { name: 'memo', nullable: true, length: 500 })
  memo: string | null;

  @Column('bit', { name: 'isID', nullable: true })
  isId: boolean | null;

  @Column('bit', { name: 'isPersoneliPicture', nullable: true })
  isPersoneliPicture: boolean | null;

  @Column('bit', { name: 'isMeliCard', nullable: true })
  isMeliCard: boolean | null;

  @Column('bit', { name: 'isBusinessLicense', nullable: true })
  isBusinessLicense: boolean | null;

  @Column('int', { name: 'FkfBirthdayPlace', nullable: true })
  fkfBirthdayPlace: number | null;

  @Column('int', { name: 'FkfIssuePlace', nullable: true })
  fkfIssuePlace: number | null;

  @Column('int', { name: 'FkfBank', nullable: true })
  fkfBank: number | null;

  @Column('nvarchar', { name: 'branchName', nullable: true, length: 100 })
  branchName: string | null;

  @Column('nvarchar', { name: 'branchCode', nullable: true, length: 10 })
  branchCode: string | null;

  @Column('nvarchar', { name: 'accountNumber', nullable: true, length: 50 })
  accountNumber: string | null;

  @Column('nvarchar', { name: 'SATNA', nullable: true, length: 50 })
  satna: string | null;

  @Column('bit', { name: 'HasPartner', nullable: true })
  hasPartner: boolean | null;

  @Column('nvarchar', { name: 'aliasName', nullable: true, length: 100 })
  aliasName: string | null;

  @Column('nvarchar', {
    name: 'fullNameLawyer',
    length: 50,
    default: () => "''",
  })
  fullNameLawyer: string;

  @Column('nvarchar', {
    name: 'nationalCodeLawyer',
    length: 50,
    default: () => "''",
  })
  nationalCodeLawyer: string;

  @Column('bit', { name: 'printType', default: () => '(0)' })
  printType: boolean;

  @Column('int', { name: 'fkfTreaterLawyer', nullable: true })
  fkfTreaterLawyer: number | null;

  @Column('bit', { name: 'flagPrint', default: () => '(0)' })
  flagPrint: boolean;

  @Column('int', { name: 'serialPrint', default: () => '(0)' })
  serialPrint: number;

  @Column('nvarchar', {
    name: 'lawyerLetterSerial',
    length: 50,
    default: () => "''",
  })
  lawyerLetterSerial: string;

  @Column('nvarchar', {
    name: 'lawyerLetterDate',
    length: 10,
    default: () => "''",
  })
  lawyerLetterDate: string;

  @Column('nvarchar', { name: 'lawyerMemo', length: 255, default: () => "''" })
  lawyerMemo: string;

  @ManyToOne(
    () => GenTreater,
    (genTreater) => genTreater.genTreaterPartnerFullInfos,
  )
  @JoinColumn([
    { name: 'FkfTreaterPartner', referencedColumnName: 'pkfTreater' },
  ])
  fkfTreaterPartner: GenTreater;

  @RelationId(
    (genTreaterPartnerFullInfo: GenTreaterPartnerFullInfo) =>
      genTreaterPartnerFullInfo.fkfTreaterPartner,
  )
  fkfTreaterPartner2: number;
}
