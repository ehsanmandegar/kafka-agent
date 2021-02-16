import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BasWeight } from './bas-weight';

@Index('PK_salMotorType', ['pkfMotorType'], { unique: true })
@Entity('salMotorType', { schema: 'dbo' })
export class SalMotorType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfMotorType' })
  pkfMotorType: number;

  @Column('nvarchar', { name: 'motorType', length: 50 })
  motorType: string;

  @Column('int', { name: 'basculePrice', default: () => '(0)' })
  basculePrice: number;

  @OneToMany(() => BasWeight, (basWeight) => basWeight.fkfCarType2)
  basWeights: BasWeight[];
}
