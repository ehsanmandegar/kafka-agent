import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salCommodityGoods', ['pkfCommodityGoods'], { unique: true })
@Entity('salCommodityGoods', { schema: 'dbo' })
export class SalCommodityGoods {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfCommodityGoods' })
  pkfCommodityGoods: number;

  @Column('int', { name: 'commodity', default: () => '(0)' })
  commodity: number;

  @Column('int', { name: 'FkfGoods', nullable: true })
  fkfGoods: number | null;

  @Column('int', { name: 'accYear', nullable: true })
  accYear: number | null;
}
