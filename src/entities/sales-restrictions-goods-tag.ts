import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalesRestrictions } from './sales-restrictions';

@Index('PK_SalesRestrictionsGoodsTag', ['salesRestrictionsGoodsTagId'], {
  unique: true,
})
@Entity('SalesRestrictionsGoodsTag', { schema: 'dbo' })
export class SalesRestrictionsGoodsTag {
  @PrimaryGeneratedColumn({ type: 'int', name: 'SalesRestrictionsGoodsTagID' })
  salesRestrictionsGoodsTagId: number;

  @Column('nvarchar', { name: 'GoodsTag', length: 255 })
  goodsTag: string;

  @Column('int', { name: 'GoodsRestrictions' })
  goodsRestrictions: number;

  @Column('int', { name: 'Increasing', default: () => '(0)' })
  increasing: number;

  @Column('int', { name: 'Decreasing', default: () => '(0)' })
  decreasing: number;

  @ManyToOne(
    () => SalesRestrictions,
    (salesRestrictions) => salesRestrictions.salesRestrictionsGoodsTags,
  )
  @JoinColumn([
    {
      name: 'SalesRestrictionsID',
      referencedColumnName: 'salesRestrictionsId',
    },
  ])
  salesRestrictions: SalesRestrictions;

  @RelationId(
    (salesRestrictionsGoodsTag: SalesRestrictionsGoodsTag) =>
      salesRestrictionsGoodsTag.salesRestrictions,
  )
  salesRestrictionsId: number;
}
