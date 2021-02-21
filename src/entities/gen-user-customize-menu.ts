import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('IX_genUserCustomizeMenu', ['softwareName', 'fkfUser'], { unique: true })
@Index('PK_genUserCustomizeMenu', ['pkfUserCustomizeMenu'], { unique: true })
@Entity('genUserCustomizeMenu', { schema: 'dbo' })
export class GenUserCustomizeMenu {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfUserCustomizeMenu' })
  pkfUserCustomizeMenu: number;

  @Column('int', { name: 'FkfUser' })
  fkfUser: number;

  @Column('nvarchar', { name: 'softwareName', length: 250 })
  softwareName: string;

  @Column('ntext', { name: 'customizeKey', default: () => "''" })
  customizeKey: string;

  @Column('ntext', { name: 'customizeIndex', default: () => "''" })
  customizeIndex: string;

  @Column('ntext', { name: 'customizeKeyName', default: () => "''" })
  customizeKeyName: string;
}
