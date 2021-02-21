import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalDailyPrice } from './sal-daily-price';
import { SalGoods } from './sal-goods';

@Index(
  'IX_salDailyPriceDetail',
  ['fkfGoods', 'fkfProjectType', 'fkfStore', 'fkfDailyPrice'],
  { unique: true },
)
@Index('PK_salDailyPriceDetail', ['pkfDailyPriceDetail'], { unique: true })
@Entity('salDailyPriceDetail', { schema: 'dbo' })
export class SalDailyPriceDetail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfDailyPriceDetail' })
  pkfDailyPriceDetail: number;

  @Column('int', { name: 'FkfDailyPrice' })
  fkfDailyPrice: number;

  @Column('int', { name: 'FkfGoods' })
  fkfGoods: number;

  @Column('int', { name: 'fee' })
  fee: number;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('int', { name: 'FkfStore' })
  fkfStore: number;

  @Column('int', { name: 'FkfGoodType', nullable: true })
  fkfGoodType: number | null;

  @Column('int', { name: 'FkfProjectType', nullable: true })
  fkfProjectType: number | null;

  @ManyToOne(
    () => SalDailyPrice,
    (salDailyPrice) => salDailyPrice.salDailyPriceDetails,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'FkfDailyPrice', referencedColumnName: 'pkfDailyPrice' },
  ])
  fkfDailyPrice2: SalDailyPrice;

  @ManyToOne(() => SalGoods, (salGoods) => salGoods.salDailyPriceDetails)
  @JoinColumn([{ name: 'FkfGoods', referencedColumnName: 'pkfGood' }])
  fkfGoods2: SalGoods;

  @RelationId(
    (salDailyPriceDetail: SalDailyPriceDetail) =>
      salDailyPriceDetail.fkfDailyPrice2,
  )
  fkfDailyPrice3: number;

  @RelationId(
    (salDailyPriceDetail: SalDailyPriceDetail) => salDailyPriceDetail.fkfGoods2,
  )
  fkfGoods3: number;
}
