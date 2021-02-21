import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_pmActivityWorkTime', ['pkfActivityWorkTime'], { unique: true })
@Entity('pmActivityWorkTime', { schema: 'dbo' })
export class PmActivityWorkTime {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfActivityWorkTime' })
  pkfActivityWorkTime: number;

  @Column('int', { name: 'fkfEmployee' })
  fkfEmployee: number;

  @Column('nvarchar', { name: 'performDate', length: 50 })
  performDate: string;

  @Column('smalldatetime', { name: 'startTime' })
  startTime: Date;

  @Column('smalldatetime', { name: 'endTime' })
  endTime: Date;

  @Column('nvarchar', { name: 'memo', nullable: true })
  memo: string | null;

  @Column('int', { name: 'fkfActivityRecord', nullable: true })
  fkfActivityRecord: number | null;
}
