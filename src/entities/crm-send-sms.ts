import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_SendSMS', ['pkfSendSms'], { unique: true })
@Entity('crmSendSMS', { schema: 'dbo' })
export class CrmSendSms {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfSendSMS' })
  pkfSendSms: number;

  @Column('nvarchar', { name: 'sendDate', length: 30, default: () => "''" })
  sendDate: string;

  @Column('nvarchar', { name: 'sendTime', length: 30, default: () => "''" })
  sendTime: string;

  @Column('nvarchar', {
    name: 'recipientNumber',
    length: 50,
    default: () => "''",
  })
  recipientNumber: string;

  @Column('int', { name: 'message', nullable: true })
  message: number | null;

  @Column('int', { name: 'refrenceForm', nullable: true })
  refrenceForm: number | null;

  @Column('int', { name: 'resultValue', default: () => '(0)' })
  resultValue: number;

  @Column('int', { name: 'FkfSender', nullable: true })
  fkfSender: number | null;

  @Column('nvarchar', {
    name: 'refrenceFormText',
    length: 30,
    default: () => "''",
  })
  refrenceFormText: string;

  @Column('int', { name: 'sendSMSID', nullable: true })
  sendSmsid: number | null;

  @Column('int', { name: 'checkingMessageID', nullable: true })
  checkingMessageId: number | null;

  @Column('int', { name: 'typeSend', default: () => '(1)' })
  typeSend: number;

  @Column('nvarchar', {
    name: 'sendDateSchedule',
    length: 30,
    default: () => "''",
  })
  sendDateSchedule: string;

  @Column('nvarchar', {
    name: 'sendTimeSchedule',
    length: 30,
    default: () => "''",
  })
  sendTimeSchedule: string;

  @Column('int', { name: 'countSend', default: () => '(0)' })
  countSend: number;
}
