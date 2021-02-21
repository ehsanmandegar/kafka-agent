import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PayAcademicOrientation } from './pay-academic-orientation';

@Index('PK_PayFieldofStudy', ['pkfFieldofStudy'], { unique: true })
@Entity('PayFieldofStudy', { schema: 'dbo' })
export class PayFieldofStudy {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfFieldofStudy' })
  pkfFieldofStudy: number;

  @Column('nvarchar', { name: 'fieldofStudyCode', length: 50 })
  fieldofStudyCode: string;

  @Column('nvarchar', { name: 'fieldofStudy', length: 200 })
  fieldofStudy: string;

  @Column('int', { name: 'FkfEducation' })
  fkfEducation: number;

  @OneToMany(
    () => PayAcademicOrientation,
    (payAcademicOrientation) => payAcademicOrientation.fkfFieldofStudy,
  )
  payAcademicOrientations: PayAcademicOrientation[];
}
