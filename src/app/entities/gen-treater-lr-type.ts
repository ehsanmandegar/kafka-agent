import { Column, Entity, Index, OneToMany } from 'typeorm';
import { GenContact } from './gen-contact';

@Index('PK_genTreaterLRType', ['pkfTreaterLrType'], { unique: true })
@Entity('genTreaterLRType', { schema: 'dbo' })
export class GenTreaterLrType {
  @Column('int', { primary: true, name: 'pkfTreaterLRType' })
  pkfTreaterLrType: number;

  @Column('nvarchar', { name: 'treaterLRType', length: 50 })
  treaterLrType: string;

  @Column('nvarchar', {
    name: 'treaterLRTypeEn',
    length: 50,
    default: () => "''",
  })
  treaterLrTypeEn: string;

  @OneToMany(() => GenContact, (genContact) => genContact.fkfLrType)
  genContacts: GenContact[];
}
