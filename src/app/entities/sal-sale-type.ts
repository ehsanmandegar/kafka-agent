import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salSaleType', ['pkfSaleType'], { unique: true })
@Entity('salSaleType', { schema: 'dbo' })
export class SalSaleType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfSaleType' })
  pkfSaleType: number;

  @Column('nvarchar', { name: 'saleType', length: 50, default: () => "''" })
  saleType: string;

  @Column('int', { name: 'saleTime' })
  saleTime: number;
}
