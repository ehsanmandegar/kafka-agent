import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PmActivityRecord } from './pm-activity-record';
import { ProProduce } from './pro-produce';

@Index('IX_pmShift', ['shiftCode'], { unique: true })
@Index('PK_pmShift', ['pkfShift'], { unique: true })
@Entity('pmShift', { schema: 'dbo' })
export class PmShift {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfShift' })
  pkfShift: number;

  @Column('nvarchar', { name: 'shiftName', length: 200 })
  shiftName: string;

  @Column('nvarchar', { name: 'description', length: 255, default: () => "''" })
  description: string;

  @Column('bit', { name: 'active', default: () => '(1)' })
  active: boolean;

  @Column('int', { name: 'FkfDepartment', nullable: true })
  fkfDepartment: number | null;

  @Column('int', { name: 'duration', nullable: true, default: () => '(0)' })
  duration: number | null;

  @Column('nvarchar', { name: 'shiftCode', length: 200, default: () => "''" })
  shiftCode: string;

  @OneToMany(
    () => PmActivityRecord,
    (pmActivityRecord) => pmActivityRecord.fkfShift,
  )
  pmActivityRecords: PmActivityRecord[];

  @OneToMany(() => ProProduce, (proProduce) => proProduce.fkfShift)
  proProduces: ProProduce[];
}
