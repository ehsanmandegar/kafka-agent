import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_WarehouseLocation', ['warehouseLocationId'], { unique: true })
@Entity('WarehouseLocation', { schema: 'dbo' })
export class WarehouseLocation {
  @PrimaryGeneratedColumn({ type: 'int', name: 'WarehouseLocationID' })
  warehouseLocationId: number;

  @Column('int', { name: 'WarehouseID', nullable: true })
  warehouseId: number | null;

  @Column('int', { name: 'CityID', nullable: true })
  cityId: number | null;

  @Column('nvarchar', {
    name: 'WarehouseTitleMessage',
    nullable: true,
    length: 50,
  })
  warehouseTitleMessage: string | null;

  @Column('bit', { name: 'MessageIsMyVoucherNo', default: () => '(0)' })
  messageIsMyVoucherNo: boolean;
}
