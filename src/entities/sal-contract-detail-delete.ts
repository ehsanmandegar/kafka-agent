import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salContractDetailDelete', ['pkfContractDetailDel'], { unique: true })
@Entity('salContractDetailDelete', { schema: 'dbo' })
export class SalContractDetailDelete {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfContractDetailDel' })
  pkfContractDetailDel: number;

  @Column('int', { name: 'FkfContract' })
  fkfContract: number;

  @Column('nvarchar', { name: 'store', length: 150 })
  store: string;

  @Column('nvarchar', { name: 'good', length: 150 })
  good: string;

  @Column('decimal', { name: 'amount1', precision: 18, scale: 3 })
  amount1: number;

  @Column('decimal', {
    name: 'amount2',
    precision: 18,
    scale: 3,
    default: () => '0',
  })
  amount2: number;

  @Column('decimal', { name: 'fee', precision: 18, scale: 3 })
  fee: number;

  @Column('decimal', {
    name: 'feeCur',
    precision: 18,
    scale: 2,
    default: () => '0',
  })
  feeCur: number;

  @Column('tinyint', { name: 'calcBase', default: () => '1' })
  calcBase: number;

  @Column('nvarchar', { name: 'getDate', length: 10, default: () => "''" })
  getDate: string;

  @Column('nvarchar', { name: 'deleteUser', length: 255 })
  deleteUser: string;

  @Column('nvarchar', { name: 'deleteDate', length: 10 })
  deleteDate: string;

  @Column('nvarchar', { name: 'deleteTime', length: 10 })
  deleteTime: string;

  @Column('nvarchar', {
    name: 'destinationStore',
    length: 255,
    default: () => "''",
  })
  destinationStore: string;

  @Column('nvarchar', { name: 'buyContract', length: 255, default: () => "''" })
  buyContract: string;

  @Column('int', { name: 'carCount', nullable: true })
  carCount: number | null;
}
