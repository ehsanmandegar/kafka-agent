import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_pmSetting', ['pkfSetting'], { unique: true })
@Entity('pmSetting', { schema: 'dbo' })
export class PmSetting {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfSetting' })
  pkfSetting: number;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'calculateStopTime', default: () => '(8)' })
  calculateStopTime: number;
}
