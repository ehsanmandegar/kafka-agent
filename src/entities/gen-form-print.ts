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
import { GenForm } from './gen-form';
import { GenFormPrintDetail } from './gen-form-print-detail';

@Index('IX_genFormPrint', ['fkfForm', 'reportName'], { unique: true })
@Index('PK_genFormPrint', ['pkfFormPrint'], { unique: true })
@Entity('genFormPrint', { schema: 'dbo' })
export class GenFormPrint {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfFormPrint' })
  pkfFormPrint: number;

  @Column('int', { name: 'FkfForm' })
  fkfForm: number;

  @Column('nvarchar', { name: 'reportTitle', nullable: true, length: 255 })
  reportTitle: string | null;

  @Column('nvarchar', { name: 'reportName', length: 255 })
  reportName: string;

  @Column('nvarchar', { name: 'paperSize', nullable: true, length: 50 })
  paperSize: string | null;

  @Column('bit', { name: 'paperDirection', nullable: true })
  paperDirection: boolean | null;

  @Column('nvarchar', { name: 'rowSeparator', nullable: true, length: 50 })
  rowSeparator: string | null;

  @Column('nvarchar', { name: 'fontNameTitle', nullable: true, length: 255 })
  fontNameTitle: string | null;

  @Column('bit', { name: 'fontBoldTitle', default: () => '0' })
  fontBoldTitle: boolean;

  @Column('bit', { name: 'fontItalicTitle', default: () => '0' })
  fontItalicTitle: boolean;

  @Column('float', { name: 'fontSizeTitle', nullable: true, precision: 53 })
  fontSizeTitle: number | null;

  @Column('bit', { name: 'fontUnderlineTitle', default: () => '0' })
  fontUnderlineTitle: boolean;

  @Column('bit', { name: 'fontStrikethroughTitle', default: () => '0' })
  fontStrikethroughTitle: boolean;

  @Column('bit', { name: 'reportDefault', default: () => '0' })
  reportDefault: boolean;

  @Column('bit', { name: 'signature', default: () => '0' })
  signature: boolean;

  @Column('nvarchar', {
    name: 'firstSignature',
    length: 150,
    default: () => "''",
  })
  firstSignature: string;

  @Column('nvarchar', {
    name: 'twoSignature',
    length: 150,
    default: () => "''",
  })
  twoSignature: string;

  @Column('nvarchar', {
    name: 'threeSignature',
    length: 150,
    default: () => "''",
  })
  threeSignature: string;

  @Column('nvarchar', {
    name: 'fourSignature',
    length: 150,
    default: () => "''",
  })
  fourSignature: string;

  @Column('bit', { name: 'iso', default: () => '0' })
  iso: boolean;

  @Column('nvarchar', { name: 'formNo', length: 150, default: () => "''" })
  formNo: string;

  @Column('nvarchar', { name: 'reviwDate', length: 150, default: () => "''" })
  reviwDate: string;

  @Column('nvarchar', { name: 'reviwNo', length: 150, default: () => "''" })
  reviwNo: string;

  @Column('bit', { name: 'printCreateDate', default: () => '(1)' })
  printCreateDate: boolean;

  @Column('nvarchar', {
    name: 'procedureName',
    length: 250,
    default: () => "''",
  })
  procedureName: string;

  @Column('nvarchar', {
    name: 'defaultParameters1',
    length: 500,
    default: () => "''",
  })
  defaultParameters1: string;

  @Column('nvarchar', {
    name: 'defaultParameters2',
    length: 500,
    default: () => "''",
  })
  defaultParameters2: string;

  @Column('nvarchar', {
    name: 'defaultParameters3',
    length: 500,
    default: () => "''",
  })
  defaultParameters3: string;

  @Column('bit', { name: 'printAdvance', default: () => '(0)' })
  printAdvance: boolean;

  @ManyToOne(() => GenForm, (genForm) => genForm.genFormPrints, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'FkfForm', referencedColumnName: 'pkfForm' }])
  fkfForm2: GenForm;

  @OneToMany(
    () => GenFormPrintDetail,
    (genFormPrintDetail) => genFormPrintDetail.fkfFormPrint2,
  )
  genFormPrintDetails: GenFormPrintDetail[];

  @RelationId((genFormPrint: GenFormPrint) => genFormPrint.fkfForm2)
  fkfForm3: number;
}
