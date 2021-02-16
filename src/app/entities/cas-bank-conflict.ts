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
import { GenTreater } from './gen-treater';
import { GenEmployee } from './gen-employee';
import { CasBankConflictDetail } from './cas-bank-conflict-detail';

@Index('IX_casBankConflict', ['fkfBank', 'bankConflictDate'], { unique: true })
@Index('PK_casBankConflict', ['pkfBankConflict'], { unique: true })
@Entity('casBankConflict', { schema: 'dbo' })
export class CasBankConflict {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfBankConflict' })
  pkfBankConflict: number;

  @Column('int', { name: 'FkfBank' })
  fkfBank: number;

  @Column('nvarchar', { name: 'bankConflictDate', length: 10 })
  bankConflictDate: string;

  @Column('bigint', { name: 'bankPrice' })
  bankPrice: string;

  @Column('bigint', { name: 'systemPrice' })
  systemPrice: string;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('nvarchar', { name: 'createDate', length: 10 })
  createDate: string;

  @Column('nvarchar', { name: 'editDate', length: 10, default: () => "''" })
  editDate: string;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.casBankConflicts)
  @JoinColumn([{ name: 'FkfBank', referencedColumnName: 'pkfTreater' }])
  fkfBank2: GenTreater;

  @ManyToOne(() => GenEmployee, (genEmployee) => genEmployee.casBankConflicts)
  @JoinColumn([{ name: 'FkfCreateUser', referencedColumnName: 'pkfEmployee' }])
  fkfCreateUser: GenEmployee;

  @ManyToOne(() => GenEmployee, (genEmployee) => genEmployee.casBankConflicts2)
  @JoinColumn([{ name: 'FkfEditUser', referencedColumnName: 'pkfEmployee' }])
  fkfEditUser: GenEmployee;

  @OneToMany(
    () => CasBankConflictDetail,
    (casBankConflictDetail) => casBankConflictDetail.fkfBankConflict,
  )
  casBankConflictDetails: CasBankConflictDetail[];

  @RelationId((casBankConflict: CasBankConflict) => casBankConflict.fkfBank2)
  fkfBank3: number;

  @RelationId(
    (casBankConflict: CasBankConflict) => casBankConflict.fkfCreateUser,
  )
  fkfCreateUser2: number;

  @RelationId((casBankConflict: CasBankConflict) => casBankConflict.fkfEditUser)
  fkfEditUser2: number | null;
}
