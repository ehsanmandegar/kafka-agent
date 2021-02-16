import { Column, Entity, Index } from 'typeorm';

@Index('PK_genErrorMessage', ['pkfError'], { unique: true })
@Entity('genErrorMessage', { schema: 'dbo' })
export class GenErrorMessage {
  @Column('int', { primary: true, name: 'pkfError' })
  pkfError: number;

  @Column('nvarchar', { name: 'errorMessage', length: 500 })
  errorMessage: string;
}
