import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index(
  'IX_genFormGridField',
  ['gridName', 'fieldName', 'fkfSystem', 'formName'],
  { unique: true },
)
@Index('PK_genFormGridField', ['pkfFormGridField'], { unique: true })
@Entity('genFormGridField', { schema: 'dbo' })
export class GenFormGridField {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfFormGridField' })
  pkfFormGridField: number;

  @Column('int', { name: 'rowNumber' })
  rowNumber: number;

  @Column('nvarchar', { name: 'formName', length: 200 })
  formName: string;

  @Column('nvarchar', { name: 'gridName', length: 100 })
  gridName: string;

  @Column('int', { name: 'FkfSystem' })
  fkfSystem: number;

  @Column('nvarchar', { name: 'fieldName', length: 100 })
  fieldName: string;

  @Column('nvarchar', { name: 'caption', length: 200 })
  caption: string;

  @Column('nvarchar', { name: 'type', length: 200, default: () => "''" })
  type: string;

  @Column('nvarchar', { name: 'format', length: 200, default: () => "''" })
  format: string;

  @Column('bit', { name: 'visible', default: () => '(1)' })
  visible: boolean;

  @Column('bit', { name: 'mergeColumn', default: () => '(0)' })
  mergeColumn: boolean;

  @Column('int', { name: 'width', default: () => '(100)' })
  width: number;

  @Column('bit', { name: 'mandatory', default: () => '(0)' })
  mandatory: boolean;

  @Column('nvarchar', { name: 'editType', length: 200, default: () => "''" })
  editType: string;

  @Column('bit', { name: 'rightToLeft', default: () => '(0)' })
  rightToLeft: boolean;
}
