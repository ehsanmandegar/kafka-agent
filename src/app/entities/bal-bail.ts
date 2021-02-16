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
import { GenStatus } from './gen-status';
import { GenEmployee } from './gen-employee';
import { BalBailDetail } from './bal-bail-detail';

@Index('IX_balBail', ['serial', 'fkfBailType'], { unique: true })
@Index('PK_balBail', ['pkfBail'], { unique: true })
@Entity('balBail', { schema: 'dbo' })
export class BalBail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfBail' })
  pkfBail: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('nvarchar', { name: 'bailDate', length: 10 })
  bailDate: string;

  @Column('int', { name: 'FkfBailType' })
  fkfBailType: number;

  @Column('nvarchar', { name: 'memo', length: 255 })
  memo: string;

  @Column('nvarchar', { name: 'createDate', length: 10 })
  createDate: string;

  @Column('nvarchar', { name: 'editDate', length: 10, default: () => "''" })
  editDate: string;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'FkfProject', nullable: true })
  fkfProject: number | null;

  @Column('int', { name: 'FkfMarkaz', nullable: true })
  fkfMarkaz: number | null;

  @ManyToOne(() => GenStatus, (genStatus) => genStatus.balBails)
  @JoinColumn([{ name: 'FkfStatus', referencedColumnName: 'pkfStatus' }])
  fkfStatus: GenStatus;

  @ManyToOne(() => GenEmployee, (genEmployee) => genEmployee.balBails)
  @JoinColumn([{ name: 'FkfCreateUser', referencedColumnName: 'pkfEmployee' }])
  fkfCreateUser: GenEmployee;

  @ManyToOne(() => GenEmployee, (genEmployee) => genEmployee.balBails2)
  @JoinColumn([{ name: 'FkfEditUser', referencedColumnName: 'pkfEmployee' }])
  fkfEditUser: GenEmployee;

  @OneToMany(() => BalBailDetail, (balBailDetail) => balBailDetail.fkfBail)
  balBailDetails: BalBailDetail[];

  @RelationId((balBail: BalBail) => balBail.fkfStatus)
  fkfStatus2: number;

  @RelationId((balBail: BalBail) => balBail.fkfCreateUser)
  fkfCreateUser2: number;

  @RelationId((balBail: BalBail) => balBail.fkfEditUser)
  fkfEditUser2: number | null;
}
