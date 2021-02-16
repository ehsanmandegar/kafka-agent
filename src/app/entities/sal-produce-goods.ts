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
import { SalContract } from './sal-contract';

@Index(
  'IX_salProduceGoods',
  ['fkfContract', 'fkfGoods', 'fkfProduceGoods', 'fkfStore'],
  { unique: true },
)
@Index('IX_salProduceGoods_1', ['fkfProduceGoods', 'fkfContract', 'fkfStore'], {
  unique: true,
})
@Index('IX_salProduceGoods_2', ['fkfContract'], {})
@Index('IX_salProduceGoods_3', ['fkfGoods'], {})
@Index('IX_salProduceGoods_4', ['fkfProduceGoods'], {})
@Index('IX_salProduceGoods_5', ['fkfStore'], {})
@Index('PK_salProduceGoods', ['pkfProduceGoods'], { unique: true })
@Entity('salProduceGoods', { schema: 'dbo' })
export class SalProduceGoods {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfProduceGoods' })
  pkfProduceGoods: number;

  @Column('int', { name: 'FkfGoods' })
  fkfGoods: number;

  @Column('int', { name: 'FkfProduceGoods' })
  fkfProduceGoods: number;

  @Column('int', { name: 'FkfContract' })
  fkfContract: number;

  @Column('int', { name: 'FkfStore' })
  fkfStore: number;

  @Column('bit', { name: 'active', default: () => '(1)' })
  active: boolean;

  @Column('decimal', {
    name: 'produceFee',
    precision: 18,
    scale: 5,
    default: () => '(0)',
  })
  produceFee: number;

  @Column('int', { name: 'produceAmount1', default: () => '(0)' })
  produceAmount1: number;

  @Column('int', { name: 'produceAmount2', default: () => '(0)' })
  produceAmount2: number;

  @ManyToOne(() => SalGoods, (salGoods) => salGoods.salProduceGoods)
  @JoinColumn([{ name: 'FkfGoods', referencedColumnName: 'pkfGood' }])
  fkfGoods2: SalGoods;

  @ManyToOne(() => SalGoods, (salGoods) => salGoods.salProduceGoods2)
  @JoinColumn([{ name: 'FkfProduceGoods', referencedColumnName: 'pkfGood' }])
  fkfProduceGoods2: SalGoods;

  @ManyToOne(() => SalContract, (salContract) => salContract.salProduceGoods, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'FkfContract', referencedColumnName: 'pkfContract' }])
  fkfContract2: SalContract;

  @RelationId((salProduceGoods: SalProduceGoods) => salProduceGoods.fkfGoods2)
  fkfGoods3: number;

  @RelationId(
    (salProduceGoods: SalProduceGoods) => salProduceGoods.fkfProduceGoods2,
  )
  fkfProduceGoods3: number;

  @RelationId(
    (salProduceGoods: SalProduceGoods) => salProduceGoods.fkfContract2,
  )
  fkfContract3: number;
}
