import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_casGetPayBond', ['pkfGetPayBond'], { unique: true })
@Entity('casGetPayBond', { schema: 'dbo' })
export class CasGetPayBond {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfGetPayBond' })
  pkfGetPayBond: number;

  @Column('int', { name: 'FkfGetPayBondType' })
  fkfGetPayBondType: number;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('int', { name: 'FkfTreater' })
  fkfTreater: number;

  @Column('varchar', { name: 'getpayBondDate', length: 10 })
  getpayBondDate: string;

  @Column('nvarchar', { name: 'memo', length: 255 })
  memo: string;

  @Column('int', { name: 'FkfGetPayStatus' })
  fkfGetPayStatus: number;

  @Column('int', { name: 'FkfCreateUser' })
  fkfCreateUser: number;

  @Column('varchar', { name: 'createDate', length: 10 })
  createDate: string;

  @Column('int', { name: 'FkfEditUser', nullable: true })
  fkfEditUser: number | null;

  @Column('varchar', { name: 'editDate', length: 10, default: () => "''" })
  editDate: string;

  @Column('varchar', { name: 'finalDate', length: 10, default: () => "''" })
  finalDate: string;

  @Column('int', { name: 'FkfFinalUser', nullable: true })
  fkfFinalUser: number | null;

  @Column('int', { name: 'sanadTempNo', nullable: true })
  sanadTempNo: number | null;

  @Column('bit', { name: 'sanad', default: () => '0' })
  sanad: boolean;

  @Column('int', { name: 'FkfSanad', nullable: true })
  fkfSanad: number | null;

  @Column('int', { name: 'FkfTreaterTafzili5', nullable: true })
  fkfTreaterTafzili5: number | null;

  @Column('int', { name: 'FkfTreaterTafzili6', nullable: true })
  fkfTreaterTafzili6: number | null;

  @Column('int', { name: 'FkfMarkaz', nullable: true })
  fkfMarkaz: number | null;

  @Column('int', { name: 'FkfWarrantySanad', default: () => '(2)' })
  fkfWarrantySanad: number;
}
