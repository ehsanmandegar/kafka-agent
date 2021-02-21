import { Column, Entity, Index } from 'typeorm';

@Index('PK_strCutDelete', ['pkfCut'], { unique: true })
@Entity('strCutDelete', { schema: 'dbo' })
export class StrCutDelete {
  @Column('int', { primary: true, name: 'pkfCut' })
  pkfCut: number;

  @Column('int', { name: 'FkfSheetType' })
  fkfSheetType: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('nvarchar', { name: 'orderDate', length: 50 })
  orderDate: string;

  @Column('nvarchar', { name: 'orderTime', length: 50 })
  orderTime: string;

  @Column('nvarchar', { name: 'deliverDate', length: 50 })
  deliverDate: string;

  @Column('nvarchar', { name: 'deliverTime', length: 50 })
  deliverTime: string;

  @Column('int', { name: 'order_NO' })
  orderNo: number;

  @Column('decimal', { name: 'tickness', precision: 18, scale: 2 })
  tickness: number;

  @Column('nvarchar', { name: 'ST', length: 50 })
  st: string;

  @Column('int', { name: 'cadence' })
  cadence: number;

  @Column('int', { name: 'width' })
  width: number;

  @Column('int', { name: 'lenght' })
  lenght: number;

  @Column('int', { name: 'lenghtCut' })
  lenghtCut: number;

  @Column('int', { name: 'widthCut' })
  widthCut: number;

  @Column('decimal', { name: 'TellLenghtCutMin', precision: 18, scale: 0 })
  tellLenghtCutMin: number;

  @Column('decimal', { name: 'TellLenghtCutMax', precision: 18, scale: 0 })
  tellLenghtCutMax: number;

  @Column('decimal', { name: 'TellWidthCutMin', precision: 18, scale: 0 })
  tellWidthCutMin: number;

  @Column('decimal', { name: 'TellWidthCutMax', precision: 18, scale: 0 })
  tellWidthCutMax: number;

  @Column('bigint', { name: 'priceCut' })
  priceCut: string;

  @Column('int', { name: 'quantity' })
  quantity: number;

  @Column('nvarchar', { name: 'description', length: 200 })
  description: string;

  @Column('int', { name: 'FkfCreateUser' })
  fkfCreateUser: number;

  @Column('int', { name: 'FkfEditUser' })
  fkfEditUser: number;

  @Column('int', { name: 'FkfFinalUser' })
  fkfFinalUser: number;

  @Column('nvarchar', { name: 'editDate', length: 50 })
  editDate: string;

  @Column('nvarchar', { name: 'createDate', length: 50 })
  createDate: string;

  @Column('nvarchar', { name: 'finalDate', length: 50 })
  finalDate: string;

  @Column('nvarchar', { name: 'createTime', length: 50 })
  createTime: string;

  @Column('nvarchar', { name: 'accYear', length: 50 })
  accYear: string;
}
