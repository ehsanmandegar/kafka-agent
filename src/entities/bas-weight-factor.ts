import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { BasWeight } from './bas-weight';
import { SalFactorTrust } from './sal-factor-trust';

@Index('PK_basWeightFactor', ['pkfWeightFactorDetail'], { unique: true })
@Entity('basWeightFactor', { schema: 'dbo' })
export class BasWeightFactor {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfWeightFactorDetail' })
  pkfWeightFactorDetail: number;

  @Column('bigint', { name: 'price', default: () => '(0)' })
  price: string;

  @Column('int', { name: 'FkfTreaterBed' })
  fkfTreaterBed: number;

  @Column('int', { name: 'FkfTreaterBes' })
  fkfTreaterBes: number;

  @Column('int', { name: 'FkfTreaterMoeinBed' })
  fkfTreaterMoeinBed: number;

  @Column('nchar', { name: 'FkfTreaterMoeinBes', length: 10 })
  fkfTreaterMoeinBes: string;

  @Column('nvarchar', { name: 'memo', length: 50, default: () => "''" })
  memo: string;

  @ManyToOne(() => BasWeight, (basWeight) => basWeight.basWeightFactors, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'FkfWeight', referencedColumnName: 'pkfWeight' }])
  fkfWeight: BasWeight;

  @ManyToOne(
    () => SalFactorTrust,
    (salFactorTrust) => salFactorTrust.basWeightFactors,
  )
  @JoinColumn([{ name: 'FkfFactor', referencedColumnName: 'pkfFactor' }])
  fkfFactor: SalFactorTrust;

  @RelationId((basWeightFactor: BasWeightFactor) => basWeightFactor.fkfWeight)
  fkfWeight2: number;

  @RelationId((basWeightFactor: BasWeightFactor) => basWeightFactor.fkfFactor)
  fkfFactor2: number;
}
