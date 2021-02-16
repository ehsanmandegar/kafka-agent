import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalFactorTrust } from './sal-factor-trust';
import { SalTrust } from './sal-trust';
import { GenTreater } from './gen-treater';

@Index('PK_salTrustFactorDetail', ['pkfTrustFactorDetail'], { unique: true })
@Entity('salTrustFactorDetail', { schema: 'dbo' })
export class SalTrustFactorDetail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfTrustFactorDetail' })
  pkfTrustFactorDetail: number;

  @Column('bigint', { name: 'price' })
  price: string;

  @Column('int', { name: 'FkfTreaterBes' })
  fkfTreaterBes: number;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('bit', { name: 'printable', default: () => '1' })
  printable: boolean;

  @Column('int', { name: 'FkfTreaterMoeinBed' })
  fkfTreaterMoeinBed: number;

  @Column('int', { name: 'FkfTreaterMoeinBes' })
  fkfTreaterMoeinBes: number;

  @Column('int', { name: 'FkfTreaterBed2', nullable: true })
  fkfTreaterBed2: number | null;

  @ManyToOne(
    () => SalFactorTrust,
    (salFactorTrust) => salFactorTrust.salTrustFactorDetails,
  )
  @JoinColumn([{ name: 'FkfFactor', referencedColumnName: 'pkfFactor' }])
  fkfFactor: SalFactorTrust;

  @ManyToOne(() => SalTrust, (salTrust) => salTrust.salTrustFactorDetails, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'FkfTrust', referencedColumnName: 'pkfTrust' }])
  fkfTrust: SalTrust;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.salTrustFactorDetails)
  @JoinColumn([{ name: 'FkfTreaterBed', referencedColumnName: 'pkfTreater' }])
  fkfTreaterBed: GenTreater;

  @RelationId(
    (salTrustFactorDetail: SalTrustFactorDetail) =>
      salTrustFactorDetail.fkfFactor,
  )
  fkfFactor2: number;

  @RelationId(
    (salTrustFactorDetail: SalTrustFactorDetail) =>
      salTrustFactorDetail.fkfTrust,
  )
  fkfTrust2: number;

  @RelationId(
    (salTrustFactorDetail: SalTrustFactorDetail) =>
      salTrustFactorDetail.fkfTreaterBed,
  )
  fkfTreaterBed3: number;
}
