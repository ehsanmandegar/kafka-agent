import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { GenTreater } from './gen-treater';

@Index('IX_casAccountType', ['accountType'], { unique: true })
@Index('PK_casAccountType', ['pkfAccountType'], { unique: true })
@Entity('casAccountType', { schema: 'dbo' })
export class CasAccountType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfAccountType' })
  pkfAccountType: number;

  @Column('nvarchar', { name: 'accountType', length: 100 })
  accountType: string;

  @OneToMany(() => GenTreater, (genTreater) => genTreater.fkfAccountType)
  genTreaters: GenTreater[];
}
