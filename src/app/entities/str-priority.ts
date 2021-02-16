import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_strPriority', ['pkfPriority'], { unique: true })
@Entity('strPriority', { schema: 'dbo' })
export class StrPriority {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfPriority' })
  pkfPriority: number;

  @Column('int', { name: 'priority' })
  priority: number;
}
