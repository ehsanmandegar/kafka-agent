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

@Index('PK_proProduceCost', ['pkfProduceCost'], { unique: true })
@Entity('proProduceCost', { schema: 'dbo' })
export class ProProduceCost {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfProduceCost' })
  pkfProduceCost: number;

  @Column('int', { name: 'price' })
  price: number;

  @Column('int', { name: 'FkfTreaterBes' })
  fkfTreaterBes: number;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('int', { name: 'FkfTreaterBesMoein' })
  fkfTreaterBesMoein: number;

  @Column('int', { name: 'FkfBesTreater2', nullable: true })
  fkfBesTreater2: number | null;

  @Column('int', { name: 'FkfBesTreater3', nullable: true })
  fkfBesTreater3: number | null;

  @ManyToOne(() => ProProduce, (proProduce) => proProduce.proProduceCosts, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'FkfProduce', referencedColumnName: 'pkfProduce' }])
  fkfProduce: ProProduce;

  @RelationId((proProduceCost: ProProduceCost) => proProduceCost.fkfProduce)
  fkfProduce2: number;
}
