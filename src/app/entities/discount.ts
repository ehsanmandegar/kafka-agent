import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DiscountExceptionDetail } from './discount-exception-detail';

@Index('PK_Discount', ['discountId'], { unique: true })
@Entity('Discount', { schema: 'dbo' })
export class Discount {
  @PrimaryGeneratedColumn({ type: 'int', name: 'DiscountID' })
  discountId: number;

  @Column('int', { name: 'DiscountRow' })
  discountRow: number;

  @Column('int', { name: 'DayStart' })
  dayStart: number;

  @Column('int', { name: 'DayFinish' })
  dayFinish: number;

  @Column('int', { name: 'DiscountMin' })
  discountMin: number;

  @Column('int', { name: 'DiscountMax' })
  discountMax: number;

  @OneToMany(
    () => DiscountExceptionDetail,
    (discountExceptionDetail) => discountExceptionDetail.discount,
  )
  discountExceptionDetails: DiscountExceptionDetail[];
}
