import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalStore } from './sal-store';
import { SalContract } from './sal-contract';

@Index('PK_salContractAccCoding', ['pkfContractAccCoding'], { unique: true })
@Entity('salContractAccCoding', { schema: 'dbo' })
export class SalContractAccCoding {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfContractAccCoding' })
  pkfContractAccCoding: number;

  @Column('int', { name: 'FkfTafziliPriceStock' })
  fkfTafziliPriceStock: number;

  @Column('int', { name: 'FkfTafziliPrimeCost', nullable: true })
  fkfTafziliPrimeCost: number | null;

  @Column('int', { name: 'FkfTafziliSale', nullable: true })
  fkfTafziliSale: number | null;

  @ManyToOne(() => SalStore, (salStore) => salStore.salContractAccCodings)
  @JoinColumn([{ name: 'FkfStore', referencedColumnName: 'pkfStore' }])
  fkfStore: SalStore;

  @ManyToOne(
    () => SalContract,
    (salContract) => salContract.salContractAccCodings,
  )
  @JoinColumn([{ name: 'FkfContract', referencedColumnName: 'pkfContract' }])
  fkfContract: SalContract;

  @RelationId(
    (salContractAccCoding: SalContractAccCoding) =>
      salContractAccCoding.fkfStore,
  )
  fkfStore2: number;

  @RelationId(
    (salContractAccCoding: SalContractAccCoding) =>
      salContractAccCoding.fkfContract,
  )
  fkfContract2: number;
}
