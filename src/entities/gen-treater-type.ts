import { Column, Entity, Index } from 'typeorm';

@Index('PK_genTreaterType', ['pkfTreaterType'], { unique: true })
@Entity('genTreaterType', { schema: 'dbo' })
export class GenTreaterType {
  @Column('int', { primary: true, name: 'pkfTreaterType' })
  pkfTreaterType: number;

  @Column('nvarchar', { name: 'treaterType', length: 50 })
  treaterType: string;
}
