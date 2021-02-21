import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalService } from './sal-service';
import { SalServiceType } from './sal-service-type';
import { GenTreater } from './gen-treater';

@Index('PK_salServiceDetail', ['pkfServiceDetail'], { unique: true })
@Entity('salServiceDetail', { schema: 'dbo' })
export class SalServiceDetail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfServiceDetail' })
  pkfServiceDetail: number;

  @Column('bigint', { name: 'price' })
  price: string;

  @Column('nvarchar', { name: 'memo', length: 250 })
  memo: string;

  @Column('decimal', { name: 'counter', precision: 18, scale: 3 })
  counter: number;

  @Column('nvarchar', { name: 'storeNo', length: 50, default: () => "''" })
  storeNo: string;

  @Column('nvarchar', { name: 'getDate', length: 50, default: () => "''" })
  getDate: string;

  @Column('int', { name: 'FkfTreaterBesMoein', nullable: true })
  fkfTreaterBesMoein: number | null;

  @ManyToOne(() => SalService, (salService) => salService.salServiceDetails, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'FkfService', referencedColumnName: 'pkfService' }])
  fkfService: SalService;

  @ManyToOne(
    () => SalServiceType,
    (salServiceType) => salServiceType.salServiceDetails,
  )
  @JoinColumn([
    { name: 'FkfServiceType', referencedColumnName: 'pkfServiceType' },
  ])
  fkfServiceType: SalServiceType;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.salServiceDetails)
  @JoinColumn([{ name: 'FkfTreaterBes', referencedColumnName: 'pkfTreater' }])
  fkfTreaterBes: GenTreater;

  @RelationId(
    (salServiceDetail: SalServiceDetail) => salServiceDetail.fkfService,
  )
  fkfService2: number;

  @RelationId(
    (salServiceDetail: SalServiceDetail) => salServiceDetail.fkfServiceType,
  )
  fkfServiceType2: number;

  @RelationId(
    (salServiceDetail: SalServiceDetail) => salServiceDetail.fkfTreaterBes,
  )
  fkfTreaterBes2: number;
}
