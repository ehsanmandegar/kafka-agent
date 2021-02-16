import { Column, Entity } from 'typeorm';

@Entity('payTaxGroupType', { schema: 'dbo' })
export class PayTaxGroupType {
  @Column('int', { name: 'pkfTaxGroupType' })
  pkfTaxGroupType: number;

  @Column('nvarchar', { name: 'type', length: 50 })
  type: string;
}
