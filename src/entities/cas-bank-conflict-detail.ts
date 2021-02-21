import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { CasBankConflict } from './cas-bank-conflict';
import { CasConflictPlace } from './cas-conflict-place';

@Index('PK_casBankConflictDetail', ['pkfBankConflictDetail'], { unique: true })
@Entity('casBankConflictDetail', { schema: 'dbo' })
export class CasBankConflictDetail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfBankConflictDetail' })
  pkfBankConflictDetail: number;

  @Column('nvarchar', { name: 'serial', length: 25, default: () => "''" })
  serial: string;

  @Column('nvarchar', { name: 'actionDate', length: 10 })
  actionDate: string;

  @Column('bigint', { name: 'bedPrice' })
  bedPrice: string;

  @Column('bigint', { name: 'besPrice' })
  besPrice: string;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @ManyToOne(
    () => CasBankConflict,
    (casBankConflict) => casBankConflict.casBankConflictDetails,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'FkfBankConflict', referencedColumnName: 'pkfBankConflict' },
  ])
  fkfBankConflict: CasBankConflict;

  @ManyToOne(
    () => CasConflictPlace,
    (casConflictPlace) => casConflictPlace.casBankConflictDetails,
  )
  @JoinColumn([
    { name: 'FkfConflictPlace', referencedColumnName: 'pkfConflictPlace' },
  ])
  fkfConflictPlace: CasConflictPlace;

  @RelationId(
    (casBankConflictDetail: CasBankConflictDetail) =>
      casBankConflictDetail.fkfBankConflict,
  )
  fkfBankConflict2: number;

  @RelationId(
    (casBankConflictDetail: CasBankConflictDetail) =>
      casBankConflictDetail.fkfConflictPlace,
  )
  fkfConflictPlace2: number;
}
