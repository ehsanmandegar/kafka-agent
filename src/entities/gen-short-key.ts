import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('IX_genShortKey', ['menuName'], { unique: true })
@Index('PK_genShortKey', ['pkfShortKey'], { unique: true })
@Entity('genShortKey', { schema: 'dbo' })
export class GenShortKey {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfShortKey' })
  pkfShortKey: number;

  @Column('nvarchar', { name: 'menuName', nullable: true, length: 200 })
  menuName: string | null;

  @Column('nvarchar', { name: 'menuTextName', nullable: true, length: 200 })
  menuTextName: string | null;

  @Column('nvarchar', { name: 'shortKey', length: 200, default: () => "''" })
  shortKey: string;

  @Column('int', { name: 'system', nullable: true })
  system: number | null;

  @Column('int', { name: 'keyType', nullable: true })
  keyType: number | null;
}
