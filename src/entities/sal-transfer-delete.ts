import { Column, Entity, Index } from 'typeorm';

@Index('PK_salTransferDelete', ['pkfTransfer'], { unique: true })
@Entity('salTransferDelete', { schema: 'dbo' })
export class SalTransferDelete {
  @Column('int', { primary: true, name: 'pkfTransfer' })
  pkfTransfer: number;

  @Column('char', { name: 'accYear', length: 10 })
  accYear: string;

  @Column('char', { name: 'serial', length: 10 })
  serial: string;

  @Column('nvarchar', { name: 'contract', length: 50 })
  contract: string;

  @Column('nvarchar', { name: 'transferDate', length: 10 })
  transferDate: string;

  @Column('nvarchar', { name: 'carNo', nullable: true, length: 25 })
  carNo: string | null;

  @Column('nvarchar', { name: 'billNo', nullable: true, length: 25 })
  billNo: string | null;

  @Column('nvarchar', { name: 'driverName', nullable: true, length: 150 })
  driverName: string | null;

  @Column('nvarchar', { name: 'porterage', nullable: true, length: 255 })
  porterage: string | null;

  @Column('nvarchar', { name: 'memo', nullable: true, length: 255 })
  memo: string | null;

  @Column('nvarchar', { name: 'createUser', nullable: true, length: 255 })
  createUser: string | null;

  @Column('nvarchar', { name: 'createDate', nullable: true, length: 10 })
  createDate: string | null;

  @Column('nvarchar', { name: 'editUser', nullable: true, length: 255 })
  editUser: string | null;

  @Column('nvarchar', { name: 'editDate', nullable: true, length: 10 })
  editDate: string | null;

  @Column('nvarchar', { name: 'deleteUser', length: 255 })
  deleteUser: string;

  @Column('nvarchar', { name: 'deleteDate', length: 10 })
  deleteDate: string;

  @Column('nvarchar', { name: 'deleteTime', length: 10 })
  deleteTime: string;

  @Column('int', { name: 'FkfTransferType' })
  fkfTransferType: number;
}
