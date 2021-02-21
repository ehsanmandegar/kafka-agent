import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('IX_proPriceGoods', ['fkfGoods'], { unique: true })
@Index('PK_proPriceGoods', ['pkfPriceGoods'], { unique: true })
@Entity('proPriceGoods', { schema: 'dbo' })
export class ProPriceGoods {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfPriceGoods' })
  pkfPriceGoods: number;

  @Column('int', { name: 'FkfGoods' })
  fkfGoods: number;

  @Column('float', { name: 'fee', precision: 53, default: () => '(0)' })
  fee: number;

  @Column('float', { name: 'buyFee', precision: 53, default: () => '(0)' })
  buyFee: number;
}
