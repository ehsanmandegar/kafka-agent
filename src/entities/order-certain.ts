import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { Order } from './order';

@Index('PK_OrderCertain', ['orderCertainId'], { unique: true })
@Entity('OrderCertain', { schema: 'dbo' })
export class OrderCertain {
  @PrimaryGeneratedColumn({ type: 'int', name: 'OrderCertainID' })
  orderCertainId: number;

  @Column('int', { name: 'ExitWeightExit', nullable: true })
  exitWeightExit: number | null;

  @Column('int', { name: 'LafafExit', nullable: true })
  lafafExit: number | null;

  @Column('datetime', { name: 'ExitDateExit', nullable: true })
  exitDateExit: Date | null;

  @Column('datetime', { name: 'EditDateEdit', nullable: true })
  editDateEdit: Date | null;

  @Column('int', { name: 'ExitWeightEdit', nullable: true })
  exitWeightEdit: number | null;

  @Column('int', { name: 'LafafEdit', nullable: true })
  lafafEdit: number | null;

  @Column('int', { name: 'ReturnWeight', nullable: true })
  returnWeight: number | null;

  @Column('int', { name: 'ReturnLafaf', nullable: true })
  returnLafaf: number | null;

  @Column('datetime', { name: 'ReturnDate', nullable: true })
  returnDate: Date | null;

  @Column('int', { name: 'ReturnWeightEdit', nullable: true })
  returnWeightEdit: number | null;

  @Column('int', { name: 'ReturnLafafEdit', nullable: true })
  returnLafafEdit: number | null;

  @Column('datetime', { name: 'ReturnDateEdit', nullable: true })
  returnDateEdit: Date | null;

  @Column('int', { name: 'Type', nullable: true })
  type: number | null;

  @ManyToOne(() => Order, (order) => order.orderCertains)
  @JoinColumn([{ name: 'OrderID', referencedColumnName: 'orderId' }])
  order: Order;

  @RelationId((orderCertain: OrderCertain) => orderCertain.order)
  orderId: number;
}
