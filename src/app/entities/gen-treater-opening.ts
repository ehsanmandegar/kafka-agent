import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_genTreaterOpening', ['pkfTreaterOpening'], { unique: true })
@Entity('genTreaterOpening', { schema: 'dbo' })
export class GenTreaterOpening {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfTreaterOpening' })
  pkfTreaterOpening: number;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'FkfOpener' })
  fkfOpener: number;

  @Column('nvarchar', { name: 'openingDate', length: 10 })
  openingDate: string;

  @Column('int', { name: 'sanadTempNo' })
  sanadTempNo: number;

  @Column('int', { name: 'FkfTreaterType' })
  fkfTreaterType: number;
}
