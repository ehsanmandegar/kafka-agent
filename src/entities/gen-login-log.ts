import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_genLoginLog', ['pkfLoginLog'], { unique: true })
@Entity('genLoginLog', { schema: 'dbo' })
export class GenLoginLog {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfLoginLog' })
  pkfLoginLog: number;

  @Column('int', { name: 'FkfUser' })
  fkfUser: number;

  @Column('nvarchar', { name: 'enterDate', length: 10 })
  enterDate: string;

  @Column('nvarchar', { name: 'enterTime', length: 5 })
  enterTime: string;

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

  @Column('nvarchar', { name: 'exitDate', length: 10, default: () => "''" })
  exitDate: string;

  @Column('nvarchar', { name: 'exitTime', length: 5, default: () => "''" })
  exitTime: string;

  @Column('nvarchar', { name: 'serial', length: 255, default: () => "''" })
  serial: string;

  @Column('int', { name: 'network', nullable: true })
  network: number | null;

  @Column('int', { name: 'timer', nullable: true })
  timer: number | null;

  @Column('int', { name: 'counter', nullable: true })
  counter: number | null;

  @Column('nvarchar', { name: 'software', length: 255, default: () => "''" })
  software: string;

  @Column('nvarchar', { name: 'appPath', length: 255, default: () => "''" })
  appPath: string;
}
