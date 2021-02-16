import { Column, Entity, Index, OneToMany } from 'typeorm';
import { AccGroup } from './acc-group';
import { AccKol } from './acc-kol';
import { AccMoein } from './acc-moein';

@Index('PK_AccountType', ['pkfAccountType'], { unique: true })
@Entity('accAccountType', { schema: 'dbo' })
export class AccAccountType {
  @Column('tinyint', { primary: true, name: 'pkfAccountType' })
  pkfAccountType: number;

  @Column('nvarchar', { name: 'accountType', length: 50 })
  accountType: string;

  @OneToMany(() => AccGroup, (accGroup) => accGroup.fkfAccountType)
  accGroups: AccGroup[];

  @OneToMany(() => AccKol, (accKol) => accKol.fkfAccountType)
  accKols: AccKol[];

  @OneToMany(() => AccMoein, (accMoein) => accMoein.fkfAccountType)
  accMoeins: AccMoein[];
}
