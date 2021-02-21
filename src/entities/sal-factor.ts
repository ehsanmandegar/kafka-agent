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
import { SalContractFactorDetail } from './sal-contract-factor-detail';
import { GenTreater } from './gen-treater';
import { SalContractType } from './sal-contract-type';
import { SalServiceFactor } from './sal-service-factor';

@Index('PK_salFactor', ['pkfFactor'], { unique: true })
@Entity('salFactor', { schema: 'dbo' })
export class SalFactor {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfFactor' })
  pkfFactor: number;

  @Column('nvarchar', { name: 'factor', length: 200 })
  factor: string;

  @Column('int', { name: 'type' })
  type: number;

  @Column('bit', { name: 'active', default: () => '1' })
  active: boolean;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'FKFConcern', nullable: true })
  fkfConcern: number | null;

  @Column('int', { name: 'oldPkf', nullable: true })
  oldPkf: number | null;

  @Column('float', { name: 'vatTax', precision: 53, default: () => '(0)' })
  vatTax: number;

  @Column('float', { name: 'vatSide', precision: 53, default: () => '(0)' })
  vatSide: number;

  @Column('int', { name: 'FkfTreaterMoein', nullable: true })
  fkfTreaterMoein: number | null;

  @Column('nvarchar', { name: 'factorCode', nullable: true, length: 50 })
  factorCode: string | null;

  @OneToMany(
    () => SalContractFactorDetail,
    (salContractFactorDetail) => salContractFactorDetail.fkfFactor2,
  )
  salContractFactorDetails: SalContractFactorDetail[];

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.salFactors)
  @JoinColumn([{ name: 'FkfTreater', referencedColumnName: 'pkfTreater' }])
  fkfTreater: GenTreater;

  @ManyToOne(
    () => SalContractType,
    (salContractType) => salContractType.salFactors,
  )
  @JoinColumn([
    { name: 'FKFContractType', referencedColumnName: 'pkfContractType' },
  ])
  fkfContractType: SalContractType;

  @OneToMany(
    () => SalServiceFactor,
    (salServiceFactor) => salServiceFactor.fkfFactor,
  )
  salServiceFactors: SalServiceFactor[];

  @RelationId((salFactor: SalFactor) => salFactor.fkfTreater)
  fkfTreater2: number;

  @RelationId((salFactor: SalFactor) => salFactor.fkfContractType)
  fkfContractType2: number;
}
