import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('crmLogFilePanel', { schema: 'dbo' })
export class CrmLogFilePanel {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfLogFile' })
  pkfLogFile: number;

  @Column('nvarchar', { name: 'LogFileMemo', default: () => "''" })
  logFileMemo: string;

  @Column('nvarchar', { name: 'crateDate', length: 20, default: () => "''" })
  crateDate: string;
}
