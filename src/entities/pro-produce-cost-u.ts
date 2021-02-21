import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { ProProduceU } from './pro-produce-u';

@Index('PK_proProduceCostU', ['pkfProduceCostU'], { unique: true })
@Entity('proProduceCostU', { schema: 'dbo' })
export class ProProduceCostU {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfProduceCostU' })
  pkfProduceCostU: number;

  @Column('int', { name: 'FkfFactor' })
  fkfFactor: number;

  @Column('int', { name: 'price' })
  price: number;

  @Column('int', { name: 'FkfTreaterBed' })
  fkfTreaterBed: number;

  @Column('int', { name: 'FkfTreaterBes' })
  fkfTreaterBes: number;

  @Column('nvarchar', { name: 'memo', length: 200 })
  memo: string;

  @ManyToOne(() => ProProduceU, (proProduceU) => proProduceU.proProduceCostUs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'FkfProduceU', referencedColumnName: 'pkfProduceU' }])
  fkfProduceU: ProProduceU;

  @RelationId((proProduceCostU: ProProduceCostU) => proProduceCostU.fkfProduceU)
  fkfProduceU2: number;
}
