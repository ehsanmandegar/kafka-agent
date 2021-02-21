import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalTrust } from './sal-trust';
import { SalTrustDetail } from './sal-trust-detail';
import { StrFormType } from './str-form-type';

@Index('PK_strOrder', ['pkfOrder'], { unique: true })
@Entity('strOrder', { schema: 'dbo' })
export class StrOrder {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfOrder' })
  pkfOrder: number;

  @Column('decimal', {
    name: 'lenght',
    precision: 18,
    scale: 2,
    default: () => '0',
  })
  lenght: number;

  @Column('decimal', {
    name: 'amount',
    precision: 18,
    scale: 2,
    default: () => '0',
  })
  amount: number;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @ManyToOne(() => SalTrust, (salTrust) => salTrust.strOrders)
  @JoinColumn([{ name: 'FkfTrust', referencedColumnName: 'pkfTrust' }])
  fkfTrust: SalTrust;

  @ManyToOne(
    () => SalTrustDetail,
    (salTrustDetail) => salTrustDetail.strOrders,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'FkfTrustDetail', referencedColumnName: 'pkfTrustDetail' },
  ])
  fkfTrustDetail: SalTrustDetail;

  @ManyToOne(() => StrFormType, (strFormType) => strFormType.strOrders)
  @JoinColumn([{ name: 'FkfFormType', referencedColumnName: 'pkfFormType' }])
  fkfFormType: StrFormType;

  @RelationId((strOrder: StrOrder) => strOrder.fkfTrust)
  fkfTrust2: number;

  @RelationId((strOrder: StrOrder) => strOrder.fkfTrustDetail)
  fkfTrustDetail2: number;

  @RelationId((strOrder: StrOrder) => strOrder.fkfFormType)
  fkfFormType2: number;
}
