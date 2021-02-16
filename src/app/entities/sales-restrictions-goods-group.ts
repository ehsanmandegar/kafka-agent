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

@Index('PK_SalesRestrictionsGoodsGroup', ['salesRestrictionsGoodsGroupId'], {
  unique: true,
})
@Entity('SalesRestrictionsGoodsGroup', { schema: 'dbo' })
export class SalesRestrictionsGoodsGroup {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'SalesRestrictionsGoodsGroupID',
  })
  salesRestrictionsGoodsGroupId: number;

  @Column('int', { name: 'GoodsGroupID' })
  goodsGroupId: number;

  @ManyToOne(
    () => SalesRestrictions,
    (salesRestrictions) => salesRestrictions.salesRestrictionsGoodsGroups,
  )
  @JoinColumn([
    {
      name: 'SalesRestrictionsID',
      referencedColumnName: 'salesRestrictionsId',
    },
  ])
  salesRestrictions: SalesRestrictions;

  @RelationId(
    (salesRestrictionsGoodsGroup: SalesRestrictionsGoodsGroup) =>
      salesRestrictionsGoodsGroup.salesRestrictions,
  )
  salesRestrictionsId: number;
}
