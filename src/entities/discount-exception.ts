import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DiscountExceptionDetail } from './discount-exception-detail';

@Index('PK_DiscountException', ['discountExceptionId'], { unique: true })
@Entity('DiscountException', { schema: 'dbo' })
export class DiscountException {
  @PrimaryGeneratedColumn({ type: 'int', name: 'DiscountExceptionID' })
  discountExceptionId: number;

  @Column('int', { name: 'CustomerID1' })
  customerId1: number;

  @OneToMany(
    () => DiscountExceptionDetail,
    (discountExceptionDetail) => discountExceptionDetail.discountException,
  )
  discountExceptionDetails: DiscountExceptionDetail[];
}
