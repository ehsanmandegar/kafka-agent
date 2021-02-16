import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_salProformaDetailDelete', ['pkfProformaDetailDel'], { unique: true })
@Entity('salProformaDetailDelete', { schema: 'dbo' })
export class SalProformaDetailDelete {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfProformaDetailDel' })
  pkfProformaDetailDel: number;

  @Column('int', { name: 'FkfProforma' })
  fkfProforma: number;

  @Column('nvarchar', { name: 'store', nullable: true, length: 255 })
  store: string | null;

  @Column('nvarchar', { name: 'goods', nullable: true, length: 255 })
  goods: string | null;

  @Column('decimal', {
    name: 'amount1',
    nullable: true,
    precision: 18,
    scale: 3,
  })
  amount1: number | null;

  @Column('decimal', {
    name: 'amount2',
    nullable: true,
    precision: 18,
    scale: 3,
    default: () => '0',
  })
  amount2: number | null;

  @Column('int', { name: 'fee', nullable: true })
  fee: number | null;

  @Column('int', { name: 'calcBase', nullable: true })
  calcBase: number | null;

  @Column('int', { name: 'carCount', nullable: true })
  carCount: number | null;

  @Column('nvarchar', { name: 'contract', nullable: true, length: 50 })
  contract: string | null;

  @Column('nvarchar', { name: 'deleteUser', length: 255 })
  deleteUser: string;

  @Column('nvarchar', { name: 'deleteDate', length: 10 })
  deleteDate: string;

  @Column('nvarchar', { name: 'deleteTime', length: 10 })
  deleteTime: string;

  @Column('nvarchar', {
    name: 'goodType',
    nullable: true,
    length: 255,
    default: () => "''",
  })
  goodType: string | null;
}
