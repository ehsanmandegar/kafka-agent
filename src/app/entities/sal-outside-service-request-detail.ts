import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salOutsideServiceRequestDetail', ['pkfOsrDatail'], { unique: true })
@Entity('salOutsideServiceRequestDetail', { schema: 'dbo' })
export class SalOutsideServiceRequestDetail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfOSRDatail' })
  pkfOsrDatail: number;

  @Column('int', { name: 'FkfGoods' })
  fkfGoods: number;

  @Column('int', { name: 'FkfOSR' })
  fkfOsr: number;

  @Column('int', { name: 'amount' })
  amount: number;

  @Column('nvarchar', { name: 'serviceDescription', length: 100 })
  serviceDescription: string;

  @Column('nvarchar', { name: 'memo', length: 500 })
  memo: string;
}
