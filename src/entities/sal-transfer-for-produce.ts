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
import { SalTransferForProduceDetail } from './sal-transfer-for-produce-detail';

@Index('PK_salTransferForProduce', ['pkfTransferForProduce'], { unique: true })
@Entity('salTransferForProduce', { schema: 'dbo' })
export class SalTransferForProduce {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfTransferForProduce' })
  pkfTransferForProduce: number;

  @Column('int', { name: 'serial' })
  serial: number;

  @Column('nvarchar', { name: 'transferForProduceDate', length: 10 })
  transferForProduceDate: string;

  @Column('int', { name: 'accYear' })
  accYear: number;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('nvarchar', { name: 'orderNo', length: 255, default: () => "''" })
  orderNo: string;

  @Column('bit', { name: 'sanad', default: () => '(0)' })
  sanad: boolean;

  @Column('int', { name: 'sanadTempNo', nullable: true })
  sanadTempNo: number | null;

  @Column('int', { name: 'FkfSanad', nullable: true })
  fkfSanad: number | null;

  @ManyToOne(
    () => SalContract,
    (salContract) => salContract.salTransferForProduces,
  )
  @JoinColumn([{ name: 'FkfContract', referencedColumnName: 'pkfContract' }])
  fkfContract: SalContract;

  @OneToMany(
    () => SalTransferForProduceDetail,
    (salTransferForProduceDetail) =>
      salTransferForProduceDetail.fkfTransferForProduce,
  )
  salTransferForProduceDetails: SalTransferForProduceDetail[];

  @RelationId(
    (salTransferForProduce: SalTransferForProduce) =>
      salTransferForProduce.fkfContract,
  )
  fkfContract2: number;
}
