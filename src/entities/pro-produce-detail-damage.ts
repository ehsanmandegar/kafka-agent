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

@Index('PK_proProduceDetailDamage', ['pkfProduceDetailDamage'], {
  unique: true,
})
@Entity('proProduceDetailDamage', { schema: 'dbo' })
export class ProProduceDetailDamage {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfProduceDetailDamage' })
  pkfProduceDetailDamage: number;

  @Column('int', { name: 'fkfGoodsProduct', nullable: true })
  fkfGoodsProduct: number | null;

  @Column('int', { name: 'FkfStore', nullable: true })
  fkfStore: number | null;

  @Column('decimal', { name: 'mainAmong', precision: 18, scale: 5 })
  mainAmong: number;

  @Column('decimal', { name: 'secondAmong', precision: 18, scale: 5 })
  secondAmong: number;

  @Column('int', { name: 'fkfProductTree', nullable: true })
  fkfProductTree: number | null;

  @Column('decimal', {
    name: 'buyFee',
    precision: 18,
    scale: 5,
    default: () => '(0)',
  })
  buyFee: number;

  @Column('decimal', {
    name: 'buyFeeA',
    precision: 18,
    scale: 5,
    default: () => '(0)',
  })
  buyFeeA: number;

  @Column('nvarchar', { name: 'orderNo', length: 50, default: () => "''" })
  orderNo: string;

  @Column('nvarchar', { name: 'tracing', length: 50, default: () => "''" })
  tracing: string;

  @ManyToOne(
    () => ProProduce,
    (proProduce) => proProduce.proProduceDetailDamages,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([{ name: 'FkfProduct', referencedColumnName: 'pkfProduce' }])
  fkfProduct: ProProduce;

  @ManyToOne(() => SalGoods, (salGoods) => salGoods.proProduceDetailDamages)
  @JoinColumn([{ name: 'FkfGoods', referencedColumnName: 'pkfGood' }])
  fkfGoods: SalGoods;

  @RelationId(
    (proProduceDetailDamage: ProProduceDetailDamage) =>
      proProduceDetailDamage.fkfProduct,
  )
  fkfProduct2: number;

  @RelationId(
    (proProduceDetailDamage: ProProduceDetailDamage) =>
      proProduceDetailDamage.fkfGoods,
  )
  fkfGoods2: number;
}
