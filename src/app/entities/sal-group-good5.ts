import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('IX_salGroupGood5', ['codeGroup5', 'fkfGroupGood4'], { unique: true })
@Index('PK_salGoodGroup5', ['pkfGroupGood5'], { unique: true })
@Entity('salGroupGood5', { schema: 'dbo' })
export class SalGroupGood5 {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfGroupGood5' })
  pkfGroupGood5: number;

  @Column('nvarchar', { name: 'groupGood5', length: 255 })
  groupGood5: string;

  @Column('nvarchar', { name: 'codeGroup5', nullable: true, length: 255 })
  codeGroup5: string | null;

  @Column('int', { name: 'FkfGroupGood4', nullable: true })
  fkfGroupGood4: number | null;
}
