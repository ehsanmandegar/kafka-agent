import { Column, Entity, Index } from 'typeorm';

@Index('PK_strCutType', ['pkfCutType'], { unique: true })
@Entity('strCutType', { schema: 'dbo' })
export class StrCutType {
  @Column('int', { primary: true, name: 'pkfCutType' })
  pkfCutType: number;

  @Column('nvarchar', { name: 'cutType', length: 50 })
  cutType: string;
}
