import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { PmActivity } from './pm-activity';
import { SalGoods } from './sal-goods';

@Index('PK_tblActivityKala', ['pkfActivityGoods'], { unique: true })
@Entity('pmActivityGoods', { schema: 'dbo' })
export class PmActivityGoods {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfActivityGoods' })
  pkfActivityGoods: number;

  @Column('decimal', { name: 'amount', precision: 18, scale: 2 })
  amount: number;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @ManyToOne(() => PmActivity, (pmActivity) => pmActivity.pmActivityGoods, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'FKfActivity', referencedColumnName: 'pkfActivity' }])
  fKfActivity: PmActivity;

  @ManyToOne(() => SalGoods, (salGoods) => salGoods.pmActivityGoods)
  @JoinColumn([{ name: 'FKfGoods', referencedColumnName: 'pkfGood' }])
  fKfGoods: SalGoods;

  @RelationId((pmActivityGoods: PmActivityGoods) => pmActivityGoods.fKfActivity)
  fKfActivity2: number;

  @RelationId((pmActivityGoods: PmActivityGoods) => pmActivityGoods.fKfGoods)
  fKfGoods2: number;
}
