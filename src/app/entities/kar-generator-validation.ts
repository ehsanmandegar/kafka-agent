import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_karGeneratorValidation', ['pkfGeneratorValidation'], {
  unique: true,
})
@Entity('karGeneratorValidation', { schema: 'dbo' })
export class KarGeneratorValidation {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfGeneratorValidation' })
  pkfGeneratorValidation: number;

  @Column('int', { name: 'FkfGeneratorDetail', nullable: true })
  fkfGeneratorDetail: number | null;

  @Column('int', { name: 'FkfValidationDate', nullable: true })
  fkfValidationDate: number | null;

  @Column('nvarchar', { name: 'value', length: 50, default: () => "''" })
  value: string;
}
