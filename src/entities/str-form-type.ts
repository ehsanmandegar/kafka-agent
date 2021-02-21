import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SalFormTypeCost } from './sal-form-type-cost';
import { StrOrder } from './str-order';

@Index('PK_strFormType', ['pkfFormType'], { unique: true })
@Entity('strFormType', { schema: 'dbo' })
export class StrFormType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfFormType' })
  pkfFormType: number;

  @Column('int', { name: 'formTypeCode' })
  formTypeCode: number;

  @Column('nvarchar', { name: 'formTypeName', length: 100 })
  formTypeName: string;

  @OneToMany(
    () => SalFormTypeCost,
    (salFormTypeCost) => salFormTypeCost.fkfFormType2,
  )
  salFormTypeCosts: SalFormTypeCost[];

  @OneToMany(() => StrOrder, (strOrder) => strOrder.fkfFormType)
  strOrders: StrOrder[];
}
