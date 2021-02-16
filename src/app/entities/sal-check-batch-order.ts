import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salCheckBatchOrder', ['pkfCheckBatchOrder'], { unique: true })
@Entity('salCheckBatchOrder', { schema: 'dbo' })
export class SalCheckBatchOrder {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfCheckBatchOrder' })
  pkfCheckBatchOrder: number;

  @Column('bigint', { name: 'firstNo' })
  firstNo: string;

  @Column('bigint', { name: 'endNo' })
  endNo: string;

  @Column('varchar', { name: 'checkBatchOrderDate', length: 10 })
  checkBatchOrderDate: string;

  @Column('int', { name: 'FKFEmployee' })
  fkfEmployee: number;

  @Column('nvarchar', { name: 'memo', length: 255 })
  memo: string;
}
