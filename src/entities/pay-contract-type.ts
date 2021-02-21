import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('payContractType', { schema: 'dbo' })
export class PayContractType {
  @PrimaryColumn()
  fakeId: number;

  @Column('int', { name: 'pkfContractType' })
  pkfContractType: number;

  @Column('nvarchar', { name: 'type', length: 50 })
  type: string;
}
