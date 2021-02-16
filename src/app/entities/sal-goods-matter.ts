import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SalGoods } from './sal-goods';
import { SalGroupGood1 } from './sal-group-good1';

@Index('IX_salGoodsMatter', ['goodsMatterCode'], { unique: true })
@Index('IX_salGoodsMatter_1', ['goodsMatter'], { unique: true })
@Index('PK_salGoodsMatter', ['pkfGoodsMatter'], { unique: true })
@Entity('salGoodsMatter', { schema: 'dbo' })
export class SalGoodsMatter {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfGoodsMatter' })
  pkfGoodsMatter: number;

  @Column('nvarchar', { name: 'goodsMatterCode', length: 50 })
  goodsMatterCode: string;

  @Column('nvarchar', { name: 'goodsMatter', length: 100 })
  goodsMatter: string;

  @Column('bit', { name: 'resturan', default: () => '(0)' })
  resturan: boolean;

  @OneToMany(() => SalGoods, (salGoods) => salGoods.fkfGoodsMatter)
  salGoods: SalGoods[];

  @OneToMany(
    () => SalGroupGood1,
    (salGroupGood1) => salGroupGood1.fkfGoodsMatter2,
  )
  salGroupGoods: SalGroupGood1[];
}
