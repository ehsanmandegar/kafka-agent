import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_karKartablFormGenerator', ['pkfKartablFormGenerator'], {
  unique: true,
})
@Entity('karKartablFormGenerator', { schema: 'dbo' })
export class KarKartablFormGenerator {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfKartablFormGenerator' })
  pkfKartablFormGenerator: number;

  @Column('int', { name: 'FkfKartabl', nullable: true })
  fkfKartabl: number | null;

  @Column('int', { name: 'FkfGenerator', nullable: true })
  fkfGenerator: number | null;

  @Column('int', { name: 'FkfGeneratorDetail', nullable: true })
  fkfGeneratorDetail: number | null;

  @Column('nvarchar', { name: 'value', length: 500, default: () => "''" })
  value: string;

  @Column('datetime', { name: 'DateTimeCreate', default: () => 'getdate()' })
  dateTimeCreate: Date;
}
