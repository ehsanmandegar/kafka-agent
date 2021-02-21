import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('IX_salOverLoad', ['fkfContract', 'fkfStore', 'fkfGoods'], {
  unique: true,
})
@Index('PK_salOverLoad', ['pkfOverLoad'], { unique: true })
@Entity('salOverLoad', { schema: 'dbo' })
export class SalOverLoad {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfOverLoad' })
  pkfOverLoad: number;

  @Column('int', { name: 'FkfContract' })
  fkfContract: number;

  @Column('int', { name: 'FkfStore' })
  fkfStore: number;

  @Column('int', { name: 'FkfGoods' })
  fkfGoods: number;

  @Column('decimal', { name: 'amount', precision: 18, scale: 2 })
  amount: number;

  @Column('int', { name: 'overLoadType' })
  overLoadType: number;

  @Column('int', { name: 'sanadTempNo' })
  sanadTempNo: number;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('nvarchar', { name: 'overLaodDate', length: 10 })
  overLaodDate: string;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('bigint', { name: 'price' })
  price: string;
}
