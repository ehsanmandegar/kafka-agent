import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_karConditionCopy', ['pkfConditionCopy'], { unique: true })
@Entity('karConditionCopy', { schema: 'dbo' })
export class KarConditionCopy {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfConditionCopy' })
  pkfConditionCopy: number;

  @Column('nvarchar', { name: 'procName', length: 50 })
  procName: string;

  @Column('nvarchar', { name: 'conditionCopy', length: 50 })
  conditionCopy: string;
}
