import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { GenBank } from './gen-bank';
import { GenTreater } from './gen-treater';

@Index('PK_genBankAccount', ['pkfBankAccount'], { unique: true })
@Entity('genBankAccount', { schema: 'dbo' })
export class GenBankAccount {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfBankAccount' })
  pkfBankAccount: number;

  @Column('nvarchar', { name: 'bENEiBANNo', length: 100, default: () => "''" })
  bEnEiBanNo: string;

  @Column('nvarchar', { name: 'bENEAccount', length: 100, default: () => "''" })
  bEneAccount: string;

  @Column('nvarchar', { name: 'accountCode', length: 100, default: () => "''" })
  accountCode: string;

  @Column('nvarchar', { name: 'swiftCode', length: 100, default: () => "''" })
  swiftCode: string;

  @Column('nvarchar', { name: 'address', length: 100, default: () => "''" })
  address: string;

  @ManyToOne(() => GenBank, (genBank) => genBank.genBankAccounts)
  @JoinColumn([{ name: 'FkfBank', referencedColumnName: 'pkfBank' }])
  fkfBank: GenBank;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.genBankAccounts)
  @JoinColumn([{ name: 'FkfTreater', referencedColumnName: 'pkfTreater' }])
  fkfTreater: GenTreater;

  @RelationId((genBankAccount: GenBankAccount) => genBankAccount.fkfBank)
  fkfBank2: number | null;

  @RelationId((genBankAccount: GenBankAccount) => genBankAccount.fkfTreater)
  fkfTreater2: number | null;
}
