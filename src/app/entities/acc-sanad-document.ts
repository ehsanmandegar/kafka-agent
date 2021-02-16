import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { GenDocumentType } from './gen-document-type';

@Index('PK_accSanadDocument', ['pkfDocument'], { unique: true })
@Entity('accSanadDocument', { schema: 'dbo' })
export class AccSanadDocument {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfDocument' })
  pkfDocument: number;

  @Column('int', { name: 'FkfSanad', default: () => '(0)' })
  fkfSanad: number;

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
    () => GenDocumentType,
    (genDocumentType) => genDocumentType.accSanadDocuments,
  )
  @JoinColumn([
    { name: 'FkfDocumentType', referencedColumnName: 'pkfDocumentType' },
  ])
  fkfDocumentType: GenDocumentType;

  @RelationId(
    (accSanadDocument: AccSanadDocument) => accSanadDocument.fkfDocumentType,
  )
  fkfDocumentType2: number;
}
