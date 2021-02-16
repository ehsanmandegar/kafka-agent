import { Column, Entity, Index } from 'typeorm';

@Index('PK_Table1', ['pkfCompanyPayType'], { unique: true })
@Entity('payCompanyPayType', { schema: 'dbo' })
export class PayCompanyPayType {
  @Column('int', { primary: true, name: 'pkfCompanyPayType' })
  pkfCompanyPayType: number;

  @Column('nvarchar', { name: 'CompanyPayType', length: 50 })
  companyPayType: string;
}
