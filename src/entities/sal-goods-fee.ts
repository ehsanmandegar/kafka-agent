import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_saleGoodsFee', ['pkfgoodsFee'], { unique: true })
@Entity('salGoodsFee', { schema: 'dbo' })
export class SalGoodsFee {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfgoodsFee' })
  pkfgoodsFee: number;

  @Column('int', { name: 'FkfGoods' })
  fkfGoods: number;

  @Column('nvarchar', { name: 'dateFee', length: 10, default: () => "''" })
  dateFee: string;

  @Column('int', { name: 'fee' })
  fee: number;
}
