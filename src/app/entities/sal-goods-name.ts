import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salGoodsName', ['pkfGoodsName'], { unique: true })
@Entity('salGoodsName', { schema: 'dbo' })
export class SalGoodsName {
  @PrimaryGeneratedColumn({ type: 'int', name: 'PkfGoodsName' })
  pkfGoodsName: number;

  @Column('int', { name: 'FkfGoods' })
  fkfGoods: number;

  @Column('nvarchar', { name: 'goodName', nullable: true, length: 255 })
  goodName: string | null;
}
