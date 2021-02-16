import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_crmPanelError', ['pkfPanelError'], { unique: true })
@Entity('crmPanelError', { schema: 'dbo' })
export class CrmPanelError {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfPanelError' })
  pkfPanelError: number;

  @Column('nvarchar', { name: 'errorCode', length: 250, default: () => "''" })
  errorCode: string;

  @Column('nvarchar', { name: 'errorName', length: 250, default: () => "''" })
  errorName: string;
}
