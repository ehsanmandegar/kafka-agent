import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CasPayOff } from './cas-pay-off';

@Index('PK_casGetPayOpening', ['pkfGetPayOpening'], { unique: true })
@Entity('casGetPayOpening', { schema: 'dbo' })
export class CasGetPayOpening {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfGetPayOpening' })
  pkfGetPayOpening: number;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('int', { name: 'FkfTreater' })
  fkfTreater: number;

  @Column('nvarchar', { name: 'getpayDate', length: 10 })
  getpayDate: string;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('nvarchar', { name: 'concern', length: 255, default: () => "''" })
  concern: string;

  @Column('bigint', { name: 'price' })
  price: string;

  @Column('bigint', { name: 'payoffPrice' })
  payoffPrice: string;

  @Column('int', { name: 'FkfGetPayType' })
  fkfGetPayType: number;

  @OneToMany(() => CasPayOff, (casPayOff) => casPayOff.fkfGetPayOpening)
  casPayOffs: CasPayOff[];

  @OneToMany(() => CasPayOff, (casPayOff) => casPayOff.fkfGetPayOpeningPay)
  casPayOffs2: CasPayOff[];
}
