import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_mesMessage', ['pkfMessage'], { unique: true })
@Entity('mesMessage', { schema: 'dbo' })
export class MesMessage {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfMessage' })
  pkfMessage: number;

  @Column('int', { name: 'FkfNumberList', nullable: true })
  fkfNumberList: number | null;

  @Column('nvarchar', { name: 'message', default: () => "''" })
  message: string;

  @Column('int', { name: 'FkfStatusMessage', nullable: true })
  fkfStatusMessage: number | null;

  @Column('int', { name: 'FkfTypeMessage', nullable: true })
  fkfTypeMessage: number | null;

  @Column('int', { name: 'FkfSource', nullable: true })
  fkfSource: number | null;

  @Column('int', { name: 'FkfCompanyId', nullable: true })
  fkfCompanyId: number | null;

  @Column('nvarchar', { name: 'sendDate', length: 50, default: () => "''" })
  sendDate: string;

  @Column('nvarchar', { name: 'reciveDate', length: 50, default: () => "''" })
  reciveDate: string;

  @Column('nvarchar', { name: 'showDate', length: 50, default: () => "''" })
  showDate: string;

  @Column('nvarchar', { name: 'ansswerDate', length: 50, default: () => "''" })
  ansswerDate: string;

  @Column('bit', { name: 'isDelete', default: () => '(1)' })
  isDelete: boolean;

  @Column('int', { name: 'FkfDocument', nullable: true })
  fkfDocument: number | null;

  @Column('int', { name: 'replay', default: () => '(0)' })
  replay: number;

  @Column('int', { name: 'FkfIdMessagePars', nullable: true })
  fkfIdMessagePars: number | null;

  @Column('nvarchar', { name: 'sendTime', length: 50, default: () => "''" })
  sendTime: string;

  @Column('nvarchar', { name: 'reciveTime', length: 50, default: () => "''" })
  reciveTime: string;

  @Column('nvarchar', { name: 'showTime', length: 50, default: () => "''" })
  showTime: string;

  @Column('nvarchar', { name: 'ansswerTime', length: 50, default: () => "''" })
  ansswerTime: string;

  @Column('datetime', { name: 'sendDateEN', nullable: true })
  sendDateEn: Date | null;

  @Column('datetime', { name: 'reciveDateEN', nullable: true })
  reciveDateEn: Date | null;

  @Column('datetime', { name: 'showDateEN', nullable: true })
  showDateEn: Date | null;

  @Column('datetime', { name: 'ansswerDateEN', nullable: true })
  ansswerDateEn: Date | null;

  @Column('nvarchar', { name: 'replayDiscript', default: () => '(0)' })
  replayDiscript: string;

  @Column('datetime', { name: 'lastUpdateEN', default: () => 'getdate()' })
  lastUpdateEn: Date;

  @Column('bit', { name: 'isSendSMS', default: () => '(0)' })
  isSendSms: boolean;
}
