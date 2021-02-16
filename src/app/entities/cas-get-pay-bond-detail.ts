import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_casGetPayBondDetail', ['pkfGetPayBondDetail'], { unique: true })
@Entity('casGetPayBondDetail', { schema: 'dbo' })
export class CasGetPayBondDetail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfGetPayBondDetail' })
  pkfGetPayBondDetail: number;

  @Column('int', { name: 'FkfGetPayBond' })
  fkfGetPayBond: number;

  @Column('int', { name: 'FkfTreater' })
  fkfTreater: number;

  @Column('int', { name: 'FkfType' })
  fkfType: number;

  @Column('nvarchar', { name: 'serialNo', length: 50 })
  serialNo: string;

  @Column('nvarchar', { name: 'serialDate', length: 50 })
  serialDate: string;

  @Column('bigint', { name: 'price' })
  price: string;

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

  @Column('nvarchar', { name: 'checkOwner', length: 100, default: () => "''" })
  checkOwner: string;

  @Column('int', { name: 'checkBookNo', nullable: true })
  checkBookNo: number | null;

  @Column('nvarchar', { name: 'memo', length: 255, default: () => "''" })
  memo: string;

  @Column('int', { name: 'FkfGetPayCheck', nullable: true })
  fkfGetPayCheck: number | null;

  @Column('int', { name: 'FkfCheckState', nullable: true })
  fkfCheckState: number | null;

  @Column('nvarchar', { name: 'achieveDate', length: 50, default: () => "''" })
  achieveDate: string;

  @Column('int', { name: 'FkfAchieveUser', nullable: true })
  fkfAchieveUser: number | null;

  @Column('nvarchar', {
    name: 'createAchieveDate',
    length: 10,
    default: () => "''",
  })
  createAchieveDate: string;

  @Column('int', { name: 'tempNoAchieveToBank', nullable: true })
  tempNoAchieveToBank: number | null;

  @Column('bit', { name: 'returnBond', default: () => '0' })
  returnBond: boolean;

  @Column('nvarchar', { name: 'returnDate', length: 10, default: () => "''" })
  returnDate: string;

  @Column('int', { name: 'FkfSanadAchieveToBank', nullable: true })
  fkfSanadAchieveToBank: number | null;
}
