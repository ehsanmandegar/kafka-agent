import { Column, Entity, Index, OneToMany } from 'typeorm';
import { CasGetPayDetail } from './cas-get-pay-detail';
import { CasLogCheck } from './cas-log-check';

@Index('PK_casCheckState', ['pkfCheckState'], { unique: true })
@Entity('casCheckState', { schema: 'dbo' })
export class CasCheckState {
  @Column('int', { primary: true, name: 'pkfCheckState' })
  pkfCheckState: number;

  @Column('nvarchar', { name: 'checkState', length: 50 })
  checkState: string;

  @OneToMany(
    () => CasGetPayDetail,
    (casGetPayDetail) => casGetPayDetail.fkfCheckState,
  )
  casGetPayDetails: CasGetPayDetail[];

  @OneToMany(() => CasLogCheck, (casLogCheck) => casLogCheck.fkfCheckState)
  casLogChecks: CasLogCheck[];
}
