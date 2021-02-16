import { Column, Entity } from 'typeorm';

@Entity('payContractType', { schema: 'dbo' })
export class PayContractType {
  @Column('int', { name: 'pkfContractType' })
  pkfContractType: number;

  @Column('nvarchar', { name: 'type', length: 50 })
  type: string;
}
