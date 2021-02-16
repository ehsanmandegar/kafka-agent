import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salPacking', ['pkfPacking'], { unique: true })
@Entity('salPacking', { schema: 'dbo' })
export class SalPacking {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfPacking' })
  pkfPacking: number;

  @Column('nvarchar', { name: 'packing', length: 50, default: () => "''" })
  packing: string;

  @Column('nvarchar', { name: 'packingEN', length: 50, default: () => "''" })
  packingEn: string;

  @Column('nvarchar', { name: 'packingCode', length: 50, default: () => "''" })
  packingCode: string;
}
