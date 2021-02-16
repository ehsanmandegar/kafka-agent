import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { ProProduceU } from './pro-produce-u';

@Entity('proProduceDetailU', { schema: 'dbo' })
export class ProProduceDetailU {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfProduceDetailU' })
  pkfProduceDetailU: number;

  @Column('int', { name: 'FkfGoods' })
  fkfGoods: number;

  @Column('decimal', {
    name: 'mainAmong',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  mainAmong: number | null;

  @Column('decimal', {
    name: 'secondAmong',
    nullable: true,
    precision: 18,
    scale: 6,
  })
  secondAmong: number | null;

  @Column('decimal', {
    name: 'buyFee',
    precision: 18,
    scale: 5,
    default: () => '(0)',
  })
  buyFee: number;

  @ManyToOne(
    () => ProProduceU,
    (proProduceU) => proProduceU.proProduceDetailUs,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([{ name: 'FkfProduceU', referencedColumnName: 'pkfProduceU' }])
  fkfProduceU: ProProduceU;

  @RelationId(
    (proProduceDetailU: ProProduceDetailU) => proProduceDetailU.fkfProduceU,
  )
  fkfProduceU2: number;
}
