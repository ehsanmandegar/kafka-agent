import { Column, Entity, Index, OneToMany } from 'typeorm';
import { SalRequestGoods } from './sal-request-goods';

@Index('PK_salRequestGoodsType', ['pkfRequestGoodsType'], { unique: true })
@Entity('salRequestGoodsType', { schema: 'dbo' })
export class SalRequestGoodsType {
  @Column('int', { primary: true, name: 'pkfRequestGoodsType' })
  pkfRequestGoodsType: number;

  @Column('nvarchar', {
    name: 'requestGoodsType',
    length: 250,
    default: () => "''",
  })
  requestGoodsType: string;

  @OneToMany(
    () => SalRequestGoods,
    (salRequestGoods) => salRequestGoods.fkfRequestGoodsType2,
  )
  salRequestGoods: SalRequestGoods[];
}
