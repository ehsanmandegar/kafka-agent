import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { GenTreater } from './gen-treater';

@Index('IX_casPayOrder', ['serialNo', 'accYear', 'fkfTreater'], {
  unique: true,
})
@Index('IX_casPayOrder_1', ['serial', 'accYear'], { unique: true })
@Index('PK_casPayOrder', ['pkfPayOrder'], { unique: true })
@Entity('casPayOrder', { schema: 'dbo' })
export class CasPayOrder {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfPayOrder' })
  pkfPayOrder: number;

  @Column('int', { name: 'FkfTreater' })
  fkfTreater: number;

  @Column('nvarchar', { name: 'serialNo', length: 50 })
  serialNo: string;

  @Column('nvarchar', { name: 'serialDate', length: 10 })
  serialDate: string;

  @Column('bigint', { name: 'price' })
  price: string;

  @Column('decimal', {
    name: 'priceCur',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  priceCur: number;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('nvarchar', { name: 'isuueDate', length: 10, default: () => "''" })
  isuueDate: string;

  @Column('bit', { name: 'printed', default: () => '(0)' })
  printed: boolean;

  @Column('int', { name: 'printStatus', default: () => '(1)' })
  printStatus: number;

  @Column('nvarchar', { name: 'printDate', length: 10, default: () => "''" })
  printDate: string;

  @Column('nvarchar', { name: 'printTime', length: 5, default: () => "''" })
  printTime: string;

  @Column('int', { name: 'FkfPrintUser', nullable: true })
  fkfPrintUser: number | null;

  @Column('int', { name: 'serial', default: () => '(0)' })
  serial: number;

  @Column('nvarchar', { name: 'request', length: 200, default: () => "''" })
  request: string;

  @Column('int', { name: 'FkfSanadType', default: () => '(2)' })
  fkfSanadType: number;

  @Column('nvarchar', { name: 'darVajhe', length: 500, default: () => "''" })
  darVajhe: string;

  @Column('nvarchar', { name: 'babat', length: 500, default: () => "''" })
  babat: string;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.casPayOrders)
  @JoinColumn([{ name: 'FkfTreater', referencedColumnName: 'pkfTreater' }])
  fkfTreater2: GenTreater;

  @RelationId((casPayOrder: CasPayOrder) => casPayOrder.fkfTreater2)
  fkfTreater3: number;
}
