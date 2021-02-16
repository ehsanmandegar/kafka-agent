import { Column, Entity, Index } from 'typeorm';

@Index('PK_mesStatusMessage', ['pkfStatusMessage'], { unique: true })
@Entity('mesStatusMessage', { schema: 'dbo' })
export class MesStatusMessage {
  @Column('int', { primary: true, name: 'pkfStatusMessage' })
  pkfStatusMessage: number;

  @Column('nvarchar', {
    name: 'statusMessage',
    length: 50,
    default: () => "''",
  })
  statusMessage: string;

  @Column('nvarchar', {
    name: 'statusMessageCode',
    length: 50,
    default: () => "''",
  })
  statusMessageCode: string;

  @Column('nvarchar', { name: 'memo', default: () => "''" })
  memo: string;

  @Column('datetime', { name: 'changeDateEN', default: () => 'getdate()' })
  changeDateEn: Date;
}
