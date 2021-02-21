import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_GoodCostTransfer', ['goodCostTransferId'], { unique: true })
@Entity('GoodCostTransfer', { schema: 'dbo' })
export class GoodCostTransfer {
  @PrimaryGeneratedColumn({ type: 'int', name: 'GoodCostTransferID' })
  goodCostTransferId: number;

  @Column('int', { name: 'WarehouseID' })
  warehouseId: number;

  @Column('int', { name: 'GoodsGroupID' })
  goodsGroupId: number;

  @Column('int', { name: 'GoodsGroupID2' })
  goodsGroupId2: number;

  @Column('int', { name: 'TransferCost' })
  transferCost: number;
}
