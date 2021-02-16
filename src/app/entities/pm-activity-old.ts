import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pmActivityOLD', { schema: 'dbo' })
export class PmActivityOld {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfActivity' })
  pkfActivity: number;

  @Column('nvarchar', { name: 'activityCode', length: 50 })
  activityCode: string;

  @Column('nvarchar', { name: 'activity', length: 500 })
  activity: string;

  @Column('bit', { name: 'active' })
  active: boolean;

  @Column('int', { name: 'FkfActivityGroup' })
  fkfActivityGroup: number;

  @Column('int', { name: 'FkfEquipment' })
  fkfEquipment: number;

  @Column('int', { name: 'FKfWorkActivity' })
  fKfWorkActivity: number;

  @Column('int', { name: 'period' })
  period: number;

  @Column('int', { name: 'stopTime' })
  stopTime: number;

  @Column('int', { name: 'personalTime' })
  personalTime: number;

  @Column('nvarchar', { name: 'workDateLast', length: 10 })
  workDateLast: string;

  @Column('tinyint', { name: 'priority' })
  priority: number;

  @Column('int', { name: 'FkfEquipmentStatus' })
  fkfEquipmentStatus: number;

  @Column('nvarchar', { name: 'recordDate', length: 10 })
  recordDate: string;

  @Column('nvarchar', { name: 'description', length: 255 })
  description: string;

  @Column('ntext', { name: 'instruction' })
  instruction: string;

  @Column('int', { name: 'FkfFault', nullable: true })
  fkfFault: number | null;

  @Column('int', { name: 'FkfDepartment' })
  fkfDepartment: number;

  @Column('bit', { name: 'mainMaintenance' })
  mainMaintenance: boolean;

  @Column('int', { name: 'FkfActivityType', nullable: true })
  fkfActivityType: number | null;
}
