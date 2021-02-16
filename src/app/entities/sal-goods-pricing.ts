import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salGoodsPricing', ['pkfGoodsPriceing'], { unique: true })
@Entity('salGoodsPricing', { schema: 'dbo' })
export class SalGoodsPricing {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfGoodsPriceing' })
  pkfGoodsPriceing: number;

  @Column('int', { name: 'FkfGoods' })
  fkfGoods: number;

  @Column('int', { name: 'FkfKindTafzili' })
  fkfKindTafzili: number;

  @Column('bigint', { name: 'price' })
  price: string;

  @Column('nvarchar', { name: 'memo', length: 500 })
  memo: string;
}
