import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_PaySetting', ['pkid'], { unique: true })
@Entity('PaySetting', { schema: 'dbo' })
export class PaySetting {
  @PrimaryGeneratedColumn({ type: 'int', name: 'PKID' })
  pkid: number;

  @Column('int', { name: 'accYear', default: () => '(0)' })
  accYear: number;

  @Column('int', {
    name: 'roundTillNumber',
    nullable: true,
    default: () => '(3)',
  })
  roundTillNumber: number | null;

  @Column('int', { name: 'fk_roundTillNumberFactor', nullable: true })
  fkRoundTillNumberFactor: number | null;

  @Column('int', { name: 'moienPaySalary', nullable: true })
  moienPaySalary: number | null;

  @Column('int', { name: 'moienSalary', nullable: true, default: () => '(0)' })
  moienSalary: number | null;

  @Column('int', {
    name: 'employeeCurrent',
    nullable: true,
    default: () => '(0)',
  })
  employeeCurrent: number | null;

  @Column('int', { name: 'moienLoan', nullable: true })
  moienLoan: number | null;

  @Column('decimal', {
    name: 'mostEydi',
    nullable: true,
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  mostEydi: number | null;

  @Column('decimal', {
    name: 'zaribeBase',
    nullable: true,
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  zaribeBase: number | null;

  @Column('decimal', {
    name: 'moafiyateTax',
    nullable: true,
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  moafiyateTax: number | null;

  @Column('bit', {
    name: 'moafiyateEydiMotenasebBaKarkard',
    nullable: true,
    default: () => '(0)',
  })
  moafiyateEydiMotenasebBaKarkard: boolean | null;

  @Column('int', {
    name: 'moienEydiCost',
    nullable: true,
    default: () => '(0)',
  })
  moienEydiCost: number | null;

  @Column('int', {
    name: 'dayNumberPerYear',
    nullable: true,
    default: () => '(0)',
  })
  dayNumberPerYear: number | null;

  @Column('int', {
    name: 'moienSanavatCost',
    nullable: true,
    default: () => '(0)',
  })
  moienSanavatCost: number | null;

  @Column('int', {
    name: 'moienSanavatSave',
    nullable: true,
    default: () => '(0)',
  })
  moienSanavatSave: number | null;

  @Column('int', {
    name: 'fkfAmeleTakmiliSahmeKarmand',
    nullable: true,
    default: () => '(0)',
  })
  fkfAmeleTakmiliSahmeKarmand: number | null;

  @Column('int', {
    name: 'fkfAmeleTakmiliSahmeKarfarma',
    nullable: true,
    default: () => '(0)',
  })
  fkfAmeleTakmiliSahmeKarfarma: number | null;

  @Column('decimal', {
    name: 'mostDailyInsuraance',
    nullable: true,
    precision: 10,
    scale: 2,
    default: () => '(0)',
  })
  mostDailyInsuraance: number | null;

  @Column('decimal', {
    name: 'EmployeePayPart',
    nullable: true,
    precision: 5,
    scale: 2,
    default: () => '(0)',
  })
  employeePayPart: number | null;

  @Column('int', { name: 'fk_TaminEmployeePayPartFactor', nullable: true })
  fkTaminEmployeePayPartFactor: number | null;

  @Column('decimal', {
    name: 'EmployerPayPart',
    nullable: true,
    precision: 5,
    scale: 2,
    default: () => '(0)',
  })
  employerPayPart: number | null;

  @Column('int', { name: 'fk_TaminKarfarmaPayPartFactor', nullable: true })
  fkTaminKarfarmaPayPartFactor: number | null;

  @Column('decimal', {
    name: 'NoWorkCost',
    nullable: true,
    precision: 5,
    scale: 2,
    default: () => '(0)',
  })
  noWorkCost: number | null;

  @Column('int', { name: 'fk_TaminNoWorkCostFactor', nullable: true })
  fkTaminNoWorkCostFactor: number | null;

  @Column('decimal', {
    name: 'hardWorkCost',
    nullable: true,
    precision: 5,
    scale: 2,
    default: () => '(0)',
  })
  hardWorkCost: number | null;

  @Column('int', {
    name: 'fkfMoienTammin',
    nullable: true,
    default: () => '(0)',
  })
  fkfMoienTammin: number | null;

  @Column('int', {
    name: 'fkfMoienPayTammin',
    nullable: true,
    default: () => '(0)',
  })
  fkfMoienPayTammin: number | null;

  @Column('decimal', {
    name: 'zaribeMoafiyateTammin',
    nullable: true,
    precision: 18,
    scale: 5,
    default: () => '(0)',
  })
  zaribeMoafiyateTammin: number | null;

  @Column('decimal', {
    name: 'zaribeMoafiyateTakmiliEmployeePart',
    nullable: true,
    precision: 18,
    scale: 5,
    default: () => '(0)',
  })
  zaribeMoafiyateTakmiliEmployeePart: number | null;

  @Column('int', { name: 'fkfMoienPay', nullable: true, default: () => '(0)' })
  fkfMoienPay: number | null;

  @Column('int', { name: 'calcType', nullable: true, default: () => '(0)' })
  calcType: number | null;

  @Column('nvarchar', {
    name: 'mostMonthlyVacation',
    nullable: true,
    length: 10,
    default: () => "''",
  })
  mostMonthlyVacation: string | null;

  @Column('int', {
    name: 'moienVacationCost',
    nullable: true,
    default: () => '(0)',
  })
  moienVacationCost: number | null;

  @Column('int', {
    name: 'moienVacationSave',
    nullable: true,
    default: () => '(0)',
  })
  moienVacationSave: number | null;

  @Column('int', {
    name: 'fkfKarkardFactor',
    nullable: true,
    default: () => '(0)',
  })
  fkfKarkardFactor: number | null;

  @Column('int', { name: 'fkfVacationFactor', default: () => '(0)' })
  fkfVacationFactor: number;

  @Column('int', {
    name: 'KarKard_MinutePerDay',
    nullable: true,
    default: () => "''",
  })
  karKardMinutePerDay: number | null;

  @Column('int', { name: 'TaxFree', nullable: true, default: () => '(1)' })
  taxFree: number | null;

  @Column('float', {
    name: 'TaxPercent',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  taxPercent: number | null;

  @Column('varchar', {
    name: 'fld_OfficeSQLIP',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  fldOfficeSqlip: string | null;

  @Column('varchar', {
    name: 'fld_OfficeSQLUser',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  fldOfficeSqlUser: string | null;

  @Column('varchar', {
    name: 'fld_OfficeSQLPass',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  fldOfficeSqlPass: string | null;

  @Column('varchar', {
    name: 'fld_OfficeDBName',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  fldOfficeDbName: string | null;

  @Column('smallint', {
    name: 'fk_OfficeIOCo',
    nullable: true,
    default: () => '(2)',
  })
  fkOfficeIoCo: number | null;

  @Column('smallint', {
    name: 'fld_OfficeValidDelay',
    nullable: true,
    default: () => '(0)',
  })
  fldOfficeValidDelay: number | null;

  @Column('smallint', {
    name: 'fld_OfficeValidRush',
    nullable: true,
    default: () => '(0)',
  })
  fldOfficeValidRush: number | null;

  @Column('smallint', {
    name: 'fld_OfficeMonthStartDay',
    nullable: true,
    default: () => '(25)',
  })
  fldOfficeMonthStartDay: number | null;

  @Column('smallint', {
    name: 'fld_OfficeExtraMin',
    nullable: true,
    default: () => '(15)',
  })
  fldOfficeExtraMin: number | null;

  @Column('smallint', {
    name: 'fld_OfficeExtraDayMax',
    nullable: true,
    default: () => '(300)',
  })
  fldOfficeExtraDayMax: number | null;

  @Column('smallint', {
    name: 'fld_OfficeExtraHolidayMax',
    nullable: true,
    default: () => '(600)',
  })
  fldOfficeExtraHolidayMax: number | null;

  @Column('smallint', {
    name: 'fld_OfficeExtraMonthMax',
    nullable: true,
    default: () => '(100)',
  })
  fldOfficeExtraMonthMax: number | null;

  @Column('smallint', {
    name: 'fld_OfficeCalcFirstExtra',
    nullable: true,
    default: () => '(9999)',
  })
  fldOfficeCalcFirstExtra: number | null;

  @Column('tinyint', {
    name: 'fld_ShowOneRowInFish',
    nullable: true,
    default: () => '(0)',
  })
  fldShowOneRowInFish: number | null;

  @Column('bit', {
    name: 'fld_PaySandPerEmployee',
    nullable: true,
    default: () => '(1)',
  })
  fldPaySandPerEmployee: boolean | null;

  @Column('int', { name: 'fk_TafzilPay', nullable: true, default: () => '(0)' })
  fkTafzilPay: number | null;

  @Column('bit', {
    name: 'fld_CalExtraOfDuty',
    nullable: true,
    default: () => '(1)',
  })
  fldCalExtraOfDuty: boolean | null;

  @Column('bit', {
    name: 'fld_MoafiatBimeh27',
    nullable: true,
    default: () => '(0)',
  })
  fldMoafiatBimeh27: boolean | null;

  @Column('bit', {
    name: 'fld_MoafiatBimehAll',
    nullable: true,
    default: () => '(0)',
  })
  fldMoafiatBimehAll: boolean | null;
}
