import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_accSanadDetailDelete', ['pkfSanadDetailDel'], { unique: true })
@Entity('accSanadDetailDelete', { schema: 'dbo' })
export class AccSanadDetailDelete {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfSanadDetailDel' })
  pkfSanadDetailDel: number;

  @Column('int', { name: 'articleNo', nullable: true })
  articleNo: number | null;

  @Column('int', { name: 'FkfSanad' })
  fkfSanad: number;

  @Column('nvarchar', { name: 'kol', length: 255 })
  kol: string;

  @Column('nvarchar', { name: 'moein', length: 255, default: () => "''" })
  moein: string;

  @Column('nvarchar', { name: 'tafzili', length: 255, default: () => "''" })
  tafzili: string;

  @Column('nvarchar', { name: 'description', length: 255 })
  description: string;

  @Column('bigint', { name: 'bedPrice' })
  bedPrice: string;

  @Column('bigint', { name: 'besPrice' })
  besPrice: string;

  @Column('nvarchar', { name: 'currency', length: 255, default: () => "''" })
  currency: string;

  @Column('decimal', {
    name: 'bedPriceCur',
    precision: 18,
    scale: 2,
    default: () => '0',
  })
  bedPriceCur: number;

  @Column('decimal', {
    name: 'besPriceCur',
    precision: 18,
    scale: 2,
    default: () => '0',
  })
  besPriceCur: number;

  @Column('int', { name: 'feeCurrency', default: () => '0' })
  feeCurrency: number;

  @Column('nvarchar', { name: 'deleteUser', length: 255 })
  deleteUser: string;

  @Column('nvarchar', { name: 'deleteDate', length: 10 })
  deleteDate: string;

  @Column('nvarchar', { name: 'deleteTime', length: 10 })
  deleteTime: string;
}
