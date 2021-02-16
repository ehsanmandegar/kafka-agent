import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PmEquipment } from './pm-equipment';
import { PmHolidayDate } from './pm-holiday-date';

@Index('PK_pmSection', ['pkfSection'], { unique: true })
@Entity('pmSection', { schema: 'dbo' })
export class PmSection {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfSection' })
  pkfSection: number;

  @Column('nvarchar', { name: 'sectionCode', length: 25 })
  sectionCode: string;

  @Column('nvarchar', { name: 'sectionName', length: 200 })
  sectionName: string;

  @Column('bit', { name: 'active', default: () => '(1)' })
  active: boolean;

  @Column('nvarchar', { name: 'dateStartPrg', nullable: true, length: 8 })
  dateStartPrg: string | null;

  @Column('smallint', { name: 'dayPeriod', default: () => '(7)' })
  dayPeriod: number;

  @Column('nvarchar', { name: 'dateEndPrg', nullable: true, length: 8 })
  dateEndPrg: string | null;

  @Column('int', { name: 'FkfDepartment' })
  fkfDepartment: number;

  @Column('nvarchar', { name: 'description', nullable: true, length: 250 })
  description: string | null;

  @Column('nvarchar', { name: 'formNo', length: 150, default: () => "''" })
  formNo: string;

  @Column('nvarchar', { name: 'reviwDate', length: 150, default: () => "''" })
  reviwDate: string;

  @Column('nvarchar', { name: 'reviwNo', length: 150, default: () => "''" })
  reviwNo: string;

  @OneToMany(() => PmEquipment, (pmEquipment) => pmEquipment.fKfSection)
  pmEquipments: PmEquipment[];

  @OneToMany(() => PmHolidayDate, (pmHolidayDate) => pmHolidayDate.fkfSection)
  pmHolidayDates: PmHolidayDate[];
}
