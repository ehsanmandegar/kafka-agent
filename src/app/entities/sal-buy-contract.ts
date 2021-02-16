import {
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalPartnerContract } from './sal-partner-contract';
import { GenTreater } from './gen-treater';

@Index('PK_salBuyContract', ['pkfBuyContract'], { unique: true })
@Entity('salBuyContract', { schema: 'dbo' })
export class SalBuyContract {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfBuyContract' })
  pkfBuyContract: number;

  @ManyToOne(
    () => SalPartnerContract,
    (salPartnerContract) => salPartnerContract.salBuyContracts,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'FkfPartnerContract', referencedColumnName: 'pkfPartnerContract' },
  ])
  fkfPartnerContract: SalPartnerContract;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.salBuyContracts)
  @JoinColumn([{ name: 'FKfTreater', referencedColumnName: 'pkfTreater' }])
  fKfTreater: GenTreater;

  @RelationId(
    (salBuyContract: SalBuyContract) => salBuyContract.fkfPartnerContract,
  )
  fkfPartnerContract2: number | null;

  @RelationId((salBuyContract: SalBuyContract) => salBuyContract.fKfTreater)
  fKfTreater2: number | null;
}
