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
import { CasGetPayType } from './cas-get-pay-type';
import { GenCurrency } from './gen-currency';
import { CasConcern } from './cas-concern';
import { GenEmployee } from './gen-employee';
import { AccSanadFloat } from './acc-sanad-float';
import { CasGetPayDeclarationDetail } from './cas-get-pay-declaration-detail';

@Index('PK_casGetPayDeclaration', ['pkfGetPayDeclaration'], { unique: true })
@Entity('casGetPayDeclaration', { schema: 'dbo' })
export class CasGetPayDeclaration {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfGetPayDeclaration' })
  pkfGetPayDeclaration: number;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('varchar', { name: 'getpayDeclarationDate', length: 10 })
  getpayDeclarationDate: string;

  @Column('float', { name: 'feeCurrency', precision: 53, default: () => '(0)' })
  feeCurrency: number;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('int', { name: 'FkfGetPayDeclarationStatus' })
  fkfGetPayDeclarationStatus: number;

  @Column('varchar', { name: 'createDate', length: 10 })
  createDate: string;

  @Column('varchar', { name: 'editDate', length: 10, default: () => "''" })
  editDate: string;

  @Column('varchar', { name: 'finalDate', length: 10, default: () => "''" })
  finalDate: string;

  @Column('int', { name: 'sanadTempNo', nullable: true })
  sanadTempNo: number | null;

  @Column('bit', { name: 'sanad', default: () => '(0)' })
  sanad: boolean;

  @Column('int', { name: 'FkfMarkaz', nullable: true })
  fkfMarkaz: number | null;

  @Column('nvarchar', { name: 'createTime', length: 5 })
  createTime: string;

  @ManyToOne(
    () => CasGetPayType,
    (casGetPayType) => casGetPayType.casGetPayDeclarations,
  )
  @JoinColumn([
    { name: 'FkfGetPayDeclarationType', referencedColumnName: 'pkfGetPayType' },
  ])
  fkfGetPayDeclarationType: CasGetPayType;

  @ManyToOne(
    () => GenCurrency,
    (genCurrency) => genCurrency.casGetPayDeclarations,
  )
  @JoinColumn([{ name: 'FkfCurrency', referencedColumnName: 'pkfCurrency' }])
  fkfCurrency: GenCurrency;

  @ManyToOne(() => CasConcern, (casConcern) => casConcern.casGetPayDeclarations)
  @JoinColumn([{ name: 'FkfConcern', referencedColumnName: 'pkfConcern' }])
  fkfConcern: CasConcern;

  @ManyToOne(
    () => GenEmployee,
    (genEmployee) => genEmployee.casGetPayDeclarations,
  )
  @JoinColumn([{ name: 'FkfCreateUser', referencedColumnName: 'pkfEmployee' }])
  fkfCreateUser: GenEmployee;

  @ManyToOne(
    () => GenEmployee,
    (genEmployee) => genEmployee.casGetPayDeclarations2,
  )
  @JoinColumn([{ name: 'FkfEditUser', referencedColumnName: 'pkfEmployee' }])
  fkfEditUser: GenEmployee;

  @ManyToOne(
    () => GenEmployee,
    (genEmployee) => genEmployee.casGetPayDeclarations3,
  )
  @JoinColumn([{ name: 'FkfFinalUser', referencedColumnName: 'pkfEmployee' }])
  fkfFinalUser: GenEmployee;

  @ManyToOne(
    () => AccSanadFloat,
    (accSanadFloat) => accSanadFloat.casGetPayDeclarations,
  )
  @JoinColumn([{ name: 'FkfSanad', referencedColumnName: 'pkfSanad' }])
  fkfSanad: AccSanadFloat;

  @OneToMany(
    () => CasGetPayDeclarationDetail,
    (casGetPayDeclarationDetail) =>
      casGetPayDeclarationDetail.fkfGetPayDeclaration,
  )
  casGetPayDeclarationDetails: CasGetPayDeclarationDetail[];

  @RelationId(
    (casGetPayDeclaration: CasGetPayDeclaration) =>
      casGetPayDeclaration.fkfGetPayDeclarationType,
  )
  fkfGetPayDeclarationType2: number;

  @RelationId(
    (casGetPayDeclaration: CasGetPayDeclaration) =>
      casGetPayDeclaration.fkfCurrency,
  )
  fkfCurrency2: number | null;

  @RelationId(
    (casGetPayDeclaration: CasGetPayDeclaration) =>
      casGetPayDeclaration.fkfConcern,
  )
  fkfConcern2: number | null;

  @RelationId(
    (casGetPayDeclaration: CasGetPayDeclaration) =>
      casGetPayDeclaration.fkfCreateUser,
  )
  fkfCreateUser2: number;

  @RelationId(
    (casGetPayDeclaration: CasGetPayDeclaration) =>
      casGetPayDeclaration.fkfEditUser,
  )
  fkfEditUser2: number | null;

  @RelationId(
    (casGetPayDeclaration: CasGetPayDeclaration) =>
      casGetPayDeclaration.fkfFinalUser,
  )
  fkfFinalUser2: number | null;

  @RelationId(
    (casGetPayDeclaration: CasGetPayDeclaration) =>
      casGetPayDeclaration.fkfSanad,
  )
  fkfSanad2: number | null;
}
