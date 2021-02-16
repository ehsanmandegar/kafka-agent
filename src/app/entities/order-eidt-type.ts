import { Column, Entity, Index, OneToMany } from 'typeorm';
import { OrderListEidtType } from './order-list-eidt-type';

@Index('PK_OrderEidtType', ['orderEidtTypeId'], { unique: true })
@Entity('OrderEidtType', { schema: 'dbo' })
export class OrderEidtType {
  @Column('int', { primary: true, name: 'OrderEidtTypeID' })
  orderEidtTypeId: number;

  @Column('nvarchar', { name: 'OrderEidtTypeTitle', length: 100 })
  orderEidtTypeTitle: string;

  @Column('nvarchar', {
    name: 'OrderEidtTypeField',
    nullable: true,
    length: 50,
  })
  orderEidtTypeField: string | null;

  @Column('bit', { name: 'IsCancel', default: () => '(0)' })
  isCancel: boolean;

  @OneToMany(
    () => OrderListEidtType,
    (orderListEidtType) => orderListEidtType.orderEidtType,
  )
  orderListEidtTypes: OrderListEidtType[];
}
