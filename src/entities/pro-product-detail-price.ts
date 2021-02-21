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

@Index('PK_proProductDetailPrice', ['pkfProductDetailPrice'], { unique: true })
@Entity('proProductDetailPrice', { schema: 'dbo' })
export class ProProductDetailPrice {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfProductDetailPrice' })
  pkfProductDetailPrice: number;

  @Column('int', { name: 'FkfStore', nullable: true })
  fkfStore: number | null;

  @Column('int', { name: 'FkfGoodsProduct', nullable: true })
  fkfGoodsProduct: number | null;

  @Column('int', { name: 'FkfGoods', nullable: true })
  fkfGoods: number | null;

  @Column('int', { name: 'amount', nullable: true })
  amount: number | null;

  @Column('int', { name: 'formul', nullable: true })
  formul: number | null;

  @Column('int', { name: 'buyFee', nullable: true })
  buyFee: number | null;

  @ManyToOne(
    () => ProProduce,
    (proProduce) => proProduce.proProductDetailPrices,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([{ name: 'FkfProduct', referencedColumnName: 'pkfProduce' }])
  fkfProduct: ProProduce;

  @RelationId(
    (proProductDetailPrice: ProProductDetailPrice) =>
      proProductDetailPrice.fkfProduct,
  )
  fkfProduct2: number | null;
}
