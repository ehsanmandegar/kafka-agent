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

@Index('PK_SalesRestrictionsWarehouse', ['salesRestrictionsWarehouseId'], {
  unique: true,
})
@Entity('SalesRestrictionsWarehouse', { schema: 'dbo' })
export class SalesRestrictionsWarehouse {
  @PrimaryGeneratedColumn({ type: 'int', name: 'SalesRestrictionsWarehouseID' })
  salesRestrictionsWarehouseId: number;

  @Column('int', { name: 'WarehouseID' })
  warehouseId: number;

  @ManyToOne(
    () => SalesRestrictions,
    (salesRestrictions) => salesRestrictions.salesRestrictionsWarehouses,
  )
  @JoinColumn([
    {
      name: 'SalesRestrictionsID',
      referencedColumnName: 'salesRestrictionsId',
    },
  ])
  salesRestrictions: SalesRestrictions;

  @RelationId(
    (salesRestrictionsWarehouse: SalesRestrictionsWarehouse) =>
      salesRestrictionsWarehouse.salesRestrictions,
  )
  salesRestrictionsId: number;
}
