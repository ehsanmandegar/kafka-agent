import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_payAgents', ['pkfAgent'], { unique: true })
@Entity('payAgents', { schema: 'dbo' })
export class PayAgents {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfAgent' })
  pkfAgent: number;

  @Column('int', { name: 'agentType' })
  agentType: number;

  @Column('int', { name: 'fkfThreater' })
  fkfThreater: number;

  @Column('varchar', {
    name: 'fld_AgentCode',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  fldAgentCode: string | null;

  @Column('nvarchar', {
    name: 'fld_AgentTitle',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  fldAgentTitle: string | null;

  @Column('nvarchar', {
    name: 'fld_CoAddress',
    nullable: true,
    length: 500,
    default: () => "''",
  })
  fldCoAddress: string | null;

  @Column('nvarchar', { name: 'tafziliCode', nullable: true, length: 50 })
  tafziliCode: string | null;

  @Column('nvarchar', { name: 'documentCode', length: 50 })
  documentCode: string;

  @Column('nvarchar', { name: 'peymanNo', nullable: true, length: 50 })
  peymanNo: string | null;

  @Column('nvarchar', { name: 'missInsuranceNo', nullable: true, length: 50 })
  missInsuranceNo: string | null;

  @Column('int', { name: 'fkfHowToCalculateTax', nullable: true })
  fkfHowToCalculateTax: number | null;

  @Column('bit', { name: 'IsActive', nullable: true, default: () => '(1)' })
  isActive: boolean | null;

  @Column('int', { name: 'accYear', nullable: true })
  accYear: number | null;
}
