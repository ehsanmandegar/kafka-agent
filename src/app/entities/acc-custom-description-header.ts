import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('IX_accCustomDescriptionHeader', ['formName'], { unique: true })
@Index('PK_accCustomDescriptionHeader', ['pkfCustomDescriptionHeader'], {
  unique: true,
})
@Entity('accCustomDescriptionHeader', { schema: 'dbo' })
export class AccCustomDescriptionHeader {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfCustomDescriptionHeader' })
  pkfCustomDescriptionHeader: number;

  @Column('nvarchar', { name: 'formName', length: 150 })
  formName: string;

  @Column('nvarchar', { name: 'description', length: 4000 })
  description: string;
}
