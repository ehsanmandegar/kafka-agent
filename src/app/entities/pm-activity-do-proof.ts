import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PmActivityRecord } from './pm-activity-record';
import { PmProposal } from './pm-proposal';

@Index('PK_tblActivityDoProof', ['pkfActivityDoProof'], { unique: true })
@Entity('pmActivityDoProof', { schema: 'dbo' })
export class PmActivityDoProof {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfActivityDoProof' })
  pkfActivityDoProof: number;

  @Column('nvarchar', { name: 'activityDoProof', length: 100 })
  activityDoProof: string;

  @OneToMany(
    () => PmActivityRecord,
    (pmActivityRecord) => pmActivityRecord.fkfActivityDoProof,
  )
  pmActivityRecords: PmActivityRecord[];

  @OneToMany(() => PmProposal, (pmProposal) => pmProposal.fkfActivityDoProof)
  pmProposals: PmProposal[];
}
