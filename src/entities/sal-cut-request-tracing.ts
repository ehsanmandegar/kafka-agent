import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalCutRequestDetail } from './sal-cut-request-detail';

@Index('IX_salCutRequestTracing', ['fkfTracing', 'fkfCutRequestDetail'], {
  unique: true,
})
@Index('PK_salCutRequestTracing', ['pkfCutRequestTracing'], { unique: true })
@Entity('salCutRequestTracing', { schema: 'dbo' })
export class SalCutRequestTracing {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfCutRequestTracing' })
  pkfCutRequestTracing: number;

  @Column('int', { name: 'Tmp_FkfTracing_1' })
  tmpFkfTracing_1: number;

  @Column('int', { name: 'FkfCutRequestDetail' })
  fkfCutRequestDetail: number;

  @Column('int', { name: 'weight', default: () => '(0)' })
  weight: number;

  @Column('int', { name: 'QTY', default: () => '(0)' })
  qty: number;

  @Column('int', { name: 'FkfTracing' })
  fkfTracing: number;

  @ManyToOne(
    () => SalCutRequestDetail,
    (salCutRequestDetail) => salCutRequestDetail.salCutRequestTracings,
  )
  @JoinColumn([
    {
      name: 'FkfCutRequestDetail',
      referencedColumnName: 'pkfCutRequestDetail',
    },
  ])
  fkfCutRequestDetail2: SalCutRequestDetail;

  @RelationId(
    (salCutRequestTracing: SalCutRequestTracing) =>
      salCutRequestTracing.fkfCutRequestDetail2,
  )
  fkfCutRequestDetail3: number;
}
