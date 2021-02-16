import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salTrustDetailDelete', ['pkfTrustDetailDelete'], { unique: true })
@Entity('salTrustDetailDelete', { schema: 'dbo' })
export class SalTrustDetailDelete {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfTrustDetailDelete' })
  pkfTrustDetailDelete: number;

  @Column('int', { name: 'FkfTrust' })
  fkfTrust: number;

  @Column('nvarchar', { name: 'good', length: 255 })
  good: string;

  @Column('decimal', { name: 'amount1', precision: 12, scale: 2 })
  amount1: number;

  @Column('decimal', { name: 'amount2', precision: 12, scale: 2 })
  amount2: number;

  @Column('nvarchar', { name: 'mainOrderNO', length: 50 })
  mainOrderNo: string;

  @Column('nvarchar', { name: 'warehouse', length: 255 })
  warehouse: string;

  @Column('nvarchar', { name: 'orderNO', length: 50 })
  orderNo: string;

  @Column('nvarchar', { name: 'deleteUser', length: 255 })
  deleteUser: string;

  @Column('nvarchar', { name: 'deleteDate', length: 10 })
  deleteDate: string;

  @Column('nvarchar', { name: 'deleteTime', length: 15 })
  deleteTime: string;

  @Column('nvarchar', { name: 'memo', length: 255 })
  memo: string;
}
