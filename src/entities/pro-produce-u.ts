import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProProduceCostU } from './pro-produce-cost-u';
import { ProProduceDetailU } from './pro-produce-detail-u';

@Index('PK_proProduceU', ['pkfProduceU'], { unique: true })
@Entity('proProduceU', { schema: 'dbo' })
export class ProProduceU {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfProduceU' })
  pkfProduceU: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('nvarchar', { name: 'produceDate', length: 10 })
  produceDate: string;

  @Column('int', { name: 'FkfStore' })
  fkfStore: number;

  @Column('int', { name: 'FkfGoods' })
  fkfGoods: number;

  @Column('decimal', {
    name: 'mainAmong',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  mainAmong: number | null;

  @Column('decimal', {
    name: 'secondAmong',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  secondAmong: number | null;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'FkfStatus', nullable: true })
  fkfStatus: number | null;

  @Column('int', { name: 'FkfCreateUser', nullable: true })
  fkfCreateUser: number | null;

  @Column('nvarchar', { name: 'createDate', nullable: true, length: 10 })
  createDate: string | null;

  @Column('int', { name: 'FkfEditUser', nullable: true })
  fkfEditUser: number | null;

  @Column('nvarchar', { name: 'editDate', nullable: true, length: 10 })
  editDate: string | null;

  @Column('int', { name: 'cPay' })
  cPay: number;

  @Column('int', { name: 'cLoad' })
  cLoad: number;

  @Column('decimal', {
    name: 'buyFee',
    precision: 18,
    scale: 3,
    default: () => '(0)',
  })
  buyFee: number;

  @Column('decimal', {
    name: 'buyFeeA',
    precision: 18,
    scale: 3,
    default: () => '(0)',
  })
  buyFeeA: number;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('nchar', { name: 'FkfStoreProduce', nullable: true, length: 10 })
  fkfStoreProduce: string | null;

  @OneToMany(
    () => ProProduceCostU,
    (proProduceCostU) => proProduceCostU.fkfProduceU,
  )
  proProduceCostUs: ProProduceCostU[];

  @OneToMany(
    () => ProProduceDetailU,
    (proProduceDetailU) => proProduceDetailU.fkfProduceU,
  )
  proProduceDetailUs: ProProduceDetailU[];
}
