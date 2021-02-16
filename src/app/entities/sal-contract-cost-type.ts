import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SalContractCost } from './sal-contract-cost';

@Index('PK_salContractCostType', ['pkfContractCostType'], { unique: true })
@Entity('salContractCostType', { schema: 'dbo' })
export class SalContractCostType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfContractCostType' })
  pkfContractCostType: number;

  @Column('nvarchar', { name: 'contractCostType', length: 255 })
  contractCostType: string;

  @OneToMany(
    () => SalContractCost,
    (salContractCost) => salContractCost.fkfContractCostType,
  )
  salContractCosts: SalContractCost[];
}
