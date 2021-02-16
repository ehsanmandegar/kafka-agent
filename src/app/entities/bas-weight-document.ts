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
import { GenDocumentType } from './gen-document-type';

@Index('PK_basWeightDocument', ['pkfWeightDocument'], { unique: true })
@Entity('basWeightDocument', { schema: 'dbo' })
export class BasWeightDocument {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfWeightDocument' })
  pkfWeightDocument: number;

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

  @Column('int', { name: 'FkfFormMode', nullable: true, default: () => '(1)' })
  fkfFormMode: number | null;

  @ManyToOne(() => BasWeight, (basWeight) => basWeight.basWeightDocuments, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'FkfWeight', referencedColumnName: 'pkfWeight' }])
  fkfWeight: BasWeight;

  @ManyToOne(
    () => GenDocumentType,
    (genDocumentType) => genDocumentType.basWeightDocuments,
  )
  @JoinColumn([
    { name: 'FkfDocumentType', referencedColumnName: 'pkfDocumentType' },
  ])
  fkfDocumentType: GenDocumentType;

  @RelationId(
    (basWeightDocument: BasWeightDocument) => basWeightDocument.fkfWeight,
  )
  fkfWeight2: number;

  @RelationId(
    (basWeightDocument: BasWeightDocument) => basWeightDocument.fkfDocumentType,
  )
  fkfDocumentType2: number;
}
