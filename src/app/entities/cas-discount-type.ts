import { Column, Entity, Index } from 'typeorm';

@Index('PK_casDiscountType', ['pkfDiscountType'], { unique: true })
@Entity('casDiscountType', { schema: 'dbo' })
export class CasDiscountType {
  @Column('int', { primary: true, name: 'pkfDiscountType' })
  pkfDiscountType: number;

  @Column('nvarchar', { name: 'discountType', length: 50 })
  discountType: string;
}
