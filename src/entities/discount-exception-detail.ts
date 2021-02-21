import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { DiscountException } from './discount-exception';
import { Discount } from './discount';

@Index('PK_DiscountExceptionDetail', ['discountExceptionDetailId'], {
  unique: true,
})
@Entity('DiscountExceptionDetail', { schema: 'dbo' })
export class DiscountExceptionDetail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'DiscountExceptionDetailID' })
  discountExceptionDetailId: number;

  @Column('int', { name: 'DiscountMin' })
  discountMin: number;

  @Column('int', { name: 'DiscountMax' })
  discountMax: number;

  @ManyToOne(
    () => DiscountException,
    (discountException) => discountException.discountExceptionDetails,
  )
  @JoinColumn([
    {
      name: 'DiscountExceptionID',
      referencedColumnName: 'discountExceptionId',
    },
  ])
  discountException: DiscountException;

  @ManyToOne(() => Discount, (discount) => discount.discountExceptionDetails)
  @JoinColumn([{ name: 'DiscountID', referencedColumnName: 'discountId' }])
  discount: Discount;

  @RelationId(
    (discountExceptionDetail: DiscountExceptionDetail) =>
      discountExceptionDetail.discountException,
  )
  discountExceptionId: number;

  @RelationId(
    (discountExceptionDetail: DiscountExceptionDetail) =>
      discountExceptionDetail.discount,
  )
  discountId: number;
}
