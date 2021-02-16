import { Column, Entity } from 'typeorm';

@Entity('OrderListEidtType2', { schema: 'dbo' })
export class OrderListEidtType2 {
  @Column('int', { name: 'OrderListEidtTypeID' })
  orderListEidtTypeId: number;

  @Column('int', { name: 'OrderID' })
  orderId: number;

  @Column('int', { name: 'OrderEidtTypeID' })
  orderEidtTypeId: number;
}
