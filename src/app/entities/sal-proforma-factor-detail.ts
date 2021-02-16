import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salProformaFactorDetail', ['pkfProformaFactorDetail'], {
  unique: true,
})
@Entity('salProformaFactorDetail', { schema: 'dbo' })
export class SalProformaFactorDetail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfProformaFactorDetail' })
  pkfProformaFactorDetail: number;

  @Column('int', { name: 'FkfFactor' })
  fkfFactor: number;

  @Column('bigint', { name: 'price' })
  price: string;

  @Column('int', { name: 'FkfContract' })
  fkfContract: number;

  @Column('int', { name: 'FkfTreater' })
  fkfTreater: number;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;
}
