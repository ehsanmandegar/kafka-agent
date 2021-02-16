import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalContract } from './sal-contract';
import { GenTreater } from './gen-treater';
import { AccMoein } from './acc-moein';

@Index('PK_salContractOtherDetail', ['pkfContractOtherDetail'], {
  unique: true,
})
@Entity('salContractOtherDetail', { schema: 'dbo' })
export class SalContractOtherDetail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfContractOtherDetail' })
  pkfContractOtherDetail: number;

  @Column('nvarchar', { name: 'descOther', length: 255 })
  descOther: string;

  @Column('bigint', { name: 'priceBed' })
  priceBed: string;

  @Column('bigint', { name: 'priceBes' })
  priceBes: string;

  @Column('int', { name: 'FkfTreaterDifMoein', nullable: true })
  fkfTreaterDifMoein: number | null;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('nvarchar', { name: 'billOfLading', length: 50, default: () => "''" })
  billOfLading: string;

  @Column('int', { name: 'FKFTreaterBed2', nullable: true })
  fkfTreaterBed2: number | null;

  @Column('int', { name: 'FKFTreaterBes2', nullable: true })
  fkfTreaterBes2: number | null;

  @Column('int', { name: 'FKFTreaterDif2', nullable: true })
  fkfTreaterDif2: number | null;

  @Column('nvarchar', { name: 'driverName', length: 255, default: () => "''" })
  driverName: string;

  @Column('nvarchar', {
    name: 'driverNationalCode',
    length: 50,
    default: () => "''",
  })
  driverNationalCode: string;

  @Column('nvarchar', {
    name: 'accountNumber',
    length: 50,
    default: () => "''",
  })
  accountNumber: string;

  @Column('int', { name: 'FKFBank', nullable: true })
  fkfBank: number | null;

  @ManyToOne(
    () => SalContract,
    (salContract) => salContract.salContractOtherDetails,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([{ name: 'FkfContract', referencedColumnName: 'pkfContract' }])
  fkfContract: SalContract;

  @ManyToOne(
    () => GenTreater,
    (genTreater) => genTreater.salContractOtherDetails,
  )
  @JoinColumn([{ name: 'FkfTreaterBed', referencedColumnName: 'pkfTreater' }])
  fkfTreaterBed: GenTreater;

  @ManyToOne(
    () => GenTreater,
    (genTreater) => genTreater.salContractOtherDetails2,
  )
  @JoinColumn([{ name: 'FkfTreaterBes', referencedColumnName: 'pkfTreater' }])
  fkfTreaterBes: GenTreater;

  @ManyToOne(
    () => GenTreater,
    (genTreater) => genTreater.salContractOtherDetails3,
  )
  @JoinColumn([{ name: 'FkfTreaterDif', referencedColumnName: 'pkfTreater' }])
  fkfTreaterDif: GenTreater;

  @ManyToOne(() => AccMoein, (accMoein) => accMoein.salContractOtherDetails)
  @JoinColumn([
    { name: 'FkfTreaterBedMoein', referencedColumnName: 'pkfMoein' },
  ])
  fkfTreaterBedMoein: AccMoein;

  @ManyToOne(() => AccMoein, (accMoein) => accMoein.salContractOtherDetails2)
  @JoinColumn([
    { name: 'FkfTreaterBedMoein', referencedColumnName: 'pkfMoein' },
  ])
  fkfTreaterBedMoein2: AccMoein;

  @ManyToOne(() => AccMoein, (accMoein) => accMoein.salContractOtherDetails3)
  @JoinColumn([
    { name: 'FkfTreaterBesMoein', referencedColumnName: 'pkfMoein' },
  ])
  fkfTreaterBesMoein: AccMoein;

  @RelationId(
    (salContractOtherDetail: SalContractOtherDetail) =>
      salContractOtherDetail.fkfContract,
  )
  fkfContract2: number;

  @RelationId(
    (salContractOtherDetail: SalContractOtherDetail) =>
      salContractOtherDetail.fkfTreaterBed,
  )
  fkfTreaterBed3: number;

  @RelationId(
    (salContractOtherDetail: SalContractOtherDetail) =>
      salContractOtherDetail.fkfTreaterBes,
  )
  fkfTreaterBes3: number;

  @RelationId(
    (salContractOtherDetail: SalContractOtherDetail) =>
      salContractOtherDetail.fkfTreaterDif,
  )
  fkfTreaterDif3: number | null;

  @RelationId(
    (salContractOtherDetail: SalContractOtherDetail) =>
      salContractOtherDetail.fkfTreaterBedMoein,
  )
  fkfTreaterBedMoein3: number;

  @RelationId(
    (salContractOtherDetail: SalContractOtherDetail) =>
      salContractOtherDetail.fkfTreaterBedMoein2,
  )
  fkfTreaterBedMoein4: number;

  @RelationId(
    (salContractOtherDetail: SalContractOtherDetail) =>
      salContractOtherDetail.fkfTreaterBesMoein,
  )
  fkfTreaterBesMoein2: number;
}
