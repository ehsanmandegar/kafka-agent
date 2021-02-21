import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_ASSAssets', ['pkfAsset'], { unique: true })
@Entity('ASSAssets', { schema: 'dbo' })
export class AssAssets {
  @PrimaryGeneratedColumn({ type: 'int', name: 'PKFAsset' })
  pkfAsset: number;

  @Column('int', { name: 'fkfParent', nullable: true, default: () => '(0)' })
  fkfParent: number | null;

  @Column('int', { name: 'fkfType', nullable: true, default: () => '(0)' })
  fkfType: number | null;

  @Column('int', { name: 'fkfStatus', nullable: true, default: () => '(1)' })
  fkfStatus: number | null;

  @Column('varchar', { name: 'Code', length: 50 })
  code: string;

  @Column('nvarchar', {
    name: 'Title',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  title: string | null;

  @Column('nvarchar', {
    name: 'Address',
    nullable: true,
    length: 500,
    default: () => "''",
  })
  address: string | null;

  @Column('nvarchar', {
    name: 'Memo',
    nullable: true,
    length: 500,
    default: () => "''",
  })
  memo: string | null;

  @Column('varchar', {
    name: 'DirectTels',
    nullable: true,
    length: 100,
    default: () => "''",
  })
  directTels: string | null;

  @Column('varchar', {
    name: 'InsideTels',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  insideTels: string | null;

  @Column('varchar', { name: 'Fax', length: 50, default: () => "''" })
  fax: string;

  @Column('varchar', {
    name: 'StartUseDate',
    nullable: true,
    length: 10,
    default: () => "''",
  })
  startUseDate: string | null;

  @Column('varchar', {
    name: 'EndUseDate',
    nullable: true,
    length: 10,
    default: () => "''",
  })
  endUseDate: string | null;

  @Column('varchar', {
    name: 'BuildDate',
    nullable: true,
    length: 10,
    default: () => "''",
  })
  buildDate: string | null;

  @Column('int', { name: 'fldOrder', nullable: true, default: () => '(10)' })
  fldOrder: number | null;
}
