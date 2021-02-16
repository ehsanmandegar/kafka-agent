import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { GenTreater } from './gen-treater';
import { SalStore } from './sal-store';
import { SalGoods } from './sal-goods';
import { GenEmployee } from './gen-employee';

@Index('IX_salUnderOverLoadTrust', ['serial', 'accYear'], { unique: true })
@Index('IX_salUnderOverLoadTrust_1', ['mainOrderNo'], {})
@Index('IX_salUnderOverLoadTrust_2', ['fkfTreater'], {})
@Index('IX_salUnderOverLoadTrust_3', ['fkfGood'], {})
@Index('IX_salUnderOverLoadTrust_4', ['underOverLoadDate'], {})
@Index('PK_salUnderOverLoadTrust', ['pkfUnderOverLoadTrust'], { unique: true })
@Entity('salUnderOverLoadTrust', { schema: 'dbo' })
export class SalUnderOverLoadTrust {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfUnderOverLoadTrust' })
  pkfUnderOverLoadTrust: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('nvarchar', { name: 'UnderOverLoadDate', length: 10 })
  underOverLoadDate: string;

  @Column('int', { name: 'FkfTreater' })
  fkfTreater: number;

  @Column('int', { name: 'FkfGood' })
  fkfGood: number;

  @Column('decimal', {
    name: 'amount1',
    precision: 12,
    scale: 2,
    default: () => '0',
  })
  amount1: number;

  @Column('decimal', {
    name: 'amount2',
    precision: 12,
    scale: 2,
    default: () => '0',
  })
  amount2: number;

  @Column('nvarchar', { name: 'mainOrderNO', length: 50 })
  mainOrderNo: string;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'FkfStatus', default: () => '1' })
  fkfStatus: number;

  @Column('nvarchar', { name: 'createDate', length: 10 })
  createDate: string;

  @Column('nvarchar', { name: 'editDate', length: 10, default: () => "''" })
  editDate: string;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('int', { name: 'overLoadType' })
  overLoadType: number;

  @ManyToOne(
    () => GenTreater,
    (genTreater) => genTreater.salUnderOverLoadTrusts,
  )
  @JoinColumn([{ name: 'FkfTreater', referencedColumnName: 'pkfTreater' }])
  fkfTreater2: GenTreater;

  @ManyToOne(() => SalStore, (salStore) => salStore.salUnderOverLoadTrusts)
  @JoinColumn([{ name: 'FkfStore', referencedColumnName: 'pkfStore' }])
  fkfStore: SalStore;

  @ManyToOne(() => SalGoods, (salGoods) => salGoods.salUnderOverLoadTrusts)
  @JoinColumn([{ name: 'FkfGood', referencedColumnName: 'pkfGood' }])
  fkfGood2: SalGoods;

  @ManyToOne(
    () => GenEmployee,
    (genEmployee) => genEmployee.salUnderOverLoadTrusts,
  )
  @JoinColumn([{ name: 'FkfCreateUser', referencedColumnName: 'pkfEmployee' }])
  fkfCreateUser: GenEmployee;

  @ManyToOne(
    () => GenEmployee,
    (genEmployee) => genEmployee.salUnderOverLoadTrusts2,
  )
  @JoinColumn([{ name: 'FkfEditUser', referencedColumnName: 'pkfEmployee' }])
  fkfEditUser: GenEmployee;

  @RelationId(
    (salUnderOverLoadTrust: SalUnderOverLoadTrust) =>
      salUnderOverLoadTrust.fkfTreater2,
  )
  fkfTreater3: number;

  @RelationId(
    (salUnderOverLoadTrust: SalUnderOverLoadTrust) =>
      salUnderOverLoadTrust.fkfStore,
  )
  fkfStore2: number;

  @RelationId(
    (salUnderOverLoadTrust: SalUnderOverLoadTrust) =>
      salUnderOverLoadTrust.fkfGood2,
  )
  fkfGood3: number;

  @RelationId(
    (salUnderOverLoadTrust: SalUnderOverLoadTrust) =>
      salUnderOverLoadTrust.fkfCreateUser,
  )
  fkfCreateUser2: number;

  @RelationId(
    (salUnderOverLoadTrust: SalUnderOverLoadTrust) =>
      salUnderOverLoadTrust.fkfEditUser,
  )
  fkfEditUser2: number | null;
}
