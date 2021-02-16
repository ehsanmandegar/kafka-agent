import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { PmRequestRepairs } from './pm-request-repairs';
import { GenTreater } from './gen-treater';

@Index('PK_pmTimeWorkReport', ['pkfTimeWorkReport'], { unique: true })
@Entity('pmTimeWorkReport', { schema: 'dbo' })
export class PmTimeWorkReport {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfTimeWorkReport' })
  pkfTimeWorkReport: number;

  @Column('int', { name: 'reportTime' })
  reportTime: number;

  @Column('nvarchar', { name: 'reportDate', length: 10 })
  reportDate: string;

  @Column('int', { name: 'lastState' })
  lastState: number;

  @Column('nvarchar', { name: 'memo', length: 255 })
  memo: string;

  @ManyToOne(
    () => PmRequestRepairs,
    (pmRequestRepairs) => pmRequestRepairs.pmTimeWorkReports,
  )
  @JoinColumn([
    { name: 'fkfpmRequestRepairs', referencedColumnName: 'pkfRequestRepairs' },
  ])
  fkfpmRequestRepairs: PmRequestRepairs;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.pmTimeWorkReports)
  @JoinColumn([{ name: 'fkfReporter', referencedColumnName: 'pkfTreater' }])
  fkfReporter: GenTreater;

  @RelationId(
    (pmTimeWorkReport: PmTimeWorkReport) =>
      pmTimeWorkReport.fkfpmRequestRepairs,
  )
  fkfpmRequestRepairs2: number;

  @RelationId(
    (pmTimeWorkReport: PmTimeWorkReport) => pmTimeWorkReport.fkfReporter,
  )
  fkfReporter2: number | null;
}
