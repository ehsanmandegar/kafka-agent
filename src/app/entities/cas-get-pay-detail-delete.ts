import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { CasType } from './cas-type';

@Index('PK_casGetPayDetailDelete', ['pkfGetPayDetailDel'], { unique: true })
@Entity('casGetPayDetailDelete', { schema: 'dbo' })
export class CasGetPayDetailDelete {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfGetPayDetailDel' })
  pkfGetPayDetailDel: number;

  @Column('int', { name: 'FkfGetPay' })
  fkfGetPay: number;

  @Column('nvarchar', { name: 'treater', length: 250 })
  treater: string;

  @Column('nvarchar', { name: 'serialNo', length: 50 })
  serialNo: string;

  @Column('char', { name: 'serialDate', length: 10 })
  serialDate: string;

  @Column('bigint', { name: 'price' })
  price: string;

  @Column('decimal', { name: 'priceCur', precision: 18, scale: 2 })
  priceCur: number;

  @Column('nvarchar', { name: 'Bank', length: 250, default: () => "''" })
  bank: string;

  @Column('nvarchar', { name: 'branchName', length: 50 })
  branchName: string;

  @Column('nvarchar', { name: 'accountNumber', length: 100 })
  accountNumber: string;

  @Column('nvarchar', { name: 'checkOwner', length: 100 })
  checkOwner: string;

  @Column('int', { name: 'checkBookNo', nullable: true })
  checkBookNo: number | null;

  @Column('nvarchar', { name: 'memo', length: 255 })
  memo: string;

  @Column('nvarchar', { name: 'deleteUser', length: 255 })
  deleteUser: string;

  @Column('nvarchar', { name: 'deleteDate', length: 10 })
  deleteDate: string;

  @Column('nvarchar', { name: 'deleteTime', length: 10 })
  deleteTime: string;

  @ManyToOne(() => CasType, (casType) => casType.casGetPayDetailDeletes)
  @JoinColumn([{ name: 'FkfType', referencedColumnName: 'pkfType' }])
  fkfType: CasType;

  @RelationId(
    (casGetPayDetailDelete: CasGetPayDetailDelete) =>
      casGetPayDetailDelete.fkfType,
  )
  fkfType2: number;
}
