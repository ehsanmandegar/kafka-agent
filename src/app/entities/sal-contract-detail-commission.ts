import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalContract } from './sal-contract';

@Index('PK_salContractDetailCommission', ['pkfContractDetailCommission'], {
  unique: true,
})
@Entity('salContractDetailCommission', { schema: 'dbo' })
export class SalContractDetailCommission {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfContractDetailCommission' })
  pkfContractDetailCommission: number;

  @Column('int', { name: 'FkfTreater' })
  fkfTreater: number;

  @Column('int', { name: 'FkfTreater2', nullable: true })
  fkfTreater2: number | null;

  @Column('int', { name: 'FkfMoein' })
  fkfMoein: number;

  @Column('decimal', {
    name: 'salePecent',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  salePecent: number;

  @Column('int', { name: 'weightRate' })
  weightRate: number;

  @Column('int', { name: 'constFee' })
  constFee: number;

  @Column('nvarchar', { name: 'memo', length: 250, default: () => "''" })
  memo: string;

  @ManyToOne(
    () => SalContract,
    (salContract) => salContract.salContractDetailCommissions,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([{ name: 'FkfContract', referencedColumnName: 'pkfContract' }])
  fkfContract: SalContract;

  @RelationId(
    (salContractDetailCommission: SalContractDetailCommission) =>
      salContractDetailCommission.fkfContract,
  )
  fkfContract2: number;
}
