import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_WarehouseInventoryMinimum', ['warehouseInventoryMinimumId'], {
  unique: true,
})
@Entity('WarehouseInventoryMinimum', { schema: 'dbo' })
export class WarehouseInventoryMinimum {
  @PrimaryGeneratedColumn({ type: 'int', name: 'WarehouseInventoryMinimumID' })
  warehouseInventoryMinimumId: number;

  @Column('int', { name: 'WarehouseID' })
  warehouseId: number;

  @Column('int', { name: 'InventoryMinimumNumber', nullable: true })
  inventoryMinimumNumber: number | null;
}
