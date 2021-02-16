import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_payExperinces', ['pkfExperinces'], { unique: true })
@Entity('payExperinces', { schema: 'dbo' })
export class PayExperinces {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfExperinces' })
  pkfExperinces: number;

  @Column('nvarchar', { name: 'startDate', length: 10 })
  startDate: string;

  @Column('nvarchar', { name: 'endDate', length: 10 })
  endDate: string;

  @Column('nvarchar', { name: 'locationOfService', length: 200 })
  locationOfService: string;

  @Column('nvarchar', { name: 'post', length: 200 })
  post: string;

  @Column('nvarchar', { name: 'leaveDueToWork', length: 500 })
  leaveDueToWork: string;

  @Column('int', { name: 'FkfEmployee' })
  fkfEmployee: number;
}
