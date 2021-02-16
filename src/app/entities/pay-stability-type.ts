import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PayStability } from './pay-stability';

@Index('PK_payStabilityType', ['pkfStabilityType'], { unique: true })
@Entity('payStabilityType', { schema: 'dbo' })
export class PayStabilityType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfStabilityType' })
  pkfStabilityType: number;

  @Column('nvarchar', { name: 'stabilityType', length: 50 })
  stabilityType: string;

  @OneToMany(
    () => PayStability,
    (payStability) => payStability.fkfStabilityType,
  )
  payStabilities: PayStability[];
}
