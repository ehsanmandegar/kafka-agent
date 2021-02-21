import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_PanelMessage', ['pkfPanelMessage'], { unique: true })
@Entity('crmPanelMessage', { schema: 'dbo' })
export class CrmPanelMessage {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfPanelMessage' })
  pkfPanelMessage: number;

  @Column('nvarchar', { name: 'message', default: () => "''" })
  message: string;
}
