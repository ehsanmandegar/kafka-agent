import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { ProProduce } from './pro-produce';

@Index('PK_proProduceDetailCost', ['pkfProduceDetailCost'], { unique: true })
@Entity('proProduceDetailCost', { schema: 'dbo' })
export class ProProduceDetailCost {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfProduceDetailCost' })
  pkfProduceDetailCost: number;

  @Column('int', { name: 'price' })
  price: number;

  @Column('int', { name: 'FkfBesTreater' })
  fkfBesTreater: number;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('int', { name: 'FkfTreaterBesMoein' })
  fkfTreaterBesMoein: number;

  @Column('int', { name: 'FkfBesTreater2', nullable: true })
  fkfBesTreater2: number | null;

  @Column('int', { name: 'FkfBesTreater3', nullable: true })
  fkfBesTreater3: number | null;

  @ManyToOne(
    () => ProProduce,
    (proProduce) => proProduce.proProduceDetailCosts,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([{ name: 'FkfProduce', referencedColumnName: 'pkfProduce' }])
  fkfProduce: ProProduce;

  @RelationId(
    (proProduceDetailCost: ProProduceDetailCost) =>
      proProduceDetailCost.fkfProduce,
  )
  fkfProduce2: number;
}
