import { Column, Entity, Index, OneToMany } from 'typeorm';
import { SalContractDetail } from './sal-contract-detail';

@Index('PK_salCalcBase', ['pkfCalcBase'], { unique: true })
@Entity('salCalcBase', { schema: 'dbo' })
export class SalCalcBase {
  @Column('tinyint', { primary: true, name: 'pkfCalcBase' })
  pkfCalcBase: number;

  @Column('nvarchar', { name: 'calcBase', length: 100 })
  calcBase: string;

  @OneToMany(
    () => SalContractDetail,
    (salContractDetail) => salContractDetail.calcBase,
  )
  salContractDetails: SalContractDetail[];
}
