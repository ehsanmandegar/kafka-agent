import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_RequestRepairStatus', ['pkfRequestRepairStatus'], { unique: true })
@Entity('pmRequestRepairStatus', { schema: 'dbo' })
export class PmRequestRepairStatus {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfRequestRepairStatus' })
  pkfRequestRepairStatus: number;

  @Column('nvarchar', { name: 'requestRepairStatus', length: 150 })
  requestRepairStatus: string;

  @Column('int', { name: 'showFlag', nullable: true, default: () => '(0)' })
  showFlag: number | null;
}
