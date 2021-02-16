import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { PmActivity } from './pm-activity';
import { GenTreater } from './gen-treater';
import { PmProgramingLog } from './pm-programing-log';
import { PmActivityDoProof } from './pm-activity-do-proof';

@Index('PK_tblProposal', ['pkfProposal'], { unique: true })
@Entity('pmProposal', { schema: 'dbo' })
export class PmProposal {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'pkfProposal' })
  pkfProposal: string;

  @Column('int', { name: 'delay' })
  delay: number;

  @Column('nvarchar', { name: 'proposalDate', length: 10 })
  proposalDate: string;

  @Column('bit', { name: 'ok', default: () => '(0)' })
  ok: boolean;

  @Column('int', { name: 'FkfActivityMom', nullable: true })
  fkfActivityMom: number | null;

  @Column('int', { name: 'priority', default: () => '(1)' })
  priority: number;

  @Column('nvarchar', { name: 'remark', length: 255, default: () => "''" })
  remark: string;

  @ManyToOne(() => PmActivity, (pmActivity) => pmActivity.pmProposals)
  @JoinColumn([{ name: 'FkfActivity', referencedColumnName: 'pkfActivity' }])
  fkfActivity: PmActivity;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.pmProposals)
  @JoinColumn([{ name: 'FkfEmployee', referencedColumnName: 'pkfTreater' }])
  fkfEmployee: GenTreater;

  @ManyToOne(
    () => PmProgramingLog,
    (pmProgramingLog) => pmProgramingLog.pmProposals,
  )
  @JoinColumn([
    { name: 'FkfProgramingLog', referencedColumnName: 'pkfProgramingLog' },
  ])
  fkfProgramingLog: PmProgramingLog;

  @ManyToOne(
    () => PmActivityDoProof,
    (pmActivityDoProof) => pmActivityDoProof.pmProposals,
  )
  @JoinColumn([
    { name: 'FkfActivityDoProof', referencedColumnName: 'pkfActivityDoProof' },
  ])
  fkfActivityDoProof: PmActivityDoProof;

  @RelationId((pmProposal: PmProposal) => pmProposal.fkfActivity)
  fkfActivity2: number;

  @RelationId((pmProposal: PmProposal) => pmProposal.fkfEmployee)
  fkfEmployee2: number | null;

  @RelationId((pmProposal: PmProposal) => pmProposal.fkfProgramingLog)
  fkfProgramingLog2: number | null;

  @RelationId((pmProposal: PmProposal) => pmProposal.fkfActivityDoProof)
  fkfActivityDoProof2: number;
}
