import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SalTransferOrderDetail } from './sal-transfer-order-detail';

@Index('PK_salTransferOrder', ['pkfTransferOrder'], { unique: true })
@Entity('salTransferOrder', { schema: 'dbo' })
export class SalTransferOrder {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfTransferOrder' })
  pkfTransferOrder: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('nvarchar', { name: 'transferDate', length: 10 })
  transferDate: string;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('nvarchar', { name: 'createTime', length: 5 })
  createTime: string;

  @Column('nvarchar', { name: 'createDate', length: 10 })
  createDate: string;

  @Column('nvarchar', { name: 'editDate', length: 10, default: () => "''" })
  editDate: string;

  @Column('int', { name: 'FkfCreateUser' })
  fkfCreateUser: number;

  @Column('int', { name: 'FkfEditUser', nullable: true })
  fkfEditUser: number | null;

  @Column('int', { name: 'FkfFinalUser', nullable: true })
  fkfFinalUser: number | null;

  @Column('nvarchar', { name: 'finalDate', nullable: true, length: 10 })
  finalDate: string | null;

  @Column('nvarchar', { name: 'memo', length: 500, default: () => "''" })
  memo: string;

  @Column('int', { name: 'FkfPorterage', nullable: true })
  fkfPorterage: number | null;

  @OneToMany(
    () => SalTransferOrderDetail,
    (salTransferOrderDetail) => salTransferOrderDetail.fkfTransferOrder,
  )
  salTransferOrderDetails: SalTransferOrderDetail[];
}
