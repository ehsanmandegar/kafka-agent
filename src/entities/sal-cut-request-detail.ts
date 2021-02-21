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
import { SalTrustDetail } from './sal-trust-detail';
import { GenTreater } from './gen-treater';
import { SalCutSataus } from './sal-cut-sataus';
import { SalCutRequestTracing } from './sal-cut-request-tracing';

@Index('IX_salCutRequestDetail', ['cutStatus'], {})
@Index('IX_salCutRequestDetail_1', ['fkfCreateUser'], {})
@Index('IX_salCutRequestDetail_2', ['fkfEditUser'], {})
@Index('IX_salCutRequestDetail_3', ['fkfFormType'], {})
@Index('IX_salCutRequestDetail_4', ['fkfTrustDetail'], {})
@Index('IX_salCutRequestDetail_5', ['fkfEquipment'], {})
@Index('IX_salCutRequestDetail_6', ['fkfFinalUser'], {})
@Index('IX_salCutRequestDetail_7', ['fkfShift'], {})
@Index('PK_salCutRequestDetail', ['pkfCutRequestDetail'], { unique: true })
@Entity('salCutRequestDetail', { schema: 'dbo' })
export class SalCutRequestDetail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfCutRequestDetail' })
  pkfCutRequestDetail: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('int', { name: 'FkfTrustDetail', nullable: true })
  fkfTrustDetail: number | null;

  @Column('nvarchar', { name: 'createDate', length: 10, default: () => "''" })
  createDate: string;

  @Column('nvarchar', { name: 'createTime', length: 10, default: () => "''" })
  createTime: string;

  @Column('int', { name: 'FkfCreateUser' })
  fkfCreateUser: number;

  @Column('nvarchar', { name: 'editDate', length: 10, default: () => "''" })
  editDate: string;

  @Column('nvarchar', { name: 'editTime', length: 10, default: () => "''" })
  editTime: string;

  @Column('int', { name: 'FkfEditUser', nullable: true })
  fkfEditUser: number | null;

  @Column('int', { name: 'FkfFormType' })
  fkfFormType: number;

  @Column('nvarchar', {
    name: 'cutDimention',
    length: 255,
    default: () => "''",
  })
  cutDimention: string;

  @Column('int', { name: 'amountOrder', default: () => '(0)' })
  amountOrder: number;

  @Column('int', { name: 'FkfShift', nullable: true })
  fkfShift: number | null;

  @Column('nvarchar', { name: 'forcastDate', length: 10, default: () => "''" })
  forcastDate: string;

  @Column('nvarchar', { name: 'endDate', length: 10, default: () => "''" })
  endDate: string;

  @Column('int', { name: 'cutStatus', default: () => '(1)' })
  cutStatus: number;

  @Column('int', { name: 'FkfFinalUser', nullable: true })
  fkfFinalUser: number | null;

  @Column('nvarchar', { name: 'finalDate', length: 10, default: () => "''" })
  finalDate: string;

  @Column('nvarchar', { name: 'finalTime', length: 10, default: () => "''" })
  finalTime: string;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('int', { name: 'amountFinal', default: () => '(0)' })
  amountFinal: number;

  @Column('int', { name: 'FkfDeliverUser', nullable: true })
  fkfDeliverUser: number | null;

  @Column('nvarchar', { name: 'deliverDate', length: 10, default: () => "''" })
  deliverDate: string;

  @Column('nvarchar', { name: 'deliverTime', length: 5, default: () => "''" })
  deliverTime: string;

  @Column('decimal', {
    name: 'amount',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  amount: number;

  @Column('int', { name: 'FkfUnit', nullable: true })
  fkfUnit: number | null;

  @Column('int', { name: 'FkfEquipment', nullable: true })
  fkfEquipment: number | null;

  @Column('decimal', {
    name: 'lenght',
    precision: 18,
    scale: 4,
    default: () => '(0)',
  })
  lenght: number;

  @Column('decimal', {
    name: 'width',
    precision: 18,
    scale: 4,
    default: () => '(0)',
  })
  width: number;

  @Column('bigint', { name: 'priceCut', default: () => '(0)' })
  priceCut: string;

  @Column('int', { name: 'amountBandil', default: () => '(0)' })
  amountBandil: number;

  @Column('bit', { name: 'aggregateTracing', default: () => '(0)' })
  aggregateTracing: boolean;

  @Column('nvarchar', { name: 'cutDate', length: 10, default: () => "''" })
  cutDate: string;

  @Column('decimal', {
    name: 'amount2',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  amount2: number;

  @Column('int', { name: 'FkfCutPlace', nullable: true })
  fkfCutPlace: number | null;

  @Column('nvarchar', {
    name: 'preFinishDate',
    length: 10,
    default: () => "''",
  })
  preFinishDate: string;

  @Column('int', { name: 'FkfOrderDetail', nullable: true })
  fkfOrderDetail: number | null;

  @Column('int', { name: 'FkfRefrenceType', default: () => '(1)' })
  fkfRefrenceType: number;

  @ManyToOne(
    () => SalTrustDetail,
    (salTrustDetail) => salTrustDetail.salCutRequestDetails,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'FkfTrustDetail', referencedColumnName: 'pkfTrustDetail' },
  ])
  fkfTrustDetail2: SalTrustDetail;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.salCutRequestDetails)
  @JoinColumn([{ name: 'FkfTreater', referencedColumnName: 'pkfTreater' }])
  fkfTreater: GenTreater;

  @ManyToOne(
    () => SalCutSataus,
    (salCutSataus) => salCutSataus.salCutRequestDetails,
  )
  @JoinColumn([{ name: 'cutStatus', referencedColumnName: 'pkfCutStatus' }])
  cutStatus2: SalCutSataus;

  @ManyToOne(
    () => SalTrustDetail,
    (salTrustDetail) => salTrustDetail.salCutRequestDetails2,
  )
  @JoinColumn([
    { name: 'FkfTrustDetailTracing', referencedColumnName: 'pkfTrustDetail' },
  ])
  fkfTrustDetailTracing: SalTrustDetail;

  @OneToMany(
    () => SalCutRequestTracing,
    (salCutRequestTracing) => salCutRequestTracing.fkfCutRequestDetail2,
  )
  salCutRequestTracings: SalCutRequestTracing[];

  @RelationId(
    (salCutRequestDetail: SalCutRequestDetail) =>
      salCutRequestDetail.fkfTrustDetail2,
  )
  fkfTrustDetail3: number | null;

  @RelationId(
    (salCutRequestDetail: SalCutRequestDetail) =>
      salCutRequestDetail.fkfTreater,
  )
  fkfTreater2: number | null;

  @RelationId(
    (salCutRequestDetail: SalCutRequestDetail) =>
      salCutRequestDetail.cutStatus2,
  )
  cutStatus3: number;

  @RelationId(
    (salCutRequestDetail: SalCutRequestDetail) =>
      salCutRequestDetail.fkfTrustDetailTracing,
  )
  fkfTrustDetailTracing2: number | null;
}
