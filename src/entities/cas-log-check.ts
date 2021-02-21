import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { CasGetPayDetail } from './cas-get-pay-detail';
import { CasCheckState } from './cas-check-state';
import { GenEmployee } from './gen-employee';
import { GenTreater } from './gen-treater';

@Index('PK_casLogCheck', ['pkfLogCheck'], { unique: true })
@Entity('casLogCheck', { schema: 'dbo' })
export class CasLogCheck {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfLogCheck' })
  pkfLogCheck: number;

  @Column('nvarchar', { name: 'createDate', length: 10 })
  createDate: string;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'sanadTempNo' })
  sanadTempNo: number;

  @Column('nvarchar', {
    name: 'checkToTreaterDate',
    length: 10,
    default: () => "''",
  })
  checkToTreaterDate: string;

  @Column('int', { name: 'FkfSanad', nullable: true })
  fkfSanad: number | null;

  @Column('int', { name: 'FkfGetPayCheck', nullable: true })
  fkfGetPayCheck: number | null;

  @ManyToOne(
    () => CasGetPayDetail,
    (casGetPayDetail) => casGetPayDetail.casLogChecks,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'FkfGetPayDetail', referencedColumnName: 'pkfGetPayDetail' },
  ])
  fkfGetPayDetail: CasGetPayDetail;

  @ManyToOne(() => CasCheckState, (casCheckState) => casCheckState.casLogChecks)
  @JoinColumn([
    { name: 'FkfCheckState', referencedColumnName: 'pkfCheckState' },
  ])
  fkfCheckState: CasCheckState;

  @ManyToOne(() => GenEmployee, (genEmployee) => genEmployee.casLogChecks)
  @JoinColumn([{ name: 'FkfCreateUser', referencedColumnName: 'pkfEmployee' }])
  fkfCreateUser: GenEmployee;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.casLogChecks)
  @JoinColumn([
    { name: 'FkfCheckToTreater', referencedColumnName: 'pkfTreater' },
  ])
  fkfCheckToTreater: GenTreater;

  @RelationId((casLogCheck: CasLogCheck) => casLogCheck.fkfGetPayDetail)
  fkfGetPayDetail2: number;

  @RelationId((casLogCheck: CasLogCheck) => casLogCheck.fkfCheckState)
  fkfCheckState2: number;

  @RelationId((casLogCheck: CasLogCheck) => casLogCheck.fkfCreateUser)
  fkfCreateUser2: number;

  @RelationId((casLogCheck: CasLogCheck) => casLogCheck.fkfCheckToTreater)
  fkfCheckToTreater2: number | null;
}
