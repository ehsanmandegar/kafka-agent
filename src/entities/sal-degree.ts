import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('IX_salDegree', ['degreeCode'], { unique: true })
@Index('PK_salDegree', ['pkfdegree'], { unique: true })
@Entity('salDegree', { schema: 'dbo' })
export class SalDegree {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfdegree' })
  pkfdegree: number;

  @Column('nvarchar', { name: 'degreeCode', length: 50 })
  degreeCode: string;

  @Column('nvarchar', { name: 'degreeDesc', length: 100 })
  degreeDesc: string;
}
