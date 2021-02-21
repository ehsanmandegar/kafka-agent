import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_genUserLog', ['pkfgenUserLog'], { unique: true })
@Entity('genUserLog', { schema: 'dbo' })
export class GenUserLog {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfgenUserLog' })
  pkfgenUserLog: number;

  @Column('int', { name: 'typeLog' })
  typeLog: number;

  @Column('int', { name: 'FkfLogUser' })
  fkfLogUser: number;

  @Column('nvarchar', { name: 'logTime', length: 5, default: () => "''" })
  logTime: string;

  @Column('nvarchar', { name: 'logDate', length: 10, default: () => "''" })
  logDate: string;

  @Column('nvarchar', { name: 'computerIP', length: 200, default: () => "''" })
  computerIp: string;

  @Column('nvarchar', {
    name: 'computerUser',
    length: 200,
    default: () => "''",
  })
  computerUser: string;

  @Column('nvarchar', {
    name: 'computerName',
    length: 200,
    default: () => "''",
  })
  computerName: string;

  @Column('int', { name: 'pkfUser' })
  pkfUser: number;

  @Column('nvarchar', { name: 'userName', length: 100 })
  userName: string;

  @Column('nvarchar', { name: 'password', length: 100 })
  password: string;

  @Column('int', { name: 'FkfEmployee' })
  fkfEmployee: number;

  @Column('int', { name: 'FkfAccessType' })
  fkfAccessType: number;

  @Column('bit', { name: 'active' })
  active: boolean;

  @Column('int', { name: 'creatorRoleId', nullable: true })
  creatorRoleId: number | null;

  @Column('int', { name: 'senderRoleId', nullable: true })
  senderRoleId: number | null;

  @Column('bit', { name: 'encryptPass' })
  encryptPass: boolean;

  @Column('nvarchar', { name: 'employeeName', length: 401 })
  employeeName: string;
}
