import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalFactor } from './sal-factor';
import { SalContract } from './sal-contract';

@Index('IX_salContractFactorDetail', ['fkfFactor'], {})
@Index('IX_salContractFactorDetail_1', ['fkfContract'], {})
@Index('PK_salContractFactorDetail', ['pkfContractFactorDetail'], {
  unique: true,
})
@Entity('salContractFactorDetail', { schema: 'dbo' })
export class SalContractFactorDetail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfContractFactorDetail' })
  pkfContractFactorDetail: number;

  @Column('int', { name: 'FkfFactor' })
  fkfFactor: number;

  @Column('bigint', { name: 'price' })
  price: string;

  @Column('int', { name: 'FkfContract' })
  fkfContract: number;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('nvarchar', { name: 'billOfLading', length: 50, default: () => "''" })
  billOfLading: string;

  @Column('int', { name: 'FkfTreater' })
  fkfTreater: number;

  @Column('int', { name: 'FkfTreaterMoein' })
  fkfTreaterMoein: number;

  @Column('int', { name: 'FkfTreater2', nullable: true })
  fkfTreater2: number | null;

  @ManyToOne(() => SalFactor, (salFactor) => salFactor.salContractFactorDetails)
  @JoinColumn([{ name: 'FkfFactor', referencedColumnName: 'pkfFactor' }])
  fkfFactor2: SalFactor;

  @ManyToOne(
    () => SalContract,
    (salContract) => salContract.salContractFactorDetails,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([{ name: 'FkfContract', referencedColumnName: 'pkfContract' }])
  fkfContract2: SalContract;

  @RelationId(
    (salContractFactorDetail: SalContractFactorDetail) =>
      salContractFactorDetail.fkfFactor2,
  )
  fkfFactor3: number;

  @RelationId(
    (salContractFactorDetail: SalContractFactorDetail) =>
      salContractFactorDetail.fkfContract2,
  )
  fkfContract3: number;
}
