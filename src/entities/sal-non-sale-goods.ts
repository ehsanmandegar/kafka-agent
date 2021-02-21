import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salNonSaleGoods', ['pkfNonSaleGoods'], { unique: true })
@Entity('salNonSaleGoods', { schema: 'dbo' })
export class SalNonSaleGoods {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfNonSaleGoods' })
  pkfNonSaleGoods: number;

  @Column('int', { name: 'FkfContract' })
  fkfContract: number;

  @Column('int', { name: 'FkfStore' })
  fkfStore: number;

  @Column('int', { name: 'FkfGoods' })
  fkfGoods: number;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('nvarchar', { name: 'memo', length: 250 })
  memo: string;
}
