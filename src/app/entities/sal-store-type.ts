import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalStore } from './sal-store';
import { AccMoein } from './acc-moein';

@Index('IX_salStoreType', ['codeStoreType', 'accYear'], { unique: true })
@Index('IX_salStoreType_1', ['storeType', 'accYear'], { unique: true })
@Index('PK_salStoreType', ['pkfStoreType'], { unique: true })
@Entity('salStoreType', { schema: 'dbo' })
export class SalStoreType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfStoreType' })
  pkfStoreType: number;

  @Column('nvarchar', { name: 'storeType', length: 50 })
  storeType: string;

  @Column('nvarchar', { name: 'codeStoreType', nullable: true, length: 50 })
  codeStoreType: string | null;

  @Column('int', { name: 'accYear', nullable: true })
  accYear: number | null;

  @Column('int', { name: 'oldPkf', nullable: true })
  oldPkf: number | null;

  @Column('int', { name: 'FkfSaleExternal', nullable: true })
  fkfSaleExternal: number | null;

  @OneToMany(() => SalStore, (salStore) => salStore.fkfStoreType)
  salStores: SalStore[];

  @ManyToOne(() => AccMoein, (accMoein) => accMoein.salStoreTypes)
  @JoinColumn([{ name: 'FkfPriceStock', referencedColumnName: 'pkfMoein' }])
  fkfPriceStock: AccMoein;

  @ManyToOne(() => AccMoein, (accMoein) => accMoein.salStoreTypes2)
  @JoinColumn([{ name: 'FkfPrimeCost', referencedColumnName: 'pkfMoein' }])
  fkfPrimeCost: AccMoein;

  @ManyToOne(() => AccMoein, (accMoein) => accMoein.salStoreTypes3)
  @JoinColumn([{ name: 'FkfSale', referencedColumnName: 'pkfMoein' }])
  fkfSale: AccMoein;

  @RelationId((salStoreType: SalStoreType) => salStoreType.fkfPriceStock)
  fkfPriceStock2: number | null;

  @RelationId((salStoreType: SalStoreType) => salStoreType.fkfPrimeCost)
  fkfPrimeCost2: number | null;

  @RelationId((salStoreType: SalStoreType) => salStoreType.fkfSale)
  fkfSale2: number | null;
}
