import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { CasPortionType } from './cas-portion-type';

@Index('PK_casPayOffPortion', ['pkfPayOffPortion'], { unique: true })
@Entity('casPayOffPortion', { schema: 'dbo' })
export class CasPayOffPortion {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfPayOffPortion' })
  pkfPayOffPortion: number;

  @Column('bigint', { name: 'payOff' })
  payOff: string;

  @Column('nvarchar', { name: 'memo', length: 255 })
  memo: string;

  @Column('int', { name: 'FkfPortion' })
  fkfPortion: number;

  @Column('int', { name: 'FKF' })
  fkf: number;

  @ManyToOne(
    () => CasPortionType,
    (casPortionType) => casPortionType.casPayOffPortions,
  )
  @JoinColumn([
    { name: 'FkfPortionType', referencedColumnName: 'pkfPortionType' },
  ])
  fkfPortionType: CasPortionType;

  @RelationId(
    (casPayOffPortion: CasPayOffPortion) => casPayOffPortion.fkfPortionType,
  )
  fkfPortionType2: number;
}
