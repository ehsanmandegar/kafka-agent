import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_genCompany', ['pkfCompany'], { unique: true })
@Entity('genCompany', { schema: 'dbo' })
export class GenCompany {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfCompany' })
  pkfCompany: number;

  @Column('nvarchar', { name: 'companyName', length: 255, default: () => "''" })
  companyName: string;

  @Column('nvarchar', { name: 'address', length: 255, default: () => "''" })
  address: string;

  @Column('nvarchar', { name: 'tel', length: 255, default: () => "''" })
  tel: string;

  @Column('nvarchar', { name: 'fax', length: 255, default: () => "''" })
  fax: string;

  @Column('nvarchar', { name: 'email', length: 255, default: () => "''" })
  email: string;

  @Column('nvarchar', { name: 'url', length: 255, default: () => "''" })
  url: string;

  @Column('nvarchar', { name: 'economicCode', length: 50, default: () => "''" })
  economicCode: string;

  @Column('nvarchar', { name: 'zipCode', length: 50, default: () => "''" })
  zipCode: string;

  @Column('nvarchar', { name: 'regNumber', length: 50, default: () => "''" })
  regNumber: string;

  @Column('nvarchar', {
    name: 'internetConnection',
    length: 255,
    default: () => "''",
  })
  internetConnection: string;

  @Column('int', { name: 'lastId', default: () => '(0)' })
  lastId: number;

  @Column('nvarchar', { name: 'support', length: 255, default: () => "''" })
  support: string;
}
