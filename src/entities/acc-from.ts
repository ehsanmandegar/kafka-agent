import { Column, Entity, Index } from 'typeorm';

@Index('PK_accFrom', ['pkfFrom'], { unique: true })
@Entity('accFrom', { schema: 'dbo' })
export class AccFrom {
  @Column('int', { primary: true, name: 'pkfFrom' })
  pkfFrom: number;

  @Column('nvarchar', { name: 'fromAs', length: 200 })
  fromAs: string;
}
