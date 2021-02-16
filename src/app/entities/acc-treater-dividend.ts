import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_accTreaterDividend', ['pkfDividend'], { unique: true })
@Entity('accTreaterDividend', { schema: 'dbo' })
export class AccTreaterDividend {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfDividend' })
  pkfDividend: number;

  @Column('int', { name: 'FkfTafzili' })
  fkfTafzili: number;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('bigint', { name: 'price', default: () => '(0)' })
  price: string;

  @Column('bigint', { name: 'benefitPrice', default: () => '(0)' })
  benefitPrice: string;

  @Column('bigint', { name: 'capitalBalancesPrice', default: () => '(0)' })
  capitalBalancesPrice: string;

  @Column('bigint', { name: 'legalReservePrice', default: () => '(0)' })
  legalReservePrice: string;

  @Column('bigint', {
    name: 'legalReservePriceCurrentYear',
    default: () => '(0)',
  })
  legalReservePriceCurrentYear: string;

  @Column('bigint', { name: 'benefitLegalReservePrice', default: () => '(0)' })
  benefitLegalReservePrice: string;

  @Column('bigint', { name: 'buyPrice', default: () => '(0)' })
  buyPrice: string;

  @Column('bigint', { name: 'benefitBuyPrice', default: () => '(0)' })
  benefitBuyPrice: string;
}
