import { Column, Entity, Index } from 'typeorm';

@Index('PK_mesTypeMessage', ['pkfTypeMessage'], { unique: true })
@Entity('mesTypeMessage', { schema: 'dbo' })
export class MesTypeMessage {
  @Column('int', { primary: true, name: 'pkfTypeMessage' })
  pkfTypeMessage: number;

  @Column('nvarchar', { name: 'typeMessage', length: 50, default: () => "''" })
  typeMessage: string;

  @Column('nvarchar', {
    name: 'typeMessageCode',
    length: 50,
    default: () => "''",
  })
  typeMessageCode: string;

  @Column('nvarchar', { name: 'memo', default: () => "''" })
  memo: string;

  @Column('datetime', { name: 'changeDateEN', default: () => 'getdate()' })
  changeDateEn: Date;
}
