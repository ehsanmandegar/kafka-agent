import { Column, Entity, Index } from 'typeorm';

@Index('PK_payCompanyType', ['pkfCompanyType'], { unique: true })
@Entity('payCompanyType', { schema: 'dbo' })
export class PayCompanyType {
  @Column('int', { primary: true, name: 'pkfCompanyType' })
  pkfCompanyType: number;

  @Column('nvarchar', { name: 'companyType', length: 100 })
  companyType: string;
}
