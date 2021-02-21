import { Column, Entity, Index } from 'typeorm';

@Index('PK_genTypeForm', ['pkfTypeForm'], { unique: true })
@Entity('genTypeForm', { schema: 'dbo' })
export class GenTypeForm {
  @Column('int', { primary: true, name: 'pkfTypeForm' })
  pkfTypeForm: number;

  @Column('nvarchar', { name: 'typeForm', length: 50 })
  typeForm: string;

  @Column('int', { name: 'FkfSystem' })
  fkfSystem: number;
}
