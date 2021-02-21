import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SalStoreHouse } from './sal-store-house';
import { SalTrust } from './sal-trust';

@Index('IX_salSource', ['sourceCode'], { unique: true })
@Index('PK_salSource', ['pkfSource'], { unique: true })
@Entity('salSource', { schema: 'dbo' })
export class SalSource {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfSource' })
  pkfSource: number;

  @Column('nvarchar', { name: 'sourceCode', length: 50 })
  sourceCode: string;

  @Column('nvarchar', { name: 'source', length: 150 })
  source: string;

  @Column('bit', { name: 'active', default: () => '1' })
  active: boolean;

  @OneToMany(() => SalStoreHouse, (salStoreHouse) => salStoreHouse.fkfSource)
  salStoreHouses: SalStoreHouse[];

  @OneToMany(() => SalTrust, (salTrust) => salTrust.fkfSource)
  salTrusts: SalTrust[];
}
