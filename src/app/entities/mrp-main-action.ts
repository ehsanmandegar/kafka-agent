import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_MRPMainAction', ['pkid'], { unique: true })
@Entity('MRPMainAction', { schema: 'dbo' })
export class MrpMainAction {
  @PrimaryGeneratedColumn({ type: 'int', name: 'PKID' })
  pkid: number;

  @Column('varchar', {
    name: 'Code',
    nullable: true,
    length: 15,
    default: () => "''",
  })
  code: string | null;

  @Column('nvarchar', {
    name: 'Title',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  title: string | null;

  @Column('int', { name: 'fkfParent', nullable: true, default: () => '(0)' })
  fkfParent: number | null;

  @Column('varchar', {
    name: 'StockCode',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  stockCode: string | null;

  @Column('int', { name: 'fkfInvPart', nullable: true })
  fkfInvPart: number | null;
}
