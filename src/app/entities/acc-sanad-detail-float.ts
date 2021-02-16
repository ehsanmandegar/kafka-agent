import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { AccSanadFloat } from './acc-sanad-float';
import { AccMoein } from './acc-moein';
import { AccCategoryTafzili } from './acc-category-tafzili';
import { GenCurrency } from './gen-currency';
import { AccSendType } from './acc-send-type';

@Index('IX_accSanadDetailFloat', ['bedPrice'], {})
@Index('IX_accSanadDetailFloat_1', ['besPrice'], {})
@Index('IX_accSanadDetailFloat_2', ['fkfTafzili4'], {})
@Index('IX_accSanadDetailFloat_3', ['fkfMoein'], {})
@Index('IX_accSanadDetailFloat_4', ['pkfSanadDetail'], {})
@Index('IX_accSanadDetailFloat_5', ['fkfSanad'], {})
@Index('IX_accSanadDetailFloat_6', ['fkfCurrency'], {})
@Index('IX_accSanadDetailFloat_7', ['fkfTafzili5'], {})
@Index('IX_accSanadDetailFloat_8', ['fkfTAfzili6'], {})
@Index('PK_accSanadDetail2', ['pkfSanadDetail'], { unique: true })
@Entity('accSanadDetailFloat', { schema: 'dbo' })
export class AccSanadDetailFloat {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfSanadDetail' })
  pkfSanadDetail: number;

  @Column('int', { name: 'articleNo', nullable: true })
  articleNo: number | null;

  @Column('int', { name: 'FkfSanad' })
  fkfSanad: number;

  @Column('int', { name: 'FkfMoein', nullable: true })
  fkfMoein: number | null;

  @Column('int', { name: 'FkfTafzili4', nullable: true })
  fkfTafzili4: number | null;

  @Column('int', { name: 'FkfTafzili5', nullable: true })
  fkfTafzili5: number | null;

  @Column('int', { name: 'FkfTAfzili6', nullable: true })
  fkfTAfzili6: number | null;

  @Column('nvarchar', { name: 'description', length: 250 })
  description: string;

  @Column('bigint', { name: 'bedPrice' })
  bedPrice: string;

  @Column('bigint', { name: 'besPrice' })
  besPrice: string;

  @Column('int', { name: 'FkfCurrency', nullable: true })
  fkfCurrency: number | null;

  @Column('decimal', {
    name: 'bedPriceCur',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  bedPriceCur: number;

  @Column('decimal', {
    name: 'besPriceCur',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  besPriceCur: number;

  @Column('float', { name: 'feeCurrency', precision: 53, default: () => '(0)' })
  feeCurrency: number;

  @Column('int', { name: 'FkfGetPayDetail', nullable: true })
  fkfGetPayDetail: number | null;

  @Column('int', { name: 'FkfContractDetail', nullable: true })
  fkfContractDetail: number | null;

  @Column('int', { name: 'FkfContractCostDetail', nullable: true })
  fkfContractCostDetail: number | null;

  @Column('int', { name: 'FkfTransferDetail', nullable: true })
  fkfTransferDetail: number | null;

  @Column('int', { name: 'FkfTransferCostDetail', nullable: true })
  fkfTransferCostDetail: number | null;

  @Column('int', { name: 'FKF', nullable: true })
  fkf: number | null;

  @Column('int', { name: 'FkfFrom', nullable: true })
  fkfFrom: number | null;

  @Column('int', { name: 'FKF2', nullable: true })
  fkf2: number | null;

  @Column('int', { name: 'mark', default: () => '(0)' })
  mark: number;

  @Column('nvarchar', { name: 'alarmDate', length: 50, default: () => "''" })
  alarmDate: string;

  @Column('bit', { name: 'alarmState', default: () => '(0)' })
  alarmState: boolean;

  @ManyToOne(
    () => AccSanadFloat,
    (accSanadFloat) => accSanadFloat.accSanadDetailFloats,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([{ name: 'FkfSanad', referencedColumnName: 'pkfSanad' }])
  fkfSanad2: AccSanadFloat;

  @ManyToOne(() => AccMoein, (accMoein) => accMoein.accSanadDetailFloats)
  @JoinColumn([{ name: 'FkfMoein', referencedColumnName: 'pkfMoein' }])
  fkfMoein2: AccMoein;

  @ManyToOne(
    () => AccCategoryTafzili,
    (accCategoryTafzili) => accCategoryTafzili.accSanadDetailFloats,
  )
  @JoinColumn([
    { name: 'FkfTafzili4', referencedColumnName: 'pkfCategoryTafzili' },
  ])
  fkfTafzili: AccCategoryTafzili;

  @ManyToOne(
    () => AccCategoryTafzili,
    (accCategoryTafzili) => accCategoryTafzili.accSanadDetailFloats2,
  )
  @JoinColumn([
    { name: 'FkfTafzili5', referencedColumnName: 'pkfCategoryTafzili' },
  ])
  fkfTafzili2: AccCategoryTafzili;

  @ManyToOne(
    () => AccCategoryTafzili,
    (accCategoryTafzili) => accCategoryTafzili.accSanadDetailFloats3,
  )
  @JoinColumn([
    { name: 'FkfTAfzili6', referencedColumnName: 'pkfCategoryTafzili' },
  ])
  fkfTAfzili: AccCategoryTafzili;

  @ManyToOne(
    () => GenCurrency,
    (genCurrency) => genCurrency.accSanadDetailFloats,
  )
  @JoinColumn([{ name: 'FkfCurrency', referencedColumnName: 'pkfCurrency' }])
  fkfCurrency2: GenCurrency;

  @ManyToOne(
    () => AccSendType,
    (accSendType) => accSendType.accSanadDetailFloats,
  )
  @JoinColumn([{ name: 'FkfSendtype', referencedColumnName: 'pkfSendType' }])
  fkfSendtype: AccSendType;

  @RelationId(
    (accSanadDetailFloat: AccSanadDetailFloat) => accSanadDetailFloat.fkfSanad2,
  )
  fkfSanad3: number;

  @RelationId(
    (accSanadDetailFloat: AccSanadDetailFloat) => accSanadDetailFloat.fkfMoein2,
  )
  fkfMoein3: number | null;

  @RelationId(
    (accSanadDetailFloat: AccSanadDetailFloat) =>
      accSanadDetailFloat.fkfTafzili,
  )
  fkfTafzili3: number | null;

  @RelationId(
    (accSanadDetailFloat: AccSanadDetailFloat) =>
      accSanadDetailFloat.fkfTafzili2,
  )
  fkfTafzili6: number | null;

  @RelationId(
    (accSanadDetailFloat: AccSanadDetailFloat) =>
      accSanadDetailFloat.fkfTAfzili,
  )
  fkfTAfzili2: number | null;

  @RelationId(
    (accSanadDetailFloat: AccSanadDetailFloat) =>
      accSanadDetailFloat.fkfCurrency2,
  )
  fkfCurrency3: number | null;

  @RelationId(
    (accSanadDetailFloat: AccSanadDetailFloat) =>
      accSanadDetailFloat.fkfSendtype,
  )
  fkfSendtype2: number | null;
}
