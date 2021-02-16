import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PmSegment } from './pm-segment';

@Index('PK_pmArea', ['pkfArea'], { unique: true })
@Entity('pmArea', { schema: 'dbo' })
export class PmArea {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfArea' })
  pkfArea: number;

  @Column('nvarchar', { name: 'areaCode', length: 50 })
  areaCode: string;

  @Column('nvarchar', { name: 'area', length: 100 })
  area: string;

  @Column('bit', { name: 'active', default: () => '(1)' })
  active: boolean;

  @Column('nvarchar', { name: 'description', length: 255, default: () => "''" })
  description: string;

  @Column('int', { name: 'FkfSection', nullable: true })
  fkfSection: number | null;

  @OneToMany(() => PmSegment, (pmSegment) => pmSegment.fkfArea)
  pmSegments: PmSegment[];
}
