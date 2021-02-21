import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salBlackingBarcodeLog', ['pkfBlackingBarcodeLog'], { unique: true })
@Entity('salBlackingBarcodeLog', { schema: 'dbo' })
export class SalBlackingBarcodeLog {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfBlackingBarcodeLog' })
  pkfBlackingBarcodeLog: number;

  @Column('nvarchar', { name: 'barcode', length: 50, default: () => "''" })
  barcode: string;

  @Column('nvarchar', { name: 'createDate', length: 20, default: () => "''" })
  createDate: string;

  @Column('nvarchar', { name: 'createTime', length: 20, default: () => "''" })
  createTime: string;

  @Column('int', { name: 'createUser', nullable: true })
  createUser: number | null;

  @Column('nvarchar', { name: 'memo', default: () => "''" })
  memo: string;

  @Column('int', { name: 'FkfGood', nullable: true })
  fkfGood: number | null;

  @Column('nvarchar', {
    name: 'expirationDate',
    length: 15,
    default: () => "''",
  })
  expirationDate: string;

  @Column('bit', { name: 'state', default: () => '(0)' })
  state: boolean;

  @Column('nvarchar', { name: 'editDate', length: 20, default: () => "''" })
  editDate: string;

  @Column('nvarchar', { name: 'editTime', length: 20, default: () => "''" })
  editTime: string;

  @Column('int', { name: 'editUser', nullable: true })
  editUser: number | null;

  @Column('nvarchar', { name: 'logDate', length: 20, default: () => "''" })
  logDate: string;

  @Column('nvarchar', { name: 'logTime', length: 20, default: () => "''" })
  logTime: string;

  @Column('int', { name: 'logUser', nullable: true })
  logUser: number | null;

  @Column('int', { name: 'FkfBlackingBarcode', nullable: true })
  fkfBlackingBarcode: number | null;
}
