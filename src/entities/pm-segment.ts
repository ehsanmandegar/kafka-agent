import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { PmFllowingSegment } from './pm-fllowing-segment';
import { PmArea } from './pm-area';

@Index('PK_pmSegment', ['pkfSegment'], { unique: true })
@Entity('pmSegment', { schema: 'dbo' })
export class PmSegment {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfSegment' })
  pkfSegment: number;

  @Column('nvarchar', { name: 'segmentCode', length: 50 })
  segmentCode: string;

  @Column('nvarchar', { name: 'segment', length: 100 })
  segment: string;

  @Column('bit', { name: 'active', default: () => '(1)' })
  active: boolean;

  @Column('nvarchar', { name: 'description', length: 255, default: () => "''" })
  description: string;

  @OneToMany(
    () => PmFllowingSegment,
    (pmFllowingSegment) => pmFllowingSegment.fkfSegment,
  )
  pmFllowingSegments: PmFllowingSegment[];

  @ManyToOne(() => PmArea, (pmArea) => pmArea.pmSegments)
  @JoinColumn([{ name: 'FkfArea', referencedColumnName: 'pkfArea' }])
  fkfArea: PmArea;

  @RelationId((pmSegment: PmSegment) => pmSegment.fkfArea)
  fkfArea2: number;
}
