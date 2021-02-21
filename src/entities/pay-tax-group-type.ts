import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('payTaxGroupType', { schema: 'dbo' })
export class PayTaxGroupType {
  @PrimaryColumn()
  fakeId: number;

  @Column('int', { name: 'pkfTaxGroupType' })
  pkfTaxGroupType: number;

  @Column('nvarchar', { name: 'type', length: 50 })
  type: string;
}
