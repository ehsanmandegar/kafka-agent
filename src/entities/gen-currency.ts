import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AccSanadDetailFloat } from './acc-sanad-detail-float';
import { CasGetPay } from './cas-get-pay';
import { CasGetPayDeclaration } from './cas-get-pay-declaration';
import { SalContract } from './sal-contract';

@Index('IX_genCurrency', ['currencyCode'], { unique: true })
@Index('PK_genCurrency', ['pkfCurrency'], { unique: true })
@Entity('genCurrency', { schema: 'dbo' })
export class GenCurrency {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfCurrency' })
  pkfCurrency: number;

  @Column('nvarchar', { name: 'currency', length: 200 })
  currency: string;

  @Column('nvarchar', { name: 'currencyCode', length: 25, default: () => "''" })
  currencyCode: string;

  @Column('nvarchar', { name: 'currencyEN', length: 200, default: () => "''" })
  currencyEn: string;

  @OneToMany(
    () => AccSanadDetailFloat,
    (accSanadDetailFloat) => accSanadDetailFloat.fkfCurrency2,
  )
  accSanadDetailFloats: AccSanadDetailFloat[];

  @OneToMany(() => CasGetPay, (casGetPay) => casGetPay.fkfCurrency)
  casGetPays: CasGetPay[];

  @OneToMany(
    () => CasGetPayDeclaration,
    (casGetPayDeclaration) => casGetPayDeclaration.fkfCurrency,
  )
  casGetPayDeclarations: CasGetPayDeclaration[];

  @OneToMany(() => SalContract, (salContract) => salContract.fkfCurrency)
  salContracts: SalContract[];
}
