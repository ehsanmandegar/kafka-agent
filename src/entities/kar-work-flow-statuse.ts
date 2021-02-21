import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_karWorkFlowStatuse', ['pkfWorkFlowStatuse'], { unique: true })
@Entity('karWorkFlowStatuse', { schema: 'dbo' })
export class KarWorkFlowStatuse {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfWorkFlowStatuse' })
  pkfWorkFlowStatuse: number;

  @Column('nvarchar', {
    name: 'workFlowStatuse',
    length: 50,
    default: () => "''",
  })
  workFlowStatuse: string;
}
