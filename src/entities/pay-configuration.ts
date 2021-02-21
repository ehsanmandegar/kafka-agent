import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_payConfiguration', ['pkfConfiguration'], { unique: true })
@Entity('payConfiguration', { schema: 'dbo' })
export class PayConfiguration {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfConfiguration' })
  pkfConfiguration: number;

  @Column('nvarchar', { name: 'tfn', length: 50 })
  tfn: string;

  @Column('int', { name: 'branchCode' })
  branchCode: number;

  @Column('int', { name: 'FkfPayType' })
  fkfPayType: number;

  @Column('int', { name: 'FkfCompanyType' })
  fkfCompanyType: number;

  @Column('nvarchar', { name: 'companyName', length: 200 })
  companyName: string;

  @Column('nvarchar', { name: 'companyLastName', length: 200 })
  companyLastName: string;

  @Column('nvarchar', { name: 'companyBranch', length: 100 })
  companyBranch: string;

  @Column('nvarchar', { name: 'economicNum', length: 50 })
  economicNum: string;

  @Column('nvarchar', { name: 'postalCode', length: 50 })
  postalCode: string;

  @Column('nvarchar', { name: 'tel', length: 50 })
  tel: string;

  @Column('nvarchar', { name: 'address', length: 255 })
  address: string;

  @Column('nvarchar', { name: 'melliCode1', length: 50 })
  melliCode1: string;

  @Column('nvarchar', { name: 'name1', length: 100 })
  name1: string;

  @Column('nvarchar', { name: 'family1', length: 100 })
  family1: string;

  @Column('int', { name: 'FkfResponsibility1' })
  fkfResponsibility1: number;

  @Column('nvarchar', { name: 'melliCode2', nullable: true, length: 50 })
  melliCode2: string | null;

  @Column('nvarchar', { name: 'name2', nullable: true, length: 100 })
  name2: string | null;

  @Column('nvarchar', { name: 'family2', nullable: true, length: 100 })
  family2: string | null;

  @Column('int', { name: 'FkfResponsibility2', nullable: true })
  fkfResponsibility2: number | null;

  @Column('int', { name: 'rate', nullable: true })
  rate: number | null;

  @Column('int', { name: 'pRate', nullable: true })
  pRate: number | null;

  @Column('nvarchar', { name: 'disc', length: 50, default: () => "''" })
  disc: string;

  @Column('nvarchar', { name: 'farm', length: 50, default: () => "''" })
  farm: string;

  @Column('int', { name: 'maxDD', nullable: true })
  maxDd: number | null;

  @Column('int', { name: 'minMash', nullable: true })
  minMash: number | null;

  @Column('nvarchar', { name: 'IDBimeh', length: 10, default: () => "''" })
  idBimeh: string;

  @Column('nvarchar', { name: 'branchBimeh', length: 50, default: () => "''" })
  branchBimeh: string;
}
