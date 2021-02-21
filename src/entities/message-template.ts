import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_MessageTemplate', ['messageTemplateId'], { unique: true })
@Entity('MessageTemplate', { schema: 'dbo' })
export class MessageTemplate {
  @PrimaryGeneratedColumn({ type: 'int', name: 'MessageTemplateID' })
  messageTemplateId: number;

  @Column('nvarchar', { name: 'MessageTemplateTitle', length: 50 })
  messageTemplateTitle: string;

  @Column('nvarchar', { name: 'MessageTemplateBody' })
  messageTemplateBody: string;
}
