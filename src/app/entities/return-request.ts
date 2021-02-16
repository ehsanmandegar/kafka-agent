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

@Index('PK_ReturnRequest', ['returnRequestId'], { unique: true })
@Entity('ReturnRequest', { schema: 'dbo' })
export class ReturnRequest {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ReturnRequestID' })
  returnRequestId: number;

  @Column('datetime', { name: 'ReturnRequestDateTime' })
  returnRequestDateTime: Date;

  @Column('bigint', { name: 'ReturnRequestNumber' })
  returnRequestNumber: string;

  @Column('nvarchar', {
    name: 'ReturnRequestComment',
    nullable: true,
    length: 500,
  })
  returnRequestComment: string | null;

  @Column('bit', { name: 'ReturnRequestApprove', nullable: true })
  returnRequestApprove: boolean | null;

  @ManyToOne(() => Order, (order) => order.returnRequests)
  @JoinColumn([{ name: 'OrderID', referencedColumnName: 'orderId' }])
  order: Order;

  @RelationId((returnRequest: ReturnRequest) => returnRequest.order)
  orderId: number;
}
