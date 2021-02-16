import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { GenTreater } from './gen-treater';

@Index('PK_genTreaterDocument', ['pkfTreaterDocument'], { unique: true })
@Entity('genTreaterDocument', { schema: 'dbo' })
export class GenTreaterDocument {
  @PrimaryGeneratedColumn({ type: 'int', name: 'pkfTreaterDocument' })
  pkfTreaterDocument: number;

  @Column('int', { name: 'FkfDocumentType' })
  fkfDocumentType: number;

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

  @Column('decimal', {
    name: 'fileSize',
    precision: 18,
    scale: 0,
    default: () => '(0)',
  })
  fileSize: number;

  @ManyToOne(() => GenTreater, (genTreater) => genTreater.genTreaterDocuments)
  @JoinColumn([{ name: 'FkfTreater', referencedColumnName: 'pkfTreater' }])
  fkfTreater: GenTreater;

  @RelationId(
    (genTreaterDocument: GenTreaterDocument) => genTreaterDocument.fkfTreater,
  )
  fkfTreater2: number;
}
