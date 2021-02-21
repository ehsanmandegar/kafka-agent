import { Column, Entity, Index, OneToMany } from 'typeorm';
import { CasGetPay } from './cas-get-pay';

@Index('PK_casGetPayStatus', ['pkfGetPayStatus'], { unique: true })
@Entity('casGetPayStatus', { schema: 'dbo' })
export class CasGetPayStatus {
  @Column('int', { primary: true, name: 'pkfGetPayStatus' })
  pkfGetPayStatus: number;

  @Column('nvarchar', { name: 'getpayStatus', length: 50 })
  getpayStatus: string;

  @OneToMany(() => CasGetPay, (casGetPay) => casGetPay.fkfGetPayStatus)
  casGetPays: CasGetPay[];
}
