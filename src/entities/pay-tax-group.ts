import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_payTaxGroup', ['pkfTaxGroup'], { unique: true })
@Entity('payTaxGroup', { schema: 'dbo' })
export class PayTaxGroup {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfTaxGroup' })
  pkfTaxGroup: number;

  @Column('nvarchar', { name: 'name', length: 50 })
  name: string;

  @Column('int', { name: 'FkfTaxGroupType' })
  fkfTaxGroupType: number;
}
