import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalService } from './sal-service';
import { SalFactor } from './sal-factor';
import { GenTreater } from './gen-treater';

@Index('PK_salServiceFactor', ['pkfServiceFactor'], { unique: true })
@Entity('salServiceFactor', { schema: 'dbo' })
export class SalServiceFactor {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfServiceFactor' })
  pkfServiceFactor: number;

  @Column('bigint', { name: 'price' })
  price: string;

  @Column('nvarchar', { name: 'memo', length: 200 })
  memo: string;

  @ManyToOne(() => SalService, (salService) => salService.salServiceFactors, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'FkfService', referencedColumnName: 'pkfService' }])
  fkfService: SalService;

  @ManyToOne(() => SalFactor, (salFactor) => salFactor.salServiceFactors)
  @JoinColumn([{ name: 'FkfFactor', referencedColumnName: 'pkfFactor' }])
  fkfFactor: SalFactor;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.salServiceFactors)
  @JoinColumn([{ name: 'FkfTreater', referencedColumnName: 'pkfTreater' }])
  fkfTreater: GenTreater;

  @RelationId(
    (salServiceFactor: SalServiceFactor) => salServiceFactor.fkfService,
  )
  fkfService2: number;

  @RelationId(
    (salServiceFactor: SalServiceFactor) => salServiceFactor.fkfFactor,
  )
  fkfFactor2: number;

  @RelationId(
    (salServiceFactor: SalServiceFactor) => salServiceFactor.fkfTreater,
  )
  fkfTreater2: number;
}
