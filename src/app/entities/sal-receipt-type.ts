import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salReceiptType', ['pkfReceiptType'], { unique: true })
@Entity('salReceiptType', { schema: 'dbo' })
export class SalReceiptType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfReceiptType' })
  pkfReceiptType: number;

  @Column('nvarchar', { name: 'receiptType', length: 50 })
  receiptType: string;
}
