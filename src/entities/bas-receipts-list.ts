import {
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalStoreHouseDetail } from './sal-store-house-detail';
import { BasWeight } from './bas-weight';

@Index('PK_basReceiptsList', ['pkfReceiptsList'], { unique: true })
@Entity('basReceiptsList', { schema: 'dbo' })
export class BasReceiptsList {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfReceiptsList' })
  pkfReceiptsList: number;

  @ManyToOne(
    () => SalStoreHouseDetail,
    (salStoreHouseDetail) => salStoreHouseDetail.basReceiptsLists,
  )
  @JoinColumn([
    {
      name: 'FkfStoreHouseDetail',
      referencedColumnName: 'pkfStoreHouseDetail',
    },
  ])
  fkfStoreHouseDetail: SalStoreHouseDetail;

  @ManyToOne(() => BasWeight, (basWeight) => basWeight.basReceiptsLists)
  @JoinColumn([{ name: 'FkfWeight', referencedColumnName: 'pkfWeight' }])
  fkfWeight: BasWeight;

  @RelationId(
    (basReceiptsList: BasReceiptsList) => basReceiptsList.fkfStoreHouseDetail,
  )
  fkfStoreHouseDetail2: number | null;

  @RelationId((basReceiptsList: BasReceiptsList) => basReceiptsList.fkfWeight)
  fkfWeight2: number | null;
}
