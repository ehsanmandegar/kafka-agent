import { Column, Entity, Index, OneToMany } from 'typeorm';
import { PmHolidayDate } from './pm-holiday-date';

@Index('PK_tblHolidayDateType', ['pkfHolidayDateType'], { unique: true })
@Entity('pmHolidayDateType', { schema: 'dbo' })
export class PmHolidayDateType {
  @Column('int', { primary: true, name: 'pkfHolidayDateType' })
  pkfHolidayDateType: number;

  @Column('nvarchar', { name: 'holidayDateType', length: 50 })
  holidayDateType: string;

  @OneToMany(
    () => PmHolidayDate,
    (pmHolidayDate) => pmHolidayDate.fkfHolidayDateType,
  )
  pmHolidayDates: PmHolidayDate[];
}
