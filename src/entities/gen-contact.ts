import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { GenTitle } from './gen-title';
import { GenFamilitarity } from './gen-familitarity';
import { GenTreaterLrType } from './gen-treater-lr-type';
import { GenTell } from './gen-tell';
import { SalOrder } from './sal-order';

@Index('IX_genContact', ['fkfCotactType'], {})
@Index('IX_genContact_1', ['fkfFamiliarity'], {})
@Index('IX_genContact_filtering', ['nationalCode'], { unique: true })
@Index('PK_genContact', ['pkfContact'], { unique: true })
@Entity('genContact', { schema: 'dbo' })
export class GenContact {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfContact' })
  pkfContact: number;

  @Column('int', { name: 'FkfCotactType' })
  fkfCotactType: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('int', { name: 'FkfFamiliarity', nullable: true })
  fkfFamiliarity: number | null;

  @Column('nvarchar', { name: 'contactName', length: 255 })
  contactName: string;

  @Column('nvarchar', { name: 'contactFamily', length: 255 })
  contactFamily: string;

  @Column('nvarchar', { name: 'contactNickname', length: 255 })
  contactNickname: string;

  @Column('nvarchar', { name: 'nationalCode', length: 50 })
  nationalCode: string;

  @Column('int', { name: 'FkfCity', nullable: true })
  fkfCity: number | null;

  @Column('nvarchar', { name: 'zipCode', length: 10 })
  zipCode: string;

  @Column('nvarchar', { name: 'economicCode', length: 50 })
  economicCode: string;

  @Column('nvarchar', { name: 'Address', length: 500 })
  address: string;

  @Column('nvarchar', { name: 'memo', length: 500, default: () => "''" })
  memo: string;

  @Column('nvarchar', { name: 'url', length: 100, default: () => "''" })
  url: string;

  @Column('nvarchar', { name: 'website', length: 100, default: () => "''" })
  website: string;

  @Column('nvarchar', { name: 'reagent', length: 250, default: () => "''" })
  reagent: string;

  @Column('int', { name: 'ParentID', default: () => '(0)' })
  parentId: number;

  @Column('int', { name: 'FkfTreater', nullable: true })
  fkfTreater: number | null;

  @Column('nvarchar', { name: 'placeCode', length: 50, default: () => "''" })
  placeCode: string;

  @ManyToOne(() => GenTitle, (genTitle) => genTitle.genContacts)
  @JoinColumn([{ name: 'FkfContactTitle', referencedColumnName: 'pkfTitle' }])
  fkfContactTitle: GenTitle;

  @ManyToOne(
    () => GenFamilitarity,
    (genFamilitarity) => genFamilitarity.genContacts,
  )
  @JoinColumn([
    { name: 'FkfCotactType', referencedColumnName: 'pkfFamilitarity' },
  ])
  fkfCotactType2: GenFamilitarity;

  @ManyToOne(
    () => GenTreaterLrType,
    (genTreaterLrType) => genTreaterLrType.genContacts,
  )
  @JoinColumn([{ name: 'FkfLRType', referencedColumnName: 'pkfTreaterLrType' }])
  fkfLrType: GenTreaterLrType;

  @OneToMany(() => GenTell, (genTell) => genTell.fkfContact2)
  genTells: GenTell[];

  @OneToMany(() => SalOrder, (salOrder) => salOrder.fkfContact2)
  salOrders: SalOrder[];

  @RelationId((genContact: GenContact) => genContact.fkfContactTitle)
  fkfContactTitle2: number;

  @RelationId((genContact: GenContact) => genContact.fkfCotactType2)
  fkfCotactType3: number;

  @RelationId((genContact: GenContact) => genContact.fkfLrType)
  fkfLrType2: number;
}
