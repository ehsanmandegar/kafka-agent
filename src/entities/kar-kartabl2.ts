import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('karKartabl2', { schema: 'dbo' })
export class KarKartabl2 {
  @PrimaryColumn('int', { name: 'pkfKartabl' })
  pkfKartabl: number;

  @Column('int', { name: 'parentFkfKartabl', nullable: true })
  parentFkfKartabl: number | null;

  @Column('int', { name: 'FkfObject', nullable: true })
  fkfObject: number | null;

  @Column('int', { name: 'FkfTypeObject', nullable: true })
  fkfTypeObject: number | null;

  @Column('int', { name: 'serial', nullable: true })
  serial: number | null;

  @Column('int', { name: 'FkfSender', nullable: true })
  fkfSender: number | null;

  @Column('int', { name: 'FkfReciver', nullable: true })
  fkfReciver: number | null;

  @Column('datetime', { name: 'CreateDateTime', default: () => "''" })
  createDateTime: Date;

  @Column('int', { name: 'FkfCreateUser', nullable: true })
  fkfCreateUser: number | null;

  @Column('bit', { name: 'isVisit', default: () => '(0)' })
  isVisit: boolean;

  @Column('datetime', {
    name: 'VisitDateTime',
    nullable: true,
    default: () => "''",
  })
  visitDateTime: Date | null;

  @Column('int', { name: 'FkfWorkFlowStepNext', nullable: true })
  fkfWorkFlowStepNext: number | null;

  @Column('int', { name: 'FkfWorkFlowStepCurrent', nullable: true })
  fkfWorkFlowStepCurrent: number | null;

  @Column('int', { name: 'type', nullable: true })
  type: number | null;

  @Column('int', { name: 'FkfWorkFlowStatuse', nullable: true })
  fkfWorkFlowStatuse: number | null;

  @Column('bit', { name: 'IsCopy', nullable: true, default: () => '(0)' })
  isCopy: boolean | null;

  @Column('nvarchar', { name: 'Comment', nullable: true, length: 100 })
  comment: string | null;

  @Column('int', { name: 'FkfChangeStatusUser', nullable: true })
  fkfChangeStatusUser: number | null;

  @Column('bit', { name: 'IsGroupUser', default: () => '(0)' })
  isGroupUser: boolean;

  @Column('bit', { name: 'IsDeleted', default: () => '(0)' })
  isDeleted: boolean;

  @Column('bit', { name: 'IsAutomatic', default: () => '(0)' })
  isAutomatic: boolean;

  @Column('datetime', { name: 'ShowDateTime', nullable: true })
  showDateTime: Date | null;

  @Column('int', { name: 'ShowDateTimeDay', default: () => '(0)' })
  showDateTimeDay: number;
}
