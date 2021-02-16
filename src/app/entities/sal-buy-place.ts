import { Column, Entity, Index, OneToMany } from 'typeorm';
import { SalContract } from './sal-contract';

@Index('PK_salBuyPlace', ['pkfbuyPlace'], { unique: true })
@Entity('salBuyPlace', { schema: 'dbo' })
export class SalBuyPlace {
  @Column('int', { primary: true, name: 'pkfbuyPlace' })
  pkfbuyPlace: number;

  @Column('nvarchar', { name: 'buyPlace', length: 100 })
  buyPlace: string;

  @OneToMany(() => SalContract, (salContract) => salContract.fkfBuyPlace)
  salContracts: SalContract[];
}
