import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_genUserAccessLog', ['pkfUserAccessLog'], { unique: true })
@Entity('genUserAccessLog', { schema: 'dbo' })
export class GenUserAccessLog {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfUserAccessLog' })
  pkfUserAccessLog: number;

  @Column('int', { name: 'typeLog' })
  typeLog: number;

  @Column('int', { name: 'FkfLogUser' })
  fkfLogUser: number;

  @Column('nchar', { name: 'logTime', length: 5, default: () => "''" })
  logTime: string;

  @Column('nchar', { name: 'logDate', length: 10, default: () => "''" })
  logDate: string;

  @Column('nvarchar', { name: 'computerIP', length: 255, default: () => "''" })
  computerIp: string;

  @Column('nvarchar', {
    name: 'computerUser',
    length: 255,
    default: () => "''",
  })
  computerUser: string;

  @Column('nvarchar', {
    name: 'computerName',
    length: 255,
    default: () => "''",
  })
  computerName: string;

  @Column('int', { name: 'pkfUserAccess' })
  pkfUserAccess: number;

  @Column('bit', { name: 'access' })
  access: boolean;

  @Column('nvarchar', { name: 'accessName', length: 70 })
  accessName: string;

  @Column('nvarchar', { name: 'formName', length: 200 })
  formName: string;

  @Column('nvarchar', { name: 'firstName', length: 200 })
  firstName: string;

  @Column('nvarchar', { name: 'lastName', length: 200 })
  lastName: string;
}
