import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BasWeight } from './bas-weight';
import { CasGetPayDetail } from './cas-get-pay-detail';
import { GenBankAccount } from './gen-bank-account';
import { GenTreater } from './gen-treater';

@Index('IX_genBank', ['bank'], { unique: true })
@Index('IX_genBank_1', ['bankCode'], { unique: true })
@Index('PK_genBank', ['pkfBank'], { unique: true })
@Entity('genBank', { schema: 'dbo' })
export class GenBank {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfBank' })
  pkfBank: number;

  @Column('nvarchar', { name: 'bank', length: 150 })
  bank: string;

  @Column('nvarchar', { name: 'printKeler', length: 100, default: () => "''" })
  printKeler: string;

  @Column('int', { name: 'rowPrint', default: () => '(0)' })
  rowPrint: number;

  @Column('nvarchar', { name: 'bankCode', length: 50, default: () => "''" })
  bankCode: string;

  @OneToMany(() => BasWeight, (basWeight) => basWeight.fkfBank)
  basWeights: BasWeight[];

  @OneToMany(
    () => CasGetPayDetail,
    (casGetPayDetail) => casGetPayDetail.fkfBank,
  )
  casGetPayDetails: CasGetPayDetail[];

  @OneToMany(() => GenBankAccount, (genBankAccount) => genBankAccount.fkfBank)
  genBankAccounts: GenBankAccount[];

  @OneToMany(() => GenTreater, (genTreater) => genTreater.fkfBank2)
  genTreaters: GenTreater[];
}
