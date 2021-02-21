import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SalContract } from './sal-contract';
import { SalOrder } from './sal-order';
import { SalProforma } from './sal-proforma';

@Index('PK_salSeller', ['pkfSeller'], { unique: true })
@Entity('salSeller', { schema: 'dbo' })
export class SalSeller {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfSeller' })
  pkfSeller: number;

  @Column('nvarchar', { name: 'seller', length: 255 })
  seller: string;

  @Column('bit', { name: 'active', default: () => '1' })
  active: boolean;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'oldPkf', nullable: true })
  oldPkf: number | null;

  @Column('nvarchar', { name: 'sellerEN', length: 255, default: () => "''" })
  sellerEn: string;

  @Column('nvarchar', { name: 'address', length: 255, default: () => "''" })
  address: string;

  @Column('nvarchar', {
    name: 'economicCode',
    length: 100,
    default: () => "''",
  })
  economicCode: string;

  @Column('nvarchar', { name: 'zipCode', length: 100, default: () => "''" })
  zipCode: string;

  @Column('nvarchar', { name: 'regNumber', length: 50, default: () => "''" })
  regNumber: string;

  @Column('nvarchar', { name: 'tell', length: 50, default: () => "''" })
  tell: string;

  @Column('nvarchar', { name: 'mail', length: 50, default: () => "''" })
  mail: string;

  @Column('nvarchar', { name: 'url', length: 200, default: () => "''" })
  url: string;

  @OneToMany(() => SalContract, (salContract) => salContract.fkfSeller2)
  salContracts: SalContract[];

  @OneToMany(() => SalOrder, (salOrder) => salOrder.fkfSeller)
  salOrders: SalOrder[];

  @OneToMany(() => SalProforma, (salProforma) => salProforma.fkfSeller)
  salProformas: SalProforma[];
}
