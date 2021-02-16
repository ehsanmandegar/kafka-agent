import {
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { Order } from './order';
import { OrderEidtType } from './order-eidt-type';

@Index('PK_OrderListEidtType', ['orderListEidtTypeId'], { unique: true })
@Entity('OrderListEidtType', { schema: 'dbo' })
export class OrderListEidtType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'OrderListEidtTypeID' })
  orderListEidtTypeId: number;

  @ManyToOne(() => Order, (order) => order.orderListEidtTypes)
  @JoinColumn([{ name: 'OrderID', referencedColumnName: 'orderId' }])
  order: Order;

  @ManyToOne(
    () => OrderEidtType,
    (orderEidtType) => orderEidtType.orderListEidtTypes,
  )
  @JoinColumn([
    { name: 'OrderEidtTypeID', referencedColumnName: 'orderEidtTypeId' },
  ])
  orderEidtType: OrderEidtType;

  @RelationId((orderListEidtType: OrderListEidtType) => orderListEidtType.order)
  orderId: number;

  @RelationId(
    (orderListEidtType: OrderListEidtType) => orderListEidtType.orderEidtType,
  )
  orderEidtTypeId: number;
}
