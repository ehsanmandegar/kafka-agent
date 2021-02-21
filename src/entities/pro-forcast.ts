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

@Index('PK_proForcast', ['pkfForcast'], { unique: true })
@Entity('proForcast', { schema: 'dbo' })
export class ProForcast {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfForcast' })
  pkfForcast: number;

  @Column('int', { name: 'accyear' })
  accyear: number;

  @Column('float', { name: 'qtyMonth1', precision: 53, default: () => '(0.0)' })
  qtyMonth1: number;

  @Column('float', { name: 'qtyMonth2', precision: 53, default: () => '(0.0)' })
  qtyMonth2: number;

  @Column('float', { name: 'qtyMonth3', precision: 53, default: () => '(0.0)' })
  qtyMonth3: number;

  @Column('float', { name: 'qtyMonth4', precision: 53, default: () => '(0.0)' })
  qtyMonth4: number;

  @Column('float', { name: 'qtyMonth5', precision: 53, default: () => '(0.0)' })
  qtyMonth5: number;

  @Column('float', { name: 'qtyMonth6', precision: 53, default: () => '(0.0)' })
  qtyMonth6: number;

  @Column('float', { name: 'qtyMonth7', precision: 53, default: () => '(0.0)' })
  qtyMonth7: number;

  @Column('float', { name: 'qtyMonth8', precision: 53, default: () => '(0.0)' })
  qtyMonth8: number;

  @Column('float', { name: 'qtyMonth9', precision: 53, default: () => '(0.0)' })
  qtyMonth9: number;

  @Column('float', {
    name: 'qtyMonth10',
    precision: 53,
    default: () => '(0.0)',
  })
  qtyMonth10: number;

  @Column('float', {
    name: 'qtyMonth11',
    precision: 53,
    default: () => '(0.0)',
  })
  qtyMonth11: number;

  @Column('float', {
    name: 'qtyMonth12',
    precision: 53,
    default: () => '(0.0)',
  })
  qtyMonth12: number;

  @ManyToOne(() => SalGoods, (salGoods) => salGoods.proForcasts)
  @JoinColumn([{ name: 'fkfGoods', referencedColumnName: 'pkfGood' }])
  fkfGoods: SalGoods;

  @ManyToOne(
    () => ProProductTree,
    (proProductTree) => proProductTree.proForcasts,
  )
  @JoinColumn([
    { name: 'FkfProductTree', referencedColumnName: 'pkfProductTree' },
  ])
  fkfProductTree: ProProductTree;

  @RelationId((proForcast: ProForcast) => proForcast.fkfGoods)
  fkfGoods2: number;

  @RelationId((proForcast: ProForcast) => proForcast.fkfProductTree)
  fkfProductTree2: number;
}
