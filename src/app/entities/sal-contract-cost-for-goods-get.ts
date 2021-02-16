import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalContractCost } from './sal-contract-cost';
import { GenTreater } from './gen-treater';
import { SalContract } from './sal-contract';

@Index(
  'IX_salBuyContractCostForGetGoods',
  ['fkfContract', 'fkfContractCost', 'fkfBesTreater'],
  { unique: true },
)
@Index('PK_salContractCostForGoodsGet', ['pkfContractCostForGoodsGet'], {
  unique: true,
})
@Entity('salContractCostForGoodsGet', { schema: 'dbo' })
export class SalContractCostForGoodsGet {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfContractCostForGoodsGet' })
  pkfContractCostForGoodsGet: number;

  @Column('int', { name: 'FkfContractCost' })
  fkfContractCost: number;

  @Column('int', { name: 'FkfBesTreater' })
  fkfBesTreater: number;

  @Column('int', { name: 'FkfContract' })
  fkfContract: number;

  @ManyToOne(
    () => SalContractCost,
    (salContractCost) => salContractCost.salContractCostForGoodsGets,
  )
  @JoinColumn([
    { name: 'FkfContractCost', referencedColumnName: 'pkfContractCost' },
  ])
  fkfContractCost2: SalContractCost;

  @ManyToOne(
    () => GenTreater,
    (genTreater) => genTreater.salContractCostForGoodsGets,
  )
  @JoinColumn([{ name: 'FkfBesTreater', referencedColumnName: 'pkfTreater' }])
  fkfBesTreater2: GenTreater;

  @ManyToOne(
    () => SalContract,
    (salContract) => salContract.salContractCostForGoodsGets,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([{ name: 'FkfContract', referencedColumnName: 'pkfContract' }])
  fkfContract2: SalContract;

  @RelationId(
    (salContractCostForGoodsGet: SalContractCostForGoodsGet) =>
      salContractCostForGoodsGet.fkfContractCost2,
  )
  fkfContractCost3: number;

  @RelationId(
    (salContractCostForGoodsGet: SalContractCostForGoodsGet) =>
      salContractCostForGoodsGet.fkfBesTreater2,
  )
  fkfBesTreater3: number;

  @RelationId(
    (salContractCostForGoodsGet: SalContractCostForGoodsGet) =>
      salContractCostForGoodsGet.fkfContract2,
  )
  fkfContract3: number;
}
