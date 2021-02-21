import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_genSetting', ['pkfSetting'], { unique: true })
@Entity('genSetting', { schema: 'dbo' })
export class GenSetting {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfSetting' })
  pkfSetting: number;

  @Column('nvarchar', { name: 'description', length: 1000 })
  description: string;

  @Column('varchar', { name: 'startDate', length: 50 })
  startDate: string;

  @Column('varchar', { name: 'endDate', length: 50 })
  endDate: string;

  @Column('bit', { name: 'active', default: () => '(1)' })
  active: boolean;

  @Column('int', { name: 'treatreDigit', default: () => '(4)' })
  treatreDigit: number;

  @Column('bit', { name: 'sendFinal', default: () => '(1)' })
  sendFinal: boolean;

  @Column('bit', { name: 'spPrint', default: () => '(0)' })
  spPrint: boolean;

  @Column('bit', { name: 'alarmGetCheck', default: () => '(0)' })
  alarmGetCheck: boolean;

  @Column('bit', { name: 'alarmPayCheck', default: () => '(0)' })
  alarmPayCheck: boolean;

  @Column('bit', { name: 'alarmSaleOpen', default: () => '(0)' })
  alarmSaleOpen: boolean;

  @Column('nvarchar', { name: 'pathPackup', length: 255, default: () => "''" })
  pathPackup: string;

  @Column('bit', { name: 'typeFactor', default: () => '(0)' })
  typeFactor: boolean;

  @Column('int', { name: 'revUpdateApp', default: () => '(0)' })
  revUpdateApp: number;

  @Column('int', { name: 'oldPkf', nullable: true })
  oldPkf: number | null;

  @Column('bit', { name: 'alarmPointOrder', default: () => '(0)' })
  alarmPointOrder: boolean;

  @Column('bit', { name: 'alarmLoan', default: () => '(0)' })
  alarmLoan: boolean;
}
