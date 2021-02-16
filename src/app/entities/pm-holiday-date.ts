import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { PmSection } from './pm-section';
import { PmHolidayDateType } from './pm-holiday-date-type';

@Index('PK_tblHolidayDate', ['pkfHolidayDate'], { unique: true })
@Entity('pmHolidayDate', { schema: 'dbo' })
export class PmHolidayDate {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfHolidayDate' })
  pkfHolidayDate: number;

  @Column('nvarchar', { name: 'holidayDate', length: 10 })
  holidayDate: string;

  @Column('nvarchar', { name: 'description', length: 255, default: () => "''" })
  description: string;

  @Column('int', { name: 'FkfDepartment' })
  fkfDepartment: number;

  @ManyToOne(() => PmSection, (pmSection) => pmSection.pmHolidayDates)
  @JoinColumn([{ name: 'FkfSection', referencedColumnName: 'pkfSection' }])
  fkfSection: PmSection;

  @ManyToOne(
    () => PmHolidayDateType,
    (pmHolidayDateType) => pmHolidayDateType.pmHolidayDates,
  )
  @JoinColumn([
    { name: 'FkfHolidayDateType', referencedColumnName: 'pkfHolidayDateType' },
  ])
  fkfHolidayDateType: PmHolidayDateType;

  @RelationId((pmHolidayDate: PmHolidayDate) => pmHolidayDate.fkfSection)
  fkfSection2: number;

  @RelationId(
    (pmHolidayDate: PmHolidayDate) => pmHolidayDate.fkfHolidayDateType,
  )
  fkfHolidayDateType2: number;
}
