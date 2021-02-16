import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalQuartering } from './sal-quartering';
import { SalUnit } from './sal-unit';

@Index('PK_salQuarteringGoods', ['pkfQuarteringGoods'], { unique: true })
@Entity('salQuarteringGoods', { schema: 'dbo' })
export class SalQuarteringGoods {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfQuarteringGoods' })
  pkfQuarteringGoods: number;

  @Column('nvarchar', { name: 'goodsName', length: 50, default: () => "''" })
  goodsName: string;

  @Column('decimal', { name: 'amount', precision: 18, scale: 2 })
  amount: number;

  @Column('nvarchar', { name: 'memo', default: () => "''" })
  memo: string;

  @ManyToOne(
    () => SalQuartering,
    (salQuartering) => salQuartering.salQuarteringGoods,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'FKfQuartering', referencedColumnName: 'pkfQuartering' },
  ])
  fKfQuartering: SalQuartering;

  @ManyToOne(() => SalUnit, (salUnit) => salUnit.salQuarteringGoods)
  @JoinColumn([{ name: 'FkfUnit', referencedColumnName: 'pkfUnit' }])
  fkfUnit: SalUnit;

  @RelationId(
    (salQuarteringGoods: SalQuarteringGoods) =>
      salQuarteringGoods.fKfQuartering,
  )
  fKfQuartering2: number;

  @RelationId(
    (salQuarteringGoods: SalQuarteringGoods) => salQuarteringGoods.fkfUnit,
  )
  fkfUnit2: number | null;
}
