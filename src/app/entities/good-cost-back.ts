import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_GoodCostBack', ['id'], { unique: true })
@Entity('GoodCostBack', { schema: 'dbo' })
export class GoodCostBack {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID' })
  id: number;

  @Column('int', { name: 'GoodCostID' })
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

  @Column('datetime', { name: 'CreateDateTime', nullable: true })
  createDateTime: Date | null;

  @Column('datetime', { name: 'eventDate', nullable: true })
  eventDate: Date | null;

  @Column('int', { name: 'UserID', nullable: true })
  userId: number | null;

  @Column('int', { name: 'Action', nullable: true })
  action: number | null;
}
