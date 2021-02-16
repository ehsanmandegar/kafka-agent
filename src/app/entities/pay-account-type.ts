import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_PayAccountType', ['pkfAccountType'], { unique: true })
@Entity('PayAccountType', { schema: 'dbo' })
export class PayAccountType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfAccountType' })
  pkfAccountType: number;

  @Column('nvarchar', { name: 'accountType', length: 100 })
  accountType: string;
}
