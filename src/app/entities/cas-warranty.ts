import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CasExtWarranty } from './cas-ext-warranty';

@Index('IX_casWarranty', ['serial', 'accYear'], { unique: true })
@Index('IX_casWarranty_1', ['accYear', 'warrantyNo'], { unique: true })
@Index('PK_casWarranty', ['pkfWarranty'], { unique: true })
@Entity('casWarranty', { schema: 'dbo' })
export class CasWarranty {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfWarranty' })
  pkfWarranty: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('int', { name: 'FkfTreater' })
  fkfTreater: number;

  @Column('int', { name: 'FkfBank' })
  fkfBank: number;

  @Column('bigint', { name: 'warrantyPrice' })
  warrantyPrice: string;

  @Column('nvarchar', { name: 'issueDate', length: 10 })
  issueDate: string;

  @Column('nvarchar', { name: 'payoffDate', length: 10 })
  payoffDate: string;

  @Column('int', { name: 'FkfMarkaz', nullable: true })
  fkfMarkaz: number | null;

  @Column('int', { name: 'FkfWarrantyType' })
  fkfWarrantyType: number;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'FkfSanad', nullable: true })
  fkfSanad: number | null;

  @Column('nvarchar', { name: 'lastExtentionDate', length: 50 })
  lastExtentionDate: string;

  @Column('nvarchar', { name: 'createDate', length: 50 })
  createDate: string;

  @Column('int', { name: 'FkfCreateUser' })
  fkfCreateUser: number;

  @Column('nvarchar', { name: 'editDate', nullable: true, length: 50 })
  editDate: string | null;

  @Column('int', { name: 'FkfEditUser', nullable: true })
  fkfEditUser: number | null;

  @Column('nvarchar', { name: 'memo', length: 1000 })
  memo: string;

  @Column('bit', { name: 'isFinal', default: () => '(0)' })
  isFinal: boolean;

  @Column('int', { name: 'sanadTempNo', nullable: true })
  sanadTempNo: number | null;

  @Column('int', { name: 'FkfSanadTas', nullable: true })
  fkfSanadTas: number | null;

  @Column('int', { name: 'sanadTempNoTas', nullable: true })
  sanadTempNoTas: number | null;

  @Column('nvarchar', { name: 'issueDateTas', length: 10, default: () => "''" })
  issueDateTas: string;

  @Column('nvarchar', { name: 'warrantyNo', length: 50, default: () => "''" })
  warrantyNo: string;

  @Column('int', { name: 'FkfWarrantySanad', default: () => '(2)' })
  fkfWarrantySanad: number;

  @Column('int', { name: 'oldPkf', nullable: true })
  oldPkf: number | null;

  @Column('int', { name: 'FkfTreaterTafzili5', nullable: true })
  fkfTreaterTafzili5: number | null;

  @Column('int', { name: 'FkfBankAction', nullable: true })
  fkfBankAction: number | null;

  @OneToMany(
    () => CasExtWarranty,
    (casExtWarranty) => casExtWarranty.fkfWarranty,
  )
  casExtWarranties: CasExtWarranty[];
}
