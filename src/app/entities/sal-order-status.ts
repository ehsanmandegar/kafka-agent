import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SalOrderDetail } from './sal-order-detail';

@Index('PK_salOrderStatus', ['pkfOrderStatus'], { unique: true })
@Entity('salOrderStatus', { schema: 'dbo' })
export class SalOrderStatus {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfOrderStatus' })
  pkfOrderStatus: number;

  @Column('nvarchar', { name: 'orderStatus', length: 200 })
  orderStatus: string;

  @OneToMany(
    () => SalOrderDetail,
    (salOrderDetail) => salOrderDetail.fkfOrderStatus,
  )
  salOrderDetails: SalOrderDetail[];
}
