import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalGoods } from './sal-goods';
import { ProProductTree } from './pro-product-tree';

@Index('IX_proProducTreeDetail', ['fkfGoods', 'fkfProductTree'], {
  unique: true,
})
@Index('PK_proProducTreeDetail', ['pkfProducTreeDetail'], { unique: true })
@Entity('proProducTreeDetail', { schema: 'dbo' })
export class ProProducTreeDetail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfProducTreeDetail' })
  pkfProducTreeDetail: number;

  @Column('int', { name: 'FKFGoods' })
  fkfGoods: number;

  @Column('float', { name: 'amount1', precision: 53 })
  amount1: number;

  @Column('decimal', {
    name: 'amount2',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  amount2: number;

  @Column('int', { name: 'FKFProductTree' })
  fkfProductTree: number;

  @Column('decimal', {
    name: 'pricePercent',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  pricePercent: number;

  @ManyToOne(() => SalGoods, (salGoods) => salGoods.proProducTreeDetails)
  @JoinColumn([{ name: 'FKFGoods', referencedColumnName: 'pkfGood' }])
  fkfGoods2: SalGoods;

  @ManyToOne(
    () => ProProductTree,
    (proProductTree) => proProductTree.proProducTreeDetails,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'FKFProductTree', referencedColumnName: 'pkfProductTree' },
  ])
  fkfProductTree2: ProProductTree;

  @RelationId(
    (proProducTreeDetail: ProProducTreeDetail) => proProducTreeDetail.fkfGoods2,
  )
  fkfGoods3: number;

  @RelationId(
    (proProducTreeDetail: ProProducTreeDetail) =>
      proProducTreeDetail.fkfProductTree2,
  )
  fkfProductTree3: number;
}
