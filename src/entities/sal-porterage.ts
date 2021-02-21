import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SalStoreHouse } from './sal-store-house';

@Index('IX_salPorterage', ['porterageCode'], { unique: true })
@Index('IX_salPorterage_1', ['porterage'], { unique: true })
@Index('PK_salPorterage', ['pkfPorterage'], { unique: true })
@Entity('salPorterage', { schema: 'dbo' })
export class SalPorterage {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfPorterage' })
  pkfPorterage: number;

  @Column('nvarchar', {
    name: 'porterageCode',
    unique: true,
    length: 50,
    default: () => "''",
  })
  porterageCode: string;

  @Column('nvarchar', { name: 'porterage', unique: true, length: 50 })
  porterage: string;

  @Column('nvarchar', { name: 'porterageEN', length: 50, default: () => "''" })
  porterageEn: string;

  @Column('nvarchar', { name: 'address', default: () => "''" })
  address: string;

  @Column('nvarchar', { name: 'tell', length: 50, default: () => "''" })
  tell: string;

  @OneToMany(() => SalStoreHouse, (salStoreHouse) => salStoreHouse.fkfPorterage)
  salStoreHouses: SalStoreHouse[];
}
