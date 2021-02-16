import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('IX_karConditionStep', ['fkfWorkFlowStep', 'fkfWorkFlowStatuse'], {
  unique: true,
})
@Index('PK_karConditionStep', ['pkfConditionStep'], { unique: true })
@Entity('karConditionStep', { schema: 'dbo' })
export class KarConditionStep {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfConditionStep' })
  pkfConditionStep: number;

  @Column('int', { name: 'FkfWorkFlowStep', nullable: true })
  fkfWorkFlowStep: number | null;

  @Column('int', { name: 'FkfWorkFlowStatuse', nullable: true })
  fkfWorkFlowStatuse: number | null;

  @Column('int', { name: 'FkfWorkFlowStepNext', nullable: true })
  fkfWorkFlowStepNext: number | null;

  @Column('int', { name: 'FkfGenerator', nullable: true })
  fkfGenerator: number | null;

  @Column('bit', { name: 'IsPost', nullable: true, default: () => '(0)' })
  isPost: boolean | null;

  @Column('int', { name: 'FkfReciver', nullable: true })
  fkfReciver: number | null;

  @Column('int', { name: 'FkfReciverCopy', nullable: true })
  fkfReciverCopy: number | null;

  @Column('int', { name: 'FkfReciverCopy2', nullable: true })
  fkfReciverCopy2: number | null;

  @Column('bit', { name: 'IsPostConditionCopy', default: () => '(0)' })
  isPostConditionCopy: boolean;

  @Column('bit', { name: 'IsGroupReciverConditionCopy', default: () => '(0)' })
  isGroupReciverConditionCopy: boolean;

  @Column('bit', { name: 'IsCommentStatus', default: () => '(0)' })
  isCommentStatus: boolean;

  @Column('int', { name: 'FkfConditionCopy', nullable: true })
  fkfConditionCopy: number | null;

  @Column('int', { name: 'FkfReciverConditionCopy', nullable: true })
  fkfReciverConditionCopy: number | null;

  @Column('int', { name: 'FkfConditionCopy2', nullable: true })
  fkfConditionCopy2: number | null;

  @Column('int', { name: 'FkfReciverConditionCopy2', nullable: true })
  fkfReciverConditionCopy2: number | null;

  @Column('int', { name: 'FkfWorkFlowConditionCopy', nullable: true })
  fkfWorkFlowConditionCopy: number | null;

  @Column('int', { name: 'FkfWorkFlowCopy', nullable: true })
  fkfWorkFlowCopy: number | null;

  @Column('int', { name: 'SignerNumber', nullable: true })
  signerNumber: number | null;

  @Column('int', { name: 'KartablStatus', nullable: true })
  kartablStatus: number | null;

  @Column('bit', { name: 'KartablReturn', default: () => '(0)' })
  kartablReturn: boolean;

  @Column('int', { name: 'MessageTemplateID', nullable: true })
  messageTemplateId: number | null;

  @Column('int', { name: 'RunExternalDllCondition', nullable: true })
  runExternalDllCondition: number | null;

  @Column('bit', {
    name: 'IsDiscountRequest',
    nullable: true,
    default: () => '(0)',
  })
  isDiscountRequest: boolean | null;

  @Column('bit', { name: 'IsReturnRequest', nullable: true })
  isReturnRequest: boolean | null;
}
