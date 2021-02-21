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
import { DiscountDocumnet } from './discount-documnet';

@Index('PK_DiscountRequest', ['discountRequestId'], { unique: true })
@Entity('DiscountRequest', { schema: 'dbo' })
export class DiscountRequest {
  @PrimaryGeneratedColumn({ type: 'int', name: 'DiscountRequestID' })
  discountRequestId: number;

  @Column('datetime', { name: 'DiscountRequestDateTime' })
  discountRequestDateTime: Date;

  @Column('bigint', { name: 'DiscountRequestPrice' })
  discountRequestPrice: string;

  @Column('nvarchar', {
    name: 'DiscountRequestComment',
    nullable: true,
    length: 500,
  })
  discountRequestComment: string | null;

  @Column('bit', { name: 'DiscountRequestApprove', nullable: true })
  discountRequestApprove: boolean | null;

  @ManyToOne(() => Order, (order) => order.discountRequests)
  @JoinColumn([{ name: 'OrderID', referencedColumnName: 'orderId' }])
  order: Order;

  @ManyToOne(
    () => DiscountDocumnet,
    (discountDocumnet) => discountDocumnet.discountRequests,
  )
  @JoinColumn([
    { name: 'DiscountDocumnetID', referencedColumnName: 'discountDocumnetId' },
  ])
  discountDocumnet: DiscountDocumnet;

  @RelationId((discountRequest: DiscountRequest) => discountRequest.order)
  orderId: number;

  @RelationId(
    (discountRequest: DiscountRequest) => discountRequest.discountDocumnet,
  )
  discountDocumnetId: number | null;
}
