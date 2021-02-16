import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SalQuarteringGoods } from './sal-quartering-goods';

@Index('PK_salQuartering', ['pkfQuartering'], { unique: true })
@Entity('salQuartering', { schema: 'dbo' })
export class SalQuartering {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfQuartering' })
  pkfQuartering: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('nvarchar', {
    name: 'quarteringDate',
    length: 50,
    default: () => "''",
  })
  quarteringDate: string;

  @Column('nvarchar', { name: 'fullName', length: 50, default: () => "''" })
  fullName: string;

  @Column('nvarchar', { name: 'nationalCode', length: 50, default: () => "''" })
  nationalCode: string;

  @Column('nvarchar', { name: 'inputTime', length: 10, default: () => "''" })
  inputTime: string;

  @Column('nvarchar', { name: 'inputDate', length: 50, default: () => "''" })
  inputDate: string;

  @Column('int', { name: 'FkfTypeCar', nullable: true })
  fkfTypeCar: number | null;

  @Column('nvarchar', { name: 'origin', length: 50, default: () => "''" })
  origin: string;

  @Column('nvarchar', { name: 'destination', length: 50, default: () => "''" })
  destination: string;

  @Column('nvarchar', {
    name: 'plateNumberCar',
    length: 50,
    default: () => "''",
  })
  plateNumberCar: string;

  @Column('int', { name: 'FkfCaller', nullable: true })
  fkfCaller: number | null;

  @Column('int', { name: 'FkfDelivery', nullable: true })
  fkfDelivery: number | null;

  @Column('int', { name: 'FkfTransferee', nullable: true })
  fkfTransferee: number | null;

  @Column('int', { name: 'FkfVisitor', nullable: true })
  fkfVisitor: number | null;

  @Column('nvarchar', { name: 'placeVisit', length: 50, default: () => "''" })
  placeVisit: string;

  @Column('int', { name: 'numberVisitor', default: () => '(0)' })
  numberVisitor: number;

  @Column('nvarchar', { name: 'companyName', length: 50, default: () => "''" })
  companyName: string;

  @Column('nvarchar', { name: 'exitTime', length: 10, default: () => "''" })
  exitTime: string;

  @Column('int', { name: 'FkfDevice', nullable: true })
  fkfDevice: number | null;

  @Column('int', { name: 'freightNumber', default: () => '(0)' })
  freightNumber: number;

  @Column('nvarchar', { name: 'cargoType', length: 50, default: () => "''" })
  cargoType: string;

  @Column('int', { name: 'FkfPorterage', nullable: true })
  fkfPorterage: number | null;

  @Column('nvarchar', { name: 'memo', default: () => "''" })
  memo: string;

  @Column('bit', { name: 'flagPersonCar', default: () => '(0)' })
  flagPersonCar: boolean;

  @OneToMany(
    () => SalQuarteringGoods,
    (salQuarteringGoods) => salQuarteringGoods.fKfQuartering,
  )
  salQuarteringGoods: SalQuarteringGoods[];
}
