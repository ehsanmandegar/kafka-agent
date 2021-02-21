import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { BasWeight } from './bas-weight';
import { SalTrust } from './sal-trust';

@Index('PK_strMultiWeightBascole', ['pkfMultiWeightBascole'], { unique: true })
@Entity('strMultiWeightBascole', { schema: 'dbo' })
export class StrMultiWeightBascole {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfMultiWeightBascole' })
  pkfMultiWeightBascole: number;

  @Column('int', { name: 'brokenWeight', default: () => '(0)' })
  brokenWeight: number;

  @Column('nvarchar', { name: 'orderNO', length: 250, default: () => "''" })
  orderNo: string;

  @Column('bit', { name: 'approve', default: () => '(0)' })
  approve: boolean;

  @Column('nvarchar', { name: 'memo', length: 250, default: () => "''" })
  memo: string;

  @Column('nvarchar', {
    name: 'billOfLading',
    length: 250,
    default: () => "''",
  })
  billOfLading: string;

  @Column('int', { name: 'FkfTrustImport', nullable: true })
  fkfTrustImport: number | null;

  @ManyToOne(() => BasWeight, (basWeight) => basWeight.strMultiWeightBascoles, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'FkfWeight', referencedColumnName: 'pkfWeight' }])
  fkfWeight: BasWeight;

  @ManyToOne(() => SalTrust, (salTrust) => salTrust.strMultiWeightBascoles)
  @JoinColumn([{ name: 'FkfTrustExport', referencedColumnName: 'pkfTrust' }])
  fkfTrustExport: SalTrust;

  @RelationId(
    (strMultiWeightBascole: StrMultiWeightBascole) =>
      strMultiWeightBascole.fkfWeight,
  )
  fkfWeight2: number | null;

  @RelationId(
    (strMultiWeightBascole: StrMultiWeightBascole) =>
      strMultiWeightBascole.fkfTrustExport,
  )
  fkfTrustExport2: number | null;
}
