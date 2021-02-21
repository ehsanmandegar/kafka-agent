import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CasGetPayDetail } from './cas-get-pay-detail';

@Index('PK_casCheckGet', ['pkfCheckGet'], { unique: true })
@Entity('casCheckGet', { schema: 'dbo' })
export class CasCheckGet {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfCheckGet' })
  pkfCheckGet: number;

  @Column('nvarchar', { name: 'checkGet', length: 150 })
  checkGet: string;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'oldPkf', nullable: true })
  oldPkf: number | null;

  @OneToMany(
    () => CasGetPayDetail,
    (casGetPayDetail) => casGetPayDetail.fkfCheckGet,
  )
  casGetPayDetails: CasGetPayDetail[];
}
