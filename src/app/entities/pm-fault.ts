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
import { PmEquipmentGroup } from './pm-equipment-group';

@Index('PK_tblFault', ['pkfFault'], { unique: true })
@Entity('pmFault', { schema: 'dbo' })
export class PmFault {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfFault' })
  pkfFault: number;

  @Column('nvarchar', { name: 'faultCode', length: 25 })
  faultCode: string;

  @Column('nvarchar', { name: 'fault', length: 150 })
  fault: string;

  @Column('bit', { name: 'active', default: () => '(1)' })
  active: boolean;

  @Column('nvarchar', { name: 'description', length: 255, default: () => "''" })
  description: string;

  @Column('int', { name: 'FkfDepartment' })
  fkfDepartment: number;

  @OneToMany(
    () => PmActivityRecord,
    (pmActivityRecord) => pmActivityRecord.fkfFault,
  )
  pmActivityRecords: PmActivityRecord[];

  @ManyToOne(
    () => PmEquipmentGroup,
    (pmEquipmentGroup) => pmEquipmentGroup.pmFaults,
  )
  @JoinColumn([
    { name: 'FKfEquipmentGroup', referencedColumnName: 'pkfEquipmentGroup' },
  ])
  fKfEquipmentGroup: PmEquipmentGroup;

  @RelationId((pmFault: PmFault) => pmFault.fKfEquipmentGroup)
  fKfEquipmentGroup2: number;
}
