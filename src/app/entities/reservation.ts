import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_Reservation', ['reservationId'], { unique: true })
@Entity('Reservation', { schema: 'dbo' })
export class Reservation {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ReservationID' })
  reservationId: number;

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

  @Column('datetime', { name: 'ReservationDate' })
  reservationDate: Date;

  @Column('bit', { name: 'TwoApprovals', default: () => '(0)' })
  twoApprovals: boolean;

  @Column('int', { name: 'ReservationType', default: () => '(0)' })
  reservationType: number;

  @Column('bit', { name: 'OrderOfficial', default: () => '(0)' })
  orderOfficial: boolean;

  @Column('bigint', { name: 'Deposit', nullable: true })
  deposit: string | null;

  @Column('bigint', { name: 'AmountDiscount', nullable: true })
  amountDiscount: string | null;

  @Column('bigint', { name: 'ManagerDiscount', nullable: true })
  managerDiscount: string | null;

  @Column('bigint', { name: 'PriceDifference', nullable: true })
  priceDifference: string | null;
}
