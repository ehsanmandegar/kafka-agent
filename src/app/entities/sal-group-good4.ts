import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('IX_salGroupGood4', ['codeGroup4', 'fkfGroupGood3'], { unique: true })
@Index('PK_salGoodGroup4', ['pkfGroupGood4'], { unique: true })
@Entity('salGroupGood4', { schema: 'dbo' })
export class SalGroupGood4 {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfGroupGood4' })
  pkfGroupGood4: number;

  @Column('nvarchar', { name: 'groupGood4', length: 255 })
  groupGood4: string;

  @Column('nvarchar', { name: 'codeGroup4', nullable: true, length: 255 })
  codeGroup4: string | null;

  @Column('int', { name: 'FkfGroupGood3', nullable: true })
  fkfGroupGood3: number | null;
}
