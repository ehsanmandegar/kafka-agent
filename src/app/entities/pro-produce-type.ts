import { Column, Entity, Index } from 'typeorm';

@Index('PK_proProduceType', ['pkfProduceType'], { unique: true })
@Entity('proProduceType', { schema: 'dbo' })
export class ProProduceType {
  @Column('int', { primary: true, name: 'pkfProduceType' })
  pkfProduceType: number;

  @Column('nvarchar', { name: 'ProduceType', nullable: true, length: 50 })
  produceType: string | null;
}
