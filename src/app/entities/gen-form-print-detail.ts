import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { GenFormPrint } from './gen-form-print';

@Index('IX_genFormPrintDetail', ['fkfFormPrint', 'columnKey'], {})
@Index('PK_genFormPrintDetail', ['pkfFormPrintDetail'], { unique: true })
@Entity('genFormPrintDetail', { schema: 'dbo' })
export class GenFormPrintDetail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfFormPrintDetail' })
  pkfFormPrintDetail: number;

  @Column('int', { name: 'FkfFormPrint' })
  fkfFormPrint: number;

  @Column('nvarchar', { name: 'fontName', length: 255 })
  fontName: string;

  @Column('bit', { name: 'fontBold', default: () => '0' })
  fontBold: boolean;

  @Column('bit', { name: 'fontItalic', default: () => '0' })
  fontItalic: boolean;

  @Column('float', { name: 'fontSize', precision: 53 })
  fontSize: number;

  @Column('bit', { name: 'fontUnderline', default: () => '0' })
  fontUnderline: boolean;

  @Column('bit', { name: 'fontStrikethrough', default: () => '0' })
  fontStrikethrough: boolean;

  @Column('nvarchar', { name: 'columnName', length: 255 })
  columnName: string;

  @Column('int', { name: 'Rorder' })
  rorder: number;

  @Column('nvarchar', { name: 'Rtitle', length: 255 })
  rtitle: string;

  @Column('bit', { name: 'Rprint', default: () => '1' })
  rprint: boolean;

  @Column('decimal', { name: 'Rwidth', precision: 10, scale: 2 })
  rwidth: number;

  @Column('nvarchar', { name: 'RaggregateFunction', length: 100 })
  raggregateFunction: string;

  @Column('nvarchar', { name: 'RalignmentH', length: 100 })
  ralignmentH: string;

  @Column('nvarchar', { name: 'RalignmentV', length: 100 })
  ralignmentV: string;

  @Column('int', { name: 'RdecimalPlace', default: () => '0' })
  rdecimalPlace: number;

  @Column('bit', { name: 'RthousandSeparator', default: () => '0' })
  rthousandSeparator: boolean;

  @Column('nvarchar', { name: 'columnKey', length: 255 })
  columnKey: string;

  @Column('bit', { name: 'columnCheckBox', default: () => '0' })
  columnCheckBox: boolean;

  @Column('nvarchar', { name: 'Duplicates', length: 100 })
  duplicates: string;

  @ManyToOne(
    () => GenFormPrint,
    (genFormPrint) => genFormPrint.genFormPrintDetails,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([{ name: 'FkfFormPrint', referencedColumnName: 'pkfFormPrint' }])
  fkfFormPrint2: GenFormPrint;

  @RelationId(
    (genFormPrintDetail: GenFormPrintDetail) =>
      genFormPrintDetail.fkfFormPrint2,
  )
  fkfFormPrint3: number;
}
