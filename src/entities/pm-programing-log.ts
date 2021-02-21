import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PmActivityRecord } from './pm-activity-record';
import { PmProposal } from './pm-proposal';

@Index('PK_tblProgramingLog', ['pkfProgramingLog'], { unique: true })
@Entity('pmProgramingLog', { schema: 'dbo' })
export class PmProgramingLog {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfProgramingLog' })
  pkfProgramingLog: number;

  @Column('nvarchar', { name: 'programingLogDate', length: 10 })
  programingLogDate: string;

  @Column('nvarchar', { name: 'startDate', length: 10 })
  startDate: string;

  @Column('int', { name: 'dayTime' })
  dayTime: number;

  @Column('nvarchar', { name: 'endDate', length: 10 })
  endDate: string;

  @Column('int', { name: 'FkfSection' })
  fkfSection: number;

  @Column('int', { name: 'FkfEmployee' })
  fkfEmployee: number;

  @OneToMany(
    () => PmActivityRecord,
    (pmActivityRecord) => pmActivityRecord.fkfProgramingLog,
  )
  pmActivityRecords: PmActivityRecord[];

  @OneToMany(() => PmProposal, (pmProposal) => pmProposal.fkfProgramingLog)
  pmProposals: PmProposal[];
}
