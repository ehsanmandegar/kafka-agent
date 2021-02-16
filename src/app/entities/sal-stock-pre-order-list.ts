import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('salStockPreOrderList', { schema: 'dbo' })
export class SalStockPreOrderList {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfStockPreOrderList' })
  pkfStockPreOrderList: number;

  @Column('int', { name: 'FkfGood' })
  fkfGood: number;

  @Column('int', { name: 'FKFStore' })
  fkfStore: number;

  @Column('decimal', {
    name: 'amountforSale1',
    precision: 38,
    scale: 2,
    default: () => '(0)',
  })
  amountforSale1: number;

  @Column('decimal', {
    name: 'amountforSale2',
    precision: 38,
    scale: 2,
    default: () => '(0)',
  })
  amountforSale2: number;

  @Column('nvarchar', { name: 'memo', length: 2000, default: () => "''" })
  memo: string;

  @Column('int', { name: 'FkfCreateUser', nullable: true })
  fkfCreateUser: number | null;

  @Column('nvarchar', { name: 'createDate', length: 10, default: () => "''" })
  createDate: string;

  @Column('nvarchar', { name: 'createTime', length: 5, default: () => "''" })
  createTime: string;

  @Column('int', { name: 'FkfEditUser', nullable: true })
  fkfEditUser: number | null;

  @Column('nvarchar', { name: 'FkfEditDate', length: 10, default: () => "''" })
  fkfEditDate: string;

  @Column('nvarchar', { name: 'editTime', length: 5, default: () => "''" })
  editTime: string;

  @Column('int', { name: 'FkfProject', nullable: true })
  fkfProject: number | null;

  @Column('bit', { name: 'sendAuto', default: () => '(0)' })
  sendAuto: boolean;
}
