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
import { PmWorkActivity } from './pm-work-activity';
import { PmEquipmentStatus } from './pm-equipment-status';
import { PmActivityGoods } from './pm-activity-goods';
import { PmActivityRecord } from './pm-activity-record';
import { PmActivitySkills } from './pm-activity-skills';
import { PmActivityTools } from './pm-activity-tools';
import { PmProposal } from './pm-proposal';

@Index('IX_pmActivity', ['activityCode'], { unique: true })
@Index('PK_tblActivity', ['pkfActivity'], { unique: true })
@Entity('pmActivity', { schema: 'dbo' })
export class PmActivity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfActivity' })
  pkfActivity: number;

  @Column('nvarchar', { name: 'activityCode', length: 50 })
  activityCode: string;

  @Column('bit', { name: 'active', default: () => '(1)' })
  active: boolean;

  @Column('int', { name: 'period', default: () => '(1)' })
  period: number;

  @Column('int', { name: 'stopTime', default: () => '(0)' })
  stopTime: number;

  @Column('int', { name: 'personalTime', default: () => '(0)' })
  personalTime: number;

  @Column('nvarchar', { name: 'workDateLast', length: 10 })
  workDateLast: string;

  @Column('tinyint', { name: 'priority', default: () => '(0)' })
  priority: number;

  @Column('nvarchar', { name: 'recordDate', length: 10 })
  recordDate: string;

  @Column('nvarchar', { name: 'description', length: 255, default: () => "''" })
  description: string;

  @Column('ntext', { name: 'instruction', default: () => "''" })
  instruction: string;

  @Column('int', { name: 'FkfFault', nullable: true })
  fkfFault: number | null;

  @Column('int', { name: 'FkfDepartment' })
  fkfDepartment: number;

  @Column('bit', { name: 'mainMaintenance', default: () => '(0)' })
  mainMaintenance: boolean;

  @Column('int', { name: 'FkfActivityDef', nullable: true })
  fkfActivityDef: number | null;

  @ManyToOne(() => PmEquipment, (pmEquipment) => pmEquipment.pmActivities)
  @JoinColumn([{ name: 'FkfEquipment', referencedColumnName: 'pkfEquipment' }])
  fkfEquipment: PmEquipment;

  @ManyToOne(
    () => PmWorkActivity,
    (pmWorkActivity) => pmWorkActivity.pmActivities,
  )
  @JoinColumn([
    { name: 'FKfWorkActivity', referencedColumnName: 'pkfWorkActivity' },
  ])
  fKfWorkActivity: PmWorkActivity;

  @ManyToOne(
    () => PmEquipmentStatus,
    (pmEquipmentStatus) => pmEquipmentStatus.pmActivities,
  )
  @JoinColumn([
    { name: 'FkfEquipmentStatus', referencedColumnName: 'pkfEquipmentStatus' },
  ])
  fkfEquipmentStatus: PmEquipmentStatus;

  @OneToMany(
    () => PmActivityGoods,
    (pmActivityGoods) => pmActivityGoods.fKfActivity,
  )
  pmActivityGoods: PmActivityGoods[];

  @OneToMany(
    () => PmActivityRecord,
    (pmActivityRecord) => pmActivityRecord.fKfActivity,
  )
  pmActivityRecords: PmActivityRecord[];

  @OneToMany(
    () => PmActivitySkills,
    (pmActivitySkills) => pmActivitySkills.fkfActivity,
  )
  pmActivitySkills: PmActivitySkills[];

  @OneToMany(
    () => PmActivityTools,
    (pmActivityTools) => pmActivityTools.fkfActivity,
  )
  pmActivityTools: PmActivityTools[];

  @OneToMany(() => PmProposal, (pmProposal) => pmProposal.fkfActivity)
  pmProposals: PmProposal[];

  @RelationId((pmActivity: PmActivity) => pmActivity.fkfEquipment)
  fkfEquipment2: number;

  @RelationId((pmActivity: PmActivity) => pmActivity.fKfWorkActivity)
  fKfWorkActivity2: number;

  @RelationId((pmActivity: PmActivity) => pmActivity.fkfEquipmentStatus)
  fkfEquipmentStatus2: number;
}
