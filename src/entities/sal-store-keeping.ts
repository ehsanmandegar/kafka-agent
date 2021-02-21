import { Column, Entity, Index } from 'typeorm';

@Index('PK_salStoreKeeping', ['pkfStoreKeeping'], { unique: true })
@Entity('salStoreKeeping', { schema: 'dbo' })
export class SalStoreKeeping {
  @Column('int', { primary: true, name: 'pkfStoreKeeping' })
  pkfStoreKeeping: number;

  @Column('nvarchar', { name: 'storeKeeping', length: 50, default: () => "''" })
  storeKeeping: string;
}
