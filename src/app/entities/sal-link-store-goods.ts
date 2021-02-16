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
import { SalGoods } from './sal-goods';

@Index('PK_salLinkStoreGoods', ['pkfLinkStoreGoods'], { unique: true })
@Entity('salLinkStoreGoods', { schema: 'dbo' })
export class SalLinkStoreGoods {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfLinkStoreGoods' })
  pkfLinkStoreGoods: number;

  @Column('nvarchar', { name: 'position', length: 255, default: () => "''" })
  position: string;

  @ManyToOne(() => SalStore, (salStore) => salStore.salLinkStoreGoods)
  @JoinColumn([{ name: 'FkfStore', referencedColumnName: 'pkfStore' }])
  fkfStore: SalStore;

  @ManyToOne(() => SalGoods, (salGoods) => salGoods.salLinkStoreGoods)
  @JoinColumn([{ name: 'FkfGoods', referencedColumnName: 'pkfGood' }])
  fkfGoods: SalGoods;

  @RelationId(
    (salLinkStoreGoods: SalLinkStoreGoods) => salLinkStoreGoods.fkfStore,
  )
  fkfStore2: number | null;

  @RelationId(
    (salLinkStoreGoods: SalLinkStoreGoods) => salLinkStoreGoods.fkfGoods,
  )
  fkfGoods2: number | null;
}
