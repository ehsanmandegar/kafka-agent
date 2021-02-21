import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salDeclarationGoodPrice', ['pkfDeclarationGoodPrice'], {
  unique: true,
})
@Entity('salDeclarationGoodPrice', { schema: 'dbo' })
export class SalDeclarationGoodPrice {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfDeclarationGoodPrice' })
  pkfDeclarationGoodPrice: number;

  @Column('int', { name: 'FkfGoods' })
  fkfGoods: number;

  @Column('int', { name: 'FkfTreater' })
  fkfTreater: number;

  @Column('decimal', { name: 'discount', precision: 18, scale: 2 })
  discount: number;

  @Column('int', { name: 'type' })
  type: number;

  @Column('int', { name: 'FkfSaleType' })
  fkfSaleType: number;

  @Column('int', { name: 'accYear', nullable: true })
  accYear: number | null;
}
