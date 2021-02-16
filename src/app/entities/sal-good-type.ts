import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BalBailDetail } from './bal-bail-detail';
import { SalContractDetail } from './sal-contract-detail';
import { SalDailyProduceDetail } from './sal-daily-produce-detail';
import { SalOrderDetail } from './sal-order-detail';
import { SalProformaDetail } from './sal-proforma-detail';
import { SalRequestGoodsDetail } from './sal-request-goods-detail';
import { SalStoreHouseDetail } from './sal-store-house-detail';
import { SalTransferForProduceDetail } from './sal-transfer-for-produce-detail';

@Index('PK_salGoodType', ['pkfGoodType'], { unique: true })
@Entity('salGoodType', { schema: 'dbo' })
export class SalGoodType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfGoodType' })
  pkfGoodType: number;

  @Column('nvarchar', { name: 'goodType', length: 250 })
  goodType: string;

  @Column('nvarchar', { name: 'goodTypeEN', length: 250, default: () => "''" })
  goodTypeEn: string;

  @OneToMany(() => BalBailDetail, (balBailDetail) => balBailDetail.fkfGoodType)
  balBailDetails: BalBailDetail[];

  @OneToMany(
    () => SalContractDetail,
    (salContractDetail) => salContractDetail.fkfGoodType,
  )
  salContractDetails: SalContractDetail[];

  @OneToMany(
    () => SalDailyProduceDetail,
    (salDailyProduceDetail) => salDailyProduceDetail.fkfGoodType,
  )
  salDailyProduceDetails: SalDailyProduceDetail[];

  @OneToMany(
    () => SalOrderDetail,
    (salOrderDetail) => salOrderDetail.fkfGoodType,
  )
  salOrderDetails: SalOrderDetail[];

  @OneToMany(
    () => SalProformaDetail,
    (salProformaDetail) => salProformaDetail.fkfGoodType,
  )
  salProformaDetails: SalProformaDetail[];

  @OneToMany(
    () => SalRequestGoodsDetail,
    (salRequestGoodsDetail) => salRequestGoodsDetail.fkfGoodType,
  )
  salRequestGoodsDetails: SalRequestGoodsDetail[];

  @OneToMany(
    () => SalStoreHouseDetail,
    (salStoreHouseDetail) => salStoreHouseDetail.fkfGoodType,
  )
  salStoreHouseDetails: SalStoreHouseDetail[];

  @OneToMany(
    () => SalTransferForProduceDetail,
    (salTransferForProduceDetail) => salTransferForProduceDetail.fkfGoodType,
  )
  salTransferForProduceDetails: SalTransferForProduceDetail[];
}
