import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CasPayOffPortion } from './cas-pay-off-portion';

@Index('PK_casPortionType', ['pkfPortionType'], { unique: true })
@Entity('casPortionType', { schema: 'dbo' })
export class CasPortionType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfPortionType' })
  pkfPortionType: number;

  @Column('nvarchar', { name: 'portionType', length: 100 })
  portionType: string;

  @OneToMany(
    () => CasPayOffPortion,
    (casPayOffPortion) => casPayOffPortion.fkfPortionType,
  )
  casPayOffPortions: CasPayOffPortion[];
}
