import { Column, Entity, Index } from 'typeorm';

@Index('PK_salProformaDelete', ['pkfProforma'], { unique: true })
@Entity('salProformaDelete', { schema: 'dbo' })
export class SalProformaDelete {
  @Column('int', { primary: true, name: 'pkfProforma' })
  pkfProforma: number;

  @Column('nvarchar', { name: 'treater', length: 255 })
  treater: string;

  @Column('nvarchar', { name: 'proformaDate', nullable: true, length: 10 })
  proformaDate: string | null;

  @Column('int', { name: 'accYear', nullable: true })
  accYear: number | null;

  @Column('int', { name: 'serial', nullable: true })
  serial: number | null;

  @Column('nvarchar', { name: 'memo', nullable: true, length: 255 })
  memo: string | null;

  @Column('nvarchar', { name: 'address', nullable: true, length: 255 })
  address: string | null;

  @Column('nvarchar', { name: 'createUser', nullable: true, length: 255 })
  createUser: string | null;

  @Column('nvarchar', { name: 'createDate', nullable: true, length: 10 })
  createDate: string | null;

  @Column('nvarchar', { name: 'EditUser', nullable: true, length: 255 })
  editUser: string | null;

  @Column('nvarchar', { name: 'editDate', nullable: true, length: 10 })
  editDate: string | null;

  @Column('int', { name: 'usance', nullable: true })
  usance: number | null;

  @Column('nvarchar', { name: 'getCondition', nullable: true, length: 255 })
  getCondition: string | null;

  @Column('nvarchar', { name: 'payCondition', nullable: true, length: 255 })
  payCondition: string | null;

  @Column('nvarchar', { name: 'deleteUser', length: 255 })
  deleteUser: string;

  @Column('nvarchar', { name: 'deleteDate', length: 10 })
  deleteDate: string;

  @Column('nvarchar', { name: 'deleteTime', length: 10 })
  deleteTime: string;

  @Column('int', { name: 'FkfProformaType' })
  fkfProformaType: number;
}
