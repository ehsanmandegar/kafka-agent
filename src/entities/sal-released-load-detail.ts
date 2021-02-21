import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalReleasedLoad } from './sal-released-load';

@Index('PK_salReleasedLoadDetail', ['pkfReleasedLoadDetail'], { unique: true })
@Entity('salReleasedLoadDetail', { schema: 'dbo' })
export class SalReleasedLoadDetail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfReleasedLoadDetail' })
  pkfReleasedLoadDetail: number;

  @Column('int', { name: 'FkfGoods' })
  fkfGoods: number;

  @Column('int', { name: 'amount1' })
  amount1: number;

  @Column('int', { name: 'FkfUnit1' })
  fkfUnit1: number;

  @Column('int', { name: 'capacity' })
  capacity: number;

  @Column('nvarchar', { name: 'memo', length: 500 })
  memo: string;

  @Column('int', { name: 'status', nullable: true })
  status: number | null;

  @Column('bit', { name: 'productGood', default: () => '(0)' })
  productGood: boolean;

  @Column('bit', { name: 'isNagative', default: () => '(0)' })
  isNagative: boolean;

  @Column('nvarchar', { name: 'HavaleNo', length: 50, default: () => "''" })
  havaleNo: string;

  @Column('int', { name: 'amount2', default: () => '(0)' })
  amount2: number;

  @Column('int', { name: 'FkfUnit2', nullable: true })
  fkfUnit2: number | null;

  @Column('int', { name: 'FkfReleasedLoadState', nullable: true })
  fkfReleasedLoadState: number | null;

  @Column('int', { name: 'FkfStoreM', nullable: true })
  fkfStoreM: number | null;

  @ManyToOne(
    () => SalReleasedLoad,
    (salReleasedLoad) => salReleasedLoad.salReleasedLoadDetails,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'FkfReleasedLoad', referencedColumnName: 'pkfReleasedLoad' },
  ])
  fkfReleasedLoad: SalReleasedLoad;

  @RelationId(
    (salReleasedLoadDetail: SalReleasedLoadDetail) =>
      salReleasedLoadDetail.fkfReleasedLoad,
  )
  fkfReleasedLoad2: number;
}
