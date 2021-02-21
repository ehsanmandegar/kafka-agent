import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalBalancingStore } from './sal-balancing-store';

@Index(
  'PK_salBalancingStoreStoreHouseDetail',
  ['pkfBalancingStoreStoreHouseDetail'],
  { unique: true },
)
@Entity('salBalancingStoreStoreHouseDetail', { schema: 'dbo' })
export class SalBalancingStoreStoreHouseDetail {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'pkfBalancingStoreStoreHouseDetail',
  })
  pkfBalancingStoreStoreHouseDetail: number;

  @Column('int', { name: 'FkfStoreHouseDetail' })
  fkfStoreHouseDetail: number;

  @ManyToOne(
    () => SalBalancingStore,
    (salBalancingStore) => salBalancingStore.salBalancingStoreStoreHouseDetails,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'FkfBalancingStore', referencedColumnName: 'pkfBalancingStore' },
  ])
  fkfBalancingStore: SalBalancingStore;

  @RelationId(
    (salBalancingStoreStoreHouseDetail: SalBalancingStoreStoreHouseDetail) =>
      salBalancingStoreStoreHouseDetail.fkfBalancingStore,
  )
  fkfBalancingStore2: number;
}
