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
import { SalStore } from './sal-store';
import { GenTreater } from './gen-treater';
import { SalGoods } from './sal-goods';
import { PmShift } from './pm-shift';
import { ProWorkGroup } from './pro-work-group';
import { ProProduceCost } from './pro-produce-cost';
import { ProProduceDetail } from './pro-produce-detail';
import { ProProduceDetailCost } from './pro-produce-detail-cost';
import { ProProduceDetailDamage } from './pro-produce-detail-damage';
import { ProProductDetailPrice } from './pro-product-detail-price';

@Index('PK_proProduce_1', ['pkfProduce'], { unique: true })
@Entity('proProduce', { schema: 'dbo' })
export class ProProduce {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfProduce' })
  pkfProduce: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('nvarchar', { name: 'ProduceDate', length: 10 })
  produceDate: string;

  @Column('nvarchar', { name: 'description', nullable: true, length: 255 })
  description: string | null;

  @Column('int', { name: 'FkfCreateUser' })
  fkfCreateUser: number;

  @Column('nvarchar', { name: 'createDate', length: 10 })
  createDate: string;

  @Column('int', { name: 'FkfEditUser', nullable: true })
  fkfEditUser: number | null;

  @Column('nvarchar', { name: 'editDate', nullable: true, length: 10 })
  editDate: string | null;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('nvarchar', { name: 'repNo', length: 50, default: () => "''" })
  repNo: string;

  @Column('int', {
    name: 'fkfProduceType',
    nullable: true,
    default: () => '(1)',
  })
  fkfProduceType: number | null;

  @Column('decimal', {
    name: 'amount1Use',
    nullable: true,
    precision: 18,
    scale: 6,
    default: () => '(0)',
  })
  amount1Use: number | null;

  @Column('bigint', { name: 'feeWageRate', default: () => '(0)' })
  feeWageRate: string;

  @Column('decimal', {
    name: 'amount2Use',
    nullable: true,
    precision: 18,
    scale: 6,
    default: () => '(0)',
  })
  amount2Use: number | null;

  @Column('decimal', {
    name: 'amount1Reject',
    nullable: true,
    precision: 18,
    scale: 6,
    default: () => '(0)',
  })
  amount1Reject: number | null;

  @Column('decimal', {
    name: 'amount2Reject',
    nullable: true,
    precision: 18,
    scale: 6,
    default: () => '(0)',
  })
  amount2Reject: number | null;

  @Column('decimal', {
    name: 'amount1Scrap',
    nullable: true,
    precision: 18,
    scale: 6,
    default: () => '(0)',
  })
  amount1Scrap: number | null;

  @Column('decimal', {
    name: 'amount2Scrap',
    nullable: true,
    precision: 18,
    scale: 6,
    default: () => '(0)',
  })
  amount2Scrap: number | null;

  @Column('nvarchar', { name: 'orderNo', length: 50, default: () => "''" })
  orderNo: string;

  @Column('nvarchar', { name: 'tracing', length: 50, default: () => "''" })
  tracing: string;

  @Column('int', { name: 'refrencePkf', nullable: true })
  refrencePkf: number | null;

  @Column('int', { name: 'serial2', nullable: true })
  serial2: number | null;

  @ManyToOne(() => GenStatus, (genStatus) => genStatus.proProduces)
  @JoinColumn([{ name: 'FkfStatus', referencedColumnName: 'pkfStatus' }])
  fkfStatus: GenStatus;

  @ManyToOne(() => SalStore, (salStore) => salStore.proProduces)
  @JoinColumn([{ name: 'FkfStore', referencedColumnName: 'pkfStore' }])
  fkfStore: SalStore;

  @ManyToOne(() => SalStore, (salStore) => salStore.proProduces2)
  @JoinColumn([{ name: 'FkfStoreDamage', referencedColumnName: 'pkfStore' }])
  fkfStoreDamage: SalStore;

  @ManyToOne(() => SalStore, (salStore) => salStore.proProduces3)
  @JoinColumn([{ name: 'FkfStoreProduce', referencedColumnName: 'pkfStore' }])
  fkfStoreProduce: SalStore;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.proProduces)
  @JoinColumn([{ name: 'FkfProject', referencedColumnName: 'pkfTreater' }])
  fkfProject: GenTreater;

  @ManyToOne(() => SalGoods, (salGoods) => salGoods.proProduces)
  @JoinColumn([{ name: 'FkfGoodUse', referencedColumnName: 'pkfGood' }])
  fkfGoodUse: SalGoods;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.proProduces2)
  @JoinColumn([{ name: 'FkfHeadShift', referencedColumnName: 'pkfTreater' }])
  fkfHeadShift: GenTreater;

  @ManyToOne(() => PmShift, (pmShift) => pmShift.proProduces)
  @JoinColumn([{ name: 'FkfShift', referencedColumnName: 'pkfShift' }])
  fkfShift: PmShift;

  @ManyToOne(() => ProWorkGroup, (proWorkGroup) => proWorkGroup.proProduces)
  @JoinColumn([{ name: 'FkfWorkGroup', referencedColumnName: 'pkfWorkGroup' }])
  fkfWorkGroup: ProWorkGroup;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.proProduces3)
  @JoinColumn([{ name: 'FkfprojectEnd', referencedColumnName: 'pkfTreater' }])
  fkfprojectEnd: GenTreater;

  @OneToMany(
    () => ProProduceCost,
    (proProduceCost) => proProduceCost.fkfProduce,
  )
  proProduceCosts: ProProduceCost[];

  @OneToMany(
    () => ProProduceDetail,
    (proProduceDetail) => proProduceDetail.fkfProduct2,
  )
  proProduceDetails: ProProduceDetail[];

  @OneToMany(
    () => ProProduceDetailCost,
    (proProduceDetailCost) => proProduceDetailCost.fkfProduce,
  )
  proProduceDetailCosts: ProProduceDetailCost[];

  @OneToMany(
    () => ProProduceDetailDamage,
    (proProduceDetailDamage) => proProduceDetailDamage.fkfProduct,
  )
  proProduceDetailDamages: ProProduceDetailDamage[];

  @OneToMany(
    () => ProProductDetailPrice,
    (proProductDetailPrice) => proProductDetailPrice.fkfProduct,
  )
  proProductDetailPrices: ProProductDetailPrice[];

  @RelationId((proProduce: ProProduce) => proProduce.fkfStatus)
  fkfStatus2: number;

  @RelationId((proProduce: ProProduce) => proProduce.fkfStore)
  fkfStore2: number;

  @RelationId((proProduce: ProProduce) => proProduce.fkfStoreDamage)
  fkfStoreDamage2: number | null;

  @RelationId((proProduce: ProProduce) => proProduce.fkfStoreProduce)
  fkfStoreProduce2: number;

  @RelationId((proProduce: ProProduce) => proProduce.fkfProject)
  fkfProject2: number | null;

  @RelationId((proProduce: ProProduce) => proProduce.fkfGoodUse)
  fkfGoodUse2: number | null;

  @RelationId((proProduce: ProProduce) => proProduce.fkfHeadShift)
  fkfHeadShift2: number | null;

  @RelationId((proProduce: ProProduce) => proProduce.fkfShift)
  fkfShift2: number | null;

  @RelationId((proProduce: ProProduce) => proProduce.fkfWorkGroup)
  fkfWorkGroup2: number | null;

  @RelationId((proProduce: ProProduce) => proProduce.fkfprojectEnd)
  fkfprojectEnd2: number | null;
}
