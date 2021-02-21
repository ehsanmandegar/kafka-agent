import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salDepartureTime', ['pkfDepartureTime'], { unique: true })
@Entity('salDepartureTime', { schema: 'dbo' })
export class SalDepartureTime {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfDepartureTime' })
  pkfDepartureTime: number;

  @Column('int', { name: 'fkfTrust' })
  fkfTrust: number;

  @Column('nvarchar', { name: 'recordDate', length: 10 })
  recordDate: string;

  @Column('nvarchar', { name: 'recodeTime', length: 5 })
  recodeTime: string;

  @Column('nvarchar', { name: 'tracing', length: 50 })
  tracing: string;
}
