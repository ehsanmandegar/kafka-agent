import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SalDailyPriceDetail } from './sal-daily-price-detail';

@Index('IX_salDailyPrice', ['serial', 'accYear'], { unique: true })
@Index('IX_salDailyPrice_1', ['dailyDate', 'dailyTime'], { unique: true })
@Index('PK_salDailyPrice', ['pkfDailyPrice'], { unique: true })
@Entity('salDailyPrice', { schema: 'dbo' })
export class SalDailyPrice {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfDailyPrice' })
  pkfDailyPrice: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('nvarchar', { name: 'dailyDate', length: 10 })
  dailyDate: string;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('nvarchar', { name: 'dailyTime', length: 10, default: () => "''" })
  dailyTime: string;

  @OneToMany(
    () => SalDailyPriceDetail,
    (salDailyPriceDetail) => salDailyPriceDetail.fkfDailyPrice2,
  )
  salDailyPriceDetails: SalDailyPriceDetail[];
}
