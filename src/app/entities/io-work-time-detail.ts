import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { IoWorkTime } from './io-work-time';

@Index('PK_IOWorkTimeDetail', ['pkfWorkTimeDetail'], { unique: true })
@Entity('IOWorkTimeDetail', { schema: 'dbo' })
export class IoWorkTimeDetail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfWorkTimeDetail' })
  pkfWorkTimeDetail: number;

  @Column('int', { name: 'inputTime', nullable: true, default: () => '(0)' })
  inputTime: number | null;

  @Column('int', { name: 'outPutTime', nullable: true, default: () => '(0)' })
  outPutTime: number | null;

  @Column('int', { name: 'FkfTypeIO', nullable: true })
  fkfTypeIo: number | null;

  @Column('bit', { name: 'isCalculate', nullable: true, default: () => '(1)' })
  isCalculate: boolean | null;

  @Column('int', {
    name: 'breakInputTime',
    nullable: true,
    default: () => '(0)',
  })
  breakInputTime: number | null;

  @Column('int', {
    name: 'breakOutPutTime',
    nullable: true,
    default: () => '(0)',
  })
  breakOutPutTime: number | null;

  @Column('bit', {
    name: 'isContinuToTomorrow',
    nullable: true,
    default: () => '(0)',
  })
  isContinuToTomorrow: boolean | null;

  @Column('nvarchar', { name: 'memo', nullable: true, default: () => "''" })
  memo: string | null;

  @ManyToOne(() => IoWorkTime, (ioWorkTime) => ioWorkTime.ioWorkTimeDetails, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'FkfWorkTime', referencedColumnName: 'pkfWorkTime' }])
  fkfWorkTime: IoWorkTime;

  @RelationId(
    (ioWorkTimeDetail: IoWorkTimeDetail) => ioWorkTimeDetail.fkfWorkTime,
  )
  fkfWorkTime2: number | null;
}
