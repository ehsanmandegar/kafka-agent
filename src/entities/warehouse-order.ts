import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_WarehouseOrder', ['warehouseOrderId'], { unique: true })
@Entity('WarehouseOrder', { schema: 'dbo' })
export class WarehouseOrder {
  @PrimaryGeneratedColumn({ type: 'int', name: 'WarehouseOrderID' })
  warehouseOrderId: number;

  @Column('int', { name: 'WarehouseID', nullable: true })
  warehouseId: number | null;

  @Column('int', { name: 'Orders', nullable: true })
  orders: number | null;
}
