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

@Index('PK_proProducTreeDetailDamage', ['pkfProducTreeDetailDamage'], {
  unique: true,
})
@Entity('proProducTreeDetailDamage', { schema: 'dbo' })
export class ProProducTreeDetailDamage {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfProducTreeDetailDamage' })
  pkfProducTreeDetailDamage: number;

  @Column('float', { name: 'amount1', precision: 53 })
  amount1: number;

  @Column('float', { name: 'amount2', precision: 53 })
  amount2: number;

  @ManyToOne(() => SalGoods, (salGoods) => salGoods.proProducTreeDetailDamages)
  @JoinColumn([{ name: 'FKFGoods', referencedColumnName: 'pkfGood' }])
  fkfGoods: SalGoods;

  @ManyToOne(
    () => ProProductTree,
    (proProductTree) => proProductTree.proProducTreeDetailDamages,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'FKFProductTree', referencedColumnName: 'pkfProductTree' },
  ])
  fkfProductTree: ProProductTree;

  @RelationId(
    (proProducTreeDetailDamage: ProProducTreeDetailDamage) =>
      proProducTreeDetailDamage.fkfGoods,
  )
  fkfGoods2: number;

  @RelationId(
    (proProducTreeDetailDamage: ProProducTreeDetailDamage) =>
      proProducTreeDetailDamage.fkfProductTree,
  )
  fkfProductTree2: number;
}
