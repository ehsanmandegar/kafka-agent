import { Column, Entity, Index, OneToMany } from 'typeorm';
import { GenTreater } from './gen-treater';

@Index('PK_genTreaterTypeAccounting', ['pkfTreaterTypeAccounting'], {
  unique: true,
})
@Entity('genTreaterTypeAccounting', { schema: 'dbo' })
export class GenTreaterTypeAccounting {
  @Column('int', { primary: true, name: 'pkfTreaterTypeAccounting' })
  pkfTreaterTypeAccounting: number;

  @Column('nvarchar', { name: 'treaterTypeAccounting', length: 100 })
  treaterTypeAccounting: string;

  @Column('nvarchar', {
    name: 'treaterTypeAccountingEn',
    length: 100,
    default: () => "''",
  })
  treaterTypeAccountingEn: string;

  @OneToMany(
    () => GenTreater,
    (genTreater) => genTreater.fkfTreaterTypeAccounting,
  )
  genTreaters: GenTreater[];
}
