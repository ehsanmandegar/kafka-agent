import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { GenContact } from './gen-contact';
import { GenTreater } from './gen-treater';

@Index('PK_genTitle', ['pkfTitle'], { unique: true })
@Entity('genTitle', { schema: 'dbo' })
export class GenTitle {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfTitle' })
  pkfTitle: number;

  @Column('nvarchar', { name: 'title', length: 150 })
  title: string;

  @Column('nvarchar', { name: 'titleCode', nullable: true, length: 50 })
  titleCode: string | null;

  @Column('nvarchar', { name: 'titleEn', length: 150, default: () => "''" })
  titleEn: string;

  @OneToMany(() => GenContact, (genContact) => genContact.fkfContactTitle)
  genContacts: GenContact[];

  @OneToMany(() => GenTreater, (genTreater) => genTreater.fkfTitle)
  genTreaters: GenTreater[];
}
