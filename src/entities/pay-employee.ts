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

@Index('PK_payEmployee', ['pkfEmployee'], { unique: true })
@Entity('payEmployee', { schema: 'dbo' })
export class PayEmployee {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfEmployee' })
  pkfEmployee: number;

  @Column('nvarchar', {
    name: 'EmployeeCode',
    nullable: true,
    length: 15,
    default: () => "''",
  })
  employeeCode: string | null;

  @Column('nvarchar', {
    name: 'employeeFName',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  employeeFName: string | null;

  @Column('nvarchar', {
    name: 'birthdayDate',
    nullable: true,
    length: 10,
    default: () => "''",
  })
  birthdayDate: string | null;

  @Column('nvarchar', {
    name: 'melliCode',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  melliCode: string | null;

  @Column('nvarchar', {
    name: 'idNo',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  idNo: string | null;

  @Column('nvarchar', {
    name: 'idSerial',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  idSerial: string | null;

  @Column('int', { name: 'FkfGender', nullable: true, default: () => '(0)' })
  fkfGender: number | null;

  @Column('int', { name: 'FkfMarried', nullable: true, default: () => '(0)' })
  fkfMarried: number | null;

  @Column('nvarchar', {
    name: 'marriedDate',
    nullable: true,
    length: 10,
    default: () => "''",
  })
  marriedDate: string | null;

  @Column('int', { name: 'noBaby', nullable: true, default: () => '(0)' })
  noBaby: number | null;

  @Column('int', { name: 'dependent', nullable: true, default: () => '(0)' })
  dependent: number | null;

  @Column('int', { name: 'FkfEducation', nullable: true })
  fkfEducation: number | null;

  @Column('int', { name: 'FkfService', nullable: true })
  fkfService: number | null;

  @Column('nvarchar', {
    name: 'insuranceNo',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  insuranceNo: string | null;

  @Column('nvarchar', {
    name: 'supplementInsuranceNo',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  supplementInsuranceNo: string | null;

  @Column('int', { name: 'FkfBirthPlace', nullable: true })
  fkfBirthPlace: number | null;

  @Column('int', { name: 'FkfPublication', nullable: true })
  fkfPublication: number | null;

  @Column('nvarchar', {
    name: 'IdPublicationDate',
    nullable: true,
    length: 10,
    default: () => "''",
  })
  idPublicationDate: string | null;

  @Column('int', { name: 'FkfNameOfBank', nullable: true })
  fkfNameOfBank: number | null;

  @Column('nvarchar', {
    name: 'bankAccountNo',
    nullable: true,
    length: 50,
    default: () => "'---'",
  })
  bankAccountNo: string | null;

  @Column('nvarchar', {
    name: 'bankBranch',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  bankBranch: string | null;

  @Column('int', { name: 'FkfBankAccountType', nullable: true })
  fkfBankAccountType: number | null;

  @Column('int', {
    name: 'FkfNationality',
    nullable: true,
    default: () => '(2)',
  })
  fkfNationality: number | null;

  @Column('varchar', {
    name: 'employeeDate',
    nullable: true,
    length: 10,
    default: () => "''",
  })
  employeeDate: string | null;

  @Column('nvarchar', {
    name: 'insuranceDay',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  insuranceDay: string | null;

  @Column('varchar', {
    name: 'fld_PoBox',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  fldPoBox: string | null;

  @Column('nvarchar', {
    name: 'fld_Address',
    nullable: true,
    length: 300,
    default: () => "''",
  })
  fldAddress: string | null;

  @Column('int', {
    name: 'fk_FieldOfStudy',
    nullable: true,
    default: () => '(1)',
  })
  fkFieldOfStudy: number | null;

  @Column('int', { name: 'fkfFieldOfStudy', nullable: true })
  fkfFieldOfStudy: number | null;

  @Column('int', {
    name: 'fkfInsuranceType',
    nullable: true,
    default: () => '(2)',
  })
  fkfInsuranceType: number | null;

  @Column('int', { name: 'fkfBimehType', nullable: true, default: () => '(2)' })
  fkfBimehType: number | null;

  @Column('varchar', {
    name: 'fldTell',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  fldTell: string | null;

  @Column('varchar', {
    name: 'fldMobile',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  fldMobile: string | null;

  @Column('varchar', {
    name: 'fldEmail',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  fldEmail: string | null;

  @Column('int', {
    name: 'fkfEmpStatus',
    nullable: true,
    default: () => '(281)',
  })
  fkfEmpStatus: number | null;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.payEmployees)
  @JoinColumn([{ name: 'FkfTreater', referencedColumnName: 'pkfTreater' }])
  fkfTreater: GenTreater;

  @RelationId((payEmployee: PayEmployee) => payEmployee.fkfTreater)
  fkfTreater2: number;
}
