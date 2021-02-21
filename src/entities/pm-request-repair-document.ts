import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { PmRequestRepairs } from './pm-request-repairs';
import { GenDocumentType } from './gen-document-type';

@Index('PK_pmRequestRepairDocument', ['pkfDocument'], { unique: true })
@Entity('pmRequestRepairDocument', { schema: 'dbo' })
export class PmRequestRepairDocument {
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

  @ManyToOne(
    () => PmRequestRepairs,
    (pmRequestRepairs) => pmRequestRepairs.pmRequestRepairDocuments,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'FkfRequestRepair', referencedColumnName: 'pkfRequestRepairs' },
  ])
  fkfRequestRepair: PmRequestRepairs;

  @ManyToOne(
    () => GenDocumentType,
    (genDocumentType) => genDocumentType.pmRequestRepairDocuments,
  )
  @JoinColumn([
    { name: 'FkfDocumentType', referencedColumnName: 'pkfDocumentType' },
  ])
  fkfDocumentType: GenDocumentType;

  @RelationId(
    (pmRequestRepairDocument: PmRequestRepairDocument) =>
      pmRequestRepairDocument.fkfRequestRepair,
  )
  fkfRequestRepair2: number;

  @RelationId(
    (pmRequestRepairDocument: PmRequestRepairDocument) =>
      pmRequestRepairDocument.fkfDocumentType,
  )
  fkfDocumentType2: number;
}
