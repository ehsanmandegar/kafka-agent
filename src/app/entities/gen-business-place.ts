import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_genBusinessPlace', ['pkfBusinessPlace'], { unique: true })
@Entity('genBusinessPlace', { schema: 'dbo' })
export class GenBusinessPlace {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfBusinessPlace' })
  pkfBusinessPlace: number;

  @Column('nvarchar', { name: 'businessPlace', length: 100 })
  businessPlace: string;
}
