import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salTransferDetailDelete', ['pkfTransferDetailDel'], { unique: true })
@Entity('salTransferDetailDelete', { schema: 'dbo' })
export class SalTransferDetailDelete {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfTransferDetailDel' })
  pkfTransferDetailDel: number;

  @Column('int', { name: 'FkfTransfer' })
  fkfTransfer: number;

  @Column('nvarchar', { name: 'startStore', nullable: true, length: 255 })
  startStore: string | null;

  @Column('nvarchar', { name: 'startGoods', nullable: true, length: 255 })
  startGoods: string | null;

  @Column('decimal', {
    name: 'startAmount1',
    nullable: true,
    precision: 18,
    scale: 3,
  })
  startAmount1: number | null;

  @Column('decimal', {
    name: 'startAmount2',
    nullable: true,
    precision: 18,
    scale: 3,
  })
  startAmount2: number | null;

  @Column('nvarchar', { name: 'endStore', nullable: true, length: 255 })
  endStore: string | null;

  @Column('nvarchar', { name: 'endGoods', nullable: true, length: 255 })
  endGoods: string | null;

  @Column('decimal', {
    name: 'endAmount1',
    nullable: true,
    precision: 18,
    scale: 3,
  })
  endAmount1: number | null;

  @Column('decimal', {
    name: 'endAmount2',
    nullable: true,
    precision: 18,
    scale: 3,
  })
  endAmount2: number | null;

  @Column('nvarchar', { name: 'getNo', nullable: true, length: 50 })
  getNo: string | null;

  @Column('nvarchar', { name: 'outPutNo', nullable: true, length: 25 })
  outPutNo: string | null;

  @Column('nvarchar', { name: 'deleteUser', length: 255 })
  deleteUser: string;

  @Column('nvarchar', { name: 'deleteDate', length: 10 })
  deleteDate: string;

  @Column('nvarchar', { name: 'deleteTime', length: 10 })
  deleteTime: string;
}
