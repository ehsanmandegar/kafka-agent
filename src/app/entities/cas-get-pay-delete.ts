import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  RelationId,
} from 'typeorm';
import { CasGetPayType } from './cas-get-pay-type';

@Index('PK_casGetPayDelete', ['pkfGetPay'], { unique: true })
@Entity('casGetPayDelete', { schema: 'dbo' })
export class CasGetPayDelete {
  @Column('int', { primary: true, name: 'pkfGetPay' })
  pkfGetPay: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('nvarchar', { name: 'treater', length: 250 })
  treater: string;

  @Column('nvarchar', { name: 'getpayDate', length: 50 })
  getpayDate: string;

  @Column('nvarchar', { name: 'currency', nullable: true, length: 250 })
  currency: string | null;

  @Column('int', { name: 'feeCurrency' })
  feeCurrency: number;

  @Column('nvarchar', { name: 'memo', length: 255 })
  memo: string;

  @Column('nvarchar', { name: 'concern', nullable: true, length: 255 })
  concern: string | null;

  @Column('int', { name: 'discount' })
  discount: number;

  @Column('decimal', { name: 'discountCur', precision: 18, scale: 2 })
  discountCur: number;

  @Column('nvarchar', { name: 'createUser', length: 255 })
  createUser: string;

  @Column('nvarchar', { name: 'createDate', length: 50 })
  createDate: string;

  @Column('nvarchar', { name: 'editUser', nullable: true, length: 255 })
  editUser: string | null;

  @Column('nvarchar', { name: 'editDate', length: 50 })
  editDate: string;

  @Column('nvarchar', { name: 'getSerialNo', length: 25 })
  getSerialNo: string;

  @Column('nvarchar', { name: 'deleteUser', nullable: true, length: 255 })
  deleteUser: string | null;

  @Column('nvarchar', { name: 'deleteDate', length: 50 })
  deleteDate: string;

  @Column('nvarchar', { name: 'deleteTime', length: 5 })
  deleteTime: string;

  @Column('nvarchar', {
    name: 'discountMemo',
    length: 255,
    default: () => "''",
  })
  discountMemo: string;

  @ManyToOne(
    () => CasGetPayType,
    (casGetPayType) => casGetPayType.casGetPayDeletes,
  )
  @JoinColumn([
    { name: 'FkfGetPayType', referencedColumnName: 'pkfGetPayType' },
  ])
  fkfGetPayType: CasGetPayType;

  @RelationId(
    (casGetPayDelete: CasGetPayDelete) => casGetPayDelete.fkfGetPayType,
  )
  fkfGetPayType2: number;
}
