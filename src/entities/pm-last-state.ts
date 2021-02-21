import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_pmLastState', ['pkfLastState'], { unique: true })
@Entity('pmLastState', { schema: 'dbo' })
export class PmLastState {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfLastState' })
  pkfLastState: number;

  @Column('nvarchar', { name: 'lastState', length: 50 })
  lastState: string;
}
