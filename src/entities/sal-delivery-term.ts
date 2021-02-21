import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salDeliveryTerm', ['pkfDeliveryTerm'], { unique: true })
@Entity('salDeliveryTerm', { schema: 'dbo' })
export class SalDeliveryTerm {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfDeliveryTerm' })
  pkfDeliveryTerm: number;

  @Column('nvarchar', { name: 'deliveryTerm', length: 50, default: () => "''" })
  deliveryTerm: string;

  @Column('nvarchar', {
    name: 'deliveryTermCode',
    length: 50,
    default: () => "''",
  })
  deliveryTermCode: string;

  @Column('nvarchar', {
    name: 'deliveryTermEN',
    length: 50,
    default: () => "''",
  })
  deliveryTermEn: string;
}
