import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salContractFactorDetailDelete', ['pkfContractFactorDetailDel'], {
  unique: true,
})
@Entity('salContractFactorDetailDelete', { schema: 'dbo' })
export class SalContractFactorDetailDelete {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfContractFactorDetailDel' })
  pkfContractFactorDetailDel: number;

  @Column('nvarchar', { name: 'factor', length: 200 })
  factor: string;

  @Column('bigint', { name: 'price' })
  price: string;

  @Column('int', { name: 'FkfContract' })
  fkfContract: number;

  @Column('nvarchar', { name: 'treater', length: 200 })
  treater: string;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;
}
