import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalDailyProduce } from './sal-daily-produce';
import { SalGoods } from './sal-goods';
import { SalStore } from './sal-store';
import { SalGoodType } from './sal-good-type';

@Index('PK_salDailyProduceDetail', ['pkfDailyProduceDetail'], { unique: true })
@Entity('salDailyProduceDetail', { schema: 'dbo' })
export class SalDailyProduceDetail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfDailyProduceDetail' })
  pkfDailyProduceDetail: number;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('decimal', {
    name: 'amount1',
    precision: 18,
    scale: 3,
    default: () => '(0)',
  })
  amount1: number;

  @Column('decimal', {
    name: 'amount2',
    precision: 18,
    scale: 3,
    default: () => '(0)',
  })
  amount2: number;

  @ManyToOne(
    () => SalDailyProduce,
    (salDailyProduce) => salDailyProduce.salDailyProduceDetails,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'FkfDailyProduce', referencedColumnName: 'pkfDailyProduce' },
  ])
  fkfDailyProduce: SalDailyProduce;

  @ManyToOne(() => SalGoods, (salGoods) => salGoods.salDailyProduceDetails)
  @JoinColumn([{ name: 'FkfGoods', referencedColumnName: 'pkfGood' }])
  fkfGoods: SalGoods;

  @ManyToOne(() => SalStore, (salStore) => salStore.salDailyProduceDetails)
  @JoinColumn([{ name: 'FkfStore', referencedColumnName: 'pkfStore' }])
  fkfStore: SalStore;

  @ManyToOne(
    () => SalGoodType,
    (salGoodType) => salGoodType.salDailyProduceDetails,
  )
  @JoinColumn([{ name: 'FkfGoodType', referencedColumnName: 'pkfGoodType' }])
  fkfGoodType: SalGoodType;

  @RelationId(
    (salDailyProduceDetail: SalDailyProduceDetail) =>
      salDailyProduceDetail.fkfDailyProduce,
  )
  fkfDailyProduce2: number;

  @RelationId(
    (salDailyProduceDetail: SalDailyProduceDetail) =>
      salDailyProduceDetail.fkfGoods,
  )
  fkfGoods2: number;

  @RelationId(
    (salDailyProduceDetail: SalDailyProduceDetail) =>
      salDailyProduceDetail.fkfStore,
  )
  fkfStore2: number;

  @RelationId(
    (salDailyProduceDetail: SalDailyProduceDetail) =>
      salDailyProduceDetail.fkfGoodType,
  )
  fkfGoodType2: number;
}
