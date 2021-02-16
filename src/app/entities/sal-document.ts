import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { SalContract } from './sal-contract';
import { GenDocumentType } from './gen-document-type';

@Index('PK_salDocument', ['pkfSalDocument'], { unique: true })
@Entity('salDocument', { schema: 'dbo' })
export class SalDocument {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfSalDocument' })
  pkfSalDocument: number;

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

  @ManyToOne(() => SalContract, (salContract) => salContract.salDocuments)
  @JoinColumn([{ name: 'FkfSalContract', referencedColumnName: 'pkfContract' }])
  fkfSalContract: SalContract;

  @ManyToOne(
    () => GenDocumentType,
    (genDocumentType) => genDocumentType.salDocuments,
  )
  @JoinColumn([
    { name: 'FkfDocumentType', referencedColumnName: 'pkfDocumentType' },
  ])
  fkfDocumentType: GenDocumentType;

  @RelationId((salDocument: SalDocument) => salDocument.fkfSalContract)
  fkfSalContract2: number;

  @RelationId((salDocument: SalDocument) => salDocument.fkfDocumentType)
  fkfDocumentType2: number;
}
