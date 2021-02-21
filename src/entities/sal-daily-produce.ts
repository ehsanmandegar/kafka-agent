import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalContract } from './sal-contract';
import { SalDailyProduceDetail } from './sal-daily-produce-detail';

@Index('IX_salDailyProduce', ['accYear', 'serial'], { unique: true })
@Index('IX_salDailyProduce_1', ['dailyDate', 'accYear'], { unique: true })
@Index('PK_salDailyProduce', ['pkfDailyProduce'], { unique: true })
@Entity('salDailyProduce', { schema: 'dbo' })
export class SalDailyProduce {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfDailyProduce' })
  pkfDailyProduce: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('nvarchar', { name: 'dailyDate', length: 10 })
  dailyDate: string;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('bit', { name: 'sanad', default: () => '(0)' })
  sanad: boolean;

  @Column('int', { name: 'FkfSanad', nullable: true })
  fkfSanad: number | null;

  @Column('int', { name: 'sanadTempNo', nullable: true })
  sanadTempNo: number | null;

  @ManyToOne(() => SalContract, (salContract) => salContract.salDailyProduces)
  @JoinColumn([{ name: 'FkfContract', referencedColumnName: 'pkfContract' }])
  fkfContract: SalContract;

  @OneToMany(
    () => SalDailyProduceDetail,
    (salDailyProduceDetail) => salDailyProduceDetail.fkfDailyProduce,
  )
  salDailyProduceDetails: SalDailyProduceDetail[];

  @RelationId((salDailyProduce: SalDailyProduce) => salDailyProduce.fkfContract)
  fkfContract2: number;
}
