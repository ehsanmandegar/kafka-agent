import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_Calendar', ['calendarId'], { unique: true })
@Entity('Calendar', { schema: 'dbo' })
export class Calendar {
  @PrimaryGeneratedColumn({ type: 'int', name: 'CalendarID' })
  calendarId: number;

  @Column('int', { name: 'CalendarYear' })
  calendarYear: number;

  @Column('nvarchar', { name: 'CalendarDate', length: 10 })
  calendarDate: string;

  @Column('nvarchar', { name: 'CalendarComment', nullable: true })
  calendarComment: string | null;
}
