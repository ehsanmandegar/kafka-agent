import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('IX_karWorkFlowStep', ['workFlowStep'], { unique: true })
@Index('PK_karWorkFlowStep', ['pkfWorkFlowStep'], { unique: true })
@Entity('karWorkFlowStep', { schema: 'dbo' })
export class KarWorkFlowStep {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfWorkFlowStep' })
  pkfWorkFlowStep: number;

  @Column('int', { name: 'FkfWorkFlow' })
  fkfWorkFlow: number;

  @Column('int', { name: 'serial', nullable: true })
  serial: number | null;

  @Column('nvarchar', { name: 'workFlowStep', length: 50, default: () => "''" })
  workFlowStep: string;

  @Column('int', { name: 'FkfWorkFlowStepType', nullable: true })
  fkfWorkFlowStepType: number | null;

  @Column('bit', { name: 'activeSMS', default: () => '(0)' })
  activeSms: boolean;

  @Column('int', { name: 'FkfReciverSMS', nullable: true })
  fkfReciverSms: number | null;

  @Column('nvarchar', { name: 'textSMS', nullable: true, default: () => "''" })
  textSms: string | null;

  @Column('int', { name: 'FkfWorkFlowComment', nullable: true })
  fkfWorkFlowComment: number | null;
}
