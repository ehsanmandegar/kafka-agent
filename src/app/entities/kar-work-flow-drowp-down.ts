import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_karWorkFlowDrowpDown', ['pkfWorkFlowDrowpDown'], { unique: true })
@Entity('karWorkFlowDrowpDown', { schema: 'dbo' })
export class KarWorkFlowDrowpDown {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfWorkFlowDrowpDown' })
  pkfWorkFlowDrowpDown: number;

  @Column('nvarchar', {
    name: 'workFlowDrowpDown',
    length: 50,
    default: () => "''",
  })
  workFlowDrowpDown: string;
}
