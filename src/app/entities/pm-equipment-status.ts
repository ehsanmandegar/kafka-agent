import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PmActivity } from './pm-activity';
import { PmRequestRepairs } from './pm-request-repairs';

@Index('PK_tblEquipmentStatus', ['pkfEquipmentStatus'], { unique: true })
@Entity('pmEquipmentStatus', { schema: 'dbo' })
export class PmEquipmentStatus {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfEquipmentStatus' })
  pkfEquipmentStatus: number;

  @Column('nvarchar', { name: 'equipmentStatus', length: 100 })
  equipmentStatus: string;

  @OneToMany(() => PmActivity, (pmActivity) => pmActivity.fkfEquipmentStatus)
  pmActivities: PmActivity[];

  @OneToMany(
    () => PmRequestRepairs,
    (pmRequestRepairs) => pmRequestRepairs.fkfEquipmentStatus,
  )
  pmRequestRepairs: PmRequestRepairs[];
}
