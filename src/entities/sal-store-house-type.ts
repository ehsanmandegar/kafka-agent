import { Column, Entity, Index, OneToMany } from 'typeorm';
import { SalStoreHouse } from './sal-store-house';

@Index('PK_salStoreHouseType', ['pkfStoreHouseType'], { unique: true })
@Entity('salStoreHouseType', { schema: 'dbo' })
export class SalStoreHouseType {
  @Column('int', { primary: true, name: 'pkfStoreHouseType' })
  pkfStoreHouseType: number;

  @Column('nvarchar', { name: 'storeHouseType', length: 100 })
  storeHouseType: string;

  @OneToMany(
    () => SalStoreHouse,
    (salStoreHouse) => salStoreHouse.fkfStoreHouseType2,
  )
  salStoreHouses: SalStoreHouse[];
}
