import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SalTracing } from './sal-tracing';
import { SalTrustDetail } from './sal-trust-detail';

@Index('PK_salTrustStatusRoll', ['pkfRollStatus'], { unique: true })
@Entity('salTrustStatusRoll', { schema: 'dbo' })
export class SalTrustStatusRoll {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfRollStatus' })
  pkfRollStatus: number;

  @Column('nvarchar', { name: 'statusDesc', length: 50, default: () => "''" })
  statusDesc: string;

  @Column('nvarchar', { name: 'statusCode', length: 50, default: () => "''" })
  statusCode: string;

  @Column('int', { name: 'type' })
  type: number;

  @OneToMany(() => SalTracing, (salTracing) => salTracing.fkfStatusCut)
  salTracings: SalTracing[];

  @OneToMany(() => SalTracing, (salTracing) => salTracing.fkfHealthRoll)
  salTracings2: SalTracing[];

  @OneToMany(
    () => SalTrustDetail,
    (salTrustDetail) => salTrustDetail.fkfStatusCut,
  )
  salTrustDetails: SalTrustDetail[];

  @OneToMany(
    () => SalTrustDetail,
    (salTrustDetail) => salTrustDetail.fkfHealthRoll,
  )
  salTrustDetails2: SalTrustDetail[];
}
