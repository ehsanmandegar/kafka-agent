import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_RequestRepairsMemo', ['pkfRequestRepairsMemo'], { unique: true })
@Entity('pmRequestRepairsMemo', { schema: 'dbo' })
export class PmRequestRepairsMemo {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfRequestRepairsMemo' })
  pkfRequestRepairsMemo: number;

  @Column('nvarchar', { name: 'memo' })
  memo: string;
}
