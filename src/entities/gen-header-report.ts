import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_genHeaderReport', ['pkfReport'], { unique: true })
@Entity('genHeaderReport', { schema: 'dbo' })
export class GenHeaderReport {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfReport' })
  pkfReport: number;

  @Column('nvarchar', { name: 'reportName', length: 250 })
  reportName: string;

  @Column('int', { name: 'FkfForm' })
  fkfForm: number;

  @Column('nvarchar', { name: 'reportTitle', length: 2500 })
  reportTitle: string;

  @Column('bit', { name: 'paperDirectoin', default: () => '1' })
  paperDirectoin: boolean;

  @Column('nvarchar', { name: 'paperSize', length: 50 })
  paperSize: string;

  @Column('nvarchar', { name: 'reportTitleFontName', length: 50 })
  reportTitleFontName: string;

  @Column('bit', { name: 'reportTitleFontBold' })
  reportTitleFontBold: boolean;

  @Column('char', { name: 'reportTitleFontItalic', length: 10 })
  reportTitleFontItalic: string;

  @Column('int', { name: 'reportTitleFontSize' })
  reportTitleFontSize: number;

  @Column('bit', { name: 'reportTitleFontUnderline' })
  reportTitleFontUnderline: boolean;

  @Column('bit', { name: 'reportTitleFontStrikethrough' })
  reportTitleFontStrikethrough: boolean;
}
