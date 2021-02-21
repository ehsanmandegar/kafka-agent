import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_ActWorkFlow', ['pkid'], { unique: true })
@Entity('ActWorkFlow', { schema: 'dbo' })
export class ActWorkFlow {
  @PrimaryGeneratedColumn({ type: 'int', name: 'PKID' })
  pkid: number;

  @Column('int', { name: 'fkfSystem', nullable: true })
  fkfSystem: number | null;

  @Column('int', { name: 'fkfType', nullable: true })
  fkfType: number | null;

  @Column('int', { name: 'fkfParent', nullable: true, default: () => '(0)' })
  fkfParent: number | null;

  @Column('int', { name: 'fkfActivity', nullable: true })
  fkfActivity: number | null;

  @Column('int', { name: 'fkfSender', nullable: true })
  fkfSender: number | null;

  @Column('varchar', {
    name: 'SendDate',
    nullable: true,
    length: 10,
    default: () => "''",
  })
  sendDate: string | null;

  @Column('varchar', {
    name: 'SendTime',
    nullable: true,
    length: 5,
    default: () => "''",
  })
  sendTime: string | null;

  @Column('int', { name: 'fkfExecutor', nullable: true })
  fkfExecutor: number | null;

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
    name: 'PreEndDate',
    nullable: true,
    length: 10,
    default: () => '(11)',
  })
  preEndDate: string | null;

  @Column('varchar', {
    name: 'PreEndTime',
    nullable: true,
    length: 5,
    default: () => "''",
  })
  preEndTime: string | null;

  @Column('int', { name: 'fkfLastStatus', nullable: true })
  fkfLastStatus: number | null;

  @Column('int', { name: 'PreRunTime', nullable: true, default: () => '(0)' })
  preRunTime: number | null;

  @Column('int', { name: 'RunTime', nullable: true, default: () => '(0)' })
  runTime: number | null;

  @Column('nvarchar', {
    name: 'fldAdder',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  fldAdder: string | null;

  @Column('datetime', {
    name: 'fldAddDate',
    nullable: true,
    default: () => 'getdate()',
  })
  fldAddDate: Date | null;

  @Column('nvarchar', {
    name: 'fldEditor',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  fldEditor: string | null;

  @Column('datetime', { name: 'fldEditDate', nullable: true })
  fldEditDate: Date | null;
}
