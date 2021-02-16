import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CasPayOff } from './cas-pay-off';

@Index('PK_casReturnCheckOpening', ['pkfReturnCheckOpening'], { unique: true })
@Entity('casReturnChecksOpening', { schema: 'dbo' })
export class CasReturnChecksOpening {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfReturnCheckOpening' })
  pkfReturnCheckOpening: number;

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

  @Column('nvarchar', { name: 'checkBookName', length: 255 })
  checkBookName: string;

  @Column('nvarchar', { name: 'serialNo', length: 25 })
  serialNo: string;

  @Column('nvarchar', { name: 'serialDate', length: 10 })
  serialDate: string;

  @Column('bigint', { name: 'price' })
  price: string;

  @Column('nvarchar', { name: 'bank', length: 255, default: () => "''" })
  bank: string;

  @Column('nvarchar', { name: 'branchName', length: 100, default: () => "''" })
  branchName: string;

  @Column('nvarchar', {
    name: 'accountNumber',
    length: 100,
    default: () => "''",
  })
  accountNumber: string;

  @Column('nvarchar', { name: 'checkOwner', length: 100, default: () => "''" })
  checkOwner: string;

  @Column('int', { name: 'checkBookNo' })
  checkBookNo: number;

  @Column('bigint', { name: 'payoffPrice' })
  payoffPrice: string;

  @Column('nvarchar', { name: 'returnDate', length: 10, default: () => "''" })
  returnDate: string;

  @OneToMany(() => CasPayOff, (casPayOff) => casPayOff.fkfReturnCheckOpening)
  casPayOffs: CasPayOff[];
}
