import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { PayStabilityType } from './pay-stability-type';

@Index('PK_payStability', ['pkfStability'], { unique: true })
@Entity('payStability', { schema: 'dbo' })
export class PayStability {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfStability' })
  pkfStability: number;

  @Column('int', { name: 'FkfEmployee' })
  fkfEmployee: number;

  @Column('varchar', { name: 'stabilityDate', nullable: true, length: 50 })
  stabilityDate: string | null;

  @Column('int', { name: 'sumOfWorkPerYear', nullable: true })
  sumOfWorkPerYear: number | null;

  @Column('bigint', { name: 'sumOfIncomWithTaxCurrentYear', nullable: true })
  sumOfIncomWithTaxCurrentYear: string | null;

  @Column('bigint', { name: 'sumOfPayedTaxCurrentYear', nullable: true })
  sumOfPayedTaxCurrentYear: string | null;

  @Column('int', { name: 'notPayedRountCost', nullable: true })
  notPayedRountCost: number | null;

  @Column('varchar', { name: 'baseDate', nullable: true, length: 10 })
  baseDate: string | null;

  @Column('int', { name: 'sanavatDayes', nullable: true })
  sanavatDayes: number | null;

  @Column('int', { name: 'sanavatSave', nullable: true })
  sanavatSave: number | null;

  @Column('int', { name: 'eydiWork', nullable: true })
  eydiWork: number | null;

  @Column('varchar', { name: 'remainedOff', nullable: true, length: 10 })
  remainedOff: string | null;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @ManyToOne(
    () => PayStabilityType,
    (payStabilityType) => payStabilityType.payStabilities,
  )
  @JoinColumn([
    { name: 'FkfStabilityType', referencedColumnName: 'pkfStabilityType' },
  ])
  fkfStabilityType: PayStabilityType;

  @RelationId((payStability: PayStability) => payStability.fkfStabilityType)
  fkfStabilityType2: number;
}
