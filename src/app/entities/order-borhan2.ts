import { Column, Entity } from 'typeorm';

@Entity('OrderBorhan2', { schema: 'dbo' })
export class OrderBorhan2 {
  @Column('int', { name: 'OrderBorhanID' })
  orderBorhanId: number;

  @Column('int', { name: 'OrderID' })
  orderId: number;

  @Column('int', { name: 'VoucherHeaderID' })
  voucherHeaderId: number;

  @Column('int', { name: 'InvoiceNumber', nullable: true })
  invoiceNumber: number | null;

  @Column('int', { name: 'DeliveryNumber', nullable: true })
  deliveryNumber: number | null;

  @Column('int', { name: 'TransferNumber', nullable: true })
  transferNumber: number | null;

  @Column('nvarchar', { name: 'SettlementDate', nullable: true, length: 10 })
  settlementDate: string | null;

  @Column('decimal', {
    name: 'FinalWeight',
    nullable: true,
    precision: 16,
    scale: 2,
  })
  finalWeight: number | null;

  @Column('decimal', {
    name: 'FinalAmount',
    nullable: true,
    precision: 16,
    scale: 2,
  })
  finalAmount: number | null;

  @Column('int', { name: 'Wrappers', nullable: true })
  wrappers: number | null;

  @Column('int', { name: 'SalesOrderID', nullable: true })
  salesOrderId: number | null;

  @Column('int', { name: 'ReturnFactorNumber', nullable: true })
  returnFactorNumber: number | null;

  @Column('decimal', {
    name: 'WeightBack',
    nullable: true,
    precision: 16,
    scale: 2,
  })
  weightBack: number | null;

  @Column('decimal', {
    name: 'AmountBack',
    nullable: true,
    precision: 16,
    scale: 2,
  })
  amountBack: number | null;
}
