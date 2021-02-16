import { Column, Entity } from 'typeorm';

@Entity('genForm2', { schema: 'dbo' })
export class GenForm2 {
  @Column('int', { name: 'pkfForm' })
  pkfForm: number;

  @Column('nvarchar', { name: 'formName', length: 50 })
  formName: string;

  @Column('int', { name: 'FkfSystem' })
  fkfSystem: number;

  @Column('image', { name: 'layoutFile', nullable: true })
  layoutFile: Buffer | null;
}
