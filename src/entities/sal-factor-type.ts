import { Column, Entity, Index } from 'typeorm';

@Index('PK_salFactorType', ['pkfFactorType'], { unique: true })
@Entity('salFactorType', { schema: 'dbo' })
export class SalFactorType {
  @Column('int', { primary: true, name: 'pkfFactorType' })
  pkfFactorType: number;

  @Column('nvarchar', { name: 'factorType', length: 50 })
  factorType: string;
}
