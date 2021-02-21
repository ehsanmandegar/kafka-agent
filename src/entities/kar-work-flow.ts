import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('IX_karWorkFlow', ['workFlow'], { unique: true })
@Index('PK_karWorkFlow', ['pkfWorkFlow'], { unique: true })
@Entity('karWorkFlow', { schema: 'dbo' })
export class KarWorkFlow {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfWorkFlow' })
  pkfWorkFlow: number;

  @Column('int', { name: 'serial', nullable: true, default: () => '(0)' })
  serial: number | null;

  @Column('nvarchar', { name: 'workFlow', length: 50, default: () => "''" })
  workFlow: string;

  @Column('int', { name: 'FkfWorkFlowStepType', nullable: true })
  fkfWorkFlowStepType: number | null;

  @Column('bit', { name: 'active' })
  active: boolean;

  @Column('datetime', {
    name: 'startDate',
    nullable: true,
    default: () => "''",
  })
  startDate: Date | null;

  @Column('datetime', { name: 'endDate', nullable: true, default: () => "''" })
  endDate: Date | null;

  @Column('bit', { name: 'IsGroup', nullable: true, default: () => '(0)' })
  isGroup: boolean | null;

  @Column('bit', { name: 'IsPost', nullable: true, default: () => '(0)' })
  isPost: boolean | null;

  @Column('int', { name: 'FkfReciver', nullable: true })
  fkfReciver: number | null;

  @Column('int', { name: 'FkfReciverCopy', nullable: true })
  fkfReciverCopy: number | null;

  @Column('int', { name: 'FkfReciverCopyShowDateTime', nullable: true })
  fkfReciverCopyShowDateTime: number | null;

  @Column('int', {
    name: 'FkfReciverCopyShowDateTimeDay',
    default: () => '(0)',
  })
  fkfReciverCopyShowDateTimeDay: number;

  @Column('bit', { name: 'IsCopy', default: () => '(0)' })
  isCopy: boolean;
}
