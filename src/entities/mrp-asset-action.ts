import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_MRPAssetAction', ['pkid'], { unique: true })
@Entity('MRPAssetAction', { schema: 'dbo' })
export class MrpAssetAction {
  @PrimaryGeneratedColumn({ type: 'int', name: 'PKID' })
  pkid: number;

  @Column('int', { name: 'fkfAsset', nullable: true })
  fkfAsset: number | null;

  @Column('int', { name: 'fkfFormType', nullable: true })
  fkfFormType: number | null;

  @Column('int', { name: 'fkfAction', nullable: true })
  fkfAction: number | null;

  @Column('int', { name: 'fkfGroupGood', nullable: true })
  fkfGroupGood: number | null;

  @Column('int', { name: 'MinLenght', nullable: true })
  minLenght: number | null;

  @Column('int', { name: 'MaxLenght', nullable: true })
  maxLenght: number | null;

  @Column('int', { name: 'MinWidth', nullable: true })
  minWidth: number | null;

  @Column('int', { name: 'MaxWidth', nullable: true })
  maxWidth: number | null;

  @Column('int', { name: 'MinHeight', nullable: true })
  minHeight: number | null;

  @Column('int', { name: 'MaxHeight', nullable: true })
  maxHeight: number | null;

  @Column('int', { name: 'fkfUnit', nullable: true })
  fkfUnit: number | null;

  @Column('float', {
    name: 'Capacity',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  capacity: number | null;

  @Column('nvarchar', {
    name: 'Memo',
    nullable: true,
    length: 300,
    default: () => "''",
  })
  memo: string | null;

  @Column('int', { name: 'fldOrder', nullable: true, default: () => '(10)' })
  fldOrder: number | null;

  @Column('varchar', {
    name: 'FromDate',
    nullable: true,
    length: 10,
    default: () => "''",
  })
  fromDate: string | null;

  @Column('varchar', {
    name: 'ToDate',
    nullable: true,
    length: 10,
    default: () => "''",
  })
  toDate: string | null;

  @Column('bit', { name: 'IsActive', nullable: true, default: () => '(1)' })
  isActive: boolean | null;

  @Column('int', { name: 'fkfRowStatus', nullable: true, default: () => '(1)' })
  fkfRowStatus: number | null;

  @Column('datetime', {
    name: 'fldAddDate',
    nullable: true,
    default: () => 'getdate()',
  })
  fldAddDate: Date | null;

  @Column('nvarchar', {
    name: 'fldAdder',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  fldAdder: string | null;

  @Column('datetime', {
    name: 'fldEditDate',
    nullable: true,
    default: () => 'getdate()',
  })
  fldEditDate: Date | null;

  @Column('nvarchar', {
    name: 'fldEditor',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  fldEditor: string | null;
}
