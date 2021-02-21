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
import { PmActivityRecord } from './pm-activity-record';
import { PmStopNature } from './pm-stop-nature';

@Index('PK_tblStopType', ['pkfStopType'], { unique: true })
@Entity('pmStopType', { schema: 'dbo' })
export class PmStopType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfStopType' })
  pkfStopType: number;

  @Column('nvarchar', { name: 'stopTypeCode', length: 25 })
  stopTypeCode: string;

  @Column('nvarchar', { name: 'stopType', length: 200 })
  stopType: string;

  @Column('bit', { name: 'active', default: () => '(1)' })
  active: boolean;

  @Column('nvarchar', { name: 'description', length: 255, default: () => "''" })
  description: string;

  @Column('int', { name: 'FkfDepartment', default: () => '(1)' })
  fkfDepartment: number;

  @OneToMany(
    () => PmActivityRecord,
    (pmActivityRecord) => pmActivityRecord.fkfStopType,
  )
  pmActivityRecords: PmActivityRecord[];

  @ManyToOne(() => PmStopNature, (pmStopNature) => pmStopNature.pmStopTypes)
  @JoinColumn([
    { name: 'FkfStopNature', referencedColumnName: 'pkfStopNature' },
  ])
  fkfStopNature: PmStopNature;

  @RelationId((pmStopType: PmStopType) => pmStopType.fkfStopNature)
  fkfStopNature2: number;
}
