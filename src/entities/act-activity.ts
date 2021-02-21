import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_ActActivity', ['pkid'], { unique: true })
@Entity('ActActivity', { schema: 'dbo' })
export class ActActivity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'PKID' })
  pkid: number;

  @Column('nvarchar', { name: 'ActivityCode', length: 50, default: () => "''" })
  activityCode: string;

  @Column('int', { name: 'fkfParent', nullable: true, default: () => '(0)' })
  fkfParent: number | null;

  @Column('int', { name: 'fkfType', nullable: true })
  fkfType: number | null;

  @Column('int', { name: 'fkfStatus', nullable: true })
  fkfStatus: number | null;

  @Column('int', { name: 'fKfAction', nullable: true, default: () => '(1)' })
  fKfAction: number | null;

  @Column('int', { name: 'fkfAdmin', nullable: true, default: () => '(1)' })
  fkfAdmin: number | null;

  @Column('int', { name: 'fkfOwner', nullable: true, default: () => '(1)' })
  fkfOwner: number | null;

  @Column('int', { name: 'fkfExecutor', nullable: true, default: () => '(1)' })
  fkfExecutor: number | null;

  @Column('int', { name: 'fkfSystem', nullable: true, default: () => '(0)' })
  fkfSystem: number | null;

  @Column('int', { name: 'fkfRefrence', nullable: true, default: () => '(0)' })
  fkfRefrence: number | null;

  @Column('nvarchar', {
    name: 'ActivityTitle',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  activityTitle: string | null;

  @Column('varchar', {
    name: 'DefineDate',
    nullable: true,
    length: 10,
    default: () => "''",
  })
  defineDate: string | null;

  @Column('varchar', {
    name: 'DefineTime',
    nullable: true,
    length: 5,
    default: () => "''",
  })
  defineTime: string | null;

  @Column('varchar', {
    name: 'ReciveDate',
    nullable: true,
    length: 10,
    default: () => "''",
  })
  reciveDate: string | null;

  @Column('varchar', {
    name: 'ReciveTime',
    nullable: true,
    length: 5,
    default: () => "''",
  })
  reciveTime: string | null;

  @Column('varchar', {
    name: 'PreStartDate',
    nullable: true,
    length: 10,
    default: () => "''",
  })
  preStartDate: string | null;

  @Column('varchar', {
    name: 'PreStartTime',
    nullable: true,
    length: 5,
    default: () => "''",
  })
  preStartTime: string | null;

  @Column('varchar', {
    name: 'RequiredDate',
    nullable: true,
    length: 10,
    default: () => "''",
  })
  requiredDate: string | null;

  @Column('varchar', {
    name: 'RequiredTime',
    nullable: true,
    length: 5,
    default: () => "''",
  })
  requiredTime: string | null;

  @Column('varchar', {
    name: 'StartDate',
    nullable: true,
    length: 10,
    default: () => "''",
  })
  startDate: string | null;

  @Column('varchar', {
    name: 'StartTime',
    nullable: true,
    length: 5,
    default: () => "''",
  })
  startTime: string | null;

  @Column('varchar', {
    name: 'PreEndDate',
    nullable: true,
    length: 10,
    default: () => "''",
  })
  preEndDate: string | null;

  @Column('varchar', {
    name: 'PreEndTime',
    nullable: true,
    length: 5,
    default: () => "''",
  })
  preEndTime: string | null;

  @Column('varchar', {
    name: 'EndDate',
    nullable: true,
    length: 10,
    default: () => "''",
  })
  endDate: string | null;

  @Column('varchar', {
    name: 'EndTime',
    nullable: true,
    length: 5,
    default: () => "''",
  })
  endTime: string | null;

  @Column('int', { name: 'PreRunTime', nullable: true, default: () => '(0)' })
  preRunTime: number | null;

  @Column('int', { name: 'Period', nullable: true, default: () => '(1)' })
  period: number | null;

  @Column('int', { name: 'Priority', nullable: true, default: () => '(5)' })
  priority: number | null;

  @Column('nvarchar', {
    name: 'Memo',
    nullable: true,
    length: 300,
    default: () => "''",
  })
  memo: string | null;

  @Column('bit', { name: 'IsActive', nullable: true, default: () => '(1)' })
  isActive: boolean | null;

  @Column('int', { name: 'fkfRowStatus', nullable: true, default: () => '(1)' })
  fkfRowStatus: number | null;

  @Column('datetime', {
    name: 'fldAddDate',
    nullable: true,
    default: () => 'getdate()',
  })
  fldAddDate: Date | null;

  @Column('int', { name: 'fldOrder', nullable: true, default: () => '(50)' })
  fldOrder: number | null;

  @Column('nvarchar', {
    name: 'fldAdder',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  fldAdder: string | null;

  @Column('datetime', { name: 'fldEditDate', nullable: true })
  fldEditDate: Date | null;

  @Column('nvarchar', {
    name: 'fldEditor',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  fldEditor: string | null;
}
