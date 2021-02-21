import { Column, Entity, Index } from 'typeorm';

@Index('PK_salBuySaleType', ['pkfBuySaleType'], { unique: true })
@Entity('salBuySaleType', { schema: 'dbo' })
export class SalBuySaleType {
  @Column('int', { primary: true, name: 'pkfBuySaleType' })
  pkfBuySaleType: number;

  @Column('nvarchar', { name: 'buySaleType', length: 50 })
  buySaleType: string;
}
