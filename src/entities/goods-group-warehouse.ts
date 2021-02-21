import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_GoodsGroupWarehouse', ['goodsGroupWarehouseId'], { unique: true })
@Entity('GoodsGroupWarehouse', { schema: 'dbo' })
export class GoodsGroupWarehouse {
  @PrimaryGeneratedColumn({ type: 'int', name: 'GoodsGroupWarehouseID' })
  goodsGroupWarehouseId: number;

  @Column('int', { name: 'GoodsGroupID2' })
  goodsGroupId2: number;

  @Column('int', { name: 'GoodsGroupID' })
  goodsGroupId: number;

  @Column('int', { name: 'WarehouseID' })
  warehouseId: number;
}
