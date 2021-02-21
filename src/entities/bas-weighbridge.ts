import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_basWeighbridge', ['pkfWeighbridge'], { unique: true })
@Entity('basWeighbridge', { schema: 'dbo' })
export class BasWeighbridge {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfWeighbridge' })
  pkfWeighbridge: number;

  @Column('nvarchar', { name: 'weighbridge', length: 250 })
  weighbridge: string;
}
