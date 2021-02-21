import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SalReleasedLoadDetail } from './sal-released-load-detail';

@Index('IX_salReleasedLoad', ['serial', 'accYear'], { unique: true })
@Index('PK_salReleasedLoad', ['pkfReleasedLoad'], { unique: true })
@Entity('salReleasedLoad', { schema: 'dbo' })
export class SalReleasedLoad {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfReleasedLoad' })
  pkfReleasedLoad: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('nvarchar', { name: 'releaseDate', length: 10 })
  releaseDate: string;

  @Column('nvarchar', { name: 'creditdate', nullable: true, length: 50 })
  creditdate: string | null;

  @Column('int', { name: 'FkfContract' })
  fkfContract: number;

  @Column('nvarchar', { name: 'releasNumber', length: 50 })
  releasNumber: string;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'FkfCreateUser' })
  fkfCreateUser: number;

  @Column('nvarchar', { name: 'createDate', length: 10 })
  createDate: string;

  @Column('int', { name: 'FkfEditUser', nullable: true })
  fkfEditUser: number | null;

  @Column('nvarchar', { name: 'editDate', length: 10, default: () => "''" })
  editDate: string;

  @Column('int', { name: 'FkfFinalUser', nullable: true })
  fkfFinalUser: number | null;

  @Column('nvarchar', { name: 'finalDate', length: 10, default: () => "''" })
  finalDate: string;

  @Column('nvarchar', { name: 'memo', length: 500 })
  memo: string;

  @OneToMany(
    () => SalReleasedLoadDetail,
    (salReleasedLoadDetail) => salReleasedLoadDetail.fkfReleasedLoad,
  )
  salReleasedLoadDetails: SalReleasedLoadDetail[];
}
