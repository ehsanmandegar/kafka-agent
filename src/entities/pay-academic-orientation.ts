import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { PayFieldofStudy } from './pay-fieldof-study';

@Index('PK_PayAcademicOrientation', ['pkfAcademicOrientation'], {
  unique: true,
})
@Entity('PayAcademicOrientation', { schema: 'dbo' })
export class PayAcademicOrientation {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfAcademicOrientation' })
  pkfAcademicOrientation: number;

  @Column('int', { name: 'academicOrientationCode' })
  academicOrientationCode: number;

  @Column('nvarchar', { name: 'academicOrientation', length: 200 })
  academicOrientation: string;

  @ManyToOne(
    () => PayFieldofStudy,
    (payFieldofStudy) => payFieldofStudy.payAcademicOrientations,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'FkfFieldofStudy', referencedColumnName: 'pkfFieldofStudy' },
  ])
  fkfFieldofStudy: PayFieldofStudy;

  @RelationId(
    (payAcademicOrientation: PayAcademicOrientation) =>
      payAcademicOrientation.fkfFieldofStudy,
  )
  fkfFieldofStudy2: number;
}
