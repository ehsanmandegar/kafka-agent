import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { CasPayOff } from './cas-pay-off';
import { SalContractDetailOpen } from './sal-contract-detail-open';
import { GenTreater } from './gen-treater';

@Index('PK_salContractOpen', ['pkfContractOpen'], { unique: true })
@Entity('salContractOpen', { schema: 'dbo' })
export class SalContractOpen {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfContractOpen' })
  pkfContractOpen: number;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('nvarchar', { name: 'contractDate', length: 10 })
  contractDate: string;

  @Column('nvarchar', { name: 'memo', length: 255 })
  memo: string;

  @Column('nvarchar', { name: 'payoffDate', length: 10 })
  payoffDate: string;

  @Column('nvarchar', {
    name: 'getCondition',
    length: 255,
    default: () => "''",
  })
  getCondition: string;

  @Column('nvarchar', {
    name: 'payCondition',
    length: 255,
    default: () => "''",
  })
  payCondition: string;

  @Column('int', { name: 'usance', default: () => '0' })
  usance: number;

  @Column('nvarchar', {
    name: 'treaterAddress',
    length: 255,
    default: () => "''",
  })
  treaterAddress: string;

  @Column('bigint', { name: 'payoffPrice', default: () => '0' })
  payoffPrice: string;

  @OneToMany(() => CasPayOff, (casPayOff) => casPayOff.fkfContractOpen)
  casPayOffs: CasPayOff[];

  @OneToMany(
    () => SalContractDetailOpen,
    (salContractDetailOpen) => salContractDetailOpen.fkfContractOpen,
  )
  salContractDetailOpens: SalContractDetailOpen[];

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.salContractOpens)
  @JoinColumn([{ name: 'FkfTreater', referencedColumnName: 'pkfTreater' }])
  fkfTreater: GenTreater;

  @RelationId((salContractOpen: SalContractOpen) => salContractOpen.fkfTreater)
  fkfTreater2: number;
}
