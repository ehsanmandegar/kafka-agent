import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salReleasedStock', ['pkfReleasedStock'], { unique: true })
@Entity('salReleasedStock', { schema: 'dbo' })
export class SalReleasedStock {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfReleasedStock' })
  pkfReleasedStock: number;

  @Column('int', { name: 'fkfgood' })
  fkfgood: number;

  @Column('int', { name: 'fkfproject' })
  fkfproject: number;

  @Column('int', { name: 'fkfstore' })
  fkfstore: number;

  @Column('bit', { name: 'isSale' })
  isSale: boolean;

  @Column('nvarchar', { name: 'ReleasedDate', length: 50 })
  releasedDate: string;
}
