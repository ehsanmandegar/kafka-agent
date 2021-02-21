import { Column, Entity, Index } from 'typeorm';

@Index('PK_salRequestGoodsDetailStatus', ['pkfRequestGoodsDetailStatus'], {
  unique: true,
})
@Entity('salRequestGoodsDetailStatus', { schema: 'dbo' })
export class SalRequestGoodsDetailStatus {
  @Column('int', { primary: true, name: 'pkfRequestGoodsDetailStatus' })
  pkfRequestGoodsDetailStatus: number;

  @Column('nvarchar', { name: 'requestGoodsDetailStatus', length: 150 })
  requestGoodsDetailStatus: string;
}
