import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalPartnerContract } from './sal-partner-contract';
import { GenTreater } from './gen-treater';

@Index('PK_salPartnerContractDetail', ['pkfPartnerContractDetail'], {
  unique: true,
})
@Entity('salPartnerContractDetail', { schema: 'dbo' })
export class SalPartnerContractDetail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfPartnerContractDetail' })
  pkfPartnerContractDetail: number;

  @Column('decimal', { name: 'capitalAmount', precision: 18, scale: 2 })
  capitalAmount: number;

  @Column('decimal', { name: 'PercOfParticip', precision: 18, scale: 2 })
  percOfParticip: number;

  @Column('nvarchar', { name: 'memo', length: 500 })
  memo: string;

  @ManyToOne(
    () => SalPartnerContract,
    (salPartnerContract) => salPartnerContract.salPartnerContractDetails,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'FkfPartnerContract', referencedColumnName: 'pkfPartnerContract' },
  ])
  fkfPartnerContract: SalPartnerContract;

  @ManyToOne(
    () => GenTreater,
    (genTreater) => genTreater.salPartnerContractDetails,
  )
  @JoinColumn([
    { name: 'FKfTreaterPartner', referencedColumnName: 'pkfTreater' },
  ])
  fKfTreaterPartner: GenTreater;

  @RelationId(
    (salPartnerContractDetail: SalPartnerContractDetail) =>
      salPartnerContractDetail.fkfPartnerContract,
  )
  fkfPartnerContract2: number;

  @RelationId(
    (salPartnerContractDetail: SalPartnerContractDetail) =>
      salPartnerContractDetail.fKfTreaterPartner,
  )
  fKfTreaterPartner2: number;
}
