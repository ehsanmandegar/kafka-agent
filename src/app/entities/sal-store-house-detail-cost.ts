import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalStoreHouseDetail } from './sal-store-house-detail';

@Index('PK_salStoreHouseDetailCost', ['pkfStoreHouseDetailCost'], {
  unique: true,
})
@Entity('salStoreHouseDetailCost', { schema: 'dbo' })
export class SalStoreHouseDetailCost {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfStoreHouseDetailCost' })
  pkfStoreHouseDetailCost: number;

  @Column('int', { name: 'FkfGoods' })
  fkfGoods: number;

  @Column('int', { name: 'FkfStore' })
  fkfStore: number;

  @Column('int', { name: 'FkfTreater', nullable: true })
  fkfTreater: number | null;

  @Column('int', { name: 'FkfMoein', nullable: true })
  fkfMoein: number | null;

  @Column('bigint', { name: 'price' })
  price: string;

  @Column('int', { name: 'FkfStoreHouse' })
  fkfStoreHouse: number;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('int', { name: 'isAuto', default: () => '(0)' })
  isAuto: number;

  @Column('int', { name: 'typeSource', nullable: true })
  typeSource: number | null;

  @Column('int', { name: 'FkfSource', nullable: true })
  fkfSource: number | null;

  @Column('nvarchar', { name: 'driverName', length: 150, default: () => "''" })
  driverName: string;

  @Column('nvarchar', {
    name: 'driverFamile',
    length: 150,
    default: () => "''",
  })
  driverFamile: string;

  @Column('nvarchar', {
    name: 'driverNationalCode',
    length: 50,
    default: () => "''",
  })
  driverNationalCode: string;

  @Column('nvarchar', { name: 'driverTell', length: 150, default: () => "''" })
  driverTell: string;

  @Column('nvarchar', { name: 'driverDate', length: 150, default: () => "''" })
  driverDate: string;

  @Column('int', { name: 'FkfDriverCity', nullable: true })
  fkfDriverCity: number | null;

  @Column('bit', { name: 'isVat', default: () => '(0)' })
  isVat: boolean;

  @Column('nvarchar', { name: 'carNoDet', length: 50, default: () => "''" })
  carNoDet: string;

  @Column('int', { name: 'FkfTreater2', nullable: true })
  fkfTreater2: number | null;

  @ManyToOne(
    () => SalStoreHouseDetail,
    (salStoreHouseDetail) => salStoreHouseDetail.salStoreHouseDetailCosts,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    {
      name: 'FkfStoreHouseDetail',
      referencedColumnName: 'pkfStoreHouseDetail',
    },
  ])
  fkfStoreHouseDetail: SalStoreHouseDetail;

  @RelationId(
    (salStoreHouseDetailCost: SalStoreHouseDetailCost) =>
      salStoreHouseDetailCost.fkfStoreHouseDetail,
  )
  fkfStoreHouseDetail2: number;
}
