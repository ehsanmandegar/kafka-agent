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
import { SalContract } from './sal-contract';
import { SalStore } from './sal-store';
import { SalStockDeclareDetail } from './sal-stock-declare-detail';

@Index(
  'IX_salStockDeclare',
  ['stockDeclareDate', 'fkfContract', 'fkfStore', 'accYear'],
  { unique: true },
)
@Index('PK_salStockDeclare', ['pkfStockDeclare'], { unique: true })
@Entity('salStockDeclare', { schema: 'dbo' })
export class SalStockDeclare {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfStockDeclare' })
  pkfStockDeclare: number;

  @Column('nvarchar', { name: 'stockDeclareDate', length: 10 })
  stockDeclareDate: string;

  @Column('int', { name: 'FkfContract' })
  fkfContract: number;

  @Column('int', { name: 'FkfStore' })
  fkfStore: number;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('int', { name: 'FkfCreateUser' })
  fkfCreateUser: number;

  @Column('nvarchar', { name: 'createDate', length: 10, default: () => "''" })
  createDate: string;

  @Column('int', { name: 'FkfEditUser', nullable: true })
  fkfEditUser: number | null;

  @Column('nvarchar', { name: 'editDate', length: 50, default: () => "''" })
  editDate: string;

  @ManyToOne(() => SalContract, (salContract) => salContract.salStockDeclares)
  @JoinColumn([{ name: 'FkfContract', referencedColumnName: 'pkfContract' }])
  fkfContract2: SalContract;

  @ManyToOne(() => SalStore, (salStore) => salStore.salStockDeclares)
  @JoinColumn([{ name: 'FkfStore', referencedColumnName: 'pkfStore' }])
  fkfStore2: SalStore;

  @OneToMany(
    () => SalStockDeclareDetail,
    (salStockDeclareDetail) => salStockDeclareDetail.fkfStockDeclare,
  )
  salStockDeclareDetails: SalStockDeclareDetail[];

  @RelationId(
    (salStockDeclare: SalStockDeclare) => salStockDeclare.fkfContract2,
  )
  fkfContract3: number;

  @RelationId((salStockDeclare: SalStockDeclare) => salStockDeclare.fkfStore2)
  fkfStore3: number;
}
