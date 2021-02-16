import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalTransfer } from './sal-transfer';
import { GenDocumentType } from './gen-document-type';

@Index('PK_salTransferDocument', ['pkfTransferDocument'], { unique: true })
@Entity('salTransferDocument', { schema: 'dbo' })
export class SalTransferDocument {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfTransferDocument' })
  pkfTransferDocument: number;

  @Column('varbinary', { name: 'fileScan', nullable: true })
  fileScan: Buffer | null;

  @Column('nvarchar', { name: 'memo', length: 1000, default: () => "''" })
  memo: string;

  @Column('nvarchar', {
    name: 'fileExt',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  fileExt: string | null;

  @Column('int', { name: 'fileSize', nullable: true })
  fileSize: number | null;

  @ManyToOne(
    () => SalTransfer,
    (salTransfer) => salTransfer.salTransferDocuments,
  )
  @JoinColumn([{ name: 'FkfTransfer', referencedColumnName: 'pkfTransfer' }])
  fkfTransfer: SalTransfer;

  @ManyToOne(
    () => GenDocumentType,
    (genDocumentType) => genDocumentType.salTransferDocuments,
  )
  @JoinColumn([
    { name: 'FkfDocumentType', referencedColumnName: 'pkfDocumentType' },
  ])
  fkfDocumentType: GenDocumentType;

  @RelationId(
    (salTransferDocument: SalTransferDocument) =>
      salTransferDocument.fkfTransfer,
  )
  fkfTransfer2: number;

  @RelationId(
    (salTransferDocument: SalTransferDocument) =>
      salTransferDocument.fkfDocumentType,
  )
  fkfDocumentType2: number;
}
