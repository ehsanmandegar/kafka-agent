import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('IX_accCustomDescription', ['formName', 'typeSend'], { unique: true })
@Index('PK_accCustomDescription', ['pkfCustomDescription'], { unique: true })
@Entity('accCustomDescription', { schema: 'dbo' })
export class AccCustomDescription {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfCustomDescription' })
  pkfCustomDescription: number;

  @Column('nvarchar', { name: 'formName', length: 150 })
  formName: string;

  @Column('nvarchar', { name: 'typeSend', length: 150 })
  typeSend: string;

  @Column('nvarchar', { name: 'descriptionBed', length: 4000 })
  descriptionBed: string;

  @Column('nvarchar', { name: 'descriptionBes', length: 4000 })
  descriptionBes: string;
}
