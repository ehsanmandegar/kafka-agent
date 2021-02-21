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
import { GenTreater } from './gen-treater';
import { GenEmployee } from './gen-employee';
import { SalServiceDetail } from './sal-service-detail';
import { SalServiceFactor } from './sal-service-factor';

@Index('IX_salService', ['serial', 'accYear'], { unique: true })
@Index('PK_salService', ['pkfService'], { unique: true })
@Entity('salService', { schema: 'dbo' })
export class SalService {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfService' })
  pkfService: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('nvarchar', { name: 'serviceDate', length: 10 })
  serviceDate: string;

  @Column('nvarchar', { name: 'description', length: 250 })
  description: string;

  @Column('nvarchar', { name: 'createDate', length: 10 })
  createDate: string;

  @Column('nvarchar', { name: 'editDate', nullable: true, length: 10 })
  editDate: string | null;

  @Column('nvarchar', { name: 'finalDate', nullable: true, length: 10 })
  finalDate: string | null;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('nvarchar', { name: 'createTime', length: 5 })
  createTime: string;

  @Column('int', { name: 'sanadTempNo', nullable: true })
  sanadTempNo: number | null;

  @Column('int', { name: 'FkfStatus' })
  fkfStatus: number;

  @Column('int', { name: 'FkfSanad', nullable: true })
  fkfSanad: number | null;

  @Column('bit', { name: 'sanad', default: () => '0' })
  sanad: boolean;

  @Column('int', { name: 'typeService', nullable: true })
  typeService: number | null;

  @Column('int', { name: 'FkfTreaterMoein', nullable: true })
  fkfTreaterMoein: number | null;

  @Column('int', { name: 'FkfTreaterTafzili5', nullable: true })
  fkfTreaterTafzili5: number | null;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.salServices)
  @JoinColumn([{ name: 'FkfTreater', referencedColumnName: 'pkfTreater' }])
  fkfTreater: GenTreater;

  @ManyToOne(() => GenEmployee, (genEmployee) => genEmployee.salServices)
  @JoinColumn([{ name: 'FkfCreateUser', referencedColumnName: 'pkfEmployee' }])
  fkfCreateUser: GenEmployee;

  @ManyToOne(() => GenEmployee, (genEmployee) => genEmployee.salServices2)
  @JoinColumn([{ name: 'FkfEditUser', referencedColumnName: 'pkfEmployee' }])
  fkfEditUser: GenEmployee;

  @ManyToOne(() => GenEmployee, (genEmployee) => genEmployee.salServices3)
  @JoinColumn([{ name: 'FkfFinalUser', referencedColumnName: 'pkfEmployee' }])
  fkfFinalUser: GenEmployee;

  @OneToMany(
    () => SalServiceDetail,
    (salServiceDetail) => salServiceDetail.fkfService,
  )
  salServiceDetails: SalServiceDetail[];

  @OneToMany(
    () => SalServiceFactor,
    (salServiceFactor) => salServiceFactor.fkfService,
  )
  salServiceFactors: SalServiceFactor[];

  @RelationId((salService: SalService) => salService.fkfTreater)
  fkfTreater2: number;

  @RelationId((salService: SalService) => salService.fkfCreateUser)
  fkfCreateUser2: number;

  @RelationId((salService: SalService) => salService.fkfEditUser)
  fkfEditUser2: number | null;

  @RelationId((salService: SalService) => salService.fkfFinalUser)
  fkfFinalUser2: number | null;
}
