import { Column, Entity, Index, OneToMany } from 'typeorm';
import { AccGroup } from './acc-group';
import { AccKol } from './acc-kol';
import { AccMoein } from './acc-moein';

@Index('PK_accAccountNatural', ['pkfaccAccountNatural'], { unique: true })
@Entity('accAccountNatural', { schema: 'dbo' })
export class AccAccountNatural {
  @Column('tinyint', { primary: true, name: 'pkfaccAccountNatural' })
  pkfaccAccountNatural: number;

  @Column('nvarchar', { name: 'accountNatural', length: 50 })
  accountNatural: string;

  @OneToMany(() => AccGroup, (accGroup) => accGroup.fkfAccountNatural)
  accGroups: AccGroup[];

  @OneToMany(() => AccKol, (accKol) => accKol.fkfAccountNatural)
  accKols: AccKol[];

  @OneToMany(() => AccMoein, (accMoein) => accMoein.fkfAccountNatural)
  accMoeins: AccMoein[];
}
