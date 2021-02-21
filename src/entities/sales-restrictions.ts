import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SalesRestrictionsGoodsGroup } from './sales-restrictions-goods-group';
import { SalesRestrictionsGoodsTag } from './sales-restrictions-goods-tag';
import { SalesRestrictionsWarehouse } from './sales-restrictions-warehouse';

@Index('PK_SalesRestrictions', ['salesRestrictionsId'], { unique: true })
@Entity('SalesRestrictions', { schema: 'dbo' })
export class SalesRestrictions {
  @PrimaryGeneratedColumn({ type: 'int', name: 'SalesRestrictionsID' })
  salesRestrictionsId: number;

  @Column('nvarchar', { name: 'BrandName', nullable: true, length: 50 })
  brandName: string | null;

  @Column('int', { name: 'ConditionStockAmount', nullable: true })
  conditionStockAmount: number | null;

  @Column('int', { name: 'GoodsGroupID2', nullable: true })
  goodsGroupId2: number | null;

  @OneToMany(
    () => SalesRestrictionsGoodsGroup,
    (salesRestrictionsGoodsGroup) =>
      salesRestrictionsGoodsGroup.salesRestrictions,
  )
  salesRestrictionsGoodsGroups: SalesRestrictionsGoodsGroup[];

  @OneToMany(
    () => SalesRestrictionsGoodsTag,
    (salesRestrictionsGoodsTag) => salesRestrictionsGoodsTag.salesRestrictions,
  )
  salesRestrictionsGoodsTags: SalesRestrictionsGoodsTag[];

  @OneToMany(
    () => SalesRestrictionsWarehouse,
    (salesRestrictionsWarehouse) =>
      salesRestrictionsWarehouse.salesRestrictions,
  )
  salesRestrictionsWarehouses: SalesRestrictionsWarehouse[];
}
