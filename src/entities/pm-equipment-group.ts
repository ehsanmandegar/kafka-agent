import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PmEquipment } from './pm-equipment';
import { PmFault } from './pm-fault';

@Index('PK_tblEquipmentGroup', ['pkfEquipmentGroup'], { unique: true })
@Entity('pmEquipmentGroup', { schema: 'dbo' })
export class PmEquipmentGroup {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfEquipmentGroup' })
  pkfEquipmentGroup: number;

  @Column('nvarchar', { name: 'equipmentGroupCode', length: 25 })
  equipmentGroupCode: string;

  @Column('nvarchar', { name: 'equipmentGroup', length: 200 })
  equipmentGroup: string;

  @Column('bit', { name: 'active', default: () => '(1)' })
  active: boolean;

  @Column('int', { name: 'FkfDepartment' })
  fkfDepartment: number;

  @Column('nvarchar', { name: 'description', length: 255, default: () => "''" })
  description: string;

  @OneToMany(() => PmEquipment, (pmEquipment) => pmEquipment.fkfEquipmentGroup)
  pmEquipments: PmEquipment[];

  @OneToMany(() => PmFault, (pmFault) => pmFault.fKfEquipmentGroup)
  pmFaults: PmFault[];
}
