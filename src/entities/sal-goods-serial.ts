import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalGoods } from './sal-goods';
import { SalStoreHouseDetail } from './sal-store-house-detail';

@Index('IX_salGoodsSerial', ['serial', 'fkfGoods'], { unique: true })
@Index('PK_salGoodsSerial', ['pkfGoodsSerial'], { unique: true })
@Entity('salGoodsSerial', { schema: 'dbo' })
export class SalGoodsSerial {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfGoodsSerial' })
  pkfGoodsSerial: number;

  @Column('nvarchar', { name: 'serial', length: 255 })
  serial: string;

  @Column('int', { name: 'FkfGoods' })
  fkfGoods: number;

  @Column('nvarchar', { name: 'propertyNumber', nullable: true, length: 255 })
  propertyNumber: string | null;

  @Column('nvarchar', { name: 'inComment', nullable: true, length: 255 })
  inComment: string | null;

  @Column('nvarchar', { name: 'outComment', nullable: true, length: 255 })
  outComment: string | null;

  @Column('nvarchar', { name: 'getterCode', nullable: true, length: 255 })
  getterCode: string | null;

  @ManyToOne(() => SalGoods, (salGoods) => salGoods.salGoodsSerials)
  @JoinColumn([{ name: 'FkfGoods', referencedColumnName: 'pkfGood' }])
  fkfGoods2: SalGoods;

  @ManyToOne(
    () => SalStoreHouseDetail,
    (salStoreHouseDetail) => salStoreHouseDetail.salGoodsSerials,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'FkfStoreDetail', referencedColumnName: 'pkfStoreHouseDetail' },
  ])
  fkfStoreDetail: SalStoreHouseDetail;

  @ManyToOne(
    () => SalStoreHouseDetail,
    (salStoreHouseDetail) => salStoreHouseDetail.salGoodsSerials2,
  )
  @JoinColumn([
    {
      name: 'FkfStoreDetailExport',
      referencedColumnName: 'pkfStoreHouseDetail',
    },
  ])
  fkfStoreDetailExport: SalStoreHouseDetail;

  @RelationId((salGoodsSerial: SalGoodsSerial) => salGoodsSerial.fkfGoods2)
  fkfGoods3: number;

  @RelationId((salGoodsSerial: SalGoodsSerial) => salGoodsSerial.fkfStoreDetail)
  fkfStoreDetail2: number;

  @RelationId(
    (salGoodsSerial: SalGoodsSerial) => salGoodsSerial.fkfStoreDetailExport,
  )
  fkfStoreDetailExport2: number | null;
}
