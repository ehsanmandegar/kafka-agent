import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index(
  'IX_strLogSendToKartabl_filtering_Exit',
  ['accYear', 'fkfTrust', 'typeTh'],
  { unique: true },
)
@Index(
  'IX_strLogSendToKartabl_filtering_ExitEdit',
  ['accYear', 'fkfTrust', 'typeTh', 'logTime', 'logDate'],
  { unique: true },
)
@Index('PK_strLogSendToKartabl', ['pkfLogSendToKartabl'], { unique: true })
@Entity('strLogSendToKartabl', { schema: 'dbo' })
export class StrLogSendToKartabl {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfLogSendToKartabl' })
  pkfLogSendToKartabl: number;

  @Column('int', { name: 'FkfLogUser', nullable: true })
  fkfLogUser: number | null;

  @Column('nvarchar', { name: 'logTime', length: 5, default: () => "''" })
  logTime: string;

  @Column('nvarchar', { name: 'logDate', length: 10, default: () => "''" })
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

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('nvarchar', { name: 'memo', default: () => "''" })
  memo: string;

  @Column('int', { name: 'FkfTrust', nullable: true })
  fkfTrust: number | null;

  @Column('int', { name: 'typeTh', nullable: true })
  typeTh: number | null;

  @Column('int', { name: 'typeKartabl', nullable: true })
  typeKartabl: number | null;
}
