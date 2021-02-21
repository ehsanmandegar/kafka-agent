import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { CasGetPayDeclaration } from './cas-get-pay-declaration';
import { GenTreater } from './gen-treater';
import { CasType } from './cas-type';
import { AccMoein } from './acc-moein';

@Index('PK_casGetPayDeclarationDetail', ['pkfGetPayDeclarationDetail'], {
  unique: true,
})
@Entity('casGetPayDeclarationDetail', { schema: 'dbo' })
export class CasGetPayDeclarationDetail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfGetPayDeclarationDetail' })
  pkfGetPayDeclarationDetail: number;

  @Column('nvarchar', { name: 'serialNo', length: 50 })
  serialNo: string;

  @Column('nvarchar', { name: 'serialDate', length: 50 })
  serialDate: string;

  @Column('bigint', { name: 'price' })
  price: string;

  @Column('decimal', { name: 'priceCur', precision: 18, scale: 2 })
  priceCur: number;

  @Column('int', { name: 'FkfBank', nullable: true })
  fkfBank: number | null;

  @Column('nvarchar', { name: 'branchName', length: 50, default: () => "''" })
  branchName: string;

  @Column('nvarchar', {
    name: 'accountNumber',
    length: 100,
    default: () => "''",
  })
  accountNumber: string;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @ManyToOne(
    () => CasGetPayDeclaration,
    (casGetPayDeclaration) => casGetPayDeclaration.casGetPayDeclarationDetails,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    {
      name: 'FkfGetPayDeclaration',
      referencedColumnName: 'pkfGetPayDeclaration',
    },
  ])
  fkfGetPayDeclaration: CasGetPayDeclaration;

  @ManyToOne(
    () => GenTreater,
    (genTreater) => genTreater.casGetPayDeclarationDetails,
  )
  @JoinColumn([{ name: 'FkfTreater1', referencedColumnName: 'pkfTreater' }])
  fkfTreater: GenTreater;

  @ManyToOne(
    () => GenTreater,
    (genTreater) => genTreater.casGetPayDeclarationDetails2,
  )
  @JoinColumn([{ name: 'FkfTreater2', referencedColumnName: 'pkfTreater' }])
  fkfTreater2: GenTreater;

  @ManyToOne(() => CasType, (casType) => casType.casGetPayDeclarationDetails)
  @JoinColumn([{ name: 'FkfType', referencedColumnName: 'pkfType' }])
  fkfType: CasType;

  @ManyToOne(() => AccMoein, (accMoein) => accMoein.casGetPayDeclarationDetails)
  @JoinColumn([{ name: 'FkfTreaterMoein1', referencedColumnName: 'pkfMoein' }])
  fkfTreaterMoein: AccMoein;

  @ManyToOne(
    () => GenTreater,
    (genTreater) => genTreater.casGetPayDeclarationDetails3,
  )
  @JoinColumn([
    { name: 'FkfTreaterTafzili51', referencedColumnName: 'pkfTreater' },
  ])
  fkfTreaterTafzili: GenTreater;

  @ManyToOne(
    () => GenTreater,
    (genTreater) => genTreater.casGetPayDeclarationDetails4,
  )
  @JoinColumn([
    { name: 'FkfTreaterTafzili61', referencedColumnName: 'pkfTreater' },
  ])
  fkfTreaterTafzili2: GenTreater;

  @ManyToOne(
    () => AccMoein,
    (accMoein) => accMoein.casGetPayDeclarationDetails2,
  )
  @JoinColumn([{ name: 'FkfTreaterMoein2', referencedColumnName: 'pkfMoein' }])
  fkfTreaterMoein2: AccMoein;

  @ManyToOne(
    () => GenTreater,
    (genTreater) => genTreater.casGetPayDeclarationDetails5,
  )
  @JoinColumn([
    { name: 'FkfTreaterTafzili52', referencedColumnName: 'pkfTreater' },
  ])
  fkfTreaterTafzili3: GenTreater;

  @ManyToOne(
    () => GenTreater,
    (genTreater) => genTreater.casGetPayDeclarationDetails6,
  )
  @JoinColumn([
    { name: 'FkfTreaterTafzili62', referencedColumnName: 'pkfTreater' },
  ])
  fkfTreaterTafzili4: GenTreater;

  @RelationId(
    (casGetPayDeclarationDetail: CasGetPayDeclarationDetail) =>
      casGetPayDeclarationDetail.fkfGetPayDeclaration,
  )
  fkfGetPayDeclaration2: number;

  @RelationId(
    (casGetPayDeclarationDetail: CasGetPayDeclarationDetail) =>
      casGetPayDeclarationDetail.fkfTreater,
  )
  fkfTreater3: number;

  @RelationId(
    (casGetPayDeclarationDetail: CasGetPayDeclarationDetail) =>
      casGetPayDeclarationDetail.fkfTreater2,
  )
  fkfTreater4: number;

  @RelationId(
    (casGetPayDeclarationDetail: CasGetPayDeclarationDetail) =>
      casGetPayDeclarationDetail.fkfType,
  )
  fkfType2: number;

  @RelationId(
    (casGetPayDeclarationDetail: CasGetPayDeclarationDetail) =>
      casGetPayDeclarationDetail.fkfTreaterMoein,
  )
  fkfTreaterMoein3: number | null;

  @RelationId(
    (casGetPayDeclarationDetail: CasGetPayDeclarationDetail) =>
      casGetPayDeclarationDetail.fkfTreaterTafzili,
  )
  fkfTreaterTafzili5: number | null;

  @RelationId(
    (casGetPayDeclarationDetail: CasGetPayDeclarationDetail) =>
      casGetPayDeclarationDetail.fkfTreaterTafzili2,
  )
  fkfTreaterTafzili6: number | null;

  @RelationId(
    (casGetPayDeclarationDetail: CasGetPayDeclarationDetail) =>
      casGetPayDeclarationDetail.fkfTreaterMoein2,
  )
  fkfTreaterMoein4: number | null;

  @RelationId(
    (casGetPayDeclarationDetail: CasGetPayDeclarationDetail) =>
      casGetPayDeclarationDetail.fkfTreaterTafzili3,
  )
  fkfTreaterTafzili7: number | null;

  @RelationId(
    (casGetPayDeclarationDetail: CasGetPayDeclarationDetail) =>
      casGetPayDeclarationDetail.fkfTreaterTafzili4,
  )
  fkfTreaterTafzili8: number | null;
}
