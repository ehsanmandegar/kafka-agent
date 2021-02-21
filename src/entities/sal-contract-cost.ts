import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { GenTreater } from './gen-treater';
import { SalContractCostType } from './sal-contract-cost-type';
import { SalContractCostForGoodsGet } from './sal-contract-cost-for-goods-get';
import { SalTransferCostDetail } from './sal-transfer-cost-detail';

@Index('IX_salContractCost', ['contractCostCode', 'accYear'], { unique: true })
@Index('PK_salContractCost', ['pkfContractCost'], { unique: true })
@Entity('salContractCost', { schema: 'dbo' })
export class SalContractCost {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfContractCost' })
  pkfContractCost: number;

  @Column('nvarchar', { name: 'contractCost', length: 150 })
  contractCost: string;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'oldPkf', nullable: true })
  oldPkf: number | null;

  @Column('int', { name: 'FkfTreaterMoein', nullable: true })
  fkfTreaterMoein: number | null;

  @Column('nvarchar', {
    name: 'contractCostCode',
    length: 50,
    default: () => "''",
  })
  contractCostCode: string;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.salContractCosts)
  @JoinColumn([{ name: 'FkfBesTreater', referencedColumnName: 'pkfTreater' }])
  fkfBesTreater: GenTreater;

  @ManyToOne(
    () => SalContractCostType,
    (salContractCostType) => salContractCostType.salContractCosts,
  )
  @JoinColumn([
    {
      name: 'FkfContractCostType',
      referencedColumnName: 'pkfContractCostType',
    },
  ])
  fkfContractCostType: SalContractCostType;

  @OneToMany(
    () => SalContractCostForGoodsGet,
    (salContractCostForGoodsGet) => salContractCostForGoodsGet.fkfContractCost2,
  )
  salContractCostForGoodsGets: SalContractCostForGoodsGet[];

  @OneToMany(
    () => SalTransferCostDetail,
    (salTransferCostDetail) => salTransferCostDetail.fkfContractCost,
  )
  salTransferCostDetails: SalTransferCostDetail[];

  @RelationId(
    (salContractCost: SalContractCost) => salContractCost.fkfBesTreater,
  )
  fkfBesTreater2: number | null;

  @RelationId(
    (salContractCost: SalContractCost) => salContractCost.fkfContractCostType,
  )
  fkfContractCostType2: number;
}
