import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('IX_casFCOblig', ['serial', 'accYear'], { unique: true })
@Index('PK_casFCOblig', ['pkfFcOblig'], { unique: true })
@Entity('casFCOblig', { schema: 'dbo' })
export class CasFcOblig {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfFCOblig' })
  pkfFcOblig: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('int', { name: 'FkfSeller' })
  fkfSeller: number;

  @Column('int', { name: 'FkfProject' })
  fkfProject: number;

  @Column('int', { name: 'currencyType' })
  currencyType: number;

  @Column('decimal', { name: 'priceCur', precision: 18, scale: 2 })
  priceCur: number;

  @Column('bigint', { name: 'currencyRate' })
  currencyRate: string;

  @Column('nvarchar', { name: 'payOffDate', length: 10 })
  payOffDate: string;

  @Column('nvarchar', { name: 'payDate', length: 10 })
  payDate: string;

  @Column('nvarchar', { name: 'memo', length: 500 })
  memo: string;

  @Column('int', { name: 'accYear', nullable: true })
  accYear: number | null;

  @Column('bigint', { name: 'totalPrice', default: () => '(0)' })
  totalPrice: string;
}
