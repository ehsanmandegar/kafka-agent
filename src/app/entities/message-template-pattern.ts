import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_MessageTemplatePattern', ['messageTemplatePatternId'], {
  unique: true,
})
@Entity('MessageTemplatePattern', { schema: 'dbo' })
export class MessageTemplatePattern {
  @PrimaryGeneratedColumn({ type: 'int', name: 'MessageTemplatePatternID' })
  messageTemplatePatternId: number;

  @Column('nvarchar', { name: 'MessageTemplatePatternTitle', length: 50 })
  messageTemplatePatternTitle: string;

  @Column('nvarchar', { name: 'MessageTemplatePatternTitleEn', length: 50 })
  messageTemplatePatternTitleEn: string;

  @Column('nvarchar', {
    name: 'MessageTemplatePatternFormat',
    nullable: true,
    length: 50,
  })
  messageTemplatePatternFormat: string | null;
}
