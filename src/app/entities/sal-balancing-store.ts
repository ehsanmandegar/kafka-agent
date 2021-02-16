import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SalBalancingStoreStoreHouseDetail } from './sal-balancing-store-store-house-detail';

@Index('PK_salBalancingStore', ['pkfBalancingStore'], { unique: true })
@Entity('salBalancingStore', { schema: 'dbo' })
export class SalBalancingStore {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfBalancingStore' })
  pkfBalancingStore: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('nvarchar', { name: 'balancingStoreDate', length: 10 })
  balancingStoreDate: string;

  @Column('int', { name: 'FkfCostCenter' })
  fkfCostCenter: number;

  @Column('int', { name: 'balanceType' })
  balanceType: number;

  @Column('float', { name: 'balanceRate', precision: 53 })
  balanceRate: number;

  @Column('int', { name: 'FkfTreater' })
  fkfTreater: number;

  @Column('int', { name: 'FkfMoein' })
  fkfMoein: number;

  @Column('int', { name: 'FkfTafzili5' })
  fkfTafzili5: number;

  @Column('nvarchar', { name: 'memo', length: 500 })
  memo: string;

  @Column('int', { name: 'FkfCreateUser' })
  fkfCreateUser: number;

  @Column('nvarchar', { name: 'createDate', length: 10 })
  createDate: string;

  @Column('nvarchar', { name: 'createTime', length: 10 })
  createTime: string;

  @Column('int', { name: 'FkfEditUser', nullable: true })
  fkfEditUser: number | null;

  @Column('nvarchar', { name: 'editDate', nullable: true, length: 10 })
  editDate: string | null;

  @Column('bit', { name: 'isTax' })
  isTax: boolean;

  @Column('int', { name: 'FkfSanad' })
  fkfSanad: number;

  @Column('int', { name: 'sanadTempNo' })
  sanadTempNo: number;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @OneToMany(
    () => SalBalancingStoreStoreHouseDetail,
    (salBalancingStoreStoreHouseDetail) =>
      salBalancingStoreStoreHouseDetail.fkfBalancingStore,
  )
  salBalancingStoreStoreHouseDetails: SalBalancingStoreStoreHouseDetail[];
}
