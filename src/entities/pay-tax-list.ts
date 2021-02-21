import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_tblPayTaxListWP', ['pkid'], { unique: true })
@Entity('PayTaxList', { schema: 'dbo' })
export class PayTaxList {
  @PrimaryGeneratedColumn({ type: 'int', name: 'PKID' })
  pkid: number;

  @Column('nchar', { name: 'fkfTaxHeader', nullable: true, length: 10 })
  fkfTaxHeader: string | null;

  @Column('int', { name: 'fldYear', nullable: true })
  fldYear: number | null;

  @Column('nchar', { name: 'fldMonth', nullable: true, length: 10 })
  fldMonth: string | null;

  @Column('int', { name: 'fkfAgentID', nullable: true })
  fkfAgentId: number | null;

  @Column('int', {
    name: 'fkfNatinality',
    nullable: true,
    default: () => '(1)',
  })
  fkfNatinality: number | null;

  @Column('int', { name: 'fkfDataType', nullable: true })
  fkfDataType: number | null;

  @Column('varchar', { name: 'MelliCode', nullable: true, length: 50 })
  melliCode: string | null;

  @Column('nvarchar', { name: 'Name', nullable: true, length: 50 })
  name: string | null;

  @Column('nvarchar', { name: 'Family', nullable: true, length: 50 })
  family: string | null;

  @Column('int', { name: 'Country', nullable: true })
  country: number | null;

  @Column('varchar', { name: 'EmployeeCode', nullable: true, length: 50 })
  employeeCode: string | null;

  @Column('int', { name: 'Education', nullable: true })
  education: number | null;

  @Column('nvarchar', { name: 'JobTitle', nullable: true, length: 50 })
  jobTitle: string | null;

  @Column('int', { name: 'BimeType', nullable: true })
  bimeType: number | null;

  @Column('nvarchar', { name: 'BimeName', nullable: true, length: 50 })
  bimeName: string | null;

  @Column('varchar', { name: 'BimeID', nullable: true, length: 50 })
  bimeId: string | null;

  @Column('varchar', { name: 'POBox', nullable: true, length: 50 })
  poBox: string | null;

  @Column('nvarchar', { name: 'Address', nullable: true, length: 300 })
  address: string | null;

  @Column('varchar', { name: 'EmpDate', nullable: true, length: 50 })
  empDate: string | null;

  @Column('int', { name: 'EmpType', nullable: true })
  empType: number | null;

  @Column('nvarchar', { name: 'ServiceLocation', nullable: true, length: 50 })
  serviceLocation: string | null;

  @Column('int', { name: 'ServiceLocationType', nullable: true })
  serviceLocationType: number | null;

  @Column('int', { name: 'ContractType', nullable: true })
  contractType: number | null;

  @Column('varchar', { name: 'WorkEndDate', nullable: true, length: 50 })
  workEndDate: string | null;

  @Column('int', { name: 'EmpStatus', nullable: true })
  empStatus: number | null;

  @Column('varchar', { name: 'MobileNo', nullable: true, length: 50 })
  mobileNo: string | null;

  @Column('varchar', { name: 'EMail', nullable: true, length: 50 })
  eMail: string | null;
}
