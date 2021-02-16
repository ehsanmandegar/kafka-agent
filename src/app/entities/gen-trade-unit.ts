import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_genTradeUnit', ['pkfTradeUnit'], { unique: true })
@Entity('genTradeUnit', { schema: 'dbo' })
export class GenTradeUnit {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfTradeUnit' })
  pkfTradeUnit: number;

  @Column('nvarchar', { name: 'tradeUnit', length: 50 })
  tradeUnit: string;
}
