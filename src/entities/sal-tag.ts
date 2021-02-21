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
import { GenTreater } from './gen-treater';
import { SalInventoryCycle } from './sal-inventory-cycle';

@Index('IX_salTag', ['fkfStore', 'fkfGoods'], { unique: true })
@Index('PK_salTag', ['pkfTag'], { unique: true })
@Entity('salTag', { schema: 'dbo' })
export class SalTag {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfTag' })
  pkfTag: number;

  @Column('int', { name: 'codeTag' })
  codeTag: number;

  @Column('int', { name: 'FkfStore' })
  fkfStore: number;

  @Column('int', { name: 'FkfGoods' })
  fkfGoods: number;

  @Column('decimal', {
    name: 'firstCount',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  firstCount: number;

  @Column('decimal', {
    name: 'secondCount',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  secondCount: number;

  @Column('decimal', {
    name: 'thirdCounting',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  thirdCounting: number;

  @Column('nvarchar', { name: 'memo', length: 200 })
  memo: string;

  @Column('decimal', {
    name: 'amountAtFirst',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  amountAtFirst: number | null;

  @Column('int', { name: 'accyear', default: () => '(0)' })
  accyear: number;

  @ManyToOne(() => SalStore, (salStore) => salStore.salTags)
  @JoinColumn([{ name: 'FkfStore', referencedColumnName: 'pkfStore' }])
  fkfStore2: SalStore;

  @ManyToOne(() => SalGoods, (salGoods) => salGoods.salTags)
  @JoinColumn([{ name: 'FkfGoods', referencedColumnName: 'pkfGood' }])
  fkfGoods2: SalGoods;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.salTags)
  @JoinColumn([{ name: 'FkfOperator1', referencedColumnName: 'pkfTreater' }])
  fkfOperator: GenTreater;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.salTags2)
  @JoinColumn([{ name: 'FkfOperator2', referencedColumnName: 'pkfTreater' }])
  fkfOperator2: GenTreater;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.salTags3)
  @JoinColumn([{ name: 'FkfOperator3', referencedColumnName: 'pkfTreater' }])
  fkfOperator3: GenTreater;

  @ManyToOne(
    () => SalInventoryCycle,
    (salInventoryCycle) => salInventoryCycle.salTags,
  )
  @JoinColumn([
    { name: 'fkfproject', referencedColumnName: 'pkfInventoryCycle' },
  ])
  fkfproject: SalInventoryCycle;

  @RelationId((salTag: SalTag) => salTag.fkfStore2)
  fkfStore3: number;

  @RelationId((salTag: SalTag) => salTag.fkfGoods2)
  fkfGoods3: number;

  @RelationId((salTag: SalTag) => salTag.fkfOperator)
  fkfOperator4: number | null;

  @RelationId((salTag: SalTag) => salTag.fkfOperator2)
  fkfOperator5: number | null;

  @RelationId((salTag: SalTag) => salTag.fkfOperator3)
  fkfOperator6: number | null;

  @RelationId((salTag: SalTag) => salTag.fkfproject)
  fkfproject2: number | null;
}
