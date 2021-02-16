import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SalGoods } from './sal-goods';
import { SalQuarteringGoods } from './sal-quartering-goods';

@Index('PK_salUnit', ['pkfUnit'], { unique: true })
@Entity('salUnit', { schema: 'dbo' })
export class SalUnit {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfUnit' })
  pkfUnit: number;

  @Column('nvarchar', { name: 'unitName', length: 100 })
  unitName: string;

  @Column('nvarchar', { name: 'unitCode', nullable: true, length: 50 })
  unitCode: string | null;

  @Column('nvarchar', { name: 'unitNameEN', length: 100, default: () => "''" })
  unitNameEn: string;

  @OneToMany(() => SalGoods, (salGoods) => salGoods.fkfUnit)
  salGoods: SalGoods[];

  @OneToMany(() => SalGoods, (salGoods) => salGoods.fkfUnit2)
  salGoods2: SalGoods[];

  @OneToMany(() => SalGoods, (salGoods) => salGoods.fkfUnitStorePrice)
  salGoods3: SalGoods[];

  @OneToMany(
    () => SalQuarteringGoods,
    (salQuarteringGoods) => salQuarteringGoods.fkfUnit,
  )
  salQuarteringGoods: SalQuarteringGoods[];
}
