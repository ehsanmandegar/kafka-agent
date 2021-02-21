import { Column, Entity, Index, OneToMany } from 'typeorm';
import { SalContract } from './sal-contract';
import { SalFactor } from './sal-factor';

@Index('PK_salContractType', ['pkfContractType'], { unique: true })
@Entity('salContractType', { schema: 'dbo' })
export class SalContractType {
  @Column('int', { primary: true, name: 'pkfContractType' })
  pkfContractType: number;

  @Column('nvarchar', { name: 'contractType', length: 100 })
  contractType: string;

  @OneToMany(() => SalContract, (salContract) => salContract.fkfContractType2)
  salContracts: SalContract[];

  @OneToMany(() => SalFactor, (salFactor) => salFactor.fkfContractType)
  salFactors: SalFactor[];
}
