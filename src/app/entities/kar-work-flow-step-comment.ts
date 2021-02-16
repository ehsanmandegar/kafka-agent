import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_karWorkFlowStepComment', ['pkfWorkFlowStepComment'], {
  unique: true,
})
@Entity('karWorkFlowStepComment', { schema: 'dbo' })
export class KarWorkFlowStepComment {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfWorkFlowStepComment' })
  pkfWorkFlowStepComment: number;

  @Column('nvarchar', {
    name: 'workFlowStepComment',
    length: 50,
    default: () => "''",
  })
  workFlowStepComment: string;

  @Column('nvarchar', { name: 'viewName', length: 50, default: () => "''" })
  viewName: string;

  @Column('nvarchar', { name: 'strWhere', length: 100, default: () => "''" })
  strWhere: string;
}
