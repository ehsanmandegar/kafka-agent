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
import { PmActivityRecord } from './pm-activity-record';

@Index('PK_pmActivityRecordGoods', ['pkfActivityRecordGoods'], { unique: true })
@Entity('pmActivityRecordGoods', { schema: 'dbo' })
export class PmActivityRecordGoods {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfActivityRecordGoods' })
  pkfActivityRecordGoods: number;

  @Column('decimal', { name: 'amount', precision: 18, scale: 2 })
  amount: number;

  @ManyToOne(() => SalGoods, (salGoods) => salGoods.pmActivityRecordGoods)
  @JoinColumn([{ name: 'FKfGoods', referencedColumnName: 'pkfGood' }])
  fKfGoods: SalGoods;

  @ManyToOne(
    () => PmActivityRecord,
    (pmActivityRecord) => pmActivityRecord.pmActivityRecordGoods,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'FKfActivityRecord', referencedColumnName: 'pkfActivityRecord' },
  ])
  fKfActivityRecord: PmActivityRecord;

  @RelationId(
    (pmActivityRecordGoods: PmActivityRecordGoods) =>
      pmActivityRecordGoods.fKfGoods,
  )
  fKfGoods2: number;

  @RelationId(
    (pmActivityRecordGoods: PmActivityRecordGoods) =>
      pmActivityRecordGoods.fKfActivityRecord,
  )
  fKfActivityRecord2: number;
}
