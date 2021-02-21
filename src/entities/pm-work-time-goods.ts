import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalGoods } from './sal-goods';
import { PmTimeWork } from './pm-time-work';

@Index('PK_pmWorkTimeGoods', ['pkfWorkTimeGoods'], { unique: true })
@Entity('pmWorkTimeGoods', { schema: 'dbo' })
export class PmWorkTimeGoods {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfWorkTimeGoods' })
  pkfWorkTimeGoods: number;

  @Column('decimal', { name: 'amount', precision: 18, scale: 2 })
  amount: number;

  @ManyToOne(() => SalGoods, (salGoods) => salGoods.pmWorkTimeGoods)
  @JoinColumn([{ name: 'FKfGoods', referencedColumnName: 'pkfGood' }])
  fKfGoods: SalGoods;

  @ManyToOne(() => PmTimeWork, (pmTimeWork) => pmTimeWork.pmWorkTimeGoods, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'FKfTimeWork', referencedColumnName: 'pkfTimeWork' }])
  fKfTimeWork: PmTimeWork;

  @RelationId((pmWorkTimeGoods: PmWorkTimeGoods) => pmWorkTimeGoods.fKfGoods)
  fKfGoods2: number;

  @RelationId((pmWorkTimeGoods: PmWorkTimeGoods) => pmWorkTimeGoods.fKfTimeWork)
  fKfTimeWork2: number;
}
