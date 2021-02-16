import { Column, Entity, Index, OneToMany } from 'typeorm';
import { SalCutRequestDetail } from './sal-cut-request-detail';

@Index('PK_salCutSataus', ['pkfCutStatus'], { unique: true })
@Entity('salCutSataus', { schema: 'dbo' })
export class SalCutSataus {
  @Column('int', { primary: true, name: 'pkfCutStatus' })
  pkfCutStatus: number;

  @Column('nvarchar', { name: 'cutStatus', length: 50 })
  cutStatus: string;

  @OneToMany(
    () => SalCutRequestDetail,
    (salCutRequestDetail) => salCutRequestDetail.cutStatus2,
  )
  salCutRequestDetails: SalCutRequestDetail[];
}
