import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_AssAssWorkCalender', ['pkid'], { unique: true })
@Entity('MRPAssetWorkCalender', { schema: 'dbo' })
export class MrpAssetWorkCalender {
  @PrimaryGeneratedColumn({ type: 'int', name: 'PKID' })
  pkid: number;

  @Column('int', { name: 'fkfAsset', nullable: true })
  fkfAsset: number | null;

  @Column('int', { name: 'fldYear', nullable: true, default: () => '(0)' })
  fldYear: number | null;

  @Column('int', { name: 'fkfShift', nullable: true })
  fkfShift: number | null;

  @Column('nvarchar', {
    name: 'AlterShift',
    nullable: true,
    length: 500,
    default: () => "''",
  })
  alterShift: string | null;

  @Column('nvarchar', { name: 'Memo', nullable: true, length: 300 })
  memo: string | null;
}
