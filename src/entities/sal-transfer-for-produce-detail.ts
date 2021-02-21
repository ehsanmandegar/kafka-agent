import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalTransferForProduce } from './sal-transfer-for-produce';
import { SalGoods } from './sal-goods';
import { SalStore } from './sal-store';
import { SalGoodType } from './sal-good-type';

@Index('PK_salTransferForProduceDetail', ['pkfTransferForProduceDetail'], {
  unique: true,
})
@Entity('salTransferForProduceDetail', { schema: 'dbo' })
export class SalTransferForProduceDetail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfTransferForProduceDetail' })
  pkfTransferForProduceDetail: number;

  @Column('int', { name: 'FkfGoodsDamage', nullable: true })
  fkfGoodsDamage: number | null;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('int', { name: 'produceFee', default: () => '(0)' })
  produceFee: number;

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

  @Column('decimal', {
    name: 'amount1Produce',
    precision: 18,
    scale: 3,
    default: () => '(0)',
  })
  amount1Produce: number;

  @Column('decimal', {
    name: 'amount2Produce',
    precision: 18,
    scale: 3,
    default: () => '(0)',
  })
  amount2Produce: number;

  @Column('decimal', {
    name: 'fee',
    precision: 18,
    scale: 3,
    default: () => '(0)',
  })
  fee: number;

  @ManyToOne(
    () => SalTransferForProduce,
    (salTransferForProduce) =>
      salTransferForProduce.salTransferForProduceDetails,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    {
      name: 'FkfTransferForProduce',
      referencedColumnName: 'pkfTransferForProduce',
    },
  ])
  fkfTransferForProduce: SalTransferForProduce;

  @ManyToOne(
    () => SalGoods,
    (salGoods) => salGoods.salTransferForProduceDetails,
  )
  @JoinColumn([{ name: 'FkfGoods', referencedColumnName: 'pkfGood' }])
  fkfGoods: SalGoods;

  @ManyToOne(
    () => SalStore,
    (salStore) => salStore.salTransferForProduceDetails,
  )
  @JoinColumn([{ name: 'FkfStore', referencedColumnName: 'pkfStore' }])
  fkfStore: SalStore;

  @ManyToOne(
    () => SalGoodType,
    (salGoodType) => salGoodType.salTransferForProduceDetails,
  )
  @JoinColumn([{ name: 'FkfGoodType', referencedColumnName: 'pkfGoodType' }])
  fkfGoodType: SalGoodType;

  @RelationId(
    (salTransferForProduceDetail: SalTransferForProduceDetail) =>
      salTransferForProduceDetail.fkfTransferForProduce,
  )
  fkfTransferForProduce2: number;

  @RelationId(
    (salTransferForProduceDetail: SalTransferForProduceDetail) =>
      salTransferForProduceDetail.fkfGoods,
  )
  fkfGoods2: number;

  @RelationId(
    (salTransferForProduceDetail: SalTransferForProduceDetail) =>
      salTransferForProduceDetail.fkfStore,
  )
  fkfStore2: number;

  @RelationId(
    (salTransferForProduceDetail: SalTransferForProduceDetail) =>
      salTransferForProduceDetail.fkfGoodType,
  )
  fkfGoodType2: number | null;
}
