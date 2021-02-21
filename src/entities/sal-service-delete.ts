import { Column, Entity, Index } from 'typeorm';

@Index('PK_salServiceDelete', ['pkfService'], { unique: true })
@Entity('salServiceDelete', { schema: 'dbo' })
export class SalServiceDelete {
  @Column('int', { primary: true, name: 'pkfService' })
  pkfService: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('nvarchar', { name: 'treater', length: 255 })
  treater: string;

  @Column('nvarchar', { name: 'serviceDate', length: 10 })
  serviceDate: string;

  @Column('nvarchar', { name: 'description', length: 250 })
  description: string;

  @Column('nvarchar', { name: 'createUser', length: 250 })
  createUser: string;

  @Column('nvarchar', { name: 'editUser', length: 250 })
  editUser: string;

  @Column('nvarchar', { name: 'finalUser', length: 250 })
  finalUser: string;

  @Column('nvarchar', { name: 'createDate', length: 10 })
  createDate: string;

  @Column('nvarchar', { name: 'editDate', length: 10 })
  editDate: string;

  @Column('nvarchar', { name: 'finalDate', length: 10 })
  finalDate: string;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('nvarchar', { name: 'createTime', length: 5 })
  createTime: string;

  @Column('nvarchar', { name: 'deleteUser', length: 255 })
  deleteUser: string;

  @Column('nvarchar', { name: 'deleteDate', length: 10 })
  deleteDate: string;

  @Column('nvarchar', { name: 'deleteTime', length: 5 })
  deleteTime: string;
}
