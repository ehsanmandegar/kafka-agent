import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SalCompany } from './sal-company';
import { SalTell } from './sal-tell';

@Index('PK_salCompanyType', ['pkfCompanyType'], { unique: true })
@Entity('salCompanyType', { schema: 'dbo' })
export class SalCompanyType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfCompanyType' })
  pkfCompanyType: number;

  @Column('nvarchar', { name: 'companyType', length: 100 })
  companyType: string;

  @OneToMany(() => SalCompany, (salCompany) => salCompany.fkfCompanyType)
  salCompanies: SalCompany[];

  @OneToMany(() => SalTell, (salTell) => salTell.fkfCompanyType)
  salTells: SalTell[];
}
