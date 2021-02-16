import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { PayFactor } from './pay-factor';
import { PayContract } from './pay-contract';

@Index('PK_payContractFactors', ['pkfContractFactors'], { unique: true })
@Entity('payContractFactors', { schema: 'dbo' })
export class PayContractFactors {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfContractFactors' })
  pkfContractFactors: number;

  @Column('bit', { name: 'isCalculatableFactor' })
  isCalculatableFactor: boolean;

  @Column('bit', { name: 'isFixFactor' })
  isFixFactor: boolean;

  @Column('bit', { name: 'isOtherCostFactor' })
  isOtherCostFactor: boolean;

  @Column('int', { name: 'cost', nullable: true })
  cost: number | null;

  @ManyToOne(() => PayFactor, (payFactor) => payFactor.payContractFactors)
  @JoinColumn([{ name: 'fkfFactor', referencedColumnName: 'pkfFactor' }])
  fkfFactor: PayFactor;

  @ManyToOne(
    () => PayContract,
    (payContract) => payContract.payContractFactors,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([{ name: 'fkfContract', referencedColumnName: 'pkfContract' }])
  fkfContract: PayContract;

  @RelationId(
    (payContractFactors: PayContractFactors) => payContractFactors.fkfFactor,
  )
  fkfFactor2: number;

  @RelationId(
    (payContractFactors: PayContractFactors) => payContractFactors.fkfContract,
  )
  fkfContract2: number;
}
