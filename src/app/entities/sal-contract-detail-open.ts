import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalContractOpen } from './sal-contract-open';
import { SalGoods } from './sal-goods';

@Index('PK_salContractDetailOpen', ['pkfContractDetailOpen'], { unique: true })
@Entity('salContractDetailOpen', { schema: 'dbo' })
export class SalContractDetailOpen {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfContractDetailOpen' })
  pkfContractDetailOpen: number;

  @Column('nvarchar', { name: 'store', length: 255 })
  store: string;

  @Column('decimal', { name: 'amount1', precision: 18, scale: 3 })
  amount1: number;

  @Column('decimal', {
    name: 'amount2',
    nullable: true,
    precision: 18,
    scale: 3,
    default: () => '0',
  })
  amount2: number | null;

  @Column('decimal', { name: 'fee', precision: 10, scale: 3 })
  fee: number;

  @Column('tinyint', { name: 'calcBase', default: () => '1' })
  calcBase: number;

  @Column('nvarchar', { name: 'contractNo', length: 25, default: () => "''" })
  contractNo: string;

  @Column('int', { name: 'carCount', default: () => '0' })
  carCount: number;

  @ManyToOne(
    () => SalContractOpen,
    (salContractOpen) => salContractOpen.salContractDetailOpens,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'FkfContractOpen', referencedColumnName: 'pkfContractOpen' },
  ])
  fkfContractOpen: SalContractOpen;

  @ManyToOne(() => SalGoods, (salGoods) => salGoods.salContractDetailOpens)
  @JoinColumn([{ name: 'FkfGoods', referencedColumnName: 'pkfGood' }])
  fkfGoods: SalGoods;

  @RelationId(
    (salContractDetailOpen: SalContractDetailOpen) =>
      salContractDetailOpen.fkfContractOpen,
  )
  fkfContractOpen2: number;

  @RelationId(
    (salContractDetailOpen: SalContractDetailOpen) =>
      salContractDetailOpen.fkfGoods,
  )
  fkfGoods2: number;
}
