import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DiscountRequest } from './discount-request';
import { OrderBorhan } from './order-borhan';
import { OrderCertain } from './order-certain';
import { OrderListEidtType } from './order-list-eidt-type';
import { ReturnRequest } from './return-request';

@Index('PK_Order', ['orderId'], { unique: true })
@Entity('Order', { schema: 'dbo' })
export class Order {
  @PrimaryGeneratedColumn({ type: 'int', name: 'OrderID' })
  orderId: number;

  @Column('int', { name: 'OrderRow', nullable: true })
  orderRow: number | null;

  @Column('int', { name: 'UserID', nullable: true })
  userId: number | null;

  @Column('int', { name: 'GoodID', nullable: true })
  goodId: number | null;

  @Column('int', { name: 'CustomerID1', nullable: true })
  customerId1: number | null;

  @Column('int', { name: 'CustomerID2', nullable: true })
  customerId2: number | null;

  @Column('datetime', { name: 'SettlementDate', nullable: true })
  settlementDate: Date | null;

  @Column('decimal', {
    name: 'OrderNumber',
    nullable: true,
    precision: 16,
    scale: 2,
  })
  orderNumber: number | null;

  @Column('bigint', { name: 'Price', nullable: true })
  price: string | null;

  @Column('bigint', { name: 'PriceReal', nullable: true })
  priceReal: string | null;

  @Column('bigint', { name: 'SumPrice', nullable: true })
  sumPrice: string | null;

  @Column('bigint', { name: 'CustomerCredit', nullable: true })
  customerCredit: string | null;

  @Column('bigint', { name: 'Consumer', nullable: true })
  consumer: string | null;

  @Column('nvarchar', { name: 'Comment', nullable: true })
  comment: string | null;

  @Column('nvarchar', { name: 'CommentProduct', nullable: true })
  commentProduct: string | null;

  @Column('nvarchar', { name: 'OrderName', nullable: true })
  orderName: string | null;

  @Column('nvarchar', { name: 'Address', nullable: true })
  address: string | null;

  @Column('nvarchar', { name: 'CommentCustomer', nullable: true })
  commentCustomer: string | null;

  @Column('int', { name: 'MyVoucherNo', nullable: true })
  myVoucherNo: number | null;

  @Column('nvarchar', { name: 'MySlaveNo', nullable: true, length: 50 })
  mySlaveNo: string | null;

  @Column('datetime', { name: 'OrderDate', nullable: true })
  orderDate: Date | null;

  @Column('bit', {
    name: 'OrderTransfer',
    nullable: true,
    default: () => '(0)',
  })
  orderTransfer: boolean | null;

  @Column('bit', { name: 'TwoApprovals', default: () => '(0)' })
  twoApprovals: boolean;

  @Column('bit', { name: 'OrderApprove', default: () => '(0)' })
  orderApprove: boolean;

  @Column('int', { name: 'VoucherHeaderID', nullable: true })
  voucherHeaderId: number | null;

  @Column('int', { name: 'VoucherDetailID', nullable: true })
  voucherDetailId: number | null;

  @Column('int', { name: 'VoucherPriceID', nullable: true })
  voucherPriceId: number | null;

  @Column('int', { name: 'VoucherTrackingID', nullable: true })
  voucherTrackingId: number | null;

  @Column('bit', { name: 'OrderCancel', nullable: true, default: () => '(0)' })
  orderCancel: boolean | null;

  @Column('bit', { name: 'OrderOfficial', default: () => '(0)' })
  orderOfficial: boolean;

  @Column('bit', { name: 'ISPresell', default: () => '(0)' })
  isPresell: boolean;

  @Column('bigint', { name: 'Deposit', nullable: true })
  deposit: string | null;

  @Column('bigint', { name: 'AmountDiscount', nullable: true })
  amountDiscount: string | null;

  @Column('bigint', { name: 'ManagerDiscount', nullable: true })
  managerDiscount: string | null;

  @Column('bigint', { name: 'PriceDifference', nullable: true })
  priceDifference: string | null;

  @Column('int', { name: 'FkfKartabl', nullable: true })
  fkfKartabl: number | null;

  @Column('bit', { name: 'ISLock', default: () => '(0)' })
  isLock: boolean;

  @Column('int', { name: 'KartablStatus', default: () => '(1)' })
  kartablStatus: number;

  @Column('int', { name: 'FkfKartablStart', default: () => '(0)' })
  fkfKartablStart: number;

  @Column('datetime', { name: 'OrderUpdate', default: () => 'getdate()' })
  orderUpdate: Date;

  @Column('bit', { name: 'IsOrderCertain', default: () => '(0)' })
  isOrderCertain: boolean;

  @Column('bit', { name: 'OrderBackViewManage', default: () => '(0)' })
  orderBackViewManage: boolean;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @OneToMany(() => DiscountRequest, (discountRequest) => discountRequest.order)
  discountRequests: DiscountRequest[];

  @OneToMany(() => OrderBorhan, (orderBorhan) => orderBorhan.order)
  orderBorhans: OrderBorhan[];

  @OneToMany(() => OrderCertain, (orderCertain) => orderCertain.order)
  orderCertains: OrderCertain[];

  @OneToMany(
    () => OrderListEidtType,
    (orderListEidtType) => orderListEidtType.order,
  )
  orderListEidtTypes: OrderListEidtType[];

  @OneToMany(() => ReturnRequest, (returnRequest) => returnRequest.order)
  returnRequests: ReturnRequest[];
}
