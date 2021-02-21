import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DiscountRequest } from './discount-request';

@Index('PK_DiscountDocumnet', ['discountDocumnetId'], { unique: true })
@Entity('DiscountDocumnet', { schema: 'dbo' })
export class DiscountDocumnet {
  @PrimaryGeneratedColumn({ type: 'int', name: 'DiscountDocumnetID' })
  discountDocumnetId: number;

  @Column('varbinary', { name: 'fileScan' })
  fileScan: Buffer;

  @Column('nvarchar', { name: 'FileName', length: 50 })
  fileName: string;

  @OneToMany(
    () => DiscountRequest,
    (discountRequest) => discountRequest.discountDocumnet,
  )
  discountRequests: DiscountRequest[];
}
