import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_pmWorkDay', ['pkfWorkDay'], { unique: true })
@Entity('pmWorkDay', { schema: 'dbo' })
export class PmWorkDay {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfWorkDay' })
  pkfWorkDay: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('nvarchar', { name: 'workDayDate', length: 50 })
  workDayDate: string;

  @Column('int', { name: 'FkfSection' })
  fkfSection: number;

  @Column('int', { name: 'FkfShift' })
  fkfShift: number;

  @Column('decimal', { name: 'workDayTime', precision: 18, scale: 2 })
  workDayTime: number;

  @Column('int', { name: 'productRange' })
  productRange: number;

  @Column('int', { name: 'unTechnicStop', default: () => '(0)' })
  unTechnicStop: number;
}
