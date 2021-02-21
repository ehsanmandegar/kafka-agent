import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('IX_karWorkFlowStepType', ['titelForm', 'workFlowStepType'], {
  unique: true,
})
@Index('PK_karWorkFlowStepType', ['pkfWorkFlowStepType'], { unique: true })
@Entity('karWorkFlowStepType', { schema: 'dbo' })
export class KarWorkFlowStepType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfWorkFlowStepType' })
  pkfWorkFlowStepType: number;

  @Column('nvarchar', {
    name: 'workFlowStepType',
    length: 50,
    default: () => "''",
  })
  workFlowStepType: string;

  @Column('nvarchar', { name: 'titelForm', length: 50, default: () => "''" })
  titelForm: string;

  @Column('nvarchar', { name: 'titelFormEN', length: 50, default: () => "''" })
  titelFormEn: string;
}
