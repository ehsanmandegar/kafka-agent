import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { BalBail } from './bal-bail';
import { SalGoods } from './sal-goods';
import { SalGoodType } from './sal-good-type';
import { SalStore } from './sal-store';

@Index('PK_balBailDetail', ['pkfBailDetail'], { unique: true })
@Entity('balBailDetail', { schema: 'dbo' })
export class BalBailDetail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfBailDetail' })
  pkfBailDetail: number;

  @Column('decimal', {
    name: 'amount1',
    nullable: true,
    precision: 18,
    scale: 6,
    default: () => '0',
  })
  amount1: number | null;

  @Column('decimal', {
    name: 'amount2',
    precision: 18,
    scale: 3,
    default: () => '0',
  })
  amount2: number;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('nvarchar', { name: 'orderNo', length: 50, default: () => "''" })
  orderNo: string;

  @Column('nvarchar', { name: 'outPutNo', length: 50, default: () => "''" })
  outPutNo: string;

  @ManyToOne(() => BalBail, (balBail) => balBail.balBailDetails, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'FkfBail', referencedColumnName: 'pkfBail' }])
  fkfBail: BalBail;

  @ManyToOne(() => SalGoods, (salGoods) => salGoods.balBailDetails)
  @JoinColumn([{ name: 'FkfGood', referencedColumnName: 'pkfGood' }])
  fkfGood: SalGoods;

  @ManyToOne(() => SalGoodType, (salGoodType) => salGoodType.balBailDetails)
  @JoinColumn([{ name: 'FKFGoodType', referencedColumnName: 'pkfGoodType' }])
  fkfGoodType: SalGoodType;

  @ManyToOne(() => SalStore, (salStore) => salStore.balBailDetails)
  @JoinColumn([{ name: 'FKFStore', referencedColumnName: 'pkfStore' }])
  fkfStore: SalStore;

  @RelationId((balBailDetail: BalBailDetail) => balBailDetail.fkfBail)
  fkfBail2: number;

  @RelationId((balBailDetail: BalBailDetail) => balBailDetail.fkfGood)
  fkfGood2: number;

  @RelationId((balBailDetail: BalBailDetail) => balBailDetail.fkfGoodType)
  fkfGoodType2: number | null;

  @RelationId((balBailDetail: BalBailDetail) => balBailDetail.fkfStore)
  fkfStore2: number;
}
