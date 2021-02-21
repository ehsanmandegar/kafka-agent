import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('payWorkCalendar', { schema: 'dbo' })
export class PayWorkCalendar {
  @PrimaryColumn('int', { name: 'pkfWorkCalendar' })
  pkfWorkCalendar: number;

  @Column('nvarchar', { name: 'fld_monthInt', length: 2 })
  fldMonthInt: string;

  @Column('nvarchar', { name: 'fld_MonthStr', length: 50 })
  fldMonthStr: string;

  @Column('int', { name: 'fld_Day' })
  fldDay: number;

  @Column('int', { name: 'fld_Hour' })
  fldHour: number;

  @Column('int', { name: 'fld_Minute' })
  fldMinute: number;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('nvarchar', { name: 'hourAndMinute', nullable: true, length: 10 })
  hourAndMinute: string | null;
}
