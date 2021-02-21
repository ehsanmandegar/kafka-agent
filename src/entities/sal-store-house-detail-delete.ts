import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('salStoreHouseDetailDelete', { schema: 'dbo' })
export class SalStoreHouseDetailDelete {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfStoreHouseDetailDel' })
  pkfStoreHouseDetailDel: number;

  @Column('int', { name: 'FkfStoreHouse' })
  fkfStoreHouse: number;

  @Column('nvarchar', { name: 'good', length: 255 })
  good: string;

  @Column('decimal', {
    name: 'amountSource1',
    precision: 18,
    scale: 2,
    default: () => '0',
  })
  amountSource1: number;

  @Column('decimal', {
    name: 'amountDestination1',
    precision: 18,
    scale: 2,
    default: () => '0',
  })
  amountDestination1: number;

  @Column('decimal', {
    name: 'amountSource2',
    precision: 18,
    scale: 2,
    default: () => '0',
  })
  amountSource2: number;

  @Column('decimal', {
    name: 'amountDestination2',
    precision: 18,
    scale: 2,
    default: () => '0',
  })
  amountDestination2: number;

  @Column('decimal', {
    name: 'amountOrder1',
    precision: 18,
    scale: 2,
    default: () => '0',
  })
  amountOrder1: number;

  @Column('decimal', {
    name: 'amountOrder2',
    precision: 18,
    scale: 2,
    default: () => '0',
  })
  amountOrder2: number;

  @Column('nvarchar', { name: 'goodType', length: 255, default: () => "''" })
  goodType: string;

  @Column('nvarchar', { name: 'deleteUser', length: 255 })
  deleteUser: string;

  @Column('nvarchar', { name: 'deleteDate', length: 10 })
  deleteDate: string;

  @Column('nvarchar', { name: 'deleteTime', length: 5 })
  deleteTime: string;

  @Column('nvarchar', { name: 'store', length: 255 })
  store: string;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('decimal', {
    name: 'amountFinal1',
    precision: 18,
    scale: 2,
    default: () => '0',
  })
  amountFinal1: number;

  @Column('decimal', { name: 'amountFinal2', precision: 18, scale: 2 })
  amountFinal2: number;
}
