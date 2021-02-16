import { Column, Entity, Index } from 'typeorm';

@Index('PK_balBailType', ['pkfBailType'], { unique: true })
@Entity('balBailType', { schema: 'dbo' })
export class BalBailType {
  @Column('int', { primary: true, name: 'pkfBailType' })
  pkfBailType: number;

  @Column('nvarchar', { name: 'bailType', length: 100 })
  bailType: string;
}
