import { Column, Entity, Index } from 'typeorm';

@Index('PK_genVersion', ['pkfver'], { unique: true })
@Entity('genVersion', { schema: 'dbo' })
export class GenVersion {
  @Column('int', { primary: true, name: 'pkfver' })
  pkfver: number;

  @Column('nvarchar', { name: 'version', length: 50, default: () => "''" })
  version: string;

  @Column('int', { name: 'revision', default: () => '0' })
  revision: number;

  @Column('int', { name: 'revUpdateApp', default: () => '(0)' })
  revUpdateApp: number;
}
