import { Column, Entity, Index } from 'typeorm';

@Index('PK_proGoodTypeProduce', ['pkfGoodTypeProduce'], { unique: true })
@Entity('proGoodTypeProduce', { schema: 'dbo' })
export class ProGoodTypeProduce {
  @Column('int', { primary: true, name: 'pkfGoodTypeProduce' })
  pkfGoodTypeProduce: number;

  @Column('nvarchar', { name: 'goodTypeProduce', length: 50 })
  goodTypeProduce: string;
}
