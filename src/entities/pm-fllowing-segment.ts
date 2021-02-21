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
import { PmEquipment } from './pm-equipment';
import { PmSegment } from './pm-segment';
import { PmRequestRepairs } from './pm-request-repairs';

@Index('PK_pmFllowingSegment', ['pkfFllowingSegment'], { unique: true })
@Entity('pmFllowingSegment', { schema: 'dbo' })
export class PmFllowingSegment {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfFllowingSegment' })
  pkfFllowingSegment: number;

  @Column('nvarchar', {
    name: 'fllowingSegmentCode',
    length: 50,
    default: () => "''",
  })
  fllowingSegmentCode: string;

  @Column('nvarchar', {
    name: 'fllowingSegment',
    length: 100,
    default: () => "''",
  })
  fllowingSegment: string;

  @Column('bit', { name: 'active', default: () => '(1)' })
  active: boolean;

  @Column('nvarchar', { name: 'description', length: 255, default: () => "''" })
  description: string;

  @OneToMany(() => PmEquipment, (pmEquipment) => pmEquipment.fkfFllowingSegment)
  pmEquipments: PmEquipment[];

  @ManyToOne(() => PmSegment, (pmSegment) => pmSegment.pmFllowingSegments)
  @JoinColumn([{ name: 'FkfSegment', referencedColumnName: 'pkfSegment' }])
  fkfSegment: PmSegment;

  @OneToMany(
    () => PmRequestRepairs,
    (pmRequestRepairs) => pmRequestRepairs.fkfFllowingSegment,
  )
  pmRequestRepairs: PmRequestRepairs[];

  @RelationId(
    (pmFllowingSegment: PmFllowingSegment) => pmFllowingSegment.fkfSegment,
  )
  fkfSegment2: number | null;
}
