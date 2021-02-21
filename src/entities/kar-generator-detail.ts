import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_karGeneratorDetail', ['pkfGeneratorDetail'], { unique: true })
@Entity('karGeneratorDetail', { schema: 'dbo' })
export class KarGeneratorDetail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfGeneratorDetail' })
  pkfGeneratorDetail: number;

  @Column('nvarchar', {
    name: 'generatorDetail',
    length: 50,
    default: () => "''",
  })
  generatorDetail: string;

  @Column('int', { name: 'FkfGenerator', nullable: true })
  fkfGenerator: number | null;

  @Column('int', { name: 'FkfDateTypeField', nullable: true })
  fkfDateTypeField: number | null;

  @Column('int', { name: 'FkfDrowpDownList', nullable: true })
  fkfDrowpDownList: number | null;
}
