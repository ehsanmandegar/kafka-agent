import { Column, Entity } from 'typeorm';

@Entity('systranschemas', { schema: 'dbo' })
export class Systranschemas {
  @Column('int', { name: 'tabid' })
  tabid: number;

  @Column('binary', { name: 'startlsn', length: 10 })
  startlsn: Buffer;

  @Column('binary', { name: 'endlsn', length: 10 })
  endlsn: Buffer;

  @Column('int', { name: 'typeid', default: () => '(52)' })
  typeid: number;
}
