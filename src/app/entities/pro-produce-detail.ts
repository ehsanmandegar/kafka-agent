import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { ProProduce } from './pro-produce';
import { SalGoods } from './sal-goods';
import { ProProductTree } from './pro-product-tree';

@Index('IX_proProduceDetail', ['fkfProduct', 'fkfGoods'], { unique: true })
@Index('PK_proProduceDetail', ['pkfProduceDetail'], { unique: true })
@Entity('proProduceDetail', { schema: 'dbo' })
export class ProProduceDetail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfProduceDetail' })
  pkfProduceDetail: number;

  @Column('int', { name: 'FkfProduct' })
  fkfProduct: number;

  @Column('int', { name: 'FkfGoods' })
  fkfGoods: number;

  @Column('decimal', {
    name: 'mainAmong',
    nullable: true,
    precision: 18,
    scale: 6,
    default: () => '(0)',
  })
  mainAmong: number | null;

  @Column('decimal', {
    name: 'secondAmong',
    nullable: true,
    precision: 18,
    scale: 6,
    default: () => '(0)',
  })
  secondAmong: number | null;

  @Column('float', { name: 'cPay', precision: 53, default: () => '(0)' })
  cPay: number;

  @Column('float', { name: 'cLoad', precision: 53, default: () => '(0)' })
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

  @Column('decimal', {
    name: 'DirectCosts',
    precision: 18,
    scale: 5,
    default: () => '(0)',
  })
  directCosts: number;

  @Column('nvarchar', { name: 'orderNo', length: 50, default: () => "''" })
  orderNo: string;

  @Column('nvarchar', { name: 'tracing', length: 50, default: () => "''" })
  tracing: string;

  @ManyToOne(() => ProProduce, (proProduce) => proProduce.proProduceDetails, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'FkfProduct', referencedColumnName: 'pkfProduce' }])
  fkfProduct2: ProProduce;

  @ManyToOne(() => SalGoods, (salGoods) => salGoods.proProduceDetails)
  @JoinColumn([{ name: 'FkfGoods', referencedColumnName: 'pkfGood' }])
  fkfGoods2: SalGoods;

  @ManyToOne(
    () => ProProductTree,
    (proProductTree) => proProductTree.proProduceDetails,
  )
  @JoinColumn([
    { name: 'FkfProductTree', referencedColumnName: 'pkfProductTree' },
  ])
  fkfProductTree: ProProductTree;

  @RelationId(
    (proProduceDetail: ProProduceDetail) => proProduceDetail.fkfProduct2,
  )
  fkfProduct3: number;

  @RelationId(
    (proProduceDetail: ProProduceDetail) => proProduceDetail.fkfGoods2,
  )
  fkfGoods3: number;

  @RelationId(
    (proProduceDetail: ProProduceDetail) => proProduceDetail.fkfProductTree,
  )
  fkfProductTree2: number | null;
}
