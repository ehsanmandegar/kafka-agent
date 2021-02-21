import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { StrSheetType } from './str-sheet-type';

@Index('PK_strCut', ['pkfCut'], { unique: true })
@Entity('strCut', { schema: 'dbo' })
export class StrCut {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfCut' })
  pkfCut: number;

  @Column('int', { name: 'FkfCutType' })
  fkfCutType: number;

  @Column('int', { name: 'FkfPriority' })
  fkfPriority: number;

  @Column('int', { name: 'FkfStatus' })
  fkfStatus: number;

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

  @Column('nvarchar', { name: 'order_NO', length: 100 })
  orderNo: string;

  @Column('decimal', { name: 'tickness', precision: 18, scale: 2 })
  tickness: number;

  @Column('nvarchar', { name: 'ST', length: 50 })
  st: string;

  @Column('int', { name: 'cadence' })
  cadence: number;

  @Column('int', { name: 'width' })
  width: number;

  @Column('decimal', { name: 'lenght', precision: 24, scale: 0 })
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

  @Column('nvarchar', { name: 'description', length: 200, default: () => "''" })
  description: string;

  @Column('int', { name: 'FkfCreateUser' })
  fkfCreateUser: number;

  @Column('int', { name: 'FkfEditUser', default: () => '0' })
  fkfEditUser: number;

  @Column('int', { name: 'FkfFinalUser', default: () => '0' })
  fkfFinalUser: number;

  @Column('nvarchar', { name: 'editDate', length: 50, default: () => '0' })
  editDate: string;

  @Column('nvarchar', { name: 'createDate', length: 50 })
  createDate: string;

  @Column('nvarchar', { name: 'finalDate', length: 50, default: () => '0' })
  finalDate: string;

  @Column('nvarchar', { name: 'createTime', length: 50 })
  createTime: string;

  @Column('nvarchar', { name: 'accYear', length: 50 })
  accYear: string;

  @Column('int', { name: 'bandal_Sheet_NO' })
  bandalSheetNo: number;

  @Column('int', { name: 'calcType' })
  calcType: number;

  @Column('int', { name: 'FkfTreater' })
  fkfTreater: number;

  @Column('int', { name: 'FkfGoods' })
  fkfGoods: number;

  @ManyToOne(() => StrSheetType, (strSheetType) => strSheetType.strCuts)
  @JoinColumn([{ name: 'FkfSheetType', referencedColumnName: 'pkfSheetType' }])
  fkfSheetType: StrSheetType;

  @RelationId((strCut: StrCut) => strCut.fkfSheetType)
  fkfSheetType2: number;
}
