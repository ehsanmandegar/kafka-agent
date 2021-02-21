import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salLoadingTime', ['pkfLoadingTime'], { unique: true })
@Entity('salLoadingTime', { schema: 'dbo' })
export class SalLoadingTime {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfLoadingTime' })
  pkfLoadingTime: number;

  @Column('int', { name: 'fkfTrust' })
  fkfTrust: number;

  @Column('nvarchar', { name: 'recordDate', length: 10 })
  recordDate: string;

  @Column('nvarchar', { name: 'recodeTime', length: 5 })
  recodeTime: string;

  @Column('nvarchar', { name: 'tracing', length: 50 })
  tracing: string;
}
