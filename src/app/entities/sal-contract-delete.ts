import { Column, Entity, Index } from 'typeorm';

@Index('PK_salContractDelete', ['pkfContract'], { unique: true })
@Entity('salContractDelete', { schema: 'dbo' })
export class SalContractDelete {
  @Column('int', { primary: true, name: 'pkfContract' })
  pkfContract: number;

  @Column('int', { name: 'FkfContractType' })
  fkfContractType: number;

  @Column('int', { name: 'accYear', nullable: true })
  accYear: number | null;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('nvarchar', { name: 'treater', length: 200 })
  treater: string;

  @Column('nvarchar', { name: 'ContractDate', length: 10 })
  contractDate: string;

  @Column('nvarchar', { name: 'currency', length: 200, default: () => "''" })
  currency: string;

  @Column('int', { name: 'feeCurrency' })
  feeCurrency: number;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('int', { name: 'FkfStatus' })
  fkfStatus: number;

  @Column('nvarchar', { name: 'createUser', length: 255 })
  createUser: string;

  @Column('nvarchar', { name: 'createDate', length: 10 })
  createDate: string;

  @Column('nvarchar', { name: 'editUser', length: 255, default: () => "''" })
  editUser: string;

  @Column('nvarchar', { name: 'editDate', length: 10, default: () => "''" })
  editDate: string;

  @Column('nvarchar', { name: 'produceFactory', nullable: true, length: 255 })
  produceFactory: string | null;

  @Column('nvarchar', { name: 'contractNo', nullable: true, length: 25 })
  contractNo: string | null;

  @Column('nvarchar', { name: 'invoiceNo', nullable: true, length: 25 })
  invoiceNo: string | null;

  @Column('nvarchar', {
    name: 'proformaIinvoiceNo',
    nullable: true,
    length: 25,
  })
  proformaIinvoiceNo: string | null;

  @Column('nvarchar', { name: 'treaterAddress', nullable: true, length: 255 })
  treaterAddress: string | null;

  @Column('nvarchar', { name: 'getCondition', nullable: true, length: 255 })
  getCondition: string | null;

  @Column('nvarchar', { name: 'payCondition', nullable: true, length: 255 })
  payCondition: string | null;

  @Column('int', { name: 'FkfBuyPlace' })
  fkfBuyPlace: number;

  @Column('nvarchar', { name: 'agency', nullable: true, length: 255 })
  agency: string | null;

  @Column('nvarchar', { name: 'buyFactory', nullable: true, length: 255 })
  buyFactory: string | null;

  @Column('nvarchar', { name: 'deleteUser', length: 255 })
  deleteUser: string;

  @Column('nvarchar', { name: 'deleteDate', length: 10 })
  deleteDate: string;

  @Column('nvarchar', { name: 'deleteTime', length: 10 })
  deleteTime: string;

  @Column('int', { name: 'usance', nullable: true })
  usance: number | null;

  @Column('int', { name: 'FkfContractTypeBuy', nullable: true })
  fkfContractTypeBuy: number | null;
}
