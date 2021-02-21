import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IoWorkTimeDetail } from './io-work-time-detail';

@Index('PK_IOWorkTime', ['pkfWorkTime'], { unique: true })
@Entity('IOWorkTime', { schema: 'dbo' })
export class IoWorkTime {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfWorkTime' })
  pkfWorkTime: number;

  @Column('nvarchar', { name: 'title', length: 50, default: () => "''" })
  title: string;

  @Column('nvarchar', { name: 'code', length: 50, default: () => "''" })
  code: string;

  @Column('int', { name: 'fldYear', nullable: true, default: () => "''" })
  fldYear: number | null;

  @Column('nvarchar', {
    name: 'creditDateFrom',
    length: 30,
    default: () => "''",
  })
  creditDateFrom: string;

  @Column('nvarchar', { name: 'creditDateTo', length: 30, default: () => "''" })
  creditDateTo: string;

  @Column('int', { name: 'maxOwerTimeDay', nullable: true })
  maxOwerTimeDay: number | null;

  @Column('int', { name: 'minOwerTimeDay', nullable: true })
  minOwerTimeDay: number | null;

  @Column('bit', { name: 'isCalculatWithWorkTime', default: () => '(0)' })
  isCalculatWithWorkTime: boolean;

  @Column('bit', { name: 'active', nullable: true, default: () => '(1)' })
  active: boolean | null;

  @Column('nvarchar', { name: 'memo', default: () => "''" })
  memo: string;

  @Column('int', { name: 'FkfCreateUser', nullable: true })
  fkfCreateUser: number | null;

  @Column('nvarchar', { name: 'createDate', length: 30, default: () => "''" })
  createDate: string;

  @Column('nvarchar', { name: 'createTime', length: 30, default: () => "''" })
  createTime: string;

  @Column('int', { name: 'FkfEditUser', nullable: true })
  fkfEditUser: number | null;

  @Column('nvarchar', { name: 'editDate', length: 30, default: () => "''" })
  editDate: string;

  @Column('nvarchar', { name: 'editTime', length: 30, default: () => "''" })
  editTime: string;

  @OneToMany(
    () => IoWorkTimeDetail,
    (ioWorkTimeDetail) => ioWorkTimeDetail.fkfWorkTime,
  )
  ioWorkTimeDetails: IoWorkTimeDetail[];
}
