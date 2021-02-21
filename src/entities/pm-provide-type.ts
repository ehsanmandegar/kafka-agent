import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PmEquipment } from './pm-equipment';

@Index('PK_tblProvide', ['pkfProvideType'], { unique: true })
@Entity('pmProvideType', { schema: 'dbo' })
export class PmProvideType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfProvideType' })
  pkfProvideType: number;

  @Column('nvarchar', { name: 'provideType', length: 200 })
  provideType: string;

  @OneToMany(() => PmEquipment, (pmEquipment) => pmEquipment.fkfProvideType)
  pmEquipments: PmEquipment[];
}
