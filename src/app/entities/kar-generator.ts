import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_karGenerator', ['pkfGenerator'], { unique: true })
@Entity('karGenerator', { schema: 'dbo' })
export class KarGenerator {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfGenerator' })
  pkfGenerator: number;

  @Column('nvarchar', {
    name: 'generatorName',
    length: 50,
    default: () => "''",
  })
  generatorName: string;

  @Column('nvarchar', {
    name: 'generatorNameEN',
    length: 50,
    default: () => "''",
  })
  generatorNameEn: string;
}
