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
import { StrFormType } from './str-form-type';

@Index('IX_salFormTypeCost', ['fkfFormType', 'fkfGoods'], { unique: true })
@Index('PK_salFormTypeCost', ['pkfFormTypeCost'], { unique: true })
@Entity('salFormTypeCost', { schema: 'dbo' })
export class SalFormTypeCost {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfFormTypeCost' })
  pkfFormTypeCost: number;

  @Column('int', { name: 'FkfGoods', unique: true })
  fkfGoods: number;

  @Column('int', { name: 'FkfFormType', unique: true })
  fkfFormType: number;

  @Column('int', { name: 'price' })
  price: number;

  @Column('nvarchar', { name: 'memo', nullable: true, length: 255 })
  memo: string | null;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @ManyToOne(() => SalGoods, (salGoods) => salGoods.salFormTypeCosts)
  @JoinColumn([{ name: 'FkfGoods', referencedColumnName: 'pkfGood' }])
  fkfGoods2: SalGoods;

  @ManyToOne(() => StrFormType, (strFormType) => strFormType.salFormTypeCosts)
  @JoinColumn([{ name: 'FkfFormType', referencedColumnName: 'pkfFormType' }])
  fkfFormType2: StrFormType;

  @RelationId((salFormTypeCost: SalFormTypeCost) => salFormTypeCost.fkfGoods2)
  fkfGoods3: number;

  @RelationId(
    (salFormTypeCost: SalFormTypeCost) => salFormTypeCost.fkfFormType2,
  )
  fkfFormType3: number;
}
