import { Column, Entity, Index } from 'typeorm';

@Index('PK_salContractTypeBuy', ['pkfContractTypeBuy'], { unique: true })
@Entity('salContractTypeBuy', { schema: 'dbo' })
export class SalContractTypeBuy {
  @Column('int', { primary: true, name: 'pkfContractTypeBuy' })
  pkfContractTypeBuy: number;

  @Column('nvarchar', { name: 'contractTypeBuy', length: 50 })
  contractTypeBuy: string;
}
