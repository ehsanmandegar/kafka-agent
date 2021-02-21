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
import { BasWeightFactor } from './bas-weight-factor';
import { GenTreater } from './gen-treater';
import { SalTrustType } from './sal-trust-type';
import { SalTrustFactorDetail } from './sal-trust-factor-detail';

@Index('PK_salFactorTrust', ['pkfFactor'], { unique: true })
@Entity('salFactorTrust', { schema: 'dbo' })
export class SalFactorTrust {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfFactor' })
  pkfFactor: number;

  @Column('nvarchar', { name: 'factor', length: 50 })
  factor: string;

  @Column('int', { name: 'type' })
  type: number;

  @Column('int', { name: 'FkfTreaterBes', nullable: true })
  fkfTreaterBes: number | null;

  @Column('int', { name: 'active', default: () => '1' })
  active: number;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'FKFConcern', nullable: true })
  fkfConcern: number | null;

  @Column('int', { name: 'oldPkf', nullable: true })
  oldPkf: number | null;

  @Column('int', { name: 'price', default: () => '0' })
  price: number;

  @Column('bit', { name: 'def', default: () => '0' })
  def: boolean;

  @Column('bit', { name: 'demo', default: () => '0' })
  demo: boolean;

  @Column('float', { name: 'vatTax', precision: 53, default: () => '(0)' })
  vatTax: number;

  @Column('float', { name: 'vatSide', precision: 53, default: () => '(0)' })
  vatSide: number;

  @Column('nvarchar', { name: 'factorCode', nullable: true, length: 50 })
  factorCode: string | null;

  @Column('int', { name: 'FkfTreaterBedMoein', nullable: true })
  fkfTreaterBedMoein: number | null;

  @Column('int', { name: 'FkfTreaterBesMoein', nullable: true })
  fkfTreaterBesMoein: number | null;

  @Column('bit', { name: 'vat', default: () => '(1)' })
  vat: boolean;

  @OneToMany(
    () => BasWeightFactor,
    (basWeightFactor) => basWeightFactor.fkfFactor,
  )
  basWeightFactors: BasWeightFactor[];

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.salFactorTrusts)
  @JoinColumn([{ name: 'FkfTreaterBed', referencedColumnName: 'pkfTreater' }])
  fkfTreaterBed: GenTreater;

  @ManyToOne(() => SalTrustType, (salTrustType) => salTrustType.salFactorTrusts)
  @JoinColumn([
    { name: 'FKFContractType', referencedColumnName: 'pkfTrustType' },
  ])
  fkfContractType: SalTrustType;

  @OneToMany(
    () => SalTrustFactorDetail,
    (salTrustFactorDetail) => salTrustFactorDetail.fkfFactor,
  )
  salTrustFactorDetails: SalTrustFactorDetail[];

  @RelationId((salFactorTrust: SalFactorTrust) => salFactorTrust.fkfTreaterBed)
  fkfTreaterBed2: number | null;

  @RelationId(
    (salFactorTrust: SalFactorTrust) => salFactorTrust.fkfContractType,
  )
  fkfContractType2: number;
}
