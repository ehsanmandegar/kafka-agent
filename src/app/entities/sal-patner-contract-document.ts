import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalPartnerContract } from './sal-partner-contract';
import { GenDocumentType } from './gen-document-type';

@Index('PK_salPatnerContractDocument', ['pkfDocument'], { unique: true })
@Entity('salPatnerContractDocument', { schema: 'dbo' })
export class SalPatnerContractDocument {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfDocument' })
  pkfDocument: number;

  @Column('varbinary', { name: 'fileScan', nullable: true })
  fileScan: Buffer | null;

  @Column('nvarchar', { name: 'memo', length: 1000, default: () => "''" })
  memo: string;

  @Column('nvarchar', {
    name: 'FileExt',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  fileExt: string | null;

  @Column('int', { name: 'fileSize', nullable: true })
  fileSize: number | null;

  @Column('int', { name: 'tempNo', nullable: true })
  tempNo: number | null;

  @Column('int', { name: 'accYear', nullable: true })
  accYear: number | null;

  @ManyToOne(
    () => SalPartnerContract,
    (salPartnerContract) => salPartnerContract.salPatnerContractDocuments,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'FkfPartnerContract', referencedColumnName: 'pkfPartnerContract' },
  ])
  fkfPartnerContract: SalPartnerContract;

  @ManyToOne(
    () => GenDocumentType,
    (genDocumentType) => genDocumentType.salPatnerContractDocuments,
  )
  @JoinColumn([
    { name: 'FkfDocumentType', referencedColumnName: 'pkfDocumentType' },
  ])
  fkfDocumentType: GenDocumentType;

  @RelationId(
    (salPatnerContractDocument: SalPatnerContractDocument) =>
      salPatnerContractDocument.fkfPartnerContract,
  )
  fkfPartnerContract2: number;

  @RelationId(
    (salPatnerContractDocument: SalPatnerContractDocument) =>
      salPatnerContractDocument.fkfDocumentType,
  )
  fkfDocumentType2: number;
}
