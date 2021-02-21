import { Column, Entity, Index, OneToMany } from 'typeorm';
import { SalStoreHouse } from './sal-store-house';

@Index('PK_salTypeStoreHouse', ['pkfStoreHouseType'], { unique: true })
@Entity('salTypeStoreHouse', { schema: 'dbo' })
export class SalTypeStoreHouse {
  @Column('int', { primary: true, name: 'pkfStoreHouseType' })
  pkfStoreHouseType: number;

  @Column('nvarchar', { name: 'storeHouseType', length: 50 })
  storeHouseType: string;

  @Column('int', { name: 'type' })
  type: number;

  @Column('int', { name: 'order4kardex', default: () => '(1)' })
  order4kardex: number;

  @OneToMany(
    () => SalStoreHouse,
    (salStoreHouse) => salStoreHouse.fkfTypeStoreHouse2,
  )
  salStoreHouses: SalStoreHouse[];
}
