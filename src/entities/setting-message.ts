import { Column, Entity, Index } from 'typeorm';

@Index('PK_SettingMessage', ['settingMessageId'], { unique: true })
@Entity('SettingMessage', { schema: 'dbo' })
export class SettingMessage {
  @Column('int', { primary: true, name: 'SettingMessageID' })
  settingMessageId: number;

  @Column('nvarchar', {
    name: 'PanelAuthorization',
    nullable: true,
    length: 100,
  })
  panelAuthorization: string | null;

  @Column('nvarchar', { name: 'senderNumber', nullable: true, length: 50 })
  senderNumber: string | null;

  @Column('int', { name: 'DelaySend', default: () => '(20)' })
  delaySend: number;
}
