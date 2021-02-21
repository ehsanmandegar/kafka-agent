import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_OrderBack', ['id'], { unique: true })
@Entity('OrderBack', { schema: 'dbo' })
export class OrderBack {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID' })
  id: number;

  @Column('int', { name: 'OrderID', nullable: true })
  orderId: number | null;

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

  @Column('bit', { name: 'OrderTransfer', nullable: true })
  orderTransfer: boolean | null;

  @Column('bit', { name: 'TwoApprovals', nullable: true })
  twoApprovals: boolean | null;

  @Column('bit', { name: 'OrderApprove', nullable: true })
  orderApprove: boolean | null;

  @Column('int', { name: 'VoucherHeaderID', nullable: true })
  voucherHeaderId: number | null;

  @Column('int', { name: 'VoucherDetailID', nullable: true })
  voucherDetailId: number | null;

  @Column('int', { name: 'VoucherPriceID', nullable: true })
  voucherPriceId: number | null;

  @Column('int', { name: 'VoucherTrackingID', nullable: true })
  voucherTrackingId: number | null;

  @Column('bit', { name: 'OrderCancel', nullable: true })
  orderCancel: boolean | null;

  @Column('bit', { name: 'OrderOfficial', nullable: true })
  orderOfficial: boolean | null;

  @Column('bit', { name: 'ISPresell', nullable: true })
  isPresell: boolean | null;

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

  @Column('bit', { name: 'ISLock', nullable: true })
  isLock: boolean | null;

  @Column('int', { name: 'KartablStatus', nullable: true })
  kartablStatus: number | null;

  @Column('int', { name: 'FkfKartablStart', nullable: true })
  fkfKartablStart: number | null;

  @Column('datetime', { name: 'OrderUpdate', nullable: true })
  orderUpdate: Date | null;

  @Column('bit', { name: 'IsOrderCertain', nullable: true })
  isOrderCertain: boolean | null;

  @Column('bit', { name: 'OrderBackViewManage', default: () => '(0)' })
  orderBackViewManage: boolean;

  @Column('int', { name: 'accYear', nullable: true })
  accYear: number | null;

  @Column('datetime', { name: 'eventDate', nullable: true })
  eventDate: Date | null;

  @Column('int', { name: 'UserID1', nullable: true })
  userId1: number | null;

  @Column('int', { name: 'Action', nullable: true })
  action: number | null;
}
