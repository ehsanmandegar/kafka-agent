import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salOrderType', ['pkfOrderType'], { unique: true })
@Entity('salOrderType', { schema: 'dbo' })
export class SalOrderType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfOrderType' })
  pkfOrderType: number;

  @Column('nvarchar', { name: 'OrderType', length: 50 })
  orderType: string;
}
