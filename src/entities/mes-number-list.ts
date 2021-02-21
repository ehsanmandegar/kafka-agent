import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_mesNumberList', ['pkfNumberList'], { unique: true })
@Entity('mesNumberList', { schema: 'dbo' })
export class MesNumberList {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfNumberList' })
  pkfNumberList: number;

  @Column('int', { name: 'FkfTreater', nullable: true })
  fkfTreater: number | null;

  @Column('nvarchar', { name: 'number', length: 50, default: () => "''" })
  number: string;

  @Column('bit', { name: 'active', default: () => '(0)' })
  active: boolean;

  @Column('datetime', { name: 'validyDateClient', default: () => 'getdate()' })
  validyDateClient: Date;

  @Column('nvarchar', { name: 'memo' })
  memo: string;

  @Column('bit', { name: 'isChang', default: () => '(0)' })
  isChang: boolean;

  @Column('bit', { name: 'sendSMS', default: () => '(0)' })
  sendSms: boolean;
}
