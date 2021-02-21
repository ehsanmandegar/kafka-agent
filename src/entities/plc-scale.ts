import { Column, Entity, Index } from 'typeorm';

@Index('PK__PLC_Scal__3214EC275C6C1D4A', ['id'], { unique: true })
@Entity('PLC_Scale', { schema: 'dbo' })
export class PlcScale {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('nvarchar', { name: 'DateScale', nullable: true, length: 10 })
  dateScale: string | null;

  @Column('nvarchar', { name: 'TimeScale', nullable: true, length: 10 })
  timeScale: string | null;

  @Column('int', { name: 'Diameter', nullable: true })
  diameter: number | null;

  @Column('int', { name: 'NumberOfBars', nullable: true })
  numberOfBars: number | null;

  @Column('int', { name: 'Lenght', nullable: true })
  lenght: number | null;

  @Column('int', { name: 'Weight', nullable: true })
  weight: number | null;

  @Column('int', { name: 'ShiftNo', nullable: true })
  shiftNo: number | null;

  @Column('nvarchar', { name: 'QualityCode', nullable: true, length: 30 })
  qualityCode: string | null;

  @Column('nvarchar', { name: 'Fingerprint', nullable: true, length: 34 })
  fingerprint: string | null;

  @Column('bit', { name: 'isPrint', default: () => '(0)' })
  isPrint: boolean;

  @Column('nvarchar', { name: 'timePrint', length: 50, default: () => "''" })
  timePrint: string;

  @Column('bit', { name: 'isDelete', default: () => '(0)' })
  isDelete: boolean;

  @Column('int', { name: 'FkfDeleteUser', nullable: true })
  fkfDeleteUser: number | null;

  @Column('nvarchar', {
    name: 'deleteDate',
    nullable: true,
    length: 10,
    default: () => "''",
  })
  deleteDate: string | null;

  @Column('nvarchar', {
    name: 'deleteTime',
    nullable: true,
    length: 5,
    default: () => "''",
  })
  deleteTime: string | null;

  @Column('nvarchar', {
    name: 'meltNo',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  meltNo: string | null;

  @Column('nvarchar', { name: 'groupShift', nullable: true, length: 50 })
  groupShift: string | null;

  @Column('nvarchar', { name: 'datePrint', length: 10, default: () => "''" })
  datePrint: string;

  @Column('int', { name: 'FkfWeight', nullable: true })
  fkfWeight: number | null;

  @Column('int', { name: 'mainId', nullable: true })
  mainId: number | null;
}
