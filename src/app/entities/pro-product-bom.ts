import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_proProductBOM', ['pkfProductBom'], { unique: true })
@Entity('proProductBOM', { schema: 'dbo' })
export class ProProductBom {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfProductBOM' })
  pkfProductBom: number;

  @Column('int', { name: 'FkfGoodsProduct' })
  fkfGoodsProduct: number;

  @Column('int', { name: 'FkfGoods' })
  fkfGoods: number;

  @Column('float', { name: 'amount1', precision: 53, default: () => '(0)' })
  amount1: number;
}
