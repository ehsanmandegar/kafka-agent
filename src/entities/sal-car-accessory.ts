import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salCarAccessory', ['pkfCarAccessory'], { unique: true })
@Entity('salCarAccessory', { schema: 'dbo' })
export class SalCarAccessory {
  @PrimaryGeneratedColumn({ type: 'int', name: 'PkfCarAccessory' })
  pkfCarAccessory: number;

  @Column('int', { name: 'FkfCar' })
  fkfCar: number;

  @Column('int', { name: 'FkfGoods' })
  fkfGoods: number;
}
