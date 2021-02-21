import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  RelationId,
} from 'typeorm';
import { SalTrustType } from './sal-trust-type';

@Index('PK_salTrustDelete', ['pkfTrust'], { unique: true })
@Entity('salTrustDelete', { schema: 'dbo' })
export class SalTrustDelete {
  @Column('int', { primary: true, name: 'pkfTrust' })
  pkfTrust: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('nvarchar', { name: 'trustDate', length: 10 })
  trustDate: string;

  @Column('nvarchar', { name: 'treater', length: 255 })
  treater: string;

  @Column('nvarchar', { name: 'store', length: 255 })
  store: string;

  @Column('nvarchar', { name: 'billOfLading', length: 100 })
  billOfLading: string;

  @Column('nvarchar', { name: 'source', nullable: true, length: 255 })
  source: string | null;

  @Column('nvarchar', { name: 'truckNO', nullable: true, length: 50 })
  truckNo: string | null;

  @Column('nvarchar', { name: 'memo', length: 255 })
  memo: string;

  @Column('nvarchar', { name: 'createDate', length: 10 })
  createDate: string;

  @Column('nvarchar', { name: 'editDate', length: 10 })
  editDate: string;

  @Column('nvarchar', { name: 'createUser', length: 255 })
  createUser: string;

  @Column('nvarchar', { name: 'editUser', length: 255 })
  editUser: string;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'weightWithLoad', nullable: true })
  weightWithLoad: number | null;

  @Column('int', { name: 'weightWithOutLoad', nullable: true })
  weightWithOutLoad: number | null;

  @Column('int', { name: 'weightSource', nullable: true })
  weightSource: number | null;

  @Column('nvarchar', { name: 'orderNO', nullable: true, length: 50 })
  orderNo: string | null;

  @Column('nvarchar', { name: 'getter', length: 255 })
  getter: string;

  @Column('nvarchar', { name: 'exitTime', length: 15 })
  exitTime: string;

  @Column('nvarchar', { name: 'createTime', length: 15 })
  createTime: string;

  @Column('nvarchar', { name: 'path', length: 255 })
  path: string;

  @Column('nvarchar', { name: 'mainOrderNO', length: 50 })
  mainOrderNo: string;

  @Column('nvarchar', { name: 'deleteUser', length: 255 })
  deleteUser: string;

  @Column('nvarchar', { name: 'deleteDate', length: 10 })
  deleteDate: string;

  @Column('nvarchar', { name: 'deleteTime', length: 5 })
  deleteTime: string;

  @ManyToOne(() => SalTrustType, (salTrustType) => salTrustType.salTrustDeletes)
  @JoinColumn([{ name: 'FkfTrustType', referencedColumnName: 'pkfTrustType' }])
  fkfTrustType: SalTrustType;

  @RelationId((salTrustDelete: SalTrustDelete) => salTrustDelete.fkfTrustType)
  fkfTrustType2: number;
}
