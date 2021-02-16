import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_casPrintCheck', ['pkfPrintCheck'], { unique: true })
@Entity('casPrintCheck', { schema: 'dbo' })
export class CasPrintCheck {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfPrintCheck' })
  pkfPrintCheck: number;

  @Column('nvarchar', { name: 'description', length: 100 })
  description: string;

  @Column('int', { name: 'width' })
  width: number;

  @Column('int', { name: 'hight' })
  hight: number;

  @Column('int', { name: 'topCheckDate' })
  topCheckDate: number;

  @Column('int', { name: 'topCheckGet' })
  topCheckGet: number;

  @Column('int', { name: 'topLettralPrice' })
  topLettralPrice: number;

  @Column('int', { name: 'topNumericPrice' })
  topNumericPrice: number;

  @Column('int', { name: 'topCheckDateL' })
  topCheckDateL: number;

  @Column('int', { name: 'rightCheckDate' })
  rightCheckDate: number;

  @Column('int', { name: 'rightCheckGet' })
  rightCheckGet: number;

  @Column('int', { name: 'rightLettralPrice' })
  rightLettralPrice: number;

  @Column('int', { name: 'rightNumericPrice' })
  rightNumericPrice: number;

  @Column('int', { name: 'rightCheckDateL' })
  rightCheckDateL: number;

  @Column('nvarchar', { name: 'endChar', length: 50 })
  endChar: string;

  @Column('nvarchar', { name: 'endNum', length: 50 })
  endNum: string;

  @Column('nvarchar', { name: 'startChar', length: 50 })
  startChar: string;

  @Column('nvarchar', { name: 'startNum', length: 50 })
  startNum: string;

  @Column('nvarchar', {
    name: 'fontNameCheckDate',
    nullable: true,
    length: 255,
  })
  fontNameCheckDate: string | null;

  @Column('nvarchar', { name: 'fontNameCheckDateL', length: 255 })
  fontNameCheckDateL: string;

  @Column('nvarchar', { name: 'fontNameCheckGet', length: 255 })
  fontNameCheckGet: string;

  @Column('nvarchar', { name: 'fontNameLettralPrice', length: 255 })
  fontNameLettralPrice: string;

  @Column('nvarchar', { name: 'fontNameNumericPrice', length: 255 })
  fontNameNumericPrice: string;

  @Column('bit', { name: 'paperDirection' })
  paperDirection: boolean;

  @Column('int', { name: 'FkfBank' })
  fkfBank: number;

  @Column('int', { name: 'sizeCheckDate' })
  sizeCheckDate: number;

  @Column('int', { name: 'sizeCheckDateL' })
  sizeCheckDateL: number;

  @Column('int', { name: 'sizeCheckGet' })
  sizeCheckGet: number;

  @Column('int', { name: 'sizeLettralPrice' })
  sizeLettralPrice: number;

  @Column('int', { name: 'sizeNumericPrice' })
  sizeNumericPrice: number;

  @Column('bit', { name: 'invertNumericPrice' })
  invertNumericPrice: boolean;

  @Column('bit', { name: 'epson' })
  epson: boolean;

  @Column('bit', { name: 'checkDateL' })
  checkDateL: boolean;

  @Column('int', { name: 'topMemo', default: () => '10' })
  topMemo: number;

  @Column('int', { name: 'rightMemo', default: () => '10' })
  rightMemo: number;

  @Column('nvarchar', {
    name: 'fontNameMemo',
    length: 255,
    default: () => "N'B Lotus; 14.25pt; style=Bold'",
  })
  fontNameMemo: string;

  @Column('int', { name: 'sizeMemo', default: () => '400' })
  sizeMemo: number;

  @Column('bit', { name: 'invertMemo', default: () => '0' })
  invertMemo: boolean;

  @Column('bit', { name: 'invertLettralPrice', default: () => '(0)' })
  invertLettralPrice: boolean;
}
