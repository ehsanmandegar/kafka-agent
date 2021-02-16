import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_GoodCost', ['goodCostId'], { unique: true })
@Entity('GoodCost', { schema: 'dbo' })
export class GoodCost {
  @PrimaryGeneratedColumn({ type: 'int', name: 'GoodCostID' })
  goodCostId: number;

  @Column('int', { name: 'GoodID', nullable: true })
  goodId: number | null;

  @Column('varchar', { name: 'GoodsTag', nullable: true, length: 255 })
  goodsTag: string | null;

  @Column('int', { name: 'WarehouseID', nullable: true })
  warehouseId: number | null;

  @Column('int', { name: 'GoodsGroupID', nullable: true })
  goodsGroupId: number | null;

  @Column('int', { name: 'GoodsGroupID2', nullable: true })
  goodsGroupId2: number | null;

  @Column('int', { name: 'CityID', nullable: true })
  cityId: number | null;

  @Column('bigint', { name: 'Cost', nullable: true })
  cost: string | null;

  @Column('bigint', { name: 'CostMin', nullable: true })
  costMin: string | null;

  @Column('bigint', { name: 'CostMax', nullable: true })
  costMax: string | null;

  @Column('datetime', {
    name: 'CreateDateTime',
    nullable: true,
    default: () => 'getdate()',
  })
  createDateTime: Date | null;
}
