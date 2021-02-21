import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { GenContact } from './gen-contact';

@Index('PK_genFamilitarity', ['pkfFamilitarity'], { unique: true })
@Entity('genFamilitarity', { schema: 'dbo' })
export class GenFamilitarity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfFamilitarity' })
  pkfFamilitarity: number;

  @Column('nvarchar', { name: 'familitarityCode', length: 50 })
  familitarityCode: string;

  @Column('nvarchar', { name: 'familitarity', length: 100 })
  familitarity: string;

  @Column('int', { name: 'type' })
  type: number;

  @OneToMany(() => GenContact, (genContact) => genContact.fkfCotactType2)
  genContacts: GenContact[];
}
