import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalStockDeclare } from './sal-stock-declare';
import { SalGoods } from './sal-goods';

@Index('PK_salStockDeclareDetail', ['pkfStockDeclareDetail'], { unique: true })
@Entity('salStockDeclareDetail', { schema: 'dbo' })
export class SalStockDeclareDetail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfStockDeclareDetail' })
  pkfStockDeclareDetail: number;

  @Column('int', { name: 'carCount' })
  carCount: number;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @ManyToOne(
    () => SalStockDeclare,
    (salStockDeclare) => salStockDeclare.salStockDeclareDetails,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'FkfStockDeclare', referencedColumnName: 'pkfStockDeclare' },
  ])
  fkfStockDeclare: SalStockDeclare;

  @ManyToOne(() => SalGoods, (salGoods) => salGoods.salStockDeclareDetails)
  @JoinColumn([{ name: 'FkfGoods', referencedColumnName: 'pkfGood' }])
  fkfGoods: SalGoods;

  @RelationId(
    (salStockDeclareDetail: SalStockDeclareDetail) =>
      salStockDeclareDetail.fkfStockDeclare,
  )
  fkfStockDeclare2: number;

  @RelationId(
    (salStockDeclareDetail: SalStockDeclareDetail) =>
      salStockDeclareDetail.fkfGoods,
  )
  fkfGoods2: number;
}
